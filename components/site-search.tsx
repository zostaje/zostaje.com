"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useSite } from "./site-provider";
import { searchSite } from "@/lib/site-search";

export function SiteSearch({ mobile = false }: { mobile?: boolean }) {
  const { language, closeMenu } = useSite();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLFormElement>(null);
  const resultId = useId();
  const results = searchSite(query, language);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);
  return (
    <form className={`site-search ${mobile ? "mobile-site-search" : "header-site-search"}`} role="search" ref={root}
      aria-label={language === "pl" ? "Wyszukiwarka strony" : "Site search"}
      onSubmit={event => { event.preventDefault(); if (results[0]) { if (mobile) closeMenu(false); window.location.assign(results[0].href); } }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={event => { if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); setOpen(false); root.current?.querySelector("input")?.focus(); } }}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7" /><path d="m16 16 5 5" /></svg>
      <input type="search" value={query} onChange={event => { setQuery(event.target.value); setOpen(true); }} onFocus={event => { if (!root.current?.contains(event.relatedTarget)) setOpen(true); }}
        onKeyDown={event => { if (event.key === "ArrowDown") { event.preventDefault(); setOpen(true); root.current?.querySelector<HTMLAnchorElement>(".site-search-results a")?.focus(); } }}
        placeholder={language === "pl" ? "Szukaj…" : "Search…"} aria-label={language === "pl" ? "Szukaj na stronie" : "Search the site"}
        aria-expanded={open} aria-controls={resultId} autoComplete="off" maxLength={160} />
      {open && <div className="site-search-results" id={resultId}>
        <p className="site-search-status" role="status">{results.length ? (query.trim() ? `${language === "pl" ? "Wyniki" : "Results"}: ${results.length}` : (language === "pl" ? "Strony" : "Pages")) : (language === "pl" ? "Brak wyników. Spróbuj innego hasła." : "No results. Try a different search.")}</p>
        {results.map(result => <a key={result.href} href={result.href} onClick={() => { setOpen(false); if (mobile) closeMenu(false); }}><strong>{result.title}</strong><span>{result.description}</span></a>)}
      </div>}
    </form>
  );
}
