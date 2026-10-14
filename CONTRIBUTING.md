# Praca nad zostaje.com

Repozytorium zawiera stronę marketingową Next.js/React/TypeScript.
Kod aplikacji iOS i backendu pozostaje w repozytorium `zostaje`.

Pracuj na krótkiej gałęzi, domyślnie z prefiksem `codex/`. `main` jest gałęzią
produkcyjną. Wyjątek: `codex/archive-static-site-2026-10-14` zachowuje statyczną
wersję HTML/CSS/JS przed migracją i nie jest gałęzią dalszego rozwoju.

Przed PR:

```bash
npm ci
npm run typecheck
npm run build
npm start
```

Sprawdź zmienione widoki w PL/EN oraz na szerokim i wąskim ekranie. Dla demo
sprawdź zapis, ponowne wczytanie, reset i sytuację niedostępnego localStorage.
Nie zmieniaj identyfikacji wizualnej przypadkiem; `BRAND.md` i zrzuty archiwum
są punktem odniesienia.

W PR opisz zakres, weryfikację i materialne ograniczenia; dla zmian wyglądu
załącz zrzut. Vercel jest docelową platformą. Nie przywracaj automatycznej
publikacji surowego repozytorium przez GitHub Pages.
