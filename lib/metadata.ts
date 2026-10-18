import type { Metadata } from "next";
import { pageCopy, type PageName } from "./page-copy";

export function metadataFor(page: PageName): Metadata {
  const copy = pageCopy[page];
  return {
    title: copy.title.pl,
    description: copy.description.pl,
    alternates: { canonical: copy.path },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website", siteName: "Zostaje", locale: "pl_PL", url: copy.path,
      title: copy.title.pl, description: copy.description.pl,
      images: [{ url: "/og-image-light.png", alt: "Zostaje" }],
    },
    twitter: { card: "summary_large_image", title: copy.title.pl, description: copy.description.pl, images: ["/og-image-light.png"] },
  };
}
