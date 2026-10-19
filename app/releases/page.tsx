import { ReleasesContent } from "@/components/pages/releases";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("releases");

export default function Page() {
  return <><JsonLd page="releases" /><SiteProvider copy={pageCopy.releases} minimal={false}><ReleasesContent /></SiteProvider></>;
}
