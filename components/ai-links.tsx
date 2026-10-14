"use client";

import { useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { useSite } from "./site-provider";

const prompts = {
  pl: "Opowiedz mi szczegółowo o aplikacji Zostaje. Sprawdź aktualne informacje na https://zostaje.com/ oraz w organizacji https://github.com/zostaje. Opisz problem, funkcje, platformy, prywatność, planowane MCP, etap rozwoju i cennik. Oddziel fakty od planów i własnych wniosków. Cytuj źródła i dodawaj linki. Jeśli czegoś nie da się potwierdzić, napisz to wprost.",
  en: "Tell me in detail about the Zostaje app. Check current information at https://zostaje.com/ and https://github.com/zostaje. Describe the problem, features, platforms, privacy, planned MCP, development stage and pricing. Separate facts from plans and your own inferences. Cite sources with links. If something cannot be confirmed, say so explicitly.",
};
export function AiLink({ provider, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { provider: "chatgpt" | "claude" | "gemini"; children: ReactNode }) {
  const { language } = useSite();
  const prompt = prompts[language];
  const href = provider === "chatgpt" ? `https://chatgpt.com/?q=${encodeURIComponent(prompt)}&hints=search`
    : provider === "claude" ? `https://claude.ai/new?q=${encodeURIComponent(prompt)}` : "https://gemini.google.com/";
  return <a {...props} href={href} onClick={provider === "gemini" ? async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      window.dispatchEvent(new CustomEvent("zostaje-prompt-copied", { detail: true }));
    } catch { window.dispatchEvent(new CustomEvent("zostaje-prompt-copied", { detail: false })); }
  } : undefined}>{children}</a>;
}

export function AiNote({ className }: { className: string }) {
  const { language } = useSite();
  const [status, setStatus] = useState<boolean | null>(null);
  // Hook manages the status from the clipboard action without modifying React's DOM.
  useClipboardStatus(setStatus);
  return <p className={className} aria-live="polite">{status === true
    ? (language === "pl" ? "Prompt skopiowany. Wklej go w Gemini." : "Prompt copied. Paste it into Gemini.")
    : status === false
    ? (language === "pl" ? "Nie udało się skopiować promptu. Spróbuj ponownie." : "Could not copy the prompt. Try again.")
    : (language === "pl" ? "Gotowy prompt zawiera opis aplikacji i linki do źródeł." : "The prepared prompt includes an app description and source links.")}</p>;
}

import { useEffect } from "react";
function useClipboardStatus(setStatus: (status: boolean) => void) {
  useEffect(() => {
    const listener = (event: Event) => setStatus((event as CustomEvent<boolean>).detail);
    window.addEventListener("zostaje-prompt-copied", listener);
    return () => window.removeEventListener("zostaje-prompt-copied", listener);
  }, [setStatus]);
}
