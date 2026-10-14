import { ProjektContent } from "@/components/pages/projekt";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("projekt");

export default function Page() {
  return <>
    <JsonLd page="projekt" />
    <SiteProvider copy={pageCopy.projekt} minimal={true}>
      <ProjektContent />
    </SiteProvider>
  </>;
}
