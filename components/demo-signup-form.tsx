"use client";

import { useRef, useState, type FormEvent } from "react";
import { T, useSite } from "./site-provider";

type Status = "idle" | "sending" | "success" | "invalid_email" | "not_configured" | "send_failed" | "rate_limited";
const messages = {
  pl: {
    idle: "Wyślemy potwierdzenie z demo@zostaje.com. Twój adres posłuży do kontaktu w sprawie demo.",
    sending: "Wysyłamy zgłoszenie…",
    success: "Zgłoszenie przyjęte. Sprawdź skrzynkę — potwierdzenie wysłaliśmy z demo@zostaje.com.",
    invalid_email: "Podaj poprawny adres e-mail.",
    not_configured: "Zapisy są chwilowo niedostępne. Spróbuj ponownie później.",
    send_failed: "Nie udało się potwierdzić wysyłki. Spróbuj ponownie za chwilę.",
    rate_limited: "Zbyt wiele prób. Poczekaj kilka minut i spróbuj ponownie.",
  },
  en: {
    idle: "We will send a confirmation from demo@zostaje.com. Your address will be used to contact you about the demo.",
    sending: "Sending your sign-up…",
    success: "Sign-up received. Check your inbox for a confirmation from demo@zostaje.com.",
    invalid_email: "Enter a valid email address.",
    not_configured: "Sign-ups are temporarily unavailable. Please try again later.",
    send_failed: "We could not confirm the send. Please try again shortly.",
    rate_limited: "Too many attempts. Wait a few minutes and try again.",
  },
};

export function DemoSignupForm() {
  const { language } = useSite();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const inFlight = useRef(false);
  const submittedEmail = useRef<string | null>(null);
  const sending = status === "sending";
  const failed = ["invalid_email", "not_configured", "send_failed", "rate_limited"].includes(status);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || submittedEmail.current === email.trim()) return;
    const website = new FormData(event.currentTarget).get("website");
    inFlight.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/demo-signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), language, website: website ?? "" }),
        signal: AbortSignal.timeout(15_000),
      });
      const result: unknown = await response.json();
      const payload = result && typeof result === "object" ? result as { ok?: boolean; code?: string } : {};
      if (response.ok && payload.ok === true) {
        submittedEmail.current = email.trim();
        setStatus("success");
      } else if (payload.code === "invalid_email" || payload.code === "not_configured" || payload.code === "rate_limited") {
        setStatus(payload.code);
      } else { setStatus("send_failed"); }
    } catch { setStatus("send_failed"); }
    finally { inFlight.current = false; }
  }

  return (
    <form method="post" action="/api/demo-signup/" className="demo-form" aria-describedby="demo-signup-status" aria-busy={sending} onSubmit={submit}>
      <T as="label" htmlFor="demo-signup-email" pl="Twój adres e-mail" en="Your email address" />
      <div className="input-row">
        <input
          id="demo-signup-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder={language === "pl" ? "ty@adres.pl" : "you@example.com"}
          aria-describedby="demo-signup-status"
          aria-invalid={status === "invalid_email"}
          value={email}
          disabled={sending}
          onChange={event => {
            setEmail(event.target.value);
            if (!sending) setStatus("idle");
          }}
        />
        <button type="submit" disabled={sending || submittedEmail.current === email.trim()} className="button button-primary">
          {sending ? (language === "pl" ? "Wysyłanie…" : "Sending…") : (language === "pl" ? "Zapisz się na demo" : "Join the demo")}
        </button>
      </div>
      <div hidden aria-hidden="true">
        <label htmlFor="demo-signup-website">Website</label>
        <input id="demo-signup-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p id="demo-signup-status" className={"form-note" + (failed ? " form-error" : "")} role="status" aria-live="polite">
        {messages[language][status]}
      </p>
    </form>
  );
}
