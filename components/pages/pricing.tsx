"use client";

import { T } from "@/components/site-provider";
import { SiteHeader, LegacyFooter } from "@/components/site-chrome";

export function PricingContent() {
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <SiteHeader />
      <main className="subpage-main" id="main">
        <section className="subpage-hero">
          <div className="container subpage-hero-copy">
            <T as="p" pl="Cennik" en="Pricing" className="subpage-kicker" />
            <T as="h1" pl="Twoje finanse. Twój wybór." en="Your finances. Your choice." />
            <T as="p" pl="Pełna aplikacja lokalna jest darmowa. Płacisz, gdy chcesz powierzyć nam obsługę AI i sięgnąć po rozszerzoną analitykę. A jeśli budujesz własny biznes — porozmawiajmy." en="The full local app is free. Pay when you want us to handle AI for you and add advanced analytics. And if you’re building a business, let’s talk." className="subpage-lead" />
          </div>
        </section>
        <section className="subpage-content" aria-label="Plany Zostaje / Zostaje plans">
          <div className="container pricing-page-grid">
            <article className="pricing-page-card" aria-labelledby="plan-free">
              <T as="span" pl="Na co dzień" en="For everyday life" className="pricing-plan-label" />
              <T as="h2" id="plan-free" pl="Darmowy" en="Free" />
              <p className="pricing-page-price">0 zł<T as="span" pl="/ bez abonamentu" en="/ no subscription" /></p>
              <T as="p" className="pricing-plan-description" pl="Twoje finanse na Twoim urządzeniu. Wszystkie funkcje aplikacji lokalnej, bez opłat." en="Your finances on your device. Every feature of the local app, free of charge." />
              <ul className="pricing-page-list">
                <T as="li" pl="Pełna funkcjonalność aplikacji lokalnej" en="Full local app functionality" />
                <T as="li" pl="Dane przechowywane na Twoim urządzeniu" en="Data stored on your device" />
                <T as="li" pl="Budżet, wpływy, wydatki i cele finansowe" en="Budgets, income, expenses and financial goals" />
                <T as="li" pl="Samodzielne podłączenie własnego AI do analizy" en="Connect your own AI for analysis" />
              </ul>
              <div className="pricing-plan-action"><T as="a" pl="Przejdź do pobierania" en="Go to downloads" className="button button-outline" href="/download/" /></div>
            </article>
            <article className="pricing-page-card pricing-page-card-premium" aria-labelledby="plan-premium">
              <T as="span" pl="AI bez konfiguracji" en="AI without the setup" className="pricing-plan-label" />
              <T as="h2" id="plan-premium" pl="Premium" en="Premium" />
              <p className="pricing-page-price">39 zł<T as="span" pl="/ miesiąc" en="/ month" /></p>
              <T as="p" className="pricing-plan-description" pl="Nie chcesz samodzielnie łączyć AI do analizy? Zostaw to nam i zyskaj więcej możliwości analitycznych." en="Prefer not to connect AI for analysis yourself? Let us handle it and get more analytical capabilities." />
              <ul className="pricing-page-list">
                <T as="li" pl="Wszystko z planu Darmowego" en="Everything in Free" />
                <T as="li" pl="AI do analizy obsługiwane przez Zostaje" en="AI analysis managed by Zostaje" />
                <T as="li" pl="Bez samodzielnego podłączania dostawcy AI" en="No need to connect an AI provider yourself" />
                <T as="li" pl="Rozszerzone funkcje analityczne" en="Advanced analytics features" />
              </ul>
              <div className="pricing-plan-action"><T as="a" pl="Powiadom mnie o Premium" en="Notify me about Premium" className="button button-primary" href="/#demo" /></div>
            </article>
            <article className="pricing-page-card" aria-labelledby="plan-founders">
              <T as="span" pl="Dla Twojego biznesu" en="For your business" className="pricing-plan-label" />
              <h2 id="plan-founders">Founders Edition</h2>
              <T as="p" className="pricing-page-price pricing-page-price-custom" pl="Porozmawiajmy" en="Let’s talk" />
              <T as="p" className="pricing-plan-description" pl="Freelancer, startup czy JDG? Zostaje to więcej niż domowy budżet. Pomoże Ci pilnować finansów także na starcie własnej działalności." en="Freelancer, startup or sole trader? Zostaje goes beyond a household budget, helping you keep track of finances as you start your business." />
              <ul className="pricing-page-list">
                <T as="li" pl="Wspólnie określony zakres i cena" en="Scope and pricing agreed together" />
                <T as="li" pl="Rozwój funkcji wokół potrzeb Twojej działalności" en="Features shaped around your business needs" />
                <T as="li" pl="Bezpośredni kontakt z zespołem" en="Direct contact with the team" />
              </ul>
              <div className="pricing-plan-action"><T as="a" pl="Skontaktuj się z nami" en="Contact us" className="button button-outline" href="mailto:sales@zostaje.com?subject=Zostaje%20Founders%20Edition" />
              <a className="pricing-sales-email" href="mailto:sales@zostaje.com">sales@zostaje.com</a></div>
            </article>
          </div>
          <div className="container pricing-page-notes">
            <T as="p" pl="Wciąż się rozwijamy. Jeśli będziemy tworzyć Zostaje wspólnie, może zostaniemy razem na dłużej." en="We’re still growing. If we build Zostaje together, we might stay together for the long run." />
            <T as="p" className="pricing-availability-note" pl="Aplikacja i płatne pakiety są w rozwoju. Dostępność wydań sprawdzisz na stronie pobierania; zapis na powiadomienia nie uruchamia subskrypcji." en="The app and paid plans are in development. Check downloads for release availability; signing up for updates does not start a subscription." />
          </div>
        </section>
      </main>
      <LegacyFooter />
    </>
  );
}
