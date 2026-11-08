import { FoundersContent } from "@/components/pages/founders";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("founders");

export default function Page() {
  return <>
    <JsonLd page="founders" />
    <SiteProvider copy={pageCopy.founders} minimal={false}><FoundersContent /></SiteProvider>
  </>;
}
