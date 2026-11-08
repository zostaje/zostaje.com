import assert from "node:assert/strict";
import test from "node:test";
import { searchSite } from "../lib/site-search";

test("finds Polish pages without accents and with multiple search terms", () => {
  assert.equal(searchSite("prywatnosc", "pl")[0]?.href, "/privacy/");
  assert.deepEqual(searchSite("premium roczny", "pl").map(page => page.href), ["/pricing/"]);
});

test("returns localized results and can match a query in the other language", () => {
  assert.equal(searchSite("download", "pl")[0]?.title, "Pobierz");
  assert.equal(searchSite("dokumentacja", "en")[0]?.title, "Documentation");
});

test("provides pages for empty search and no results for an unknown phrase", () => {
  assert.ok(searchSite("", "pl").length > 0);
  assert.deepEqual(searchSite("zzzznotapage", "pl"), []);
});
