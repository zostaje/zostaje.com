"use client";

import { T } from "@/components/site-provider";
import { SiteHeader, LegacyFooter } from "@/components/site-chrome";

export function DevelopersContent() {
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <SiteHeader />
      <main className="subpage-main" id="main">
        <section className="subpage-hero">
          <div className="container subpage-hero-copy">
            <T as="p" className="subpage-kicker" pl="Dokumentacja" en="Documentation" />
            <T as="h1" pl="Buduj i testuj Zostaje razem z nami." en="Build and test Zostaje with us." />
            <T as="p" pl="To centrum technicznego kierunku projektu dla programistów, integratorów i testerów. Dokumentacja będzie rosnąć razem z publicznymi interfejsami Zostaje." en="This is the technical project hub for developers, integrators and testers. Documentation will grow as Zostaje interfaces become public." className="subpage-lead" />
            <div className="subpage-actions">
              <T as="a" pl="Zobacz GitHub" en="View GitHub" className="button button-primary" href="https://github.com/zostaje" />
              <T as="a" pl="Zgłoś się do testów" en="Join testing" className="text-link" href="mailto:demo@zostaje.app" />
            </div>
          </div>
        </section>
        <section className="subpage-content">
          <div className="container">
            <T as="p" pl="Aktualne MVP to jedna aplikacja iOS działająca offline. Kod backendu i synchronizacji istnieje w repozytorium, ale nie jest podłączony do obecnego MVP. Integracje i MCP to osobny kierunek rozwoju." en="The current MVP is one offline iOS app. Backend and sync code exists in the repository but is not connected to this MVP. Integrations and MCP are a separate development direction." className="developer-status" />
            <div className="help-section-heading">
              <T as="h2" pl="Dla programistów" en="For developers" />
              <T as="p" pl="Interfejsy mają pozwalać rozwijać integracje bez łączenia ich bezpośrednio z interfejsem aplikacji." en="Interfaces are intended to support integrations without coupling them directly to the app UI." />
            </div>
            <div className="help-grid">
              <article className="help-card">
                <T as="h2" pl="Swift i obliczenia na urządzeniu" en="Swift and on-device calculations" />
                <T as="p" pl="Interfejs powstaje w SwiftUI. Obliczenia finansowe działają lokalnie, a wspólne przypadki wzorcowe kontrolują zgodność reguł w Swift i TypeScript." en="The interface uses SwiftUI. Financial calculations run locally, with shared fixtures checking rule consistency in Swift and TypeScript." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Publiczne MCP" en="Public MCP" />
                <T as="p" pl="Planowany serwer MCP ma dawać kompatybilnym asystentom dostęp wyłącznie do zakresu danych zatwierdzonego przez użytkownika." en="The planned MCP server is intended to give compatible assistants access only to data scopes approved by the user." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Folder danych użytkownika" en="User-selected data folder" />
                <T as="p" pl="Dane są zapisywane w folderze wskazanym przy uruchomieniu: manifest, przestrzenie, kategorie i wpisy w plikach JSON oraz NDJSON. MVP nie wysyła tych danych na serwer." en="Data is saved in a folder selected at startup: manifest, spaces, categories and entries in JSON and NDJSON files. The MVP does not send this data to a server." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Repozytoria publiczne" en="Public repositories" />
                <T as="p" pl="Kod i dokumentacja przeznaczone do publicznego użycia będą rozwijane w organizacji Zostaje na GitHubie." en="Code and documentation intended for public use will be developed in the Zostaje GitHub organization." />
              </article>
            </div>
            <div className="help-section-heading">
              <T as="h2" pl="Dla testerów" en="For testers" />
              <T as="p" pl="Testy mają obejmować nie tylko błędy, lecz także zrozumiałość finansowych komunikatów i poczucie kontroli nad danymi." en="Testing is intended to cover not only bugs but also clarity of financial messages and control over data." />
            </div>
            <div className="help-grid">
              <article className="help-card">
                <T as="h2" pl="Wczesne wersje iOS" en="Early iOS builds" />
                <T as="p" pl="Pierwsi testerzy sprawdzą podstawowe przepływy, codzienny podgląd i sposób prezentowania bezpiecznej kwoty." en="Early testers will evaluate core flows, the daily view and how the safe-to-spend amount is presented." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Zgłoszenia błędów" en="Bug reports" />
                <T as="p" pl="Proces zgłoszeń i wymagany zakres informacji opublikujemy przed uruchomieniem testów. Na razie możesz zgłosić zainteresowanie e-mailem." en="The reporting process and required details will be published before testing starts. For now, register interest by email." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Testy prywatności" en="Privacy testing" />
                <T as="p" pl="Sprawdzamy działanie bez sieci, lokalny odczyt paragonu, dostęp do wybranego folderu i ochronę danych przy błędach odczytu." en="We check offline operation, on-device receipt reading, access to the selected folder and data protection when a read fails." />
              </article>
              <article className="help-card">
                <T as="h2" pl="Informacja zwrotna" en="Product feedback" />
                <T as="p" pl="Testerzy będą mogli oceniać język, kolejność informacji i to, czy aplikacja rzeczywiście skraca czas potrzebny na finanse." en="Testers will be able to assess language, information order and whether the app actually reduces time spent on finances." />
              </article>
            </div>
          </div>
        </section>
      </main>
      <LegacyFooter />
    </>
  );
}
