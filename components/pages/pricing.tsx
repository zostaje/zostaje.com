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
            <T as="h1" pl="Prosty cennik. Bez niespodzianek." en="Simple pricing. No surprises." />
            <T as="p" pl="Pierwsze zamknięte demo będzie bezpłatne. Finalne plany pokażemy przed publicznym startem, gdy zakres aplikacji będzie gotowy." en="The first private demo will be free. Final plans will be announced before public launch, once the product scope is ready." className="subpage-lead" />
          </div>
        </section>
        <section className="subpage-content">
          <div className="container pricing-page-grid">
            <article className="pricing-page-card">
              <T as="span" pl="Pierwsze demo" en="First demo" className="pricing-status" />
              <p className="pricing-page-price">
                {"0 zł"}
              </p>
              <T as="p" pl="Przetestuj pierwszą wersję na iOS i pomóż zdecydować, co powinno powstać dalej." en="Test the first iOS version and help decide what should be built next." />
              <ul className="pricing-page-list">
                <T as="li" pl="Dostęp do zamkniętego demo" en="Access to the private demo" />
                <T as="li" pl="Możliwość przekazania opinii" en="A direct way to share feedback" />
                <T as="li" pl="Informacje o kolejnych wydaniach" en="Updates about future releases" />
              </ul>
              <T as="a" pl="Zapisz się na demo" en="Join the demo" className="button button-primary" href="/#demo" />
            </article>
            <article className="subpage-card">
              <T as="h2" pl="Co później?" en="What comes next?" />
              <T as="p" pl="Płatne plany, limity i zakres funkcji nie zostały jeszcze ustalone. Opublikujemy je jasno przed rozpoczęciem sprzedaży — bez automatycznych opłat za udział w demie." en="Paid plans, limits and feature scope have not been finalized. They will be published clearly before sales begin, with no automatic charge for joining the demo." />
            </article>
          </div>
        </section>
      </main>
      <LegacyFooter />
    </>
  );
}
