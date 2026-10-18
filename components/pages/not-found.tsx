"use client";

import { T } from "@/components/site-provider";
import { MinimalHeader, MinimalFooter } from "@/components/site-chrome";

export function NotFoundContent() {
  return <>
    <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
    <MinimalHeader />
    <main className="subpage-main" id="main">
      <section className="not-found-section">
        <div className="container not-found-grid">
          <div className="not-found-copy">
            <T as="p" className="subpage-kicker" pl="Strona nie została znaleziona" en="Page not found" />
            <T as="h1" pl="Tej strony jeszcze nie ma." en="This page isn’t here yet." />
            <T as="p" pl="Link może być nieaktualny albo podstrona nie jest jeszcze gotowa. Baza wiedzy Zostaje jest w przygotowaniu." en="The link may be outdated or the page may not be ready yet. The Zostaje knowledge base is in development." />
            <div className="subpage-actions">
              <T as="a" className="button button-primary" href="/" pl="Wróć na stronę główną" en="Back to home" />
              <a className="text-link" href="/download/">Download →</a>
            </div>
          </div>
          <p className="not-found-code" aria-label="404">404</p>
        </div>
      </section>
    </main>
    <MinimalFooter />
  </>;
}
