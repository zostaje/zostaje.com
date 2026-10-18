"use client";

import { Fragment, createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { parseThemePreference, resolveTheme, THEME_STORAGE_KEY, type ResolvedTheme, type ThemePreference } from "@/lib/theme";

const ThemeContext = createContext<{ preference: ThemePreference; setPreference: (value: ThemePreference) => void } | null>(null);

function ThemeAssets({ theme }: { theme: ResolvedTheme | null }) {
  return <>
    {(["light", "dark"] as const).map(variant => {
      const prefix = variant === "light" ? "/brand/light" : "";
      const media = theme === null ? `(prefers-color-scheme: ${variant})` : theme === variant ? "all" : "not all";
      return <Fragment key={variant}>
        <link rel="icon" href={`${prefix}/favicon.ico?v=2`} sizes="16x16 32x32 48x48" media={media} />
        <link rel="icon" href={`${prefix}/favicon-16.png?v=2`} sizes="16x16" type="image/png" media={media} />
        <link rel="icon" href={`${prefix}/favicon-32.png?v=2`} sizes="32x32" type="image/png" media={media} />
        <meta name="theme-color" content={variant === "light" ? "#f8fafc" : "#0f0f0f"} media={media} />
      </Fragment>;
    })}
    <link rel="apple-touch-icon" sizes="180x180" href={theme === "light" ? "/brand/light/apple-touch-icon.png" : "/apple-touch-icon.png"} />
    <link rel="manifest" href={theme === "light" ? "/site-light.webmanifest" : "/site.webmanifest"} />
  </>;
}

function applyTheme(preference: ThemePreference) {
  const theme = resolveTheme(preference, window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themePreference = preference;
  return theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference | null>(null);
  const [theme, setResolvedTheme] = useState<ResolvedTheme | null>(null);

  useEffect(() => {
    // The head script has already restored the preference without a theme flash.
    setPreferenceState(parseThemePreference(document.documentElement.dataset.themePreference));
  }, []);

  const setPreference = useCallback((next: ThemePreference) => {
    try {
      if (next === "system") localStorage.removeItem(THEME_STORAGE_KEY);
      else localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch { /* The choice still works for the current page. */ }
    setResolvedTheme(applyTheme(next));
    setPreferenceState(next);
  }, []);

  useEffect(() => {
    if (preference === null) return;
    setResolvedTheme(applyTheme(preference));
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => { if (preference === "system") setResolvedTheme(applyTheme("system")); };
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        const next = parseThemePreference(event.newValue);
        setResolvedTheme(applyTheme(next));
        setPreferenceState(next);
      }
    };
    media.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, [preference]);

  return <ThemeContext.Provider value={{ preference: preference ?? "system", setPreference }}><ThemeAssets theme={theme} />{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("Theme controls need ThemeProvider");
  return value;
}
