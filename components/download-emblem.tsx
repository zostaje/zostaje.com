"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./theme-provider";

const LaserFlow = dynamic(() => import("./effects/laser-flow"), { ssr: false });

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
        <img className="wordmark-dark" src="/brand/icon-dark.svg" width={240} height={240} alt="Zostaje" />
        <img className="wordmark-light" src="/brand/icon-light.svg" width={240} height={240} alt="Zostaje" />
      </div>
      {!reducedMotion && <LaserFlow surfaceRef={surface} beamPosition={0.5} color="#155EEF" intensity={1.5} flare={1.1} spread={0.65} spill={0.6} fog={0.12} dust={0.7} speed={0.8} dpr={1.5} theme={resolvedTheme ?? "dark"} aria-hidden="true" />}
    </div>
  );
}
