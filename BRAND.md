# Mini brand guide — Zostaje

## Kierunek

Zostaje ma być spokojne, konkretne i ludzkie. Marka mówi o finansach bez straszenia,
oceniania i księgowego żargonu. Strona ma jeden, stały jasny motyw — bez przełącznika
oraz bez automatycznego dopasowania do ciemnego motywu systemu.

## Kolory

| Rola | Kolor | Zastosowanie |
| --- | --- | --- |
| Tło główne | `#FAFAF9` | Ciepła, złamana biel całej strony |
| Powierzchnia | `#FFFFFF` | Karty, formularze i makiety |
| Powierzchnia podniesiona | `#F0F0F2` | Paski narzędzi i spokojne wydzielenia |
| Powierzchnia pomocnicza / linia | `#DDDDE2` | Separatory i obramowania |
| Tekst główny | `#18181B` | Nagłówki i kluczowe wartości |
| Tekst pomocniczy | `#45454F` | Akapity i opisy |
| Tekst wyciszony | `#62626C` | Metadane, etykiety i drugi plan |
| Zieleń główna / akcent | `#147D57` | CTA, linki i postęp |
| Zieleń hover | `#106545` | Stan hover przycisków |
| Tekst na zieleni | `#FFFFFF` | Treść przycisków |
| Ostrzeżenie | `#A56408` | Statusy wymagające uwagi |
| Błąd | `#BC303B` | Błędy i negatywne zmiany |

Neutralne szarości nawiązują do czerni, bieli i delikatnego chłodnego cieniowania logo.
Zieleń jest oszczędnym akcentem funkcjonalnym. Tekst i kontrole mają zachować czytelny
kontrast także w makietach oraz na starszych podstronach.

## Logo i ikony

Zatwierdzony przez właściciela znak to białe, złożone jak wstęga „Z” na czarnym,
zaokrąglonym kwadracie. Źródłem jest dostarczony PNG 1254 × 1254 px.
Przy przygotowaniu zasobów usunięto wyłącznie zewnętrzny margines
(kadr: x=96, y=92, szerokość i wysokość 1066 px), a następnie przeskalowano obraz.
Nie zmieniamy kształtu, proporcji, kolorów ani cieniowania znaku.

- `public/brand/logo.png`: 256 × 256 px; wcześniejszy znak, zachowany jako zasób.
- `public/brand/wordmark-transparent.png`: pełny logotyp z napisem; nawigacja, jej menu mobilne i stopka. Tło jest przezroczyste. Na jasnej stronie CSS przyciemnia wyświetlanie, zachowując oryginalny jasnobłękitny plik.
- `public/favicon.ico`: warianty 16, 32 i 48 px.
- `public/favicon-16.png`, `public/favicon-32.png`: jawne ikony przeglądarkowe.
- `public/apple-touch-icon.png`: 180 × 180 px.
- `public/icon-192.png`, `public/icon-512.png`: ikony manifestu.
- `public/favicon.svg`: zgodny adres historyczny, zawiera ten sam znak rastrowy.
- `public/og-image.png` i źródłowy SVG: jasna karta udostępniania z logo.

Pełny logotyp zastępuje ikonę i osobny tekst nazwy w nawigacji oraz stopce.
Obraz i link mają nazwę „Zostaje” dla czytników ekranu.
Ikony pozostają czarno-białe także w jasnym motywie strony.

## Typografia, kształt i układ

- Krój: Inter — nawigacja, tekst, formularze, nagłówki i wartości pieniężne.
- Nagłówki: SemiBold, zwarty line-height, tracking od `-0.035em` do `-0.045em`.
- Tekst: 16–20 px, bazowy line-height `1.5`.
- Promienie: 8 px dla kontrolek i wewnętrznych paneli, 10 px dla kart strony produktowej.
- Maksymalna szerokość treści: 1120 px, z bezpiecznym marginesem na mobile.
- Zachowujemy obecny układ, treści i funkcje; zmiana motywu dotyczy palety i identyfikacji.
- Inspiracją rytmu strony jest [Obsidian](https://obsidian.md/): nagłówek do lewej,
  duża typografia, wyciszony drugi wiersz i podgląd produktu pod CTA.
- Podgląd planu to ilustracja MVP z przykładowymi danymi, nie zrzut aplikacji ani
  deklaracja dostępności wersji desktopowej. Na telefonie pokazujemy makietę iPhone’a.
