"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import LaserFlow from "./effects/laser-flow";
import { GlareCard } from "./effects/glare-card";
import { useTheme } from "./theme-provider";

export function DownloadEmblem() {
  const surface = useRef<HTMLDivElement>(null);
  const burst = useRef<HTMLDivElement>(null);
  const animations = useRef<Animation[]>([]);
  const impacted = useRef(false);
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
    if (reducedMotion) {
      animations.current.forEach(animation => animation.cancel());
      animations.current = [];
    }
    return () => {
      animations.current.forEach(animation => animation.cancel());
      animations.current = [];
    };
  }, [reducedMotion]);

  const reactToImpact = useCallback(() => {
    const icon = surface.current;
    const particles = burst.current;
    if (impacted.current || !icon || !particles || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    impacted.current = true;
    const size = icon.getBoundingClientRect().width;
    const landing = 430;
    animations.current.push(icon.animate([
      { transform: "translateX(-50%) translateY(0) scale(1)", offset: 0, easing: "cubic-bezier(.16,1,.3,1)" },
      { transform: "translateX(-50%) translateY(-34px) scale(1.025)", offset: .32, easing: "cubic-bezier(.65,0,.95,.45)" },
      { transform: "translateX(-50%) translateY(12px) scale(1.07,.91)", offset: .5, easing: "cubic-bezier(.16,1,.3,1)" },
      { transform: "translateX(-50%) translateY(-6px) scale(.99,1.025)", offset: .72, easing: "ease-out" },
      { transform: "translateX(-50%) translateY(0) scale(1)", offset: 1 },
    ], { duration: 860 }));
    particles.querySelectorAll<HTMLElement>(".download-impact-particle").forEach((particle, index) => {
      const angle = index / 36 * Math.PI * 2;
      const distance = size * (0.82 + (index % 5) * .14);
      const x = Math.cos(angle), y = Math.sin(angle);
      const startX = x * size * .48, startY = y * size * .46 + 12;
      const endX = x * distance, endY = y * distance * .78 + 40;
      animations.current.push(particle.animate([
        { transform: `translate(${startX}px, ${startY}px) scale(.35)`, opacity: 0, offset: 0 },
        { opacity: 1, offset: .08 },
        { transform: `translate(${startX + (endX - startX) * .65}px, ${startY + (endY - startY) * .65}px) scale(.75)`, opacity: .85, offset: .55 },
        { transform: `translate(${endX}px, ${endY}px) scale(.15)`, opacity: 0, offset: 1 },
      ], { duration: 950 + (index % 5) * 100, delay: landing, easing: "cubic-bezier(.12,.65,.22,1)" }));
    });
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
      <div ref={burst} className="download-impact-burst" aria-hidden="true">
        {Array.from({ length: 36 }, (_, index) => <i key={index} className="download-impact-particle" style={{ "--particle-size": `${4 + index % 4}px`, "--particle-color": ["#84adff", "#155eef", "#c4b5fd", "#b9e6fe"][index % 4] } as CSSProperties} />)}
      </div>
      {!reducedMotion && <LaserFlow onImpact={reactToImpact} surfaceRef={surface} intro beamPosition={0.5} color="#155EEF" intensity={1.45} flare={1.15} spread={1.25} spill={0.8} fog={0.12} dust={0.65} streaks={1.35} dots={0.35} pulse={0.8} speed={0.85} dpr={2} theme={resolvedTheme ?? "dark"} aria-hidden="true" />}
    </div>
  );
}
