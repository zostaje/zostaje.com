"use client";

import { createContext, createElement, useCallback, useContext, useEffect, useRef, useState, type HTMLAttributes, type JSX, type ReactNode } from "react";

export type Language = "pl" | "en";
export interface PageCopy { title: Record<Language, string>; description: Record<Language, string> }
interface SiteState {
  language: Language;
  setLanguage: (language: Language) => void;
  menuOpen: boolean;
  menuMounted: boolean;
  openMenu: () => void;
  closeMenu: (returnFocus?: boolean) => void;
  scrolled: boolean;
  mobileLanguageOpen: boolean;
  toggleMobileLanguage: () => void;
  opener: React.RefObject<HTMLButtonElement | null>;
  closer: React.RefObject<HTMLButtonElement | null>;
}
const SiteContext = createContext<SiteState | null>(null);
export function useSite() {
  const state = useContext(SiteContext);
  if (!state) throw new Error("Site components need SiteProvider");
  return state;
}

export function SiteProvider({ copy, children, minimal = false }: { copy: PageCopy; children: ReactNode; minimal?: boolean }) {
  const [language, setLanguageState] = useState<Language>("pl");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(minimal);
  const opener = useRef<HTMLButtonElement>(null);
  const closer = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationFrame = useRef<number | null>(null);

  const closeMenu = useCallback((returnFocus = true) => {
    setMenuOpen(false);
    if (returnFocus) opener.current?.focus();
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenuMounted(false), 180);
  }, []);
  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuMounted(true);
    animationFrame.current = requestAnimationFrame(() => {
      setMenuOpen(true);
      closer.current?.focus();
    });
  }, []);
  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try { localStorage.setItem("zostaje-language", next); } catch { /* Optional preference. */ }
    document.querySelectorAll(".language-menu, .footer-language").forEach(element => element.removeAttribute("open"));
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try { setLanguageState(localStorage.getItem("zostaje-language") === "en" ? "en" : "pl"); } catch { /* Default Polish. */ }
    });
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    const title = copy.title[language];
    const description = copy.description[language];
    const syncMetadata = () => {
      document.documentElement.lang = language;
      if (document.title !== title) document.title = title;
      const update = (selector: string, content: string) => {
        document.querySelectorAll(selector).forEach(element => {
          if (element.getAttribute("content") !== content) element.setAttribute("content", content);
        });
      };
      update('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]', description);
      update('meta[property="og:title"], meta[name="twitter:title"]', title);
      update('meta[property="og:locale"]', language === "pl" ? "pl_PL" : "en_US");
    };
    // Next's head manager may reconcile server metadata after a restored language
    // has rendered. Keep the user's selected language consistent after that pass.
    const observer = new MutationObserver(syncMetadata);
    observer.observe(document.head, { childList: true, subtree: true, attributes: true, attributeFilter: ["content"] });
    syncMetadata();
    return () => observer.disconnect();
  }, [language, copy]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);
  useEffect(() => {
    if (!menuMounted) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
      if (event.key !== "Tab") return;
      const controls = Array.from(document.querySelectorAll<HTMLElement>('#mobile-menu a, #mobile-menu button'))
        .filter(element => element.getClientRects().length > 0);
      const first = controls[0], last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuMounted, closeMenu]);

  return <SiteContext.Provider value={{ language, setLanguage, menuOpen, menuMounted, openMenu, closeMenu, scrolled, mobileLanguageOpen, toggleMobileLanguage: () => setMobileLanguageOpen(value => !value), opener, closer }}>{children}</SiteContext.Provider>;
}

type TranslationProps = HTMLAttributes<HTMLElement> & {
  as: keyof JSX.IntrinsicElements;
  pl: string;
  en: string;
  htmlFor?: string;
  disabled?: boolean;
  href?: string;
  rel?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
};
export function T({ as, pl, en, ...props }: TranslationProps) {
  const { language } = useSite();
  return createElement(as, props, language === "en" ? en : pl);
}
export function HeroHeading() {
  const { language } = useSite();
  return language === "pl"
    ? <h1>Zobacz, ile <em>zostaje.</em><span>Do kolejnego wpływu.</span></h1>
    : <h1>See what’s <em>left.</em><span>Until your next income.</span></h1>;
}
export function LanguageLabel({ fullName = false }: { fullName?: boolean }) {
  const { language } = useSite();
  return <>{fullName ? (language === "pl" ? "Polski" : "English") : language.toUpperCase()}</>;
}
