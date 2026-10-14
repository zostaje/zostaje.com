import { DevelopersContent } from "@/components/pages/developers";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("developers");

export default function Page() {
  return <>
    <JsonLd page="developers" />
    <SiteProvider copy={pageCopy.developers} minimal={false}>
      <DevelopersContent />
    </SiteProvider>
  </>;
}
