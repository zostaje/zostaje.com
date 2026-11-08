"use client";

import { useState } from "react";
import { T, useSite } from "@/components/site-provider";
import { SiteHeader, LegacyFooter } from "@/components/site-chrome";

const MONTHLY_PRICE = 39;
const YEARLY_DISCOUNT = 15;
const YEARLY_FULL_PRICE = MONTHLY_PRICE * 12;
const YEARLY_PRICE = Math.round(YEARLY_FULL_PRICE * (100 - YEARLY_DISCOUNT)) / 100;

export function PricingContent() {
  const { language } = useSite();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const yearly = billing === "yearly";
  const formatPrice = (value: number) => new Intl.NumberFormat(language === "pl" ? "pl-PL" : "en-GB", { style: "currency", currency: "PLN", minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 }).format(value);
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <SiteHeader />
      <main className="subpage-main" id="main">
        <section className="pricing-free-hero" aria-labelledby="pricing-heading">
          <div className="container">
            <h1 id="pricing-heading"><T as="span" pl="Za darmo. Bez ograniczeń." en="Free without limits." /></h1>
            <p className="pricing-free-promise"><T as="span" pl="Bez konta." en="No sign-up required." /><br /><T as="span" pl="Bez abonamentu." en="No subscription needed." /></p>
            <T as="p" className="pricing-free-details" pl="Wszystkie funkcje aplikacji lokalnej są darmowe. Twoje dane zostają na Twoim urządzeniu, a własne AI do analizy możesz podłączyć samodzielnie." en="Every feature of the local app is free. Your data stays on your device, and you can connect your own AI for analysis." />
            <T as="a" className="text-link" href="/download/" pl="Przejdź do pobierania →" en="Go to downloads →" />
          </div>
        </section>
        <section className="subpage-content pricing-addons" aria-labelledby="pricing-addons-heading">
          <div className="container pricing-addons-intro">
            <T as="h2" id="pricing-addons-heading" pl="Opcjonalnie, gdy chcesz więcej." en="Optional, when you want more." />
            <T as="p" pl="Powierz nam obsługę AI i rozszerz analizę finansów albo rozwijaj z nami narzędzia dla swojego biznesu." en="Let us handle AI and expand your financial analysis, or build tools for your business with us." />
            <div className="pricing-billing-toggle" role="group" aria-label={language === "pl" ? "Okres rozliczenia Premium" : "Premium billing period"}>
              <button type="button" aria-pressed={yearly} onClick={() => setBilling("yearly")}><T as="span" pl="Rocznie" en="Yearly" /><span className="pricing-discount">−{YEARLY_DISCOUNT}%</span></button>
              <button type="button" aria-pressed={!yearly} onClick={() => setBilling("monthly")}><T as="span" pl="Miesięcznie" en="Monthly" /></button>
            </div>
          </div>
          <div className="container pricing-page-grid">
            <article className="pricing-page-card pricing-page-card-premium" aria-labelledby="plan-premium">
              <T as="span" pl="AI bez konfiguracji" en="AI without the setup" className="pricing-plan-label" />
              <T as="h2" id="plan-premium" pl="Premium" en="Premium" />
              <div className="pricing-price-block" aria-live="polite" aria-atomic="true">
                <p className="pricing-page-price">{formatPrice(yearly ? YEARLY_PRICE : MONTHLY_PRICE)}{yearly && <del className="pricing-original-price">{formatPrice(YEARLY_FULL_PRICE)}</del>}<T as="span" pl={yearly ? "/ rok" : "/ miesiąc"} en={yearly ? "/ year" : "/ month"} /></p>
                <T as="p" className="pricing-billing-detail" pl={yearly ? `Płatne raz w roku. ${formatPrice(YEARLY_PRICE / 12)} miesięcznie — oszczędzasz ${formatPrice(YEARLY_FULL_PRICE - YEARLY_PRICE)} w roku.` : "Rozliczane co miesiąc."} en={yearly ? `Billed once a year. ${formatPrice(YEARLY_PRICE / 12)} per month — save ${formatPrice(YEARLY_FULL_PRICE - YEARLY_PRICE)} per year.` : "Billed monthly."} />
              </div>
              <T as="p" className="pricing-plan-description" pl="Nie chcesz samodzielnie łączyć AI do analizy? Zostaw to nam i zyskaj więcej możliwości analitycznych." en="Prefer not to connect AI for analysis yourself? Let us handle it and get more analytical capabilities." />
              <ul className="pricing-page-list">
                <T as="li" pl="Wszystkie funkcje darmowej aplikacji" en="Every feature of the free app" />
                <T as="li" pl="AI do analizy obsługiwane przez Zostaje" en="AI analysis managed by Zostaje" />
                <T as="li" pl="Bez samodzielnego podłączania dostawcy AI" en="No need to connect an AI provider yourself" />
                <T as="li" pl="Rozszerzone funkcje analityczne" en="Advanced analytics features" />
              </ul>
              <div className="pricing-plan-action"><T as="a" pl="Powiadom mnie o Premium" en="Notify me about Premium" className="button button-primary" href="/#demo" /></div>
            </article>
            <article className="pricing-page-card" aria-labelledby="plan-founders">
              <T as="span" pl="Dla Twojego biznesu" en="For your business" className="pricing-plan-label" />
              <h2 id="plan-founders">Founders Edition</h2>
              <div className="pricing-price-block">
                <T as="p" className="pricing-page-price pricing-page-price-custom" pl="Porozmawiajmy" en="Let’s talk" />
                <T as="p" className="pricing-billing-detail" pl="Cena i forma rozliczenia ustalane indywidualnie." en="Pricing and billing agreed individually." />
              </div>
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
