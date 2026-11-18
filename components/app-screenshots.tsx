"use client";
import Image from "next/image";
import { T, useSite } from "./site-provider";
const screens = [
  { file: "dashboard", pl: "Ile zostaje w tym miesiącu", en: "What’s left this month", altPl: "Pulpit Zostaje na iOS z pozostałą kwotą, wyborem przestrzeni i dziennym tempem wydawania", altEn: "Zostaje iOS dashboard with remaining money, space selection and daily spending pace" },
  { file: "receipt", pl: "Paragon → sprawdź → zapisz", en: "Receipt → review → save", altPl: "Odczyt paragonu: kwota 73,46 zł do sprawdzenia i przycisk podziału rachunku", altEn: "Receipt recognition: PLN 73.46 for review and a split-bill button" },
  { file: "analytics", pl: "Historia i analityka pod ręką", en: "History and analytics at hand", altPl: "Analityka Zostaje: wydatki, wpływy, bilans i wykres miesięczny", altEn: "Zostaje analytics: expenses, income, balance and a monthly chart" },
];
export function AppScreenshots() {
  const { language } = useSite();
  return <div className="app-screenshot-showcase">
    <div className="app-screenshot-grid">
      {screens.map((screen, index) => <figure key={screen.file}>
        <a href={`/screenshots/ios/${screen.file}.png`} target="_blank" rel="noopener noreferrer" aria-label={language === "pl" ? `Powiększ: ${screen.pl}` : `Enlarge: ${screen.en}`}>
          <Image src={`/screenshots/ios/${screen.file}.png`} width={1206} height={2622} sizes="(max-width: 600px) 72vw, (max-width: 900px) 30vw, 300px" preload={index === 0} alt={language === "pl" ? screen.altPl : screen.altEn} />
        </a>
        <figcaption>{screen[language]}</figcaption>
      </figure>)}
    </div>
    <T as="p" className="app-screenshot-note" pl="Rzeczywiste ekrany wersji rozwojowej iOS · interfejs po polsku · dotknij, aby powiększyć." en="Actual screens from the iOS development build · Polish interface · tap to enlarge." />
  </div>;
}
