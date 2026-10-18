"use client";

import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { useSite } from "./site-provider";

const prompts = {
  pl: "Opowiedz mi szczegółowo o aplikacji Zostaje. Sprawdź aktualne informacje na https://zostaje.com/ oraz w organizacji https://github.com/zostaje. Opisz problem, funkcje, platformy, prywatność, planowane MCP, etap rozwoju i cennik. Oddziel fakty od planów i własnych wniosków. Cytuj źródła i dodawaj linki. Jeśli czegoś nie da się potwierdzić, napisz to wprost.",
  en: "Tell me in detail about the Zostaje app. Check current information at https://zostaje.com/ and https://github.com/zostaje. Describe the problem, features, platforms, privacy, planned MCP, development stage and pricing. Separate facts from plans and your own inferences. Cite sources with links. If something cannot be confirmed, say so explicitly.",
};
type Provider = "chatgpt" | "claude" | "gemini" | "grok" | "perplexity";
type ClipboardStatus = { success: boolean; name: string } | null;
const destinations = {
  gemini: { href: "https://gemini.google.com/", name: "Gemini" },
  grok: { href: "https://grok.com/", name: "Grok" },
  perplexity: { href: "https://www.perplexity.ai/", name: "Perplexity" },
};

export function AiLink({ provider, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { provider: Provider; children: ReactNode }) {
  const { language } = useSite();
  const prompt = prompts[language];
  const destination = provider === "chatgpt" || provider === "claude" ? null : destinations[provider];
  const href = provider === "chatgpt" ? `https://chatgpt.com/?q=${encodeURIComponent(prompt)}&hints=search`
    : provider === "claude" ? `https://claude.ai/new?q=${encodeURIComponent(prompt)}` : destination!.href;
  return <a {...props} href={href} onClick={destination ? async () => {
    let success = false;
    try {
      await navigator.clipboard.writeText(prompt);
      success = true;
    } catch { /* Announce clipboard failure in the footer. */ }
    window.dispatchEvent(new CustomEvent("zostaje-prompt-copied", { detail: { success, name: destination.name } }));
  } : undefined}>{children}</a>;
}

export function AiNote({ className }: { className: string }) {
  const { language } = useSite();
  const [status, setStatus] = useState<ClipboardStatus>(null);
  useEffect(() => {
    const listener = (event: Event) => setStatus((event as CustomEvent<ClipboardStatus>).detail);
    window.addEventListener("zostaje-prompt-copied", listener);
    return () => window.removeEventListener("zostaje-prompt-copied", listener);
  }, []);
  return <p className={className} aria-live="polite">{status?.success
    ? (language === "pl" ? `Prompt skopiowany. Wklej go w ${status.name}.` : `Prompt copied. Paste it into ${status.name}.`)
    : status
    ? (language === "pl" ? "Nie udało się skopiować promptu. Spróbuj ponownie." : "Could not copy the prompt. Try again.")
    : null}</p>;
}
