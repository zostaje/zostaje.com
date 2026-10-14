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
            <T as="h1" pl="Najpierw iPhone. Później Twoje biurko." en="iPhone first. Your desktop next." />
            <T as="p" pl="Zostaje powstaje najpierw jako natywna aplikacja iOS w Swift. Wersje na macOS i Windows pojawią się w kolejnym etapie, z tym samym kontem i danymi." en="Zostaje is being built first as a native iOS app in Swift. macOS and Windows versions will follow, using the same account and data." className="subpage-lead" />
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
              <T as="span" pl="Następny etap" en="Next stage" className="platform-status" />
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
