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
          <T as="h1" pl="Budujesz biznes. Zadbajmy o jego finanse." en="You’re building a business. Let’s take care of its finances." />
          <T as="p" className="subpage-lead" pl="Dla freelancerów, startupów i osób prowadzących JDG. Zostaje może być czymś więcej niż domowym budżetem — rozwijajmy je wokół Twojej działalności." en="For freelancers, startups and sole traders. Zostaje can go beyond a household budget — let’s build it around your business." />
          <div className="subpage-actions">
            <T as="a" className="button button-primary" href="#founders-contact" pl="Porozmawiajmy o Twoim biznesie" en="Let’s talk about your business" />
            <T as="a" className="text-link" href="/pricing/" pl="Zobacz wszystkie plany →" en="Explore all plans →" />
          </div>
        </div>
      </section>
      <section className="container founders-section" aria-labelledby="founders-collaboration">
        <div className="founders-section-heading">
          <T as="h2" id="founders-collaboration" pl="Więcej niż kolejny abonament." en="More than another subscription." />
          <T as="p" pl="Founders Edition to indywidualna współpraca przy rozwoju Zostaje. Wnosisz realny problem swojej działalności, a my wspólnie z Tobą określamy, jakie narzędzia warto zbudować." en="Founders Edition is a tailored collaboration on Zostaje’s development. Bring a real business problem, and we’ll work with you to decide which tools are worth building." />
        </div>
        <div className="founders-benefits">
          <article><T as="h3" pl="Zakres dopasowany do Ciebie" en="A scope that fits you" /><T as="p" pl="Wspólnie wybieramy najważniejsze przepływy i analizy. Zakres, harmonogram i cenę uzgadniamy przed rozpoczęciem współpracy." en="We choose the most useful workflows and analyses together. Scope, timeline and price are agreed before collaboration begins." /></article>
          <article><T as="h3" pl="Bezpośredni kontakt" en="Direct contact" /><T as="p" pl="Rozmawiasz bezpośrednio z twórcą projektu, pokazujesz swój sposób pracy i przekazujesz uwagi do powstających rozwiązań." en="Talk directly with the project creator, show how you work and share feedback on solutions as they take shape." /></article>
          <article><T as="h3" pl="Wpływ na rozwój" en="A voice in development" /><T as="p" pl="Twoje doświadczenia pomagają ustalać kierunek funkcji dla małych firm. Zamiast gotowego szablonu szukamy rozwiązania dla konkretnej potrzeby." en="Your experience helps shape features for small businesses. We work from a specific need rather than a fixed template." /></article>
        </div>
      </section>
      <section className="container founders-section" aria-labelledby="founders-capabilities">
        <div className="founders-section-heading">
          <T as="h2" id="founders-capabilities" pl="Co możemy rozwijać razem?" en="What could we build together?" />
          <T as="p" pl="Poniższe obszary pokazują kierunek wersji biznesowej. To propozycje do wspólnego ustalenia, nie lista funkcji już dostępnych w aplikacji." en="These areas outline the direction of the business edition. They are options to agree together, not features already available in the app." />
        </div>
        <div className="founders-capabilities">
          <article className="subpage-card"><T as="h3" pl="Płynność przy nieregularnych wpływach" en="Cash flow with irregular income" /><T as="p" pl="Widok przyszłych wpływów i zobowiązań, który pomoże zauważyć, na jak długo wystarczą środki i kiedy potrzebny będzie większy bufor." en="A view of expected income and commitments to help you see how long funds could last and when a larger buffer may be needed." /></article>
          <article className="subpage-card"><T as="h3" pl="Koszty działalności w jednym obrazie" en="A clear view of business costs" /><T as="p" pl="Porządkowanie kosztów stałych, subskrypcji i wydatków związanych z projektami, z uwzględnieniem rozdzielenia finansów osobistych i firmowych." en="Organise recurring costs, subscriptions and project expenses, with a view to separating personal and business finances." /></article>
          <article className="subpage-card"><T as="h3" pl="Scenariusze przed podjęciem decyzji" en="Scenarios before decisions" /><T as="p" pl="Sprawdzenie, jak nowy koszt, opóźniona płatność albo zmiana przychodów mogą wpłynąć na plan finansowy Twojej działalności." en="Explore how a new expense, a late payment or a change in revenue could affect your business’s financial plan." /></article>
          <article className="subpage-card"><T as="h3" pl="Analizy i AI pod Twój sposób pracy" en="Analytics and AI for your workflow" /><T as="p" pl="Podsumowania i pytania analityczne dobrane do potrzeb firmy. Sposób podłączenia AI, zakres danych i ewentualne integracje określamy w indywidualnej ofercie." en="Summaries and analytical questions shaped around your business. AI setup, data scope and any integrations are specified in your individual proposal." /></article>
        </div>
      </section>
      <section className="container founders-section" aria-labelledby="founders-start">
        <div className="founders-section-heading"><T as="h2" id="founders-start" pl="Zaczynamy od rozmowy." en="We start with a conversation." /></div>
        <ol className="founders-steps">
          <li><T as="h3" pl="Opowiedz o swojej działalności" en="Tell us about your business" /><T as="p" pl="Napisz, czym się zajmujesz i co dziś utrudnia Ci kontrolowanie finansów." en="Tell us what you do and what makes managing finances difficult today." /></li>
          <li><T as="h3" pl="Ustalmy zakres i wycenę" en="Agree on scope and pricing" /><T as="p" pl="Wybieramy priorytety i uzgadniamy możliwy zakres, terminy oraz warunki współpracy." en="We choose priorities and agree on a feasible scope, timing and collaboration terms." /></li>
          <li><T as="h3" pl="Budujmy i sprawdzajmy w praktyce" en="Build and test in practice" /><T as="p" pl="Rozwijamy uzgodnione rozwiązania i weryfikujemy je z Tobą na realnych przypadkach." en="We develop the agreed solutions and evaluate them with you using real use cases." /></li>
        </ol>
      </section>
      <section className="container founders-contact" id="founders-contact" aria-labelledby="founders-contact-heading">
        <p className="subpage-kicker">Founders Edition</p>
        <T as="h2" id="founders-contact-heading" pl="Może zostaniemy razem na dłużej?" en="Perhaps we’ll stay together for the long run?" />
        <T as="p" pl="Wciąż się rozwijamy. Jeśli chcesz współtworzyć Zostaje dla swojej działalności, napisz do nas. Cenę ustalimy na podstawie uzgodnionego zakresu." en="We’re still growing. If you’d like to help shape Zostaje for your business, get in touch. Pricing will be based on the scope we agree." />
        <T as="a" className="button button-primary" href="mailto:sales@zostaje.com?subject=Zostaje%20Founders%20Edition" pl="Napisz do nas" en="Get in touch" />
        <a className="founders-email" href="mailto:sales@zostaje.com">sales@zostaje.com</a>
      </section>
    </main>
    <LegacyFooter />
  </>;
}
