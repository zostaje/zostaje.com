# Logotyp nawigacji i stopki

Źródło: dostarczony przez właściciela plik „Zostaje — minimalistyczne logo w błękicie.png”.
Zastosowanie: tylko nagłówki, ich menu mobilne i stopki. Favicon, ikony aplikacji
oraz karta udostępniania zachowują wcześniejszy znak.

## Obróbka

Po trzech nieudanych próbach wycięcia przez wbudowane imagegen właściciel wyraźnie
wybrał techniczne usunięcie tła bez generowania obrazu. Wykorzystany zasób pochodzi
z oryginału, nie z żadnego wyniku AI.

Usunięto czarne tło przez kanał alfa, łącznie z wnętrzami liter. Jasne wnętrza
liter zachowują oryginalne RGB; na brzegach usunięto czarną matę z antyaliasingu.
Pozostawiono niewielki przezroczysty margines. Wynik:
`public/brand/wordmark-transparent.png`, 1156 × 350 px, RGBA.

Oryginalne jasne błękity pozostają w pliku i na stronie. Ciemny motyw zapewnia
kontrast, dlatego logotyp nie ma filtrów przyciemniających ani dodatkowego tła.

## Wariant dla jasnego motywu

Źródło: „Błyszczące logo Zostaje w granacie.png”. Technicznie usunięto białe tło
oraz białą matę na krawędziach, zachowując granatowe wnętrza i cieniowanie liter.
Wynik: `public/brand/wordmark-light.png`. Ikony `public/brand/light/` przygotowano
z pliku „Jasna ikona z granatową wstęgą Z.png”, zachowując jasną płytkę ikony.

Motyw domyślnie wynika z `prefers-color-scheme`. Ręczny wybór w stopce zapisuje się
jako `zostaje-theme`; opcja systemowa usuwa ten klucz. Skrypt w nagłówku używa CSP
nonce, ustawia kolory przed pierwszym wyświetleniem, a komponent React zarządza
ikonami i manifestem bez modyfikowania zasobów innego motywu.

## Przezroczyste narożniki favicon

Warianty favicon (ICO 16/32/48 px, PNG 16/32 px i historyczny SVG) mają
zaokrąglone, przezroczyste narożniki zamiast białych kwadratów. Korekta obejmuje
oba motywy. Adresy ikon przeglądarkowych mają wersję `?v=2`, żeby odświeżyć cache.
Ikony ekranu początkowego i logo na stronie pozostają bez zmian.
