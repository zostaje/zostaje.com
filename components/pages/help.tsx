"use client";

import { T } from "@/components/site-provider";
import { SiteHeader, LegacyFooter } from "@/components/site-chrome";

export function HelpContent() {
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <SiteHeader />
      <main className="subpage-main" id="main">
        <section className="subpage-hero">
          <div className="container subpage-hero-copy">
            <T as="p" pl="Pomoc" en="Help" className="subpage-kicker" />
            <T as="h1" pl="Jak możemy pomóc?" en="How can we help?" />
            <T as="p" pl="Zostaje jest jeszcze w budowie. Tutaj znajdziesz potwierdzone informacje o pierwszym demie, platformach i sposobie działania aplikacji." en="Zostaje is still in development. Find confirmed information about the first demo, platforms and how the app is intended to work." className="subpage-lead" />
          </div>
        </section>
        <section className="subpage-content">
          <div className="container">
            <div className="help-section-heading">
              <T as="h2" pl="Najczęstsze pytania" en="Frequently asked questions" />
              <T as="p" pl="Najważniejsze informacje o starcie aplikacji, cenie i obsługiwanych platformach." en="Key information about the app launch, pricing and supported platforms." />
            </div>
            <div className="help-grid">
              <article className="help-card">
                <T as="h2" pl="Kiedy aplikacja będzie dostępna?" en="When will the app be available?" />
                <T as="p" pl="Nie podaliśmy jeszcze publicznej daty premiery. Najpierw uruchomimy zamknięte demo natywnej aplikacji na iOS." en="A public release date has not been announced. A private demo of the native iOS app will come first." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Czy pierwsze demo będzie płatne?" en="Will the first demo be paid?" />
                <T as="p" pl="Nie. Pierwsze zamknięte demo ma być bezpłatne i nie uruchomi automatycznej płatności." en="No. The first private demo is intended to be free and will not start an automatic payment." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Co obejmuje aktualne MVP?" en="What does the current MVP include?" />
                <T as="p" pl="Jedną aplikację offline na iPhone’a: szybkie wpisy, zdjęcia paragonów, widżety, przestrzenie, historię, analitykę i podział rachunków. Inne platformy są dalszym rozwojem." en="One offline iPhone app: quick entries, receipt photos, widgets, spaces, history, analytics and split bills. Other platforms are future development." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Czym będzie Zostaje MCP?" en="What will Zostaje MCP be?" />
                <T as="p" pl="Planowane publiczne MCP ma pozwolić połączyć wybrane dane z kompatybilnym asystentem AI. Zakres dostępu ma być czytelny, ograniczony i możliwy do cofnięcia." en="The planned public MCP is intended to connect selected data to compatible AI assistants. Access should be clear, limited and revocable." />
              </article>
            </div>
            <div className="help-section-heading">
              <T as="h2" pl="Jak działa Zostaje" en="How Zostaje works" />
              <T as="p" pl="Aplikacja ma zamieniać rozproszone informacje finansowe w jeden prosty obraz sytuacji." en="The app is intended to turn scattered financial information into one simple picture." />
            </div>
            <div className="help-grid">
              <article className="help-card">
                <T as="h2" pl="1. Zbierz całość" en="1. Bring it together" />
                <T as="p" pl="Podaj saldo początkowe i dodawaj operacje formularzem, ze zdjęcia paragonu lub przez skrót z widżetu. Możesz tworzyć własne przestrzenie finansowe." en="Enter a starting balance and record operations using a form, receipt photo or widget shortcut. You can create your own financial spaces." />
              </article>
              <article className="help-card">
                <T as="h2" pl="2. Zobacz pozostałą kwotę" en="2. See your remaining money" />
                <T as="p" pl="Widoki dnia, tygodnia i miesiąca pokazują pozostałą kwotę oraz status względem równego tempa wydawania. Wynik zależy od kompletności Twoich wpisów." en="Day, week and month views show remaining money and status against an even spending pace. The result depends on the completeness of your entries." />
              </article>
              <article className="help-card">
                <T as="h2" pl="3. Podejmij decyzję" en="3. Make a decision" />
                <T as="p" pl="Sprawdź historię i analitykę. Wyjaśnienie statusu pokazuje, skąd bierze się ocena tempa wydawania; decyzja pozostaje po Twojej stronie." en="Check history and analytics. The status explanation shows how the spending-pace assessment is calculated; you make the decision." />
              </article>
              <article className="help-card">
                <T as="h2" pl="4. Wracaj na chwilę" en="4. Check in briefly" />
                <T as="p" pl="Krótki codzienny podgląd ma zastępować długie porządkowanie finansów raz w miesiącu." en="A brief daily check-in is intended to replace a long monthly financial cleanup." />
              </article>
            </div>
            <div className="help-section-heading">
              <T as="h2" pl="Funkcje i integracje" en="Features and integrations" />
              <T as="p" pl="Zakres pierwszej wersji jest nadal rozwijany, ale kierunek produktu jest już określony." en="The first release scope is still evolving, but the product direction is already defined." />
            </div>
            <div className="help-grid">
              <article className="help-card">
                <T as="h2" pl="Plan i cele" en="Plans and goals" />
                <T as="p" pl="Limity i cele zapisane prostym językiem, bez budowania kolejnego arkusza." en="Limits and goals written in plain language, without building another spreadsheet." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Wydatki w kontekście" en="Spending in context" />
                <T as="p" pl="Transakcje mają wyjaśniać, co zmieniło się w planie i dlaczego." en="Transactions are intended to explain what changed in the plan and why." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Jedne dane na urządzeniach" en="One dataset across devices" />
                <T as="p" pl="iOS, a później macOS i Windows, mają korzystać ze wspólnego konta i backendu." en="iOS, followed by macOS and Windows, is intended to use one account and shared backend." />
              </article>
              <article className="help-card">
                <h2>
                  {"Zostaje MCP"}
                </h2>
                <T as="p" pl="Planowane MCP ma udostępniać wybrane dane asystentom AI wyłącznie za zgodą użytkownika i na ograniczonych zasadach." en="The planned MCP is intended to share selected data with AI assistants only with user consent and limited permissions." />
              </article>
            </div>
            <div className="help-contact">
              <T as="h2" pl="Nie znalazłeś odpowiedzi?" en="Still need an answer?" />
              <T as="p" pl="Napisz do nas. Odpowiemy na pytania dotyczące demo i rozwoju projektu." en="Contact us with questions about the demo or project development." />
              <a className="button button-primary" href="mailto:demo@zostaje.app">
                {"demo@zostaje.app"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <LegacyFooter />
    </>
  );
}
