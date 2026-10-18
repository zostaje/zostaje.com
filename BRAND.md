# Mini brand guide — Zostaje

## Kierunek

Strona ma dwa motywy: jasny i ciemny. Domyślnie podąża za ustawieniami urządzenia,
także po ich zmianie. Tylko w stopce jest wybór „Systemowy / Jasny / Ciemny”.
Ręczny wybór zapamiętujemy lokalnie w tej przeglądarce; „Systemowy” usuwa nadpisanie.
Logotypy wyświetlamy bez filtrów kolorystycznych.

Zostaje ma być spokojne, konkretne i ludzkie. Marka mówi o finansach bez straszenia,
oceniania i księgowego żargonu. Wizualnie łączy ciemne, skupione tło z zielenią oznaczającą
jasność, postęp i pieniądze pozostające pod kontrolą.

## Kolory

| Rola                     | Kolor     | Zastosowanie                          |
| ------------------------ | --------- | ------------------------------------- |
| Tło główne               | `#0F0F0F` | Tło całej strony i każdej sekcji      |
| Powierzchnia             | `#171717` | Karty i spokojne wydzielenia          |
| Powierzchnia podniesiona | `#262626` | Ważne makiety i duże karty            |
| Linia                    | `#404040` | Obramowania i separatory              |
| Tekst główny             | `#EEEEEE` | Nagłówki i kluczowe treści            |
| Tekst pomocniczy         | `#D4D4D4` | Akapity i opisy                       |
| Tekst wyciszony          | `#A3A3A3` | Metadane i informacje trzeciego planu |
| Zieleń główna            | `#16A36A` | CTA, aktywne elementy i postęp        |
| Zieleń hover             | `#128257` | Stan hover przycisków                 |
| Zieleń akcentowa         | `#5DDBA3` | Linki, etykiety i krótkie wyróżnienia |
| Tekst na zieleni         | `#FFFFFF` | Treść przycisków i zielonych paneli   |
| Ostrzeżenie              | `#F59E0B` | Statusy wymagające uwagi              |
| Błąd                     | `#FF6B6B` | Błędy i negatywne zmiany              |

Zieleni używamy oszczędnie: ma prowadzić wzrok, a nie wypełniać cały interfejs.
Zaznaczenie tekstu używa zieleni głównej `#16A36A` z kryciem 30%, bez zmiany koloru liter.

## Jasny motyw

| Rola | Kolor |
| --- | --- |
| Tło | `#F8FAFC` |
| Karty | `#FFFFFF` |
| Powierzchnie pomocnicze | `#EEF2F7` |
| Linie | `#D5DDE8` |
| Tekst główny | `#18233B` |
| Tekst pomocniczy | `#394A63` |
| Tekst wyciszony | `#58677E` |
| Akcent i przyciski | `#315CAA` |
| Akcent hover | `#244783` |

W jasnym motywie używamy dostarczonego granatowego napisu
„Błyszczące logo Zostaje w granacie.png” oraz jasnej ikony z granatową wstęgą.
Plik `public/brand/wordmark-light.png` ma przezroczyste tło, a ikony przeglądarki,
iPhone’a i manifestu znajdują się w `public/brand/light/`. Również karta udostępniania
używa nowego wariantu (`public/og-image-light.png`).

W ciemnym motywie pozostają wcześniejsze jasne napisy i czarna ikona z białym Z.
Logo zachowuje szerokość 96 px w nawigacji oraz 112 px w stopce. Oba warianty
korzystają ze wspólnego układu, kompaktowych kontrolek i płynnego menu mobilnego.

## Typografia

- Krój: `Inter` — nawigacja, tekst, formularze, nagłówki i wartości pieniężne.
- Nagłówki: `Inter` SemiBold, zwarty line-height i tracking od `-0.035em` do `-0.045em`.
- Tekst: 16–20 px, bazowy line-height `1.5`.
- Etykiety: małe litery kapitalikowe, większy tracking, kolor akcentowy.
- Język: prosty, bez obietnic bez pokrycia; mówimy „aplikacja powstaje”, dopóki nie jest dostępna.

## Kształt i odstępy

- Promienie: 8 px dla kontrolek i wewnętrznych paneli, 10 px dla kart strony produktowej.
- Maksymalna szerokość treści: 1120 px, z niewielkim bezpiecznym marginesem na mobile.
- Sekcje desktopowe: zwykle około 96 px pionowego oddechu; mobile około 68 px.
- Karty mają cienką, spokojną linię zamiast ciężkiego cienia.
- Cień stosujemy tylko do makiet lub elementów unoszących się nad układem.
- Nawigacja nie ma linii w stanie początkowym; po przewinięciu lekko się obniża i pokazuje separator.

## Logo i ikony

Zatwierdzony przez właściciela znak to białe, złożone jak wstęga „Z” na czarnym,
zaokrąglonym kwadracie. Źródłem jest dostarczony PNG 1254 × 1254 px.
Przy przygotowaniu zasobów usunięto wyłącznie zewnętrzny margines
(kadr: x=96, y=92, szerokość i wysokość 1066 px), a następnie przeskalowano obraz.
Nie zmieniamy kształtu, proporcji, kolorów ani cieniowania znaku.

- `public/brand/logo.png`: 256 × 256 px; wcześniejszy znak, zachowany jako zasób.
- `public/brand/wordmark-transparent.png`: pełny logotyp z napisem; nawigacja, jej menu mobilne i stopka. Tło jest przezroczyste. Na ciemnej stronie wyświetlamy oryginalną jasnobłękitną kolorystykę bez filtrów.
- `public/favicon.ico`: warianty 16, 32 i 48 px.
- `public/favicon-16.png`, `public/favicon-32.png`: jawne ikony przeglądarkowe.
- `public/apple-touch-icon.png`: 180 × 180 px.
- `public/icon-192.png`, `public/icon-512.png`: ikony manifestu.
- `public/favicon.svg`: zgodny adres historyczny, zawiera ten sam znak rastrowy.
- `public/og-image.png` i źródłowy SVG: ciemna karta udostępniania z logo.

Pełny logotyp zastępuje ikonę i osobny tekst nazwy w nawigacji oraz stopce.
Obraz i link mają nazwę „Zostaje” dla czytników ekranu.
Ikony pozostają czarno-białe w ciemnym motywie strony.


## Styl layoutu

Inspiracją strony produktowej jest [Obsidian](https://obsidian.md/): nagłówek wyrównany do lewej,
duża typografia, wyciszony drugi wiersz, oszczędna nawigacja i duży podgląd produktu pod CTA.
Zostaje zachowuje własną zieleń, treści oraz finansowe komponenty. Proces 01–03 ma lekkie
separatory, a funkcje korzystają z neutralnych kart i prostych wizualizacji.

Podgląd planu jest autorską ilustracją MVP z przykładowymi danymi, a nie zrzutem aplikacji
ani deklaracją dostępności wersji desktopowej. Na telefonie wyświetlamy wyłącznie makietę
iPhone’a. Sekcja zapisu na demo zachowuje czytelne etykiety i komunikaty formularza.
