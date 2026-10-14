import { headers } from "next/headers";
import schemas from "@/lib/structured-data.json";
import type { PageName } from "@/lib/page-copy";

export async function JsonLd({ page }: { page: PageName }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return schemas[page].map((schema, index) => (
    <script key={index} nonce={nonce} type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  ));
}
