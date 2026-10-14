import { DemoContent } from "@/components/pages/demo";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("demo");

export default function Page() {
  return <>
    <JsonLd page="demo" />
    <SiteProvider copy={pageCopy.demo} minimal={false}>
      <DemoContent />
    </SiteProvider>
  </>;
}
