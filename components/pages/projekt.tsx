"use client";

import { T } from "@/components/site-provider";
import { SiteHeader, MinimalFooter } from "@/components/site-chrome";

export function ProjektContent() {
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <SiteHeader />
      <main id="main" className="product-home project-page">
        <section className="section intro" id="top">
          <div className="container narrow-heading">
            <T as="p" pl="Projekt licencjacki · założenia do sprawdzenia" en="Bachelor’s thesis project · assumptions to test" className="status-pill" />
            <T as="h1" pl="Cele i hipotezy Zostaje" en="Zostaje goals and hypotheses" />
            <T as="p" pl="Projektujemy lokalną aplikację iOS, która pomaga zrozumieć pozostałą kwotę i ogranicza wysiłek zapisywania wydatków. Poniższe hipotezy nie są wynikami badań." en="We are designing a local iOS app that helps people understand remaining money while reducing capture effort. These hypotheses are not research findings." />
          </div>
        </section>
        <section className="section feature-section">
          <div className="container steps-grid">
            <article className="step-card">
              <T as="h2" pl="Cel: mniej wysiłku" en="Goal: less effort" />
              <T as="p" pl="Szybki formularz, zdjęcie paragonu i wejście z widżetu jako sposoby ograniczenia pracy przy zapisie." en="A quick form, receipt photos and widget shortcuts as ways to reduce capture effort." />
            </article>
            <article className="step-card">
              <T as="h2" pl="Cel: zrozumiały wynik" en="Goal: an understandable result" />
              <T as="p" pl="Oddzielić saldo od kwoty po zobowiązaniach i pokazać dane, daty, rezerwy oraz niedobór." en="Separate balance from money after commitments and show inputs, dates, reserves and any shortfall." />
            </article>
            <article className="step-card">
              <T as="h2" pl="Cel: własne decyzje" en="Goal: independent decisions" />
              <T as="p" pl="Powiązać krótkie wyjaśnienia z planem i symulacją, pozostawiając wybór użytkownikowi." en="Connect short explanations to the plan and simulation, leaving the choice to the user." />
            </article>
          </div>
        </section>
        <section className="section intro">
          <div className="container narrow-heading">
            <T as="h2" pl="Tezy projektowe" en="Design propositions" />
            <T as="p" pl="Saldo samo w sobie nie określa kwoty do swobodnego wydania. Interpretacja danych może być bardziej użyteczna niż sam rejestr operacji. Wiarygodny szacunek wymaga widocznych założeń i informacji o niepełnych danych. To uzasadnienie projektu, które wymaga omówienia i oceny." en="A balance alone does not determine freely available money. Interpreting data may be more useful than simply recording transactions. A trustworthy estimate requires visible assumptions and information about incomplete data. This is a project rationale to discuss and evaluate." />
            <T as="h2" pl="Co chcemy sprawdzić?" en="What do we want to test?" />
            <T as="p" pl="H1: szybki formularz, odczyt paragonu i widżet ograniczają czas oraz wysiłek zapisania operacji." en="H1: a quick form, receipt reading and widgets reduce the time and effort of recording an operation." />
            <T as="p" pl="H2: wyjaśnienie kwoty i porównanie z równym tempem wydawania pomagają zrozumieć wynik." en="H2: explaining the amount and comparing it with an even spending pace helps users understand the result." />
            <T as="p" pl="H3: własne przestrzenie ułatwiają oddzielenie środków trzymanych w różnych miejscach." en="H3: user-created spaces help keep funds held in different places separate." />
            <T as="p" pl="H4: użytkownik może uzyskać pierwszy użyteczny plan bez pełnej historii wydatków." en="H4: a user can obtain a first useful plan without a full spending history." />
            <T as="p" pl="H5: użytkownicy wracają do przeglądu finansów w kolejnych tygodniach." en="H5: users return to review their finances in subsequent weeks." />
            <T as="p" pl="Testy zadaniowe porównają czas, błędy i zrozumienie. Krótki pilotaż pozwoli obserwować powroty. Mała próba nie dowodzi skuteczności finansowej ani popytu rynkowego." en="Task tests will compare time, errors and understanding. A short pilot will observe return visits. A small sample does not establish financial effectiveness or market demand." />
          </div>
        </section>
        <section className="section intro">
          <div className="container narrow-heading">
            <T as="h2" pl="Zakres MVP i dalszy rozwój" en="MVP scope and future development" />
            <T as="p" pl="MVP: jedna aplikacja iOS offline, folder danych użytkownika, przestrzenie, szybki formularz, zdjęcie paragonu, widżety, historia, analityka i podział rachunków. CSV, koszty cykliczne, banki, synchronizacja, AI i kolejne platformy są poza tym zakresem." en="MVP: one offline iOS app, a user-selected data folder, spaces, quick forms, receipt photos, widgets, history, analytics and split bills. CSV, recurring costs, banks, sync, AI and other platforms are outside this scope." />
            <T as="a" pl="Wróć do Zostaje" en="Back to Zostaje" className="button button-outline" href="/" />
          </div>
        </section>
      </main>
      <MinimalFooter />
    </>
  );
}
