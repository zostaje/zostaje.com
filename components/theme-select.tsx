"use client";

import { useSite } from "./site-provider";
import { useTheme } from "./theme-provider";
import { parseThemePreference } from "@/lib/theme";

export function ThemeSelect() {
  const { language } = useSite();
  const { preference, setPreference } = useTheme();
  return (
    <div className="theme-control">
      <label htmlFor="site-theme">{language === "pl" ? "Wygląd" : "Appearance"}</label>
      <select id="site-theme" value={preference} onChange={event => setPreference(parseThemePreference(event.target.value))}>
        <option value="system">{language === "pl" ? "Systemowy" : "System"}</option>
        <option value="light">{language === "pl" ? "Jasny" : "Light"}</option>
        <option value="dark">{language === "pl" ? "Ciemny" : "Dark"}</option>
      </select>
    </div>
  );
}
