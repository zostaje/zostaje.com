import { DownloadContent } from "@/components/pages/download";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("download");

export default function Page() {
  return <>
    <JsonLd page="download" />
    <SiteProvider copy={pageCopy.download} minimal={false}>
      <DownloadContent />
    </SiteProvider>
  </>;
}
