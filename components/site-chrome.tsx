"use client";

import { usePathname } from "next/navigation";
import { T, LanguageLabel, useSite } from "@/components/site-provider";
import { ThemeSelect } from "./theme-select";
import { AiLink, AiNote } from "@/components/ai-links";

function BrandWordmark() {
  return <>
    <img className="brand-wordmark wordmark-dark" src="/brand/wordmark-dark.svg?v=5" width={2150} height={606} alt="Zostaje" />
    <img className="brand-wordmark wordmark-light" src="/brand/wordmark-light.svg?v=5" width={2150} height={606} alt="Zostaje" />
  </>;
}

function FooterSocialLinks() {
  return (
    <div className="footer-find-us">
      <T as="p" pl="Znajdź nas" en="Find us" className="footer-follow" />
      <nav className="footer-socials" aria-label="Social media">
        <a href="https://github.com/zostaje" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://x.com/ZostajeApp" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
      </nav>
    </div>
  );
}

function FooterAiLinks() {
  const { language } = useSite();
  const providers = [
    { id: "chatgpt", name: "ChatGPT", file: "chatgpt.webp" },
    { id: "grok", name: "Grok", file: "grok.png" },
    { id: "perplexity", name: "Perplexity", file: "perplexity.png" },
    { id: "gemini", name: "Gemini", file: "gemini.png" },
    { id: "claude", name: "Claude", file: "claude.svg" },
  ] as const;
  return (
    <div className="footer-ai">
      <T as="p" pl="Zapytaj AI o Zostaje" en="Ask AI about Zostaje" className="footer-ai-heading" />
      <div className="footer-ai-links">
        {providers.map(({ id, name, file }) => (
          <AiLink key={id} provider={id} target="_blank" rel="noopener noreferrer"
            aria-label={`${language === "pl" ? "Zapytaj o Zostaje w" : "Ask about Zostaje in"} ${name}`}
            title={name}>
            <img className="ai-provider-logo" src={`/ai/${file}`} width={28} height={28} alt="" loading="lazy" />
          </AiLink>
        ))}
      </div>
      <AiNote className="footer-ai-note" />
    </div>
  );
}

const primaryPages = [
  { href: "/download/", label: "Download" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/knowledge/", label: "Knowledge" },
];

function PrimaryNavLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  const { closeMenu } = useSite();
  return primaryPages.map(({ href, label }) => (
    <a key={href} href={href} aria-current={pathname.replace(/\/$/, "") === href.replace(/\/$/, "") ? "page" : undefined} onClick={mobile ? () => closeMenu(false) : undefined}>
      {label}
    </a>
  ));
}

