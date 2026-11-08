"use client";

import { LanguageLabel, useSite } from "./site-provider";

export function LanguageSelector({ header = false }: { header?: boolean }) {
  const { language, setLanguage } = useSite();
  return (
    <details className={`${header ? "language-menu" : "footer-language"} compact-language`}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false; }}
      onKeyDown={event => { if (event.key === "Escape") { event.stopPropagation(); event.currentTarget.open = false; event.currentTarget.querySelector("summary")?.focus(); } }}>
      <summary aria-label={language === "pl" ? "Język strony: Polski" : "Website language: English"}>
        <svg className="language-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" /></svg>
        <span><LanguageLabel fullName /></span>
        <svg className="language-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </summary>
      <div className={header ? "language-dropdown" : undefined}>
        <button type="button" onClick={() => setLanguage("pl")} aria-pressed={language === "pl"}>Polski</button>
        <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>English</button>
      </div>
    </details>
  );
}
