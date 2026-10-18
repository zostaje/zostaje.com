import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import "./globals.css";
import "./demo.css";
import "./site-refresh.css";
import "./themes.css";
import "./newsletter.css";
import { ThemeProvider } from "@/components/theme-provider";
import { THEME_BOOT_SCRIPT } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://zostaje.com"),
  applicationName: "Zostaje",
  authors: [{ name: "Zostaje" }],
};
export const viewport: Viewport = { colorScheme: "light dark" };

export default async function RootLayout({ children }: { children: ReactNode }) {
  // Reading the request opts pages into SSR so the CSP nonce is unique per response.
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
