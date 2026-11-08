# Search and AI discoverability

The primary indexable language is Polish. The English switch changes the interface on the same URL; it is not a separate localized URL. Do not add hreflang alternatives until genuine language-specific URLs exist.

- Page titles, descriptions, canonical URLs and social previews come from `lib/page-copy.ts` and `lib/metadata.ts`.
- `lib/structured-data.json` describes the actual public content with WebPage, WebSite, SoftwareApplication and breadcrumbs. Homepage FAQ answers share `lib/home-faq.json` with the visible page.
- Keep release availability, optional paid plans and future integrations explicit. No ratings, guaranteed returns, checkout availability or downloadable binaries should be inferred.
- `public/sitemap.xml` lists only working, indexable routes. Change lastmod only after a substantive page update; omit it when the modification date is unknown. Knowledge currently returns 404 and is excluded.
- `public/robots.txt` permits crawling. `public/llms.txt` is an auxiliary source map, not a ranking standard or guarantee.
- Essential content, headings, links and JSON-LD are rendered on the server. Structured data must match visible text.

After deployment, verify the canonical host redirects to https://zostaje.com/, check the live sitemap in Google Search Console and Bing Webmaster Tools, and inspect indexing. Account ownership verification and sitemap submission are separate account-level actions. No SEO implementation guarantees placement or AI citations.

References:
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/specialty/international/localized-versions
