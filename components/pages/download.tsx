"use client";

import { useEffect, useState } from "react";
import { T, useSite } from "@/components/site-provider";
import { SiteHeader, LegacyFooter } from "@/components/site-chrome";
import { DownloadEmblem } from "@/components/download-emblem";
import { detectPlatform, platforms, releases, type PlatformId } from "@/lib/releases";

export function DownloadContent() {
  const { language } = useSite();
  const [selected, setSelected] = useState<PlatformId | null>(null);
  useEffect(() => { setSelected(detectPlatform(navigator)); }, []);
  const platform = platforms.find(item => item.id === selected);
  const latest = releases[0];
  const date = new Intl.DateTimeFormat(language === "pl" ? "pl-PL" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(latest.date));
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <SiteHeader />
      <main className="subpage-main download-page" id="main">
        <section className="download-hero" aria-labelledby="download-heading">
          <div className="container">
            <T as="h1" id="download-heading" pl="Twoje pieniądze. Twój plan." en="Your money. Your plan." />
            <T as="p" className="download-lead" pl="Zostaje na Twoim urządzeniu." en="Zostaje on your device." />
            <DownloadEmblem />
            <div className="download-action" aria-live="polite">
              {platform?.downloadUrl
                ? <a className="button button-primary download-primary" href={platform.downloadUrl}>{language === "pl" ? "Pobierz dla" : "Download for"} {platform.name}</a>
                : <button className="button button-primary download-primary" type="button" disabled>{language === "pl" ? "Pobierz" : "Download"}{platform ? ` ${language === "pl" ? "dla" : "for"} ${platform.name}` : " Zostaje"}<span className="download-soon">{language === "pl" ? "Wkrótce" : "Coming soon"}</span></button>}
            </div>
            <T as="p" className="download-availability" pl="Publiczne instalatory nie są jeszcze dostępne. Pracujemy nad pierwszymi wydaniami." en="Public installers are not available yet. We’re working on the first builds." />
            <T as="a" className="text-link" href="/#demo" pl="Powiadom mnie o wydaniu →" en="Notify me about a release →" />
            <p className="download-version"><T as="span" pl="Ostatnie wydanie projektu:" en="Latest project release:" /> <strong>{latest.version}</strong> · <time dateTime={latest.date}>{date}</time></p>
            <T as="a" className="download-history-link" href="/releases/" pl="Historia wersji i aktualizacji →" en="Release history and updates →" />
          </div>
        </section>
        <section className="container download-platforms" aria-labelledby="platforms-heading">
          <T as="h2" id="platforms-heading" pl="Wybierz swoją platformę" en="Choose your platform" />
          <T as="p" pl="Wszystkie docelowe platformy w jednym miejscu. Dostępność pojawi się tutaj wraz z publikacją instalatorów." en="All planned platforms in one place. Download availability will appear here when installers are published." />
          <div className="release-table-wrap">
            <table className="release-table platform-table">
              <caption className="visually-hidden">{language === "pl" ? "Platformy i dostępność Zostaje" : "Zostaje platforms and availability"}</caption>
              <thead><tr><th scope="col">{language === "pl" ? "Platforma" : "Platform"}</th><th scope="col">{language === "pl" ? "Dostępność" : "Availability"}</th><th scope="col">{language === "pl" ? "Wybór" : "Selection"}</th></tr></thead>
              <tbody>{platforms.map(item => <tr key={item.id} className={selected === item.id ? "platform-selected" : undefined}>
                <th scope="row">{item.name}</th>
                <td>{item.downloadUrl ? (language === "pl" ? "Dostępne" : "Available") : item.status === "planned" ? (language === "pl" ? "Planowane" : "Planned") : (language === "pl" ? "W przygotowaniu" : "In development")}</td>
                <td>{item.downloadUrl ? <a className="platform-pick" href={item.downloadUrl}>{language === "pl" ? "Pobierz" : "Download"}</a> : <button className="platform-pick" type="button" aria-pressed={selected === item.id} aria-label={`${language === "pl" ? "Wybierz" : "Select"} ${item.name}`} onClick={() => setSelected(item.id)}>{selected === item.id ? (language === "pl" ? "Wybrano" : "Selected") : (language === "pl" ? "Wybierz" : "Select")}</button>}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </section>
      </main>
      <LegacyFooter />
    </>
  );
}
