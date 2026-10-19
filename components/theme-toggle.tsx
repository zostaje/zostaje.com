"use client";

import { useSite } from "./site-provider";
import { useTheme } from "./theme-provider";
import type { ThemePreference } from "@/lib/theme";

const nextTheme: Record<ThemePreference, ThemePreference> = { system: "light", light: "dark", dark: "system" };
const labels = {
  pl: { system: "systemowy", light: "jasny", dark: "ciemny" },
  en: { system: "system", light: "light", dark: "dark" },
};

export function ThemeToggle() {
  const { language } = useSite();
  const { preference, setPreference } = useTheme();
  const next = nextTheme[preference];
  const label = language === "pl"
    ? `Motyw: ${labels.pl[preference]}. Zmień na ${labels.pl[next]}`
    : `Theme: ${labels.en[preference]}. Switch to ${labels.en[next]}`;
  return (
    <button className="theme-toggle" type="button" onClick={() => setPreference(next)} aria-label={label} title={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {preference === "system" ? <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>
          : preference === "light" ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>
          : <path d="M20.9 13.1A9 9 0 0 1 10.9 3.1a9 9 0 1 0 10 10Z" />}
      </svg>
    </button>
  );
}
