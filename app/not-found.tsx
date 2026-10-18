import { NotFoundContent } from "@/components/pages/not-found";
import { SiteProvider } from "@/components/site-provider";

const copy = {
  title: { pl: "404 — nie znaleziono strony · Zostaje", en: "404 — page not found · Zostaje" },
  description: { pl: "Nie znaleziono strony. Wróć do Zostaje lub sprawdź dostępność aplikacji.", en: "Page not found. Return to Zostaje or check app availability." },
};

export default function NotFound() {
  return <SiteProvider copy={copy}><NotFoundContent /></SiteProvider>;
}
