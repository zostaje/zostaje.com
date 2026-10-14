import { HelpContent } from "@/components/pages/help";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("help");

export default function Page() {
  return <>
    <JsonLd page="help" />
    <SiteProvider copy={pageCopy.help} minimal={false}>
      <HelpContent />
    </SiteProvider>
  </>;
}
