import assert from "node:assert/strict";
import test from "node:test";
import { createDemoSignupHandler } from "../lib/server/demo-signup";

function request(body: unknown = { email: "visitor@example.com", language: "pl", website: "" }, headers: Record<string, string> = {}) {
  return new Request("https://zostaje.com/api/demo-signup/", {
    method: "POST",
    headers: { origin: "https://zostaje.com", "content-type": "application/json", "x-forwarded-for": "192.0.2.1", ...headers },
    body: JSON.stringify(body),
  });
}
function fakeProvider(callback?: (init: RequestInit) => void): typeof fetch {
  return async (_url, init) => {
    callback?.(init ?? {});
    return Response.json({ data: [{ id: "notification-id" }, { id: "confirmation-id" }] });
  };
}

test("one batch sends the owner notification and the visitor confirmation with correct sender and reply addresses", async () => {
  let calls = 0;
  const handler = createDemoSignupHandler({ apiKey: () => "test-key", fetch: fakeProvider(init => {
    calls++;
    const messages = JSON.parse(String(init.body));
    assert.equal(messages.length, 2);
    assert.equal(messages[0].from, "Zostaje Demo <demo@zostaje.com>");
    assert.deepEqual(messages[0].to, ["info@rajanbor.com"]);
    assert.equal(messages[0].subject, "Zostaje — ktoś zapisał się na demo");
    assert.equal(messages[0].reply_to, "visitor@example.com");
    assert.deepEqual(messages[1].to, ["visitor@example.com"]);
    assert.equal(messages[1].from, "Zostaje Demo <demo@zostaje.com>");
    assert.equal(messages[1].reply_to, "info@rajanbor.com");
    assert.match(messages[1].text, /Dziękujemy/);
    assert.equal(new Headers(init.headers).get("Authorization"), "Bearer test-key");
  }) });
  const response = await handler(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(calls, 1);
});

test("retry uses an identical payload and idempotency key without exposing the email in the key", async () => {
  const keys: string[] = [], bodies: string[] = [];
  const handler = createDemoSignupHandler({ apiKey: () => "test-key", fetch: fakeProvider(init => {
    keys.push(new Headers(init.headers).get("Idempotency-Key")!);
    bodies.push(String(init.body));
  }) });
  await handler(request()); await handler(request());
  assert.equal(keys[0], keys[1]); assert.equal(bodies[0], bodies[1]);
  assert.ok(!keys[0].includes("visitor@example.com"));
});

test("English confirmation follows the selected language", async () => {
  const handler = createDemoSignupHandler({ apiKey: () => "test-key", fetch: fakeProvider(init => {
    const messages = JSON.parse(String(init.body));
    assert.equal(messages[1].subject, "Zostaje — demo sign-up confirmation");
    assert.match(messages[1].text, /Thanks for signing up/);
  }) });
  assert.equal((await handler(request({ email: "visitor@example.com", language: "en" }))).status, 200);
});

test("invalid emails, recipient lists and header injection never call the provider", async () => {
  let calls = 0;
  const handler = createDemoSignupHandler({ apiKey: () => "test-key", fetch: fakeProvider(() => calls++) });
  for (const email of ["not-an-email", "a@example.com,b@example.com", "Name <a@example.com>", "a@example.com\r\nBcc: other@example.com", "a..b@example.com", "a@-bad.com", "a@bad-.com"]) {
    assert.equal((await handler(request({ email, language: "pl" }))).status, 400);
  }
  assert.equal(calls, 0);
});

test("missing secret is a configuration failure, not a successful sign-up", async () => {
  let calls = 0;
  const handler = createDemoSignupHandler({ apiKey: () => undefined, fetch: fakeProvider(() => calls++) });
  const response = await handler(request());
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { ok: false, code: "not_configured" });
  assert.equal(calls, 0);
});

test("provider failure, timeout, malformed response or a partial pair cannot produce success", async () => {
  const providers: (typeof fetch)[] = [
    async () => Response.json({ error: "provider rejected send" }, { status: 403 }),
    async () => { throw new Error("timeout"); },
    async () => Response.json({ data: [{ id: "only-one-email" }] }),
    async () => new Response("not json"),
  ];
  for (const fetch of providers) {
    const handler = createDemoSignupHandler({ apiKey: () => "test-key", fetch });
    const response = await handler(request());
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { ok: false, code: "send_failed" });
  }
});

test("foreign or missing origins and oversized bodies are rejected without sending", async () => {
  let calls = 0;
  const handler = createDemoSignupHandler({ apiKey: () => "test-key", fetch: fakeProvider(() => calls++) });
  assert.equal((await handler(request(undefined, { origin: "https://other.example" }))).status, 403);
  const missing = request(); missing.headers.delete("origin");
  assert.equal((await handler(missing)).status, 403);
  assert.equal((await handler(request(undefined, { "sec-fetch-site": "cross-site" }))).status, 403);
  assert.equal((await handler(request({ email: "a".repeat(3000), language: "pl" }))).status, 413);
  assert.equal(calls, 0);
});

test("honeypot accepts silently but does not send email", async () => {
  let calls = 0;
  const handler = createDemoSignupHandler({ apiKey: () => "test-key", fetch: fakeProvider(() => calls++) });
  assert.equal((await handler(request({ email: "visitor@example.com", language: "pl", website: "spam" }))).status, 200);
  assert.equal(calls, 0);
});

test("per-instance request limit blocks excessive attempts and expires", async () => {
  let time = 1_000;
  let calls = 0;
  const handler = createDemoSignupHandler({ apiKey: () => "test-key", now: () => time, fetch: fakeProvider(() => calls++) });
  for (let count = 0; count < 5; count++) assert.equal((await handler(request())).status, 200);
  const limited = await handler(request());
  assert.equal(limited.status, 429); assert.equal(limited.headers.get("Retry-After"), "600");
  assert.equal(calls, 5);
  time += 600_001;
  assert.equal((await handler(request())).status, 200);
});
