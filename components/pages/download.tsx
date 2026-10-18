"use client";

import { T } from "@/components/site-provider";
import { LegacyHeader, LegacyFooter } from "@/components/site-chrome";

export function DownloadContent() {
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <LegacyHeader />
      <main className="subpage-main" id="main">
        <section className="subpage-hero">
          <div className="container subpage-hero-copy">
            <T as="p" pl="Pobierz" en="Download" className="subpage-kicker" />
            <T as="h1" pl="Najpierw iPhone. Kolejne platformy w przyszłości." en="iPhone first. More platforms in the future." />
            <T as="p" pl="Zostaje powstaje jako natywna aplikacja iOS w Swift. Pierwsza wersja będzie dostępna w zamkniętym demie. Wersje komputerowe i synchronizacja to przyszły kierunek rozwoju, bez ustalonej daty premiery." en="Zostaje is being built as a native iOS app in Swift. The first version will be available through a private demo. Desktop apps and sync are future directions, with no release date set." className="subpage-lead" />
            <div className="subpage-actions">
              <T as="a" pl="Zapisz się na demo iOS" en="Join the iOS demo" className="button button-primary" href="/#demo" />
              <T as="a" pl="Sprawdź pomoc" en="Visit help" className="text-link" href="/help/" />
            </div>
          </div>
        </section>
        <section className="subpage-content">
          <div className="container subpage-grid">
            <article className="subpage-card is-active">
              <T as="span" pl="W budowie" en="In development" className="platform-status" />
              <h2>
                {"iOS"}
              </h2>
              <T as="p" pl="Natywna aplikacja Swift projektowana do szybkiego, codziennego sprawdzania finansów. Pierwsze wydanie będzie dostępne w zamkniętym demie." en="A native Swift app designed for quick daily finance checks. The first release will be available through a private demo." />
            </article>
            <article className="subpage-card">
              <T as="span" pl="Planowane" en="Planned" className="platform-status" />
              <h2>
                {"macOS + Windows"}
              </h2>
              <T as="p" pl="Lekkie aplikacje komputerowe do szerszego planowania i analizy. Data premiery nie została jeszcze ogłoszona." en="Lightweight desktop apps for broader planning and analysis. A release date has not been announced yet." />
            </article>
          </div>
        </section>
      </main>
      <LegacyFooter />
    </>
  );
}
