"use client";

import { T } from "@/components/site-provider";
import { SiteHeader, LegacyFooter } from "@/components/site-chrome";

export function FoundersContent() {
  return <>
    <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
    <SiteHeader />
    <main className="subpage-main founders-page" id="main">
      <section className="subpage-hero founders-hero">
        <div className="container subpage-hero-copy">
          <p className="subpage-kicker">Founders Edition</p>
          <T as="h1" pl="Budujesz biznes? Dopasujmy Zostaje do Ciebie." en="Building a business? Let’s make Zostaje fit you." />
          <T as="p" className="subpage-lead" pl="Dopasowujemy Zostaje do Twojej firmy, pokazujemy, jak z niego korzystać, i dajemy dostęp do Founders Edition — wersji z większą liczbą narzędzi analitycznych dla freelancerów, startupów i JDG." en="We tailor Zostaje to your business, show you how to use it and provide access to Founders Edition — with more analytical tools for freelancers, startups and sole traders." />
          <div className="subpage-actions">
            <T as="a" className="button button-primary" href="#founders-contact" pl="Porozmawiajmy o Twoim biznesie" en="Let’s talk about your business" />
            <T as="a" className="text-link" href="/pricing/" pl="Zobacz wszystkie plany →" en="Explore all plans →" />
          </div>
        </div>
      </section>
      <section className="container founders-section" aria-labelledby="founders-collaboration">
        <div className="founders-section-heading">
          <T as="h2" id="founders-collaboration" pl="Twoje potrzeby. Twoje narzędzia." en="Your needs. Your tools." />
          <T as="p" pl="Nie musisz dopasowywać swojej firmy do gotowego schematu aplikacji. Poznajemy Twój sposób pracy i konfigurujemy zakres Founders Edition tak, by pomagał Ci prowadzić finanse swojej działalności." en="Your business doesn’t have to fit a fixed app template. We learn how you work and configure the scope of Founders Edition to help you manage your business finances." />
        </div>
        <div className="founders-benefits">
          <article><T as="h3" pl="Zakres dopasowany do Ciebie" en="A scope that fits you" /><T as="p" pl="Wspólnie wybieramy najważniejsze przepływy i analizy. Zakres, harmonogram i cenę uzgadniamy przed rozpoczęciem współpracy." en="We choose the most useful workflows and analyses together. Scope, timeline and price are agreed before collaboration begins." /></article>
          <article><T as="h3" pl="Pokazujemy, jak to działa" en="We show you how it works" /><T as="p" pl="Przeprowadzamy Cię przez uzgodnione narzędzia i sposób pracy z aplikacją. Uczysz się korzystać z analiz na przykładach związanych z Twoją działalnością." en="We guide you through the agreed tools and workflows. Learn to use the analyses with examples relevant to your own business." /></article>
          <article><T as="h3" pl="Dostęp do Founders Edition" en="Access to Founders Edition" /><T as="p" pl="Otrzymujesz dostęp do wersji Zostaje z rozszerzonym zestawem narzędzi analitycznych. Wybieramy te możliwości, które będą przydatne w finansach Twojej firmy lub startupu." en="Get access to Zostaje with an expanded set of analytical tools. We select the capabilities that will be useful for your company or startup’s finances." /></article>
        </div>
      </section>
      <section className="container founders-section" aria-labelledby="founders-capabilities">
        <div className="founders-section-heading">
          <T as="h2" id="founders-capabilities" pl="Więcej możliwości dla Twojej firmy." en="More capabilities for your business." />
          <T as="p" pl="Wspólnie wybieramy narzędzia, które odpowiadają na Twoje potrzeby. Dokładny zakres analiz, dostępność funkcji i sposób wdrożenia potwierdzamy w indywidualnej ofercie." en="Together, we choose tools that match your needs. The exact analyses, feature availability and deployment approach are confirmed in your individual proposal." />
        </div>
        <div className="founders-capabilities">
          <article className="subpage-card"><T as="h3" pl="Płynność przy nieregularnych wpływach" en="Cash flow with irregular income" /><T as="p" pl="Widok przyszłych wpływów i zobowiązań, który pomoże zauważyć, na jak długo wystarczą środki i kiedy potrzebny będzie większy bufor." en="A view of expected income and commitments to help you see how long funds could last and when a larger buffer may be needed." /></article>
          <article className="subpage-card"><T as="h3" pl="Koszty działalności w jednym obrazie" en="A clear view of business costs" /><T as="p" pl="Porządkowanie kosztów stałych, subskrypcji i wydatków związanych z projektami, z uwzględnieniem rozdzielenia finansów osobistych i firmowych." en="Organise recurring costs, subscriptions and project expenses, with a view to separating personal and business finances." /></article>
          <article className="subpage-card"><T as="h3" pl="Scenariusze przed podjęciem decyzji" en="Scenarios before decisions" /><T as="p" pl="Sprawdzenie, jak nowy koszt, opóźniona płatność albo zmiana przychodów mogą wpłynąć na plan finansowy Twojej działalności." en="Explore how a new expense, a late payment or a change in revenue could affect your business’s financial plan." /></article>
          <article className="subpage-card"><T as="h3" pl="Analizy i AI pod Twój sposób pracy" en="Analytics and AI for your workflow" /><T as="p" pl="Podsumowania i pytania analityczne dobrane do potrzeb firmy. Sposób podłączenia AI, zakres danych i ewentualne integracje określamy w indywidualnej ofercie." en="Summaries and analytical questions shaped around your business. AI setup, data scope and any integrations are specified in your individual proposal." /></article>
        </div>
      </section>
      <section className="container founders-section" aria-labelledby="founders-technical">
        <div className="founders-technical-note">
          <T as="p" className="subpage-kicker" pl="Dla osób technicznych w firmie" en="For your technical team" />
          <T as="h2" id="founders-technical" pl="Zostaje także na Twoim serwerze." en="Zostaje on your own server, too." />
          <T as="p" pl="Founders Edition może obejmować hosting aplikacji na Twoim serwerze. Wariant serwerowy projektujemy w Rust, z naciskiem na szybkie działanie, wydajność i oszczędne wykorzystanie zasobów." en="Founders Edition can include hosting the application on your own server. We design the server-side edition in Rust with a focus on fast operation, performance and efficient resource use." />
          <T as="p" pl="Z Twoim zespołem technicznym ustalamy wymagania infrastruktury, sposób instalacji i aktualizacji oraz zakres dostępu do danych. Warunki wdrożenia, utrzymania i ewentualnych integracji określamy w ofercie; wydajność zależy też od konfiguracji serwera i obciążenia." en="With your technical team, we agree on infrastructure requirements, installation, updates and data access. Deployment, maintenance and any integrations are defined in the proposal; performance also depends on server configuration and workload." />
        </div>
      </section>
      <section className="container founders-section" aria-labelledby="founders-budget">
        <div className="founders-section-heading">
          <T as="h2" id="founders-budget" pl="Płatna wersja. Budżet ustalony z Tobą." en="A paid edition. A budget agreed with you." />
          <T as="p" pl="Nie ukrywamy: Founders Edition jest płatna. Nie mamy jednak sztywnych ram finansowych. Punktem wyjścia są Twoje potrzeby i budżet — wyceniamy to, co będzie Ci niezbędne do prowadzenia finansów firmy lub startupu." en="We’re upfront: Founders Edition is paid. But we don’t impose rigid pricing packages. We start with your needs and budget, then price what you’ll need to manage your company or startup’s finances." />
          <T as="p" pl="Wspólnie określamy zakres dostosowania, narzędzia analityczne i sposób wdrożenia. Cenę i warunki współpracy znasz przed podjęciem decyzji." en="Together, we define the customisation, analytical tools and deployment approach. You know the price and collaboration terms before deciding." />
        </div>
      </section>
      <section className="container founders-section" aria-labelledby="founders-start">
        <div className="founders-section-heading"><T as="h2" id="founders-start" pl="Zaczynamy od rozmowy." en="We start with a conversation." /></div>
        <ol className="founders-steps">
          <li><T as="h3" pl="Opowiedz o swojej działalności" en="Tell us about your business" /><T as="p" pl="Napisz, czym się zajmujesz i co dziś utrudnia Ci kontrolowanie finansów." en="Tell us what you do and what makes managing finances difficult today." /></li>
          <li><T as="h3" pl="Ustalmy zakres i wycenę" en="Agree on scope and pricing" /><T as="p" pl="Wybieramy priorytety i uzgadniamy możliwy zakres, terminy oraz warunki współpracy." en="We choose priorities and agree on a feasible scope, timing and collaboration terms." /></li>
          <li><T as="h3" pl="Wdróżmy Zostaje i pokażmy Ci narzędzia" en="Set up Zostaje and walk you through the tools" /><T as="p" pl="Dostosowujemy aplikację, udostępniamy uzgodniony zakres Founders Edition i pokazujemy, jak korzystać z niego w codziennej pracy." en="We tailor the app, provide the agreed Founders Edition capabilities and show you how to use them in your daily work." /></li>
        </ol>
      </section>
      <section className="container founders-contact" id="founders-contact" aria-labelledby="founders-contact-heading">
        <p className="subpage-kicker">Founders Edition</p>
        <T as="h2" id="founders-contact-heading" pl="Może zostaniemy razem na dłużej?" en="Perhaps we’ll stay together for the long run?" />
        <T as="p" pl="Opowiedz nam o swojej firmie lub startupie, potrzebach i budżecie. Zaproponujemy zakres Founders Edition, sposób wdrożenia i wycenę dopasowaną do Twojej sytuacji." en="Tell us about your company or startup, your needs and your budget. We’ll propose a Founders Edition scope, deployment approach and price that fit your situation." />
        <T as="a" className="button button-primary" href="mailto:sales@zostaje.com?subject=Zostaje%20Founders%20Edition" pl="Napisz do nas" en="Get in touch" />
        <a className="founders-email" href="mailto:sales@zostaje.com">sales@zostaje.com</a>
      </section>
    </main>
    <LegacyFooter />
  </>;
}
