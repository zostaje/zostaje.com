"use client";

import { T, useSite } from "./site-provider";

// Presentation only. No endpoint, mailing list, database or browser storage.
export function DemoSignupForm() {
  const { language } = useSite();
  return (
    <form className="demo-form" aria-describedby="demo-signup-status" onSubmit={event => event.preventDefault()}>
      <T as="label" htmlFor="demo-signup-email" pl="Twój adres e-mail" en="Your email address" />
      <div className="input-row">
        <input
          id="demo-signup-email"
          type="email"
          autoComplete="email"
          placeholder={language === "pl" ? "ty@adres.pl" : "you@example.com"}
          aria-describedby="demo-signup-status"
        />
        <T as="button" type="submit" disabled className="button button-primary" pl="Zapisz się na demo" en="Join the demo" />
      </div>
      <T
        as="p"
        id="demo-signup-status"
        className="form-note"
        pl="Zapisy nie są jeszcze aktywne. Formularz nie wysyła ani nie zapisuje adresu e-mail."
        en="Sign-ups are not active yet. This form does not send or save your email address."
      />
    </form>
  );
}
