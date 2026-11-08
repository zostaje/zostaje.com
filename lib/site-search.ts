export const searchablePages = [
  { href: "/founders-edition/", pl: "Founders Edition", en: "Founders Edition", plText: "Współpraca i finanse dla freelancerów, startupów i JDG", enText: "Collaboration and finances for freelancers, startups and sole traders", keywords: "biznes business firma współpraca collaboration indywidualna wycena" },
  { href: "/", pl: "Strona główna", en: "Home", plText: "Jak działa Zostaje, plan pieniędzy i cele oszczędnościowe", enText: "How Zostaje works, money planning and savings goals", keywords: "budżet budget finanse finance" },
  { href: "/download/", pl: "Pobierz", en: "Download", plText: "Dostępność aplikacji na iOS, macOS, Windows, Linux i Android", enText: "App availability on iOS, macOS, Windows, Linux and Android", keywords: "instalacja install platformy platforms" },
  { href: "/pricing/", pl: "Cennik", en: "Pricing", plText: "Darmowa aplikacja, Premium z AI i Founders Edition", enText: "Free app, Premium with AI and Founders Edition", keywords: "cena price koszt cost plan miesięczny monthly roczny yearly rabat discount abonament subscription" },
  { href: "/developers/", pl: "Dokumentacja", en: "Documentation", plText: "Informacje dla programistów, integracje, MCP i testy", enText: "Developer information, integrations, MCP and testing", keywords: "api developers technologia technology" },
  { href: "/help/", pl: "Pomoc", en: "Help", plText: "Najczęstsze pytania o aplikację, funkcje i bezpieczeństwo", enText: "Frequently asked questions about the app, features and security", keywords: "faq wsparcie support" },
  { href: "/releases/", pl: "Historia wersji", en: "Release history", plText: "Wersje aplikacji, daty publikacji i wprowadzone zmiany", enText: "App versions, publication dates and changes", keywords: "aktualizacja update changelog" },
  { href: "/privacy/", pl: "Polityka prywatności", en: "Privacy policy", plText: "Dane osobowe, newsletter i kontakt z administratorem", enText: "Personal data, newsletter and administrator contact", keywords: "rodo gdpr email e-mail" },
  { href: "/demo/", pl: "Demo", en: "Demo", plText: "Wypróbuj finansowy notatnik Zostaje", enText: "Try the Zostaje financial notebook", keywords: "test próbuj try" },
  { href: "/projekt/", pl: "O projekcie", en: "About the project", plText: "Cele, hipotezy i kierunki rozwoju aplikacji", enText: "Goals, hypotheses and future app development", keywords: "licencjat thesis badania research" },
];

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l").replace(/Ł/g, "L").toLowerCase();

export function searchSite(query: string, language: "pl" | "en") {
  const words = normalize(query).trim().split(/\s+/).filter(Boolean);
  return searchablePages.filter(page => {
    const text = normalize(`${page.pl} ${page.en} ${page.plText} ${page.enText} ${page.keywords}`);
    return words.every(word => text.includes(word));
  }).map(page => ({ href: page.href, title: page[language], description: language === "pl" ? page.plText : page.enText }));
}
