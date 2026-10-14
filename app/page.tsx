import { HomeContent } from "@/components/pages/home";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("home");

export default function Page() {
  return <>
    <JsonLd page="home" />
    <SiteProvider copy={pageCopy.home} minimal={true}>
      <HomeContent />
    </SiteProvider>
  </>;
}