export function MinimalHeader({ home = false }: { home?: boolean }) {
  const { language, setLanguage, menuOpen, menuMounted, openMenu, closeMenu, scrolled, mobileLanguageOpen, toggleMobileLanguage, opener, closer } = useSite();
  return (
    <>
      <header className={"site-header" + (!home ? " is-subpage" : "") + (scrolled ? " is-scrolled" : "")}>
        <div className="container nav-wrap">
          <a className="brand" href={home ? "#top" : "/#top"} aria-label="Zostaje">
            <BrandWordmark />
          </a>
          <nav className="main-nav" aria-label="Nawigacja">
            <PrimaryNavLinks />
          </nav>
          <div className="nav-right">
            <details className="language-menu">
              <summary aria-label="Język / Language">
                <span className="current-language">
                  <LanguageLabel />
                </span>
              </summary>
              <div className="language-dropdown">
                <button onClick={() => setLanguage("pl")} type="button" data-language="pl">
                  {"Polski"}
                </button>
                <button onClick={() => setLanguage("en")} type="button" data-language="en">
                  {"English"}
                </button>
              </div>
            </details>
            <T as="button" pl="Konto" en="Account" className="account-link" type="button" disabled title={language === "pl" ? "Konto — w przygotowaniu" : "Account — coming soon"} />
            <button ref={opener} onClick={openMenu} aria-expanded={menuOpen} aria-label={language === "pl" ? "Otwórz menu" : "Open menu"} className="menu-toggle" type="button" aria-controls="mobile-menu">
              <span>

              </span>
              <span>

              </span>
              <span>

              </span>
            </button>
          </div>
        </div>
      </header>
      <div className={"mobile-menu" + (!home ? " is-subpage" : "") + (menuOpen ? " is-open" : "")} hidden={!menuMounted} id="mobile-menu">
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <a onClick={() => closeMenu(false)} className="brand" href={home ? "#top" : "/#top"} aria-label="Zostaje">
              <BrandWordmark />
            </a>
            <div className="mobile-menu-tools">
              <button onClick={toggleMobileLanguage} className="mobile-language-toggle" type="button" aria-label={language === "pl" ? "Zmień język" : "Change language"} aria-expanded={mobileLanguageOpen} aria-controls="mobile-language-panel">
                <LanguageLabel />
              </button>
              <button ref={closer} onClick={() => closeMenu()} aria-label={language === "pl" ? "Zamknij menu" : "Close menu"} className="menu-close" type="button">
                <span>

                </span>
                <span>

                </span>
              </button>
            </div>
          </div>
          <nav className="mobile-primary-nav" aria-label="Nawigacja mobilna">
            <PrimaryNavLinks mobile />
          </nav>
          <div hidden={!mobileLanguageOpen} className="mobile-language-panel" id="mobile-language-panel">
            <p>
              {"PL / EN"}
            </p>
            <button onClick={() => setLanguage("pl")} type="button" data-language="pl">
              {"Polski"}
            </button>
            <button onClick={() => setLanguage("en")} type="button" data-language="en">
              {"English"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function LegacyHeader() {
  const { language, setLanguage, menuOpen, menuMounted, openMenu, closeMenu, scrolled, mobileLanguageOpen, toggleMobileLanguage, opener, closer } = useSite();
  return (
    <>
      <header className={"site-header is-subpage" + (scrolled ? " is-scrolled" : "")}>
        <div className="container nav-wrap">
          <a className="brand" href="/" aria-label="Zostaje — strona główna">
            <BrandWordmark />
          </a>
          <nav className="main-nav" aria-label="Główna nawigacja">
            <PrimaryNavLinks />
          </nav>
          <div className="nav-right">
            <details className="language-menu">
              <summary aria-label="Zmień język">
                <svg className="language-globe" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10">

                  </circle>
                  <path d="M2 12h20">

                  </path>
                  <path d="M12 2a15.3 15.3 0 0 1 0 20">

                  </path>
                  <path d="M12 2a15.3 15.3 0 0 0 0 20">

                  </path>
                </svg>
                <svg className="language-chevron" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m6 9 6 6 6-6">

                  </path>
                </svg>
              </summary>
              <div className="language-dropdown">
                <button onClick={() => setLanguage("pl")} type="button" data-language="pl">
                  {"Polski"}
                </button>
                <button onClick={() => setLanguage("en")} type="button" data-language="en">
                  {"English"}
                </button>
              </div>
            </details>
            <T as="button" pl="Konto" en="Account" className="account-link" type="button" disabled title={language === "pl" ? "Konto — w przygotowaniu" : "Account — coming soon"} />
            <button ref={opener} onClick={openMenu} aria-expanded={menuOpen} aria-label={language === "pl" ? "Otwórz menu" : "Open menu"} className="menu-toggle" type="button" aria-controls="mobile-menu">
              <span>

              </span>
              <span>

              </span>
              <span>

              </span>
            </button>
          </div>
        </div>
      </header>
      <div className={"mobile-menu is-subpage" + (menuOpen ? " is-open" : "")} hidden={!menuMounted} id="mobile-menu">
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <a onClick={() => closeMenu(false)} className="brand" href="/">
              <BrandWordmark />
            </a>
            <div className="mobile-menu-tools">
              <button onClick={toggleMobileLanguage} className="mobile-language-toggle" type="button" aria-label={language === "pl" ? "Zmień język" : "Change language"} aria-expanded={mobileLanguageOpen} aria-controls="mobile-language-panel">
                <svg className="language-globe" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10">

                  </circle>
                  <path d="M2 12h20">

                  </path>
                  <path d="M12 2a15.3 15.3 0 0 1 0 20">

                  </path>
                  <path d="M12 2a15.3 15.3 0 0 0 0 20">

                  </path>
                </svg>
              </button>
              <button ref={closer} onClick={() => closeMenu()} aria-label={language === "pl" ? "Zamknij menu" : "Close menu"} className="menu-close" type="button">
                <span>

                </span>
                <span>

                </span>
              </button>
            </div>
          </div>
          <nav className="mobile-primary-nav" aria-label="Mobilna nawigacja">
            <PrimaryNavLinks mobile />
          </nav>
          <div className="mobile-secondary-nav">
            <T as="p" pl="Dowiedz się więcej" en="Learn more" />
            <div>
              <T as="a" pl="Pomoc" en="Help" onClick={() => closeMenu(false)} href="/help/" />
              <a onClick={() => closeMenu(false)} href="https://github.com/zostaje">
                {"GitHub"}
              </a>
              <T as="a" pl="Bezpieczeństwo" en="Security" onClick={() => closeMenu(false)} href="/#bezpieczenstwo" />
              <T as="a" pl="Kontakt" en="Contact" onClick={() => closeMenu(false)} href="mailto:demo@zostaje.app" />
            </div>
          </div>
          <div hidden={!mobileLanguageOpen} className="mobile-language-panel" id="mobile-language-panel">
            <p>
              {"Język strony"}
            </p>
            <button onClick={() => setLanguage("pl")} type="button" data-language="pl">
              {"Polski"}
            </button>
            <button onClick={() => setLanguage("en")} type="button" data-language="en">
              {"English"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function MinimalFooter({ home = false }: { home?: boolean }) {
  const { language, setLanguage, menuOpen, menuMounted, openMenu, closeMenu, scrolled, mobileLanguageOpen, toggleMobileLanguage, opener, closer } = useSite();
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-about">
            <a className="brand" href={home ? "#top" : "/#top"} aria-label="Zostaje">
              <BrandWordmark />
            </a>
            <T as="p" pl="Zrozum pieniądze. Wybierz po swojemu." en="Understand your money. Choose for yourself." />
            <FooterSocialLinks />
            <FooterAiLinks />
            <small>
              {"© 2026 Zostaje"}
            </small>
          </div>
          <div className="footer-links">
            <div>
              <nav aria-label="Produkt">
                <T as="strong" pl="Zostaje" en="Zostaje" />
                <T as="a" pl="Jak działa" en="How it works" href={home ? "#jak-dziala" : "/#jak-dziala"} />
                <T as="a" pl="Prywatność" en="Privacy" href={home ? "#bezpieczenstwo" : "/#bezpieczenstwo"} />
                <T as="a" pl="Testy aplikacji" en="App testing" href={home ? "#demo" : "/#demo"} />
                <T as="a" pl="Kontakt" en="Contact" href="mailto:demo@zostaje.app" />
              </nav>
            </div>
            <div>
              <nav aria-label="Projekt">
                <T as="strong" pl="Projekt" en="Project" />
                <T as="a" pl="Cele i hipotezy" en="Goals and hypotheses" href="/projekt/" />
                <T as="span" pl="iOS · prototyp" en="iOS · prototype" />
                <T as="span" pl="Integracje bankowe · przyszły rozwój" en="Bank connections · future development" />
              </nav>
            </div>
          </div>
        </div>
        <div className="container footer-preferences"><ThemeSelect /></div>
      </footer>
    </>
  );
}

export function LegacyFooter() {
  const { language, setLanguage, menuOpen, menuMounted, openMenu, closeMenu, scrolled, mobileLanguageOpen, toggleMobileLanguage, opener, closer } = useSite();
  return (
    <>
      <footer className="site-footer subpage-footer">
        <div className="container footer-grid">
          <div className="footer-about">
            <a className="brand footer-brand" href="/">
              <BrandWordmark />
            </a>
            <FooterSocialLinks />
            <FooterAiLinks />
            <details className="footer-language">
              <summary>
                <svg className="language-globe" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10">

                  </circle>
                  <path d="M2 12h20">

                  </path>
                  <path d="M12 2a15.3 15.3 0 0 1 0 20">

                  </path>
                  <path d="M12 2a15.3 15.3 0 0 0 0 20">

                  </path>
                </svg>
                <span className="footer-language-name">
                  <LanguageLabel fullName />
                </span>
                <svg className="language-chevron" viewBox="0 0 24 24">
                  <path d="m6 9 6 6 6-6">

                  </path>
                </svg>
              </summary>
              <div>
                <button onClick={() => setLanguage("pl")} type="button" data-language="pl">
                  {"Polski"}
                </button>
                <button onClick={() => setLanguage("en")} type="button" data-language="en">
                  {"English"}
                </button>
              </div>
            </details>
            <small>
              {"© 2026 Zostaje"}
            </small>
          </div>
          <div className="footer-links">
            <div>
              <nav aria-label="Produkt">
                <T as="strong" pl="Produkt" en="Product" />
                <T as="a" pl="Jak działa" en="How it works" href="/#jak-dziala" />
                <a href="/demo/">
                  {"Demo"}
                </a>
                <T as="a" pl="Cennik" en="Pricing" href="/pricing/" />
                <T as="a" pl="Pobierz" en="Download" href="/download/" />
              </nav>
              <nav aria-label="Platformy">
                <T as="strong" pl="Platformy" en="Platforms" />
                <T as="span" pl="iOS · w budowie" en="iOS · in development" />
                <T as="span" pl="macOS · planowane" en="macOS · planned" />
                <T as="span" pl="Windows · planowane" en="Windows · planned" />
              </nav>
            </div>
            <div>
              <nav aria-label="Projekt">
                <T as="strong" pl="Projekt" en="Project" />
                <a href="https://github.com/zostaje">
                  {"GitHub"}
                </a>
                <a href="/developers/">
                  {"Developers"}
                </a>
                <T as="a" pl="Demo" en="Demo" href="/demo/" />
                <T as="a" pl="Bezpieczeństwo" en="Security" href="/#bezpieczenstwo" />
              </nav>
              <nav aria-label="Technologia">
                <T as="strong" pl="Technologia" en="Technology" />
                <span>
                  {"Swift"}
                </span>
                <T as="span" pl="Opcjonalna chmura" en="Optional cloud" />
                <T as="span" pl="Publiczne MCP · planowane" en="Public MCP · planned" />
              </nav>
            </div>
            <div>
              <nav aria-label="Kontakt">
                <T as="strong" pl="Kontakt" en="Contact" />
                <a href="mailto:demo@zostaje.app">
                  {"demo@zostaje.app"}
                </a>
                <T as="span" pl="Polska" en="Poland" />
              </nav>
              <nav aria-label="Informacje">
                <T as="strong" pl="Informacje" en="Information" />
                <T as="a" pl="Pomoc" en="Help" href="/help/" />
                <T as="a" pl="Zamknięte demo" en="Private demo" href="/#demo" />
                <T as="a" pl="Prywatność danych" en="Data privacy" href="/#bezpieczenstwo" />
              </nav>
            </div>
          </div>
        </div>
        <div className="container footer-preferences"><ThemeSelect /></div>
      </footer>
    </>
  );
}
