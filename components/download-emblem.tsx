"use client";

import { useEffect, useRef, useState } from "react";
import LaserFlow from "./effects/laser-flow";
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
        <img className="wordmark-dark" src="/brand/icon-dark.svg" width={248} height={248} alt="Zostaje" />
        <img className="wordmark-light" src="/brand/icon-light.svg" width={248} height={248} alt="Zostaje" />
      </div>
      {!reducedMotion && <LaserFlow surfaceRef={surface} intro={false} beamPosition={0.5} color="#155EEF" intensity={1.35} flare={1.1} spread={1.25} spill={0.8} fog={0.1} dust={1.1} streaks={1.8} pulse={1} speed={1.1} dpr={1.25} theme={resolvedTheme ?? "dark"} aria-hidden="true" />}
    </div>
  );
}
