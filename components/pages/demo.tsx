"use client";

import { T } from "@/components/site-provider";
import { LegacyHeader, LegacyFooter } from "@/components/site-chrome";
import { DemoLab } from "@/components/demo-lab";

export function DemoContent() {
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <LegacyHeader />
      <main className="subpage-main" id="main">
        <section className="subpage-hero demo-lab-hero">
          <div className="container subpage-hero-copy">
            <p className="subpage-kicker">
              {"Demo"}
            </p>
            <T as="h1" pl="Wpisz jedną myśl. Zobacz, co zmienia." en="Capture one thought. See what it changes." />
            <T as="p" pl="To działające lokalnie demo finansowej Skrzynki Zostaje. Nie zakłada konta, nie wysyła wpisów na serwer i nie wymaga formularza księgowego." en="This is a local demo of the Zostaje financial Inbox. It creates no account, sends no entries to a server and requires no accounting form." className="subpage-lead" />
          </div>
        </section>
        <DemoLab />
      </main>
      <LegacyFooter />
    </>
  );
}
