import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import "./globals.css";
import "./demo.css";
import "./site-refresh.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zostaje.com"),
  applicationName: "Zostaje",
  authors: [{ name: "Zostaje" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};
export const viewport: Viewport = { themeColor: "#fafaf9", colorScheme: "light" };

export default async function RootLayout({ children }: { children: ReactNode }) {
  // Reading the request opts pages into SSR so the CSP nonce is unique per response.
  await headers();
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
