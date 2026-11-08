import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { pageCopy, type PageName } from "../lib/page-copy";
import { metadataFor } from "../lib/metadata";
import schemas from "../lib/structured-data.json";
import homeFaq from "../lib/home-faq.json";

const base = "https://zostaje.com";
test("canonical URLs, sitemap and structured page identities agree", () => {
  const sitemap = readFileSync("public/sitemap.xml", "utf8");
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  assert.equal(new Set(urls).size, Object.keys(pageCopy).length);
  for (const key of Object.keys(pageCopy) as PageName[]) {
    const copy = pageCopy[key];
    const url = base + copy.path;
    assert.ok(urls.includes(url));
    assert.equal(metadataFor(key).alternates?.canonical, copy.path);
    assert.equal(metadataFor(key).description, copy.description.pl);
    const graph = schemas[key][0]["@graph"];
    const page = graph.find(node => node["@type"] === "WebPage");
    assert.ok(page);
    assert.equal(page.url, url);
    assert.equal(page.description, copy.description.pl);
    assert.ok(existsSync(copy.path === "/" ? "app/page.tsx" : `app${copy.path}page.tsx`));
  }
  assert.ok(!urls.includes(base + "/knowledge/"));
});

test("home FAQ structured answers use exactly the visible bilingual content source", () => {
  const faq = schemas.home[0]["@graph"].find(node => node["@type"] === "FAQPage");
  assert.ok(faq && "mainEntity" in faq && Array.isArray(faq.mainEntity));
  assert.deepEqual(faq.mainEntity.map(item => ({ question: item.name, answer: item.acceptedAnswer.text })),
    homeFaq.map(item => ({ question: item.question.pl, answer: item.answer.pl })));
  assert.match(readFileSync("components/pages/home.tsx", "utf8"), /homeFaq\.map/);
});

test("crawler sources avoid invented commerce and unavailable download claims", () => {
  const serialized = JSON.stringify(schemas);
  assert.doesNotMatch(serialized, /PreOrder|aggregateRating|downloadUrl|SearchAction/);
  const robots = readFileSync("public/robots.txt", "utf8");
  assert.match(robots, /User-agent: \*\s+Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/zostaje.com\/sitemap.xml/);
  const guide = readFileSync("public/llms.txt", "utf8");
  for (const match of guide.matchAll(/\]\((https:\/\/zostaje\.com[^)]*)\)/g)) {
    assert.ok(Object.values(pageCopy).some(copy => base + copy.path === match[1]));
  }
  assert.match(guide, /Public installers are not available yet/);
});
