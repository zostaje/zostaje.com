# Production publication

Vercel project `zostaje-com` is connected to private repository `rajanbor/zostaje.com`, production branch `main`. The organization mirror is `zostaje/zostaje.com`.

On 2026-11-18 the November 8 deployments were found BLOCKED with `COMMIT_AUTHOR_REQUIRED`: Vercel could not find the commit author's Git account. A successful Git push alone did not mean deployment succeeded. Use the authenticated owner's verified GitHub noreply address for site commits and check the Vercel deployment status after pushing. Never weaken deployment protection to work around this.

Actual app source reviewed: `zostaje/zostaje` main `fbe1fdd`. Screenshots: `docs/zrzuty-aplikacji` at `f545088`. The local app checkout contains separate uncommitted MVP work, so source was inspected from fetched refs and an isolated `/tmp` archive; that local work was not overwritten or published.

The old raw HTML workflow was for the archived static site. Next.js source is validated by the build, typecheck and test workflow; no source HTML files remain to validate.
