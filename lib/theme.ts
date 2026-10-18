export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";
export const THEME_STORAGE_KEY = "zostaje-theme";

export function parseThemePreference(value: unknown): ThemePreference {
  return value === "light" || value === "dark" ? value : "system";
}

export function resolveTheme(preference: ThemePreference, systemDark: boolean): ResolvedTheme {
  return preference === "system" ? (systemDark ? "dark" : "light") : preference;
}

// Runs in the head with the request nonce, before the page can paint.
// Keep this independent of hydration and resilient to unavailable storage.
export const THEME_BOOT_SCRIPT = `(()=>{
let preference="system";
try { const saved=localStorage.getItem("zostaje-theme"); if(saved==="light"||saved==="dark") preference=saved; } catch {}
const dark=window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme=preference==="system"?(dark?"dark":"light"):preference;
document.documentElement.dataset.theme=theme;
document.documentElement.dataset.themePreference=preference;
})();`;
