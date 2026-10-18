# Mini brand guide — Zostaje

## Kierunek

Strona ma dwa motywy: jasny i ciemny. Domyślnie podąża za ustawieniami urządzenia,
także po ich zmianie. Tylko w stopce jest wybór „Systemowy / Jasny / Ciemny”.
Ręczny wybór zapamiętujemy lokalnie w tej przeglądarce; „Systemowy” usuwa nadpisanie.
Logotypy wyświetlamy bez filtrów kolorystycznych.

Zostaje ma być spokojne, konkretne i ludzkie. Marka mówi o finansach bez straszenia,
oceniania i księgowego żargonu. Wizualnie łączy neutralne tła z błękitem oznaczającym
jasność, postęp i pieniądze pozostające pod kontrolą.
Bazowy akcent obu motywów to `#155EEF`; w ciemnym motywie tekstowe linki korzystają
z jaśniejszego błękitu, żeby utrzymać kontrast.

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
| Akcent główny            | `#155EEF` | CTA, aktywne elementy i postęp        |
| Akcent hover             | `#004EEB` | Stan hover przycisków                 |
| Jasny akcent         | `#84ADFF` | Linki, etykiety i krótkie wyróżnienia |
| Tekst na akcencie         | `#FFFFFF` | Treść przycisków i akcentowanych paneli   |
| Ostrzeżenie              | `#F59E0B` | Statusy wymagające uwagi              |
| Błąd                     | `#FF6B6B` | Błędy i negatywne zmiany              |

Koloru akcentowego używamy oszczędnie: ma prowadzić wzrok, a nie wypełniać cały interfejs.
Zaznaczenie tekstu używa koloru głównego `#155EEF` z kryciem 30%, bez zmiany koloru liter.

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
| Akcent i przyciski | `#155EEF` |
| Akcent hover | `#004EEB` |

W jasnym motywie używamy plików `Wordmark/Light.svg` i `App Icon/Light.svg`
dostarczonych przez właściciela. Ciemny motyw używa odpowiadających im wariantów
`Dark.svg`. Logotypy mają przezroczyste tło i zachowują oryginalne kolory.
Szerokość wynosi 96 px w nawigacji i 112 px w stopce; wysokość wynika z proporcji.

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

Aktualne źródła to cztery dostarczone pliki SVG: Wordmark Dark/Light i App Icon Dark/Light.
Z wordmarków usunięto wyłącznie prostokąt tła i zewnętrzny margines; viewBox wynosi
`453 257 1654 510`. Zachowano ścieżki, maski, gradienty i proporcje.
Ikony aplikacji zachowują oryginalne zaokrąglone krawędzie i przezroczyste narożniki.

- `public/brand/wordmark-dark.svg`, `wordmark-light.svg`: nawigacja, menu mobilne i stopka.
- `public/brand/icon-dark.svg`, `icon-light.svg`: źródła ikon.
- `public/brand/wordmark-transparent.png`, `wordmark-light.png`: rastrowe wersje zgodności.
- `public/brand/logo.png`, `public/brand/light/logo.png`: znaki 256 × 256 px.
- `public/favicon.ico`: ikony 16, 32 i 48 px; `favicon-16.png`, `favicon-32.png`: PNG.
- `public/apple-touch-icon.png`: 180 px; `icon-192.png`, `icon-512.png`: manifest.
- `public/brand/light/`: odpowiadające ikony jasnego motywu.
- `public/favicon.svg`: aktualny ciemny znak pod historycznym adresem.
- `public/og-image.svg`, `og-image-light.svg` i ich PNG: karty udostępniania z nowym logotypem.

Logotypy wyświetlamy bez filtrów kolorystycznych. Obraz i link mają nazwę „Zostaje”
dla czytników ekranu. Ikony AI stanowią osobny zestaw i nie zmieniają się wraz z logo marki.

## Styl layoutu

Inspiracją strony produktowej jest [Obsidian](https://obsidian.md/): nagłówek wyrównany do lewej,
duża typografia, wyciszony drugi wiersz, oszczędna nawigacja i duży podgląd produktu pod CTA.
Zostaje zachowuje własną zieleń, treści oraz finansowe komponenty. Proces 01–03 ma lekkie
separatory, a funkcje korzystają z neutralnych kart i prostych wizualizacji.

Podgląd planu jest autorską ilustracją MVP z przykładowymi danymi, a nie zrzutem aplikacji
ani deklaracją dostępności wersji desktopowej. Na telefonie wyświetlamy wyłącznie makietę
iPhone’a. Sekcja zapisu na demo zachowuje czytelne etykiety i komunikaty formularza.

## Nawigacja i zapis przed premierą

Nawigacja używa kompaktowego wyboru języka i pozycji „Konto” zamiast zapisu na demo.
Konto pozostaje nieaktywne do wdrożenia logowania. Sekcja zapisu ma tekst i formularz
po lewej oraz dużą, przyciętą makietę telefonu po prawej. Na telefonie układa się
pionowo. Przyciski i aktywne elementy używają nasyconego niebieskiego `#155EEF`.
Formularz zachowuje wysyłkę przez Resend i komunikaty stanu; nie obiecuje rabatu.
