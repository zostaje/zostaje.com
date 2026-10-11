# zostaje.com

Statyczna strona produktowa aplikacji Zostaje.

## Lokalny podgląd

```bash
python3 -m http.server 8080
```

Następnie otwórz `http://localhost:8080`.

## Wdrożenie

Strona jest statyczna — nie ma kroku budowania. Repozytorium jest przygotowane
pod Vercel (`vercel.json`), a równolegle istnieje workflow publikujący na
GitHub Pages (`.github/workflows/pages.yml`).

**Dwa cele publikacji naraz to stan przejściowy.** Zanim wskażesz domenę
`zostaje.com` na Vercel, zdecyduj, który zostaje — inaczej dwa źródła będą
twierdziły, że są produkcją.

### Vercel

1. Zaimportuj repozytorium w Vercel. Framework: **Other**, bez komendy
   budowania, katalog wyjściowy: korzeń repozytorium.
2. Dodaj domenę `zostaje.com` i `www.zostaje.com`.
3. Wdrożenia idą z `main`, a każdy PR dostaje podgląd.

`vercel.json` ustala:

- adresy katalogowe (`/pricing/`) zgodne z `canonical` i `sitemap.xml`,
- nagłówki bezpieczeństwa (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`),
- czas życia cache: tydzień dla ikon, godzina dla `styles.css` i `script.js`.

CSP przepuszcza `fonts.googleapis.com` i `fonts.gstatic.com`, bo strona ładuje
stamtąd krój Inter. Jeśli font zostanie przeniesiony do repozytorium, te dwa
wyjątki trzeba usunąć — i warto to zrobić, bo dziś każdy odwiedzający wysyła
swoje IP do Google.

## Pliki

- `index.html` — treść i semantyczna struktura strony,
- `styles.css` — responsywny wygląd bez zewnętrznych zależności,
- `script.js` — menu mobilne oraz polska i angielska wersja językowa,
- `BRAND.md` — skrócony przewodnik po kolorach, typografii i stylu marki,
- `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`,
  `site.webmanifest` — ikony i manifest,
- `vercel.json` — adresy, nagłówki i cache na Vercelu.

Formularz demo korzysta obecnie z `mailto:`. Po uruchomieniu backendu należy podmienić jego
`action` na właściwy endpoint zapisujący zgodę i adres e-mail.
