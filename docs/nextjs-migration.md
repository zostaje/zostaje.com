# Migracja zostaje.com do Next.js

14 października 2026. Katalog pozostaje `/Users/1norahc/Projects/new/zostaje.com`.

## Zachowana wersja

Przed zmianą frameworka zapisano całą bieżącą statyczną stronę, w tym ostatnie
zmiany treści MVP, na `codex/archive-static-site-2026-10-14` (commit `efcf6c1`).
Rozwój Next.js jest na osobnej gałęzi `codex/nextjs-site`. Gałęzie są lokalne;
nie wypychano ich i nie publikowano strony.

## Implementacja

Next.js 16.4.1, React/React DOM 19.3.1, TypeScript 5.9; wersje runtime są
przypięte i jest `package-lock.json`. Siedem tras App Routera: `/`, `/projekt/`,
`/demo/`, `/pricing/`, `/download/`, `/help/`, `/developers/`.

Treści są JSX, wspólne nagłówki/stopki są komponentami, PL/EN i menu mają stan
React. Nie osadzamy starej strony jako HTML przez `dangerouslySetInnerHTML`;
jedynym takim użyciem jest bezpiecznie serializowany JSON-LD. Demo ma typowany
model i kontrolowany formularz React, zachowuje dotychczasowy klucz localStorage.

`app/globals.css` ma identyczny SHA-256 jak `styles.css` z archiwum:
`81d120b0ebe82acde1f011b3e62999cb74d5c9a7e6c182e4d1f2a9460bf1ebce`.
Zachowano też CSS demo i binarne grafiki/ikony. Przełączanie języka synchronizuje
metadane także po hydratacji/ponownym ustawieniu metadanych przez Next.js.

SSR i nonce w CSP zachowują ograniczenie skryptów inline z wcześniejszej
konfiguracji; dzięki temu hydratacja Next.js działa bez `unsafe-inline` dla
skryptów produkcyjnych. Dokumenty nie są statycznym eksportem. Vercel używa
standardowego presetu Next.js. Stary automatyczny workflow GitHub Pages usunięto.

## Weryfikacja

- `npm run build`: przechodzi; wszystkie siedem tras rozpoznane.
- `npm run typecheck`: przechodzi.
- HTTP 200 dla każdej trasy oraz publicznych ikon, manifestu, robots i sitemap.
- Poprawny JSON-LD, unikalne identyfikatory elementów, CSP i nonce zgodne we
  wszystkich inline skryptach dokumentów. Stary adres `/projekt/index.html`
  przekierowuje do `/projekt/`.
- Przy 1280×900 wszystkie zmierzone pozycje i rozmiary głównych sekcji, nagłówka
  hero, leadu i makiety są identyczne z archiwalną stroną: hero, trust strip,
  proces, funkcje, prywatność, kontakt i stopka.
- Przy 390×844 brak poziomego overflow; otwieranie/zamykanie menu i zmiana
  języka działają. Język zapamiętuje się po odświeżeniu.
- Demo: dodanie `Obiad 100 zł` zmienia dzienny wynik z `200,00` na `192,85 PLN`,
  wpis zostaje po odświeżeniu, reset przywraca `200,00 PLN`; brak błędów konsoli.
- Zrzuty archiwum i Next.js: `docs/screenshots/nextjs-migration/`.

## Deploy

Instrukcja jest w `README.md`: preset Next.js, root `.`, instalacja `npm ci`,
build `npm run build`, domyślny katalog wyjściowy Next.js. Nie ma wymaganych
sekretów ani integracji backendowych. Import repozytorium/domen i właściwa
publikacja w Vercel pozostają czynnościami po tej migracji.
