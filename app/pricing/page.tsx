import { PricingContent } from "@/components/pages/pricing";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("pricing");

export default function Page() {
  return <>
    <JsonLd page="pricing" />
    <SiteProvider copy={pageCopy.pricing} minimal={false}>
      <PricingContent />
    </SiteProvider>
  </>;
}
