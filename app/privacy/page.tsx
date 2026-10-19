import { PrivacyContent } from "@/components/pages/privacy";
import { SiteProvider } from "@/components/site-provider";
import { JsonLd } from "@/components/json-ld";
import { pageCopy } from "@/lib/page-copy";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("privacy");

export default function Page() {
  return <><JsonLd page="privacy" /><SiteProvider copy={pageCopy.privacy} minimal={false}><PrivacyContent /></SiteProvider></>;
}
