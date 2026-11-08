"use client";

import { useEffect, useRef, useState } from "react";
import LaserFlow from "./effects/laser-flow";
import { GlareCard } from "./effects/glare-card";
import { useTheme } from "./theme-provider";

export function DownloadEmblem() {
  const surface = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return (
    <div className="download-emblem-stage">
      <div className="download-emblem-glow" aria-hidden="true" />
      <div ref={surface} className="download-emblem">
        <GlareCard disabled={reducedMotion}>
          <img className="wordmark-dark" src="/brand/icon-dark.svg" width={248} height={248} alt="Zostaje" />
          <img className="wordmark-light" src="/brand/icon-light.svg" width={248} height={248} alt="Zostaje" />
        </GlareCard>
      </div>
      {!reducedMotion && <LaserFlow surfaceRef={surface} intro beamPosition={0.5} color="#155EEF" intensity={1.45} flare={1.15} spread={1.25} spill={0.8} fog={0.12} dust={0.65} streaks={1.35} dots={0.35} pulse={0.8} speed={0.85} dpr={1} theme={resolvedTheme ?? "dark"} aria-hidden="true" />}
    </div>
  );
}
