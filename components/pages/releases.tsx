"use client";

import { T, useSite } from "@/components/site-provider";
import { SiteHeader, LegacyFooter } from "@/components/site-chrome";
import { releases } from "@/lib/releases";

export function ReleasesContent() {
  const { language } = useSite();
  const formatDate = (date: string) => new Intl.DateTimeFormat(language === "pl" ? "pl-PL" : "en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(date));
  return <>
    <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
    <SiteHeader />
    <main className="subpage-main releases-page" id="main">
      <header className="container releases-heading">
        <T as="p" className="subpage-kicker" pl="Rozwój Zostaje" en="Zostaje development" />
        <T as="h1" pl="Historia wersji" en="Release history" />
        <T as="p" pl="Wersje aplikacji i krótki opis zmian." en="App versions and a brief description of changes." />
        <T as="a" className="text-link" href="/download/" pl="← Wróć do pobierania" en="← Back to downloads" />
      </header>
      <div className="container release-table-wrap">
        <table className="release-table history-table">
          <caption className="visually-hidden">{language === "pl" ? "Wersje, daty publikacji i wprowadzone zmiany" : "Versions, publication dates and changes"}</caption>
          <thead><tr><th scope="col">{language === "pl" ? "Wersja" : "Version"}</th><th scope="col">{language === "pl" ? "Data" : "Date"}</th><th scope="col">{language === "pl" ? "Co nowego" : "What’s new"}</th></tr></thead>
          <tbody>{releases.map(release => <tr key={release.version}>
            <th scope="row"><span>{release.version}</span><time className="release-mobile-date" dateTime={release.date}>{formatDate(release.date)}</time></th>
            <td><time dateTime={release.date}>{formatDate(release.date)}</time></td>
            <td><ul>{release[language].map(change => <li key={change}>{change}</li>)}</ul></td>
          </tr>)}</tbody>
        </table>
      </div>
    </main>
    <LegacyFooter />
  </>;
}
