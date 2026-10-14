import { createHash } from "node:crypto";

const sender = "Zostaje Demo <demo@zostaje.com>";
const inbox = "info@rajanbor.com";
const maxBodyBytes = 2048;

type Signup = { email: string; language: "pl" | "en" };
type ResultCode = "invalid_email" | "invalid_request" | "not_configured" | "send_failed" | "rate_limited" | "forbidden";
interface Dependencies {
  apiKey: () => string | undefined;
  fetch?: typeof fetch;
  now?: () => number;
}

function json(status: number, payload: object, extraHeaders: Record<string, string> = {}) {
  return Response.json(payload, { status, headers: { "Cache-Control": "no-store", ...extraHeaders } });
}
function failure(status: number, code: ResultCode) { return json(status, { ok: false, code }); }

function parseSignup(value: unknown): Signup | null {
  if (!value || typeof value !== "object") return null;
  const body = value as Record<string, unknown>;
  if (typeof body.email !== "string" || (body.language !== "pl" && body.language !== "en")) return null;
  const email = body.email.trim();
  // Plain addresses only: do not accept recipient lists, display names or headers.
  if (email.length > 254 || /[\r\n]/.test(email)) return null;
  const match = email.match(/^([A-Za-z0-9!#$%&'*+\-/=?^_`{|}~.]+)@([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+)$/);
  if (!match || match[1].length > 64 || match[1].startsWith(".") || match[1].endsWith(".") || match[1].includes("..")
      || match[2].split(".").some(label => label.length > 63 || label.startsWith("-") || label.endsWith("-"))) return null;
  return { email: `${match[1]}@${match[2].toLowerCase()}`, language: body.language };
}

function emails({ email, language }: Signup) {
  const confirmation = language === "pl"
    ? {
        subject: "Zostaje — potwierdzenie zapisu na demo",
        text: "Cześć!\n\nDziękujemy za zgłoszenie do demo Zostaje. Otrzymaliśmy Twój adres e-mail. Damy Ci znać, kiedy pierwsza wersja na iPhone’a będzie gotowa do testów.\n\nNie musisz teraz nic robić. Jeśli to nie Ty wysłałeś zgłoszenie albo chcesz zrezygnować, odpowiedz na tę wiadomość.\n\nDo zobaczenia,\nZostaje",
      }
    : {
        subject: "Zostaje — demo sign-up confirmation",
        text: "Hi!\n\nThanks for signing up for the Zostaje demo. We have received your email address. We will let you know when the first iPhone version is ready to test.\n\nNo action is needed now. If you did not sign up or would like to withdraw, reply to this message.\n\nSee you soon,\nZostaje",
      };
  return [
    {
      from: sender,
      to: [inbox],
      reply_to: email,
      subject: "Zostaje — ktoś zapisał się na demo",
      text: `Nowe zgłoszenie do demo Zostaje.\n\nAdres e-mail: ${email}\nJęzyk formularza: ${language}\nŹródło: formularz zapisu na zostaje.com\n\nOdpowiedz na tę wiadomość, aby skontaktować się z osobą zgłaszającą się.`,
    },
    { from: sender, to: [email], reply_to: inbox, ...confirmation },
  ];
}

export function createDemoSignupHandler(dependencies: Dependencies) {
  const send = dependencies.fetch ?? fetch;
  const now = dependencies.now ?? Date.now;
  // Best-effort per-instance limit; Resend idempotency also prevents identical
  // pairs of messages being sent again across instances within its 24h window.
  const attempts = new Map<string, { count: number; until: number }>();
  return async function POST(request: Request): Promise<Response> {
    const origin = request.headers.get("origin");
    if (!origin || origin !== new URL(request.url).origin) return failure(403, "forbidden");
    if (request.headers.get("sec-fetch-site") === "cross-site") return failure(403, "forbidden");
    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return failure(415, "invalid_request");
    if (Number(request.headers.get("content-length") ?? 0) > maxBodyBytes) return failure(413, "invalid_request");

    let body: unknown;
    try {
      // Bound the actual stream as well; Content-Length alone is not trustworthy.
      const reader = request.body?.getReader();
      if (!reader) return failure(400, "invalid_request");
      const chunks: Uint8Array[] = [];
      let size = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBodyBytes) { await reader.cancel(); return failure(413, "invalid_request"); }
        chunks.push(value);
      }
      body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch { return failure(400, "invalid_request"); }
    if (!body || typeof body !== "object") return failure(400, "invalid_request");
    const fields = body as Record<string, unknown>;
    if (typeof fields.website === "string" && fields.website.trim()) return json(200, { ok: true });
    const signup = parseSignup(body);
    if (!signup) return failure(400, "invalid_email");
    const apiKey = dependencies.apiKey()?.trim();
    if (!apiKey) return failure(503, "not_configured");

    const timestamp = now();
    for (const [key, record] of attempts) { if (record.until <= timestamp) attempts.delete(key); }
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const key = createHash("sha256").update(ip).digest("hex");
    const previous = attempts.get(key);
    if (previous && previous.count >= 5) {
      return json(429, { ok: false, code: "rate_limited" }, { "Retry-After": String(Math.ceil((previous.until - timestamp) / 1000)) });
    }
    // Keep memory bounded on a long-lived instance without clearing active limits.
    if (!previous && attempts.size >= 10000) return json(429, { ok: false, code: "rate_limited" }, { "Retry-After": "600" });
    attempts.set(key, { count: (previous?.count ?? 0) + 1, until: previous?.until ?? timestamp + 600_000 });

    const identity = createHash("sha256").update(signup.email).digest("hex");
    const idempotencyKey = `zostaje-demo-v1/${signup.language}/${identity}`;
    try {
      const response = await send("https://api.resend.com/emails/batch", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
        body: JSON.stringify(emails(signup)),
        signal: AbortSignal.timeout(10_000),
        cache: "no-store",
      });
      if (!response.ok) return failure(502, "send_failed");
      const result: unknown = await response.json();
      if (!result || typeof result !== "object") return failure(502, "send_failed");
      const data = (result as { data?: unknown }).data;
      if (!Array.isArray(data) || data.length !== 2 || !data.every(item => item && typeof item.id === "string" && item.id.length > 0)) {
        return failure(502, "send_failed");
      }
      return json(200, { ok: true });
    } catch {
      // Do not log email addresses, credentials or the provider response body.
      return failure(502, "send_failed");
    }
  };
}
