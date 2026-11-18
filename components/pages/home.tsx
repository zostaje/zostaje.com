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
            <T as="h2" pl="Od pierwszego wpisu do jasnego obrazu." en="From your first entry to a clear picture." />
            <T as="p" pl="Zacznij od tego, co masz. Dopisuj wydatki na bieżąco i wracaj po odpowiedź: ile jeszcze zostaje?" en="Start with what you have. Record spending as you go and come back to one answer: what’s left?" />
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
              <T as="p" pl="Sprawdź dzień, tydzień lub miesiąc. Zobacz, jak zmieniają się wydatki i co oznacza Twój status. Wyjaśnienie kwoty masz pod ręką." en="Check today, this week or this month. See how your spending changes and what your status means. The explanation is always at hand." />
            </article>
          </div>
        </section>
        <section className="section feature-section" id="funkcje">
          <div className="container narrow-heading">
            <T as="h2" pl="Codzienne finanse, mniej zachodu." en="Everyday money, less effort." />
            <T as="p" pl="Zakupy, wspólna kolacja, pieniądze na kilku kontach. Zostaje pomaga poukładać te drobne sprawy w jednej aplikacji na iPhone’a. Wersja publiczna jest w przygotowaniu." en="Shopping, dinner with friends, money in different accounts. Zostaje brings those everyday details together in one iPhone app. The public version is in preparation." />
          </div>
          <div className="container home-edition-grid">
            <article>
              <T as="h3" pl="Paragon odczytany na telefonie" en="Receipt reading on your phone" />
              <T as="p" pl="Zrób zdjęcie paragonu. Aplikacja odczyta tekst i zaproponuje kwotę, którą możesz poprawić przed zapisem. Rozpoznawanie działa na urządzeniu, bez wysyłania zdjęcia do AI." en="Take a receipt photo. The app reads the text and proposes an amount you can correct before saving. Recognition runs on the device, without sending the photo to an AI service." />
            </article>
            <article>
              <T as="h3" pl="Każde miejsce na pieniądze ma swój widok" en="A clear view of each place you keep money" />
              <T as="p" pl="Oddziel konto od gotówki albo utwórz przestrzeń na wspólny wyjazd. Każda ma własne saldo i historię. Gdy chcesz zobaczyć całość, przełącz się na wspólne podsumowanie." en="Keep an account separate from cash or create a space for a shared trip. Each has its own balance and history. Switch to the overall summary when you want the full picture." />
            </article>
            <article>
              <T as="h3" pl="Podziel rachunek i pamiętaj o zwrotach" en="Split a bill and track repayments" />
              <T as="p" pl="Kolacja ze znajomymi? Podziel rachunek, zapisz udziały i oznacz, kto już oddał swoją część. Możesz włączyć przypomnienie o nierozliczonym rachunku. Aplikacja zapisuje rozliczenie; nie wykonuje przelewów." en="Dinner with friends? Split the bill, record each share and mark who has paid you back. You can enable a reminder for an unsettled bill. The app records the settlement; it does not transfer money." />
            </article>
          </div>
          <p className="container home-development-note"><T as="span" pl="Dalszy rozwój: import CSV, koszty cykliczne, integracje bankowe i synchronizacja. Nie są częścią obecnego MVP. " en="Future development: CSV import, recurring costs, bank connections and synchronization. They are not part of the current MVP. " /><T as="a" className="text-link" href="/releases/" pl="Zobacz, co się zmieniło →" en="See what changed →" /></p>
        </section>
        <section className="section home-budgets" id="budzety" aria-labelledby="budgets-heading">
          <div className="container home-budget-layout">
            <div className="home-budget-copy">
              <T as="p" className="status-pill" pl="Budżety i fundusze · moduł w rozwoju" en="Budgets and funds · module in development" />
              <T as="h2" id="budgets-heading" pl="Nadaj pieniądzom konkretne zadanie." en="Give your money a purpose." />
              <T as="p" pl="Codzienność, poduszka finansowa, wakacje. W Budżetach przypisujesz część posiadanych pieniędzy do własnych funduszy i widzisz, ile zostało na każdy cel. Przestrzenie pokazują, gdzie masz środki; fundusze pomagają zaplanować ich przeznaczenie." en="Everyday spending, an emergency buffer, a holiday. Budgets let you assign money you already have to your own funds and see what remains for each purpose. Spaces show where you keep money; funds help you plan what it is for." />
              <ul className="home-budget-benefits">
                <li><T as="strong" pl="Podział wpływu pod Twoją kontrolą" en="Income allocation under your control" /><T as="span" pl="Ustal stałą kwotę, procent wpływu lub podziel pieniądze ręcznie. Najpierw zobacz propozycję, popraw ją i zatwierdź." en="Choose a fixed amount, a share of income or manual allocation. Review the proposal, adjust it and confirm." /></li>
                <li><T as="strong" pl="Na teraz i na później" en="For now and for later" /><T as="span" pl="Twórz fundusze na bieżące koszty, odkładanie i konkretny cel. Niewydane środki przechodzą na kolejny miesiąc." en="Create funds for everyday costs, saving or a specific goal. Unspent money carries over to the next month." /></li>
                <li><T as="strong" pl="Wydatki, które mają swoje miejsce" en="A place for each expense" /><T as="span" pl="Przypisz wydatek do jednego lub kilku funduszy. Sprawdź historię, postęp celu i widoczne przekroczenia." en="Assign an expense to one or more funds. Check the history, goal progress and any overspending." /></li>
              </ul>
            </div>
            <figure className="home-budget-example">
              <T as="figcaption" pl="Przykładowy podział 1 000 zł" en="Example allocation of PLN 1,000" />
              <div className="home-fund-row"><div><T as="strong" pl="Codzienność" en="Everyday spending" /><span>500 zł</span></div><div className="home-fund-track"><i style={{width:"50%"}} /></div></div>
              <div className="home-fund-row"><div><T as="strong" pl="Poduszka finansowa" en="Emergency buffer" /><span>300 zł</span></div><div className="home-fund-track"><i style={{width:"30%"}} /></div></div>
              <div className="home-fund-row"><div><T as="strong" pl="Wakacje" en="Holiday" /><span>200 zł</span></div><div className="home-fund-track"><i style={{width:"20%"}} /></div></div>
              <T as="p" className="home-budget-note" pl="To wirtualny podział środków, które już masz. Nie tworzy nowych pieniędzy i nie wykonuje przelewów. Ilustracja zasad działania rozwijanego modułu." en="This is a virtual allocation of money you already have. It creates no new money and makes no transfers. An illustration of the module being developed." />
            </figure>
          </div>
        </section>
        <section className="section security-section" id="bezpieczenstwo">
          <div className="container security-panel">
            <div>
              <T as="h2" pl="Twoje dane zostają u Ciebie." en="Your data stays with you." />
            </div>
            <div className="security-copy">
              <T as="p" pl="Twoja historia nie potrzebuje naszego serwera. Obecna aplikacja działa offline, bez konta i śledzenia. Wybierasz folder na dane, a obliczenia i odczyt paragonów odbywają się na Twoim iPhonie." en="Your history does not need our server. The current app works offline, without an account or tracking. You choose the data folder, and calculations and receipt reading happen on your iPhone." />
              <T as="p" pl="Kwoty zależą od wpisanego salda i zapisanych operacji. Pominięty wydatek zmienia obraz sytuacji. Status opisuje tempo wydawania, a nie gwarancję finansowego bezpieczeństwa." en="Amounts depend on the balance and operations you record. A missing expense changes the picture. Status describes spending pace, not a guarantee of financial security." className="security-note" />
            </div>
          </div>
        </section>
        <section className="section home-editions" aria-labelledby="editions-heading">
          <div className="container narrow-heading">
            <T as="h2" id="editions-heading" pl="Na co dzień za darmo. Dodatki po Twojemu." en="Free for everyday use. Extras on your terms." />
            <T as="p" pl="Lokalna aplikacja i podstawowa analityka pozostają darmowe. Premium i Founders Edition to opcjonalne usługi w rozwoju — sięgniesz po nie, jeśli będą Ci potrzebne." en="The local app and core analytics stay free. Premium and Founders Edition are optional services in development, there if you need them." />
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
