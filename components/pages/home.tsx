"use client";

import { T, HeroHeading, useSite } from "@/components/site-provider";
import Image from "next/image";
import { AppScreenshots } from "@/components/app-screenshots";
import { DemoSignupForm } from "@/components/demo-signup-form";
import { SiteHeader, MinimalFooter } from "@/components/site-chrome";

import homeFaq from "@/lib/home-faq.json";

export function HomeContent() {
  const { language } = useSite();
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <SiteHeader />
      <main id="main" className="product-home">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <T as="p" pl="Darmowa aplikacja do budżetu · MVP na iOS w rozwoju" en="Free budgeting app · iOS MVP in development" className="status-pill" />
              <HeroHeading />
              <T as="p" pl="Szybki wpis, zdjęcie paragonu albo widżet — mniej pracy przy dodawaniu wydatków. Zostaje pokazuje, ile masz do dyspozycji dziś, w tygodniu i w miesiącu. Bez konta. Bez wysyłania danych na serwer." en="A quick entry, receipt photo or widget — less effort to record expenses. Zostaje shows what you have left today, this week and this month. No account. No data sent to a server." className="hero-lead" />
              <div className="hero-actions">
                <T as="a" pl="Zapisz się na demo" en="Join the demo" className="button button-primary" href="#demo" />
                <T as="a" pl="Jak to działa ↓" en="How it works ↓" className="text-link" href="#jak-dziala" />
              </div>
            </div>
            <AppScreenshots />
          </div>
        </section>
        <section className="trust-strip" aria-label={language === "pl" ? "Najważniejsze cechy" : "Key features"}>
          <div className="container trust-grid">
            <p>
              <T as="strong" pl="Bez konta" en="No account" />
              <T as="span" pl="dane na Twoim urządzeniu" en="data on your device" />
            </p>
            <p>
              <T as="strong" pl="Na Twoich zasadach" en="On your terms" />
              <T as="span" pl="własne przestrzenie i folder danych" en="your own spaces and data folder" />
            </p>
            <p>
              <T as="strong" pl="Z wyjaśnieniem" en="With an explanation" />
              <T as="span" pl="widzisz dane i założenia" en="see the inputs and assumptions" />
            </p>
          </div>
        </section>
        <section className="section intro" id="jak-dziala">
          <div className="container narrow-heading">
            <T as="h2" pl="Prosty plan. Świadomy wybór." en="A simple plan. An informed choice." />
            <T as="p" pl="Dla osób, które chcą zacząć odkładać i rozumieć swoje pieniądze bez rozbudowanego arkusza." en="For people who want to start saving and understand their money without a complex spreadsheet." />
          </div>
          <div className="container steps-grid">
            <article className="step-card ">
              <span className="step-number">
                {"01"}
              </span>
              <T as="h3" pl="Zacznij od salda" en="Start with your balance" />
              <T as="p" pl="Wybierz folder na dane i podaj saldo początkowe. Oddziel konto, gotówkę czy inne pieniądze we własnych przestrzeniach." en="Choose your data folder and enter a starting balance. Keep accounts, cash and other funds in spaces you create." />
            </article>
            <article className="step-card featured">
              <span className="step-number">
                {"02"}
              </span>
              <T as="h3" pl="Dodaj wydatek bez rozpisywania" en="Record an expense with less typing" />
              <T as="p" pl="Użyj krótkiego formularza, zdjęcia paragonu lub skrótu z widżetu. Odczytaną kwotę sprawdzasz przed zapisaniem." en="Use a quick form, a receipt photo or a widget shortcut. Check the recognized amount before saving." />
            </article>
            <article className="step-card ">
              <span className="step-number">
                {"03"}
              </span>
              <T as="h3" pl="Zrozum, ile Ci zostaje" en="Understand what you have left" />
              <T as="p" pl="Przełącz dzień, tydzień lub miesiąc. Zobacz historię, analitykę i wyjaśnienie statusu względem równego tempa wydawania." en="Switch between today, this week and this month. Review history, analytics and an explanation of your status against an even spending pace." />
            </article>
          </div>
        </section>
        <section className="section feature-section" id="funkcje">
          <div className="container narrow-heading">
            <T as="h2" pl="Mniej przepisywania. Więcej zrozumienia." en="Less typing. More understanding." />
            <T as="p" pl="Aktualne MVP skupia się na jednej aplikacji na iPhone’a, działającej offline. To funkcje już obecne w kodzie — publiczne instalatory są jeszcze w przygotowaniu." en="The current MVP focuses on one offline iPhone app. These features are already in the code; public installers are still in preparation." />
          </div>
          <div className="container home-edition-grid">
            <article>
              <T as="h3" pl="Paragon odczytany na telefonie" en="Receipt reading on your phone" />
              <T as="p" pl="Zrób zdjęcie paragonu. Aplikacja odczyta tekst i zaproponuje kwotę, którą możesz poprawić przed zapisem. Rozpoznawanie działa na urządzeniu, bez wysyłania zdjęcia do AI." en="Take a receipt photo. The app reads the text and proposes an amount you can correct before saving. Recognition runs on the device, without sending the photo to an AI service." />
            </article>
            <article>
              <T as="h3" pl="Twoje pieniądze w osobnych przestrzeniach" en="Separate spaces for your money" />
              <T as="p" pl="Konto, gotówka, wspólny wyjazd — sam nadajesz nazwy przestrzeniom. Każda ma własne saldo i wpisy, a widok całości pokazuje ich sumę. Widżety pomagają szybko wrócić do dodawania wydatku." en="An account, cash, a shared trip — you name your spaces. Each has its own balance and entries, while the overall view shows their total. Widgets help you jump back to recording an expense." />
            </article>
            <article>
              <T as="h3" pl="Podziel rachunek i pamiętaj o zwrotach" en="Split a bill and track repayments" />
              <T as="p" pl="Zapisz, z kim dzielisz rachunek i kto oddał swoją część. Opcjonalne lokalne przypomnienie pomoże wrócić do nierozliczonych kwot. Oznaczenie zwrotu nie wykonuje przelewu ani nie zmienia automatycznie salda." en="Record who shares a bill and who has paid their part back. An optional local reminder helps you revisit unsettled amounts. Marking a repayment does not transfer money or automatically change the balance." />
            </article>
          </div>
          <p className="container home-development-note"><T as="span" pl="Dalszy rozwój: import CSV, koszty cykliczne, integracje bankowe i synchronizacja. Nie są częścią obecnego MVP. " en="Future development: CSV import, recurring costs, bank connections and synchronization. They are not part of the current MVP. " /><T as="a" className="text-link" href="/releases/" pl="Zobacz, co się zmieniło →" en="See what changed →" /></p>
        </section>
        <section className="section security-section" id="bezpieczenstwo">
          <div className="container security-panel">
            <div>
              <T as="h2" pl="Twoje dane zostają u Ciebie." en="Your data stays with you." />
            </div>
            <div className="security-copy">
              <T as="p" pl="Obecne MVP działa offline: bez konta, synchronizacji, telemetrii i zdalnego AI. Dane zapisujesz w wybranym folderze. Także odczyt tekstu paragonu i obliczenia odbywają się na iPhonie." en="The current MVP works offline: no account, sync, telemetry or remote AI. Your data is stored in a folder you choose. Receipt text recognition and calculations also run on your iPhone." />
              <T as="p" pl="Kwoty zależą od wpisanego salda i zapisanych operacji. Pominięty wydatek zmienia obraz sytuacji. Status opisuje tempo wydawania, a nie gwarancję finansowego bezpieczeństwa." en="Amounts depend on the balance and operations you record. A missing expense changes the picture. Status describes spending pace, not a guarantee of financial security." className="security-note" />
            </div>
          </div>
        </section>
        <section className="section home-editions" aria-labelledby="editions-heading">
          <div className="container narrow-heading">
            <T as="h2" id="editions-heading" pl="Darmowo dla Ciebie. Więcej, kiedy potrzebujesz." en="Free for you. More when you need it." />
            <T as="p" pl="Lokalna aplikacja pozostaje darmowa. Płatne usługi są opcjonalne i rozwijamy je obok osobistego MVP." en="The local app stays free. Paid services are optional and are being developed alongside the personal MVP." />
          </div>
          <div className="container home-edition-grid">
            <article>
              <T as="h3" pl="Twój budżet, Twoje urządzenie" en="Your budget, your device" />
              <T as="p" pl="Lokalny budżet, historia i analityka bez abonamentu. Pierwsza wersja na iOS; pozostałe platformy i funkcje rozszerzone rozwijamy osobno." en="Local budgeting, history and analytics without a subscription. The first version is for iOS; other platforms and extended features are separate development directions." />
              <T as="a" className="text-link" href="/download/" pl="Sprawdź dostępność →" en="Check availability →" />
            </article>
            <article>
              <h3>Premium</h3>
              <T as="p" pl="Nie chcesz samodzielnie łączyć AI? Planujemy obsługę po naszej stronie i rozszerzoną analitykę. 39 zł miesięcznie lub 15% taniej w planie rocznym." en="Prefer us to connect AI for you? We’re planning managed AI and advanced analytics. PLN 39 per month, or 15% less with annual billing." />
              <T as="a" className="text-link" href="/pricing/" pl="Porównaj plany →" en="Compare plans →" />
            </article>
            <article>
              <h3>Founders Edition</h3>
              <T as="p" pl="Budujesz biznes? Dostosujemy Zostaje do potrzeb Twojej działalności: wdrożenie, więcej narzędzi analitycznych i możliwość hostowania na własnym serwerze. Zakres i wycenę ustalamy wspólnie." en="Building a business? We’ll tailor Zostaje to your needs: onboarding, more analytical tools and optional self-hosting. We agree on scope and pricing together." />
              <T as="a" className="text-link" href="/founders-edition/" pl="Poznaj Founders Edition →" en="Explore Founders Edition →" />
            </article>
          </div>
        </section>
        <section className="section home-faq" aria-labelledby="home-faq-heading">
          <div className="container home-faq-layout">
            <div>
              <T as="h2" id="home-faq-heading" pl="Zanim zaczniesz" en="Before you start" />
              <T as="p" pl="Krótko o działaniu i dostępności Zostaje." en="How Zostaje works and when it’s available." />
              <T as="a" className="text-link" href="/help/" pl="Więcej odpowiedzi →" en="More answers →" />
            </div>
            <div className="home-faq-list">
              {homeFaq.map(item => <article key={item.question.pl}>
                <h3>{item.question[language]}</h3>
                <p>{item.answer[language]}</p>
              </article>)}
              <p className="home-resource-links">
                <T as="a" href="/developers/" pl="Dokumentacja" en="Documentation" />
                <T as="a" href="/projekt/" pl="Cele i hipotezy projektu" en="Project goals and hypotheses" />
              </p>
            </div>
          </div>
        </section>
        <section className="section demo-section" id="demo" aria-labelledby="newsletter-heading">
          <div className="container demo-panel">
            <div className="demo-copy">
              <T as="h2" id="newsletter-heading" pl="Dowiedz się pierwszy, kiedy wystartujemy" en="Be the first to know when we launch" />
              <T as="p" pl="Pracujemy nad pierwszym MVP na iPhone’a. Zostaw e-mail, żeby otrzymywać informacje o nowych wersjach i rozwoju Zostaje. Bez reklam i ofert sprzedażowych." en="We’re building the first iPhone MVP. Leave your email for new releases and Zostaje development updates. No ads or sales offers." />
              <DemoSignupForm />
            </div>
            <div className="newsletter-visual" aria-hidden="true">
              <Image className="newsletter-app-screen" src="/screenshots/ios/dashboard.png" width={1206} height={2622} sizes="(max-width: 800px) 80vw, 340px" alt="" />
            </div>
          </div>
        </section>
      </main>
      <MinimalFooter home />
    </>
  );
}
