"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./theme-provider";

const LaserFlow = dynamic(() => import("./effects/laser-flow"), { ssr: false });

export function DownloadEmblem() {
  const surface = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const element = stage.current;
    const hero = element?.closest<HTMLElement>(".download-hero");
    if (!element || !hero || reducedMotion) return;
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = element.getBoundingClientRect();
      const x = Math.max(-240, Math.min(240, (event.clientX - bounds.left - bounds.width / 2) * 0.55));
      const y = Math.max(0, Math.min(64, (event.clientY - bounds.bottom + 120) * 0.2));
      element.style.setProperty("--glow-x", `${x}px`);
      element.style.setProperty("--glow-y", `${y}px`);
      element.dataset.pointer = "active";
    };
    const reset = () => {
      element.style.removeProperty("--glow-x");
      element.style.removeProperty("--glow-y");
      delete element.dataset.pointer;
    };
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      reset();
    };
  }, [reducedMotion]);
  return (
    <div ref={stage} className="download-emblem-stage">
      <div className="download-emblem-glow" aria-hidden="true" />
      <div ref={surface} className="download-emblem">
        <img className="wordmark-dark" src="/brand/icon-dark.svg" width={248} height={248} alt="Zostaje" />
        <img className="wordmark-light" src="/brand/icon-light.svg" width={248} height={248} alt="Zostaje" />
      </div>
      {!reducedMotion && <LaserFlow surfaceRef={surface} beamPosition={0.5} color="#155EEF" intensity={1.35} flare={1.1} spread={1.7} spill={0.8} fog={0.14} dust={1.1} streaks={1.8} pulse={1} speed={1.1} dpr={1.25} theme={resolvedTheme ?? "dark"} aria-hidden="true" />}
    </div>
  );
}
