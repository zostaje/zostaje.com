"use client";

import { useEffect, useRef, useState } from "react";
import { LanguageLabel, useSite } from "./site-provider";

const languages = [
  { id: "pl", label: "Polski", terms: "polski polish pol pl" },
  { id: "en", label: "English", terms: "english angielski eng en" },
] as const;

export function LanguageSelector({ header = false }: { header?: boolean }) {
  const { language, setLanguage } = useSite();
  const details = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const normalized = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
  const filtered = languages.filter(item => !header || item.terms.includes(normalized));
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!details.current?.contains(event.target as Node) && details.current) details.current.open = false;
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);
  return (
    <details ref={details} className={`${header ? "language-menu" : "footer-language"} compact-language`}
      onToggle={event => { setOpen(event.currentTarget.open); if (!event.currentTarget.open) setQuery(""); }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false; }}
      onKeyDown={event => { if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); event.currentTarget.open = false; event.currentTarget.querySelector("summary")?.focus(); } }}>
      <summary aria-label={language === "pl" ? "Język strony: Polski" : "Website language: English"} title={header ? (language === "pl" ? "Zmień język" : "Change language") : undefined}>
        <svg className="language-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" /></svg>
        {!header && <span className="language-current"><LanguageLabel fullName /></span>}
        <svg className="language-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </summary>
      <div className={header ? "language-dropdown" : undefined}>
        {header && <div className="language-search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7" /><path d="m16 16 5 5" /></svg>
          <input type="search" value={query} onChange={event => setQuery(event.target.value)} autoComplete="off" maxLength={80}
            placeholder={language === "pl" ? "Szukaj języka…" : "Search languages…"} aria-label={language === "pl" ? "Szukaj języka" : "Search languages"} />
        </div>}
        <div className="language-options">
          {filtered.map(item => <button key={item.id} type="button" data-language={item.id} aria-label={item.label} onClick={() => setLanguage(item.id)} aria-pressed={language === item.id}>
            <span>{item.label}</span>{header && <small aria-hidden="true">{item.id.toUpperCase()}</small>}
          </button>)}
        </div>
        {!filtered.length && <p className="language-no-results" role="status">{language === "pl" ? "Nie znaleziono języka." : "No languages found."}</p>}
      </div>
    </details>
  );
}
