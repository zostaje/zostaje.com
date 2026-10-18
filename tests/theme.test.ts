import test from "node:test";
import assert from "node:assert/strict";
import { runInNewContext } from "node:vm";
import { THEME_BOOT_SCRIPT, parseThemePreference, resolveTheme } from "../lib/theme";

function boot(saved: string | null, systemDark: boolean, storageBlocked = false) {
  const dataset: Record<string, string> = {};
  runInNewContext(THEME_BOOT_SCRIPT, {
    localStorage: { getItem: () => { if (storageBlocked) throw new Error("Blocked"); return saved; } },
    window: { matchMedia: () => ({ matches: systemDark }) },
    document: { documentElement: { dataset } },
  });
  return dataset;
}

test("first paint follows either device theme without a saved override", () => {
  assert.equal(boot(null, false).theme, "light");
  assert.equal(boot(null, true).theme, "dark");
  assert.equal(boot(null, true).themePreference, "system");
});

test("saved manual choice takes precedence over the opposite device theme", () => {
  assert.equal(boot("light", true).theme, "light");
  assert.equal(boot("dark", false).theme, "dark");
  assert.equal(boot("dark", false).themePreference, "dark");
});

test("invalid or blocked storage still follows the device", () => {
  assert.equal(boot("unexpected", false).theme, "light");
  assert.equal(boot("unexpected", true).theme, "dark");
  assert.equal(boot(null, false, true).theme, "light");
  assert.equal(boot(null, true, true).theme, "dark");
});

test("returning to system permits subsequent device changes", () => {
  assert.equal(parseThemePreference("system"), "system");
  assert.equal(parseThemePreference(null), "system");
  assert.equal(parseThemePreference("sepia"), "system");
  assert.equal(resolveTheme("system", false), "light");
  assert.equal(resolveTheme("system", true), "dark");
  assert.equal(resolveTheme("light", true), "light");
  assert.equal(resolveTheme("dark", false), "dark");
});
