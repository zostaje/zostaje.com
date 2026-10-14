# zostaje.com

Strona Zostaje w **Next.js 16, React 19 i TypeScript**, w tym samym repozytorium
co wcześniejsza wersja HTML. Zachowano CSS, grafiki, treść, adresy podstron
oraz przełączanie PL/EN. Interaktywne demo działa lokalnie w przeglądarce.

## Uruchomienie

Node.js 22 lub nowszy i npm:

```bash
npm ci
npm run dev
```

Otwórz `http://localhost:3000`.

Sprawdzenie wersji produkcyjnej:

```bash
npm run typecheck
npm run build
npm start
```

## Deploy na Vercel

1. Zaimportuj repozytorium w Vercel i wybierz gałąź z migracją.
2. **Framework Preset: Next.js**. **Root Directory: `.`** (korzeń tego repo).
3. **Install Command: `npm ci`**, **Build Command: `npm run build`**.
4. **Output Directory: domyślne ustawienie Next.js** — usuń wcześniejszy override
   na korzeń repozytorium lub `out`. Nie wybieraj presetu „Other”.
5. Dodaj domeny `zostaje.com` i `www.zostaje.com`, jeśli nie są już przypisane.

`vercel.json` zawiera preset i komendy. Żadne zmienne środowiskowe ani baza
nie są potrzebne. Repozytorium osobiste do importu: `rajanbor/zostaje.com`, gałąź `main`.
Nie wykonano publikacji ani zmian ustawień konta Vercel.
Gałąź produkcyjną ustaw na `main` po sprawdzeniu i scaleniu migracji.

Poprzedni workflow GitHub Pages został usunięty, aby po scaleniu nie publikował
kodu Next.js jako surowych plików statycznych. Właściwym celem jest Vercel.

## Archiwum wcześniejszej strony

Pełna aktualna wersja HTML/CSS/JS sprzed migracji jest w gałęzi:

**`codex/archive-static-site-2026-10-14`**, commit **`efcf6c1`**.

Zawiera również wcześniejsze zmiany treści MVP i `/projekt/`. Archiwum jest również w obu repozytoriach GitHub.
Nie przełączaj checkoutu z niezapisanymi zmianami migracji. Do osobnego podglądu:

```bash
git worktree add ../zostaje.com-static-archive codex/archive-static-site-2026-10-14
python3 -m http.server 8080 --directory ../zostaje.com-static-archive
```

## Struktura

- `app/` — App Router, layout i metadane wszystkich siedmiu stron.
- `app/globals.css` — dokładna kopia wcześniejszego `styles.css`.
- `app/demo.css` — wcześniejszy wygląd demo.
- `components/pages/` — treść stron jako JSX.
- `components/site-chrome.tsx` — wspólne nagłówki i stopki.
- `components/site-provider.tsx` — PL/EN, menu, focus, zapamiętanie języka.
- `components/demo-lab.tsx`, `lib/demo.ts` — demo przepisane na stan React i TS.
- `lib/page-copy.ts` — tytuły i opisy PL/EN; `lib/metadata.ts` — SEO Next.js.
- `public/` — niezmienione grafiki, ikony, manifest, robots i sitemap.
- `proxy.ts` — CSP z osobnym nonce dla każdego dokumentu.

## Renderowanie i nagłówki

Strony są renderowane po stronie serwera. Istniejąca polityka CSP nie pozwalała
na dowolne skrypty inline, a Next.js używa ich do hydratacji. Zachowujemy tę
zasadę przez nonce na odpowiedź, zamiast dodawać `unsafe-inline` dla skryptów.
Z tego powodu nie używamy statycznego eksportu ani cache całych dokumentów.
Bundlowane zasoby `_next/static` zachowują standardowy cache Next.js.

Dozwolone źródła fontów i wygląd pozostają takie jak wcześniej: Inter z Google
Fonts. Nagłówki HSTS, nosniff, Referrer-Policy, Permissions-Policy i ochrona ramek
są w `next.config.ts`; nie ma ich drugiej, sprzecznej kopii w `vercel.json`.

Przełącznik języka zachowuje klucz `zostaje-language`. Demo zachowuje klucz
`zostaje-web-demo-v1`, aby istniejące poprawne dane lokalnego demo nadal się
wczytywały. Jego obliczenia należą do wcześniejszego demo, nie są implementacją
aktualnego datowanego planu iOS.

## Zakres produktu

Strona główna opisuje osobiste MVP iOS; `/projekt/` zawiera cele, tezy i hipotezy
licencjatu. Pozostałe istniejące adresy — `/demo/`, `/pricing/`, `/download/`,
`/help/`, `/developers/` — zachowano. Kontakt w stopce otwiera pocztę. Sekcja „Zapisz się na demo” ma pole e-mail
i wyłączony przycisk; formularz nie wysyła ani nie zapisuje danych.

Dokumentacja w repozytorium aplikacji:
`docs/product/mvp-2026-10.md` i `docs/thesis/research-plan.md`.
Wyniki kontroli migracji: [docs/nextjs-migration.md](docs/nextjs-migration.md).

## Kopia na profilu osobistym

- `origin`: https://github.com/zostaje/zostaje.com — repozytorium organizacji.
- `personal`: https://github.com/rajanbor/zostaje.com — niezależna prywatna kopia
  do importu w Vercel, domyślna gałąź `main`.

W obu miejscach jest ten sam commit wersji Next.js: w organizacji na
`codex/nextjs-site`, na profilu osobistym na `main`. Archiwum statycznej strony
zachowano w obu miejscach. Organizacyjne `main` nie jest nadpisywane.

Po kolejnych zmianach i utworzeniu commita uruchom:

```bash
npm run sync:github
```

Polecenie aktualizuje obie kopie i gałąź archiwalną. Nie używa force push ani
nie zapisuje tokenów w kodzie. Korzysta ze standardowego uwierzytelnienia Git
na Twoim komputerze. Odrzuca niezacommitowane zmiany (poza generowanym przez
Next.js plikiem `next-env.d.ts`) i nieoczekiwane adresy remote. Jeśli ktoś
dodał odrębne commity w którejś kopii, Git odmówi nadpisania jej historii.
Synchronizacja jest uruchamiana tym poleceniem; nie ma automatycznego harmonogramu.

## Formularz demo — stan przejściowy

`components/demo-signup-form.tsx` ma etykietę e-mail, placeholder PL/EN,
wyłączony przycisk i informację o nieaktywnych zapisach. Wpisywanie jest możliwe,
ale nie ma API, bazy, localStorage ani wysyłania poczty. Submit jest blokowany.
Podłączenie bazy, zgód i obsługi zapisu pozostaje przyszłym zadaniem.
