# Jak pracujemy

To repozytorium zawiera wyłącznie statyczną stronę `zostaje.com`. Kod aplikacji
— klienty, backend, logika — jest w [`zostaje`](https://github.com/zostaje/zostaje).

## Jedna gałąź główna

`main` jest jedyną długowieczną gałęzią. Pracę prowadzimy na krótkich gałęziach
z prefiksem mówiącym, czego dotyczą:

```
landing/cennik-nowe-plany     treść i sekcje strony
landing/kontrast-naglowkow    wygląd
content/pomoc-faq             teksty pomocy
chore/walidacja-html          utrzymanie, CI
```

## Pull request

Szablon wymaga wskazania, które podstrony się zmieniają i jak to sprawdzić.
Strona nie ma testów jednostkowych, więc dowodem jest zrzut ekranu i przejście
walidacji HTML.

## Publikacja

`main` jest publikowany na GitHub Pages workflow'em `pages.yml`. Co trafia do
`main`, trafia na produkcję — nie ma środowiska pośredniego, więc zmiany
sprawdzamy lokalnie przed scaleniem:

```bash
python3 -m http.server 8080
```
