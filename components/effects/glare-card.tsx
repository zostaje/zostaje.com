"use client";

// Adapted from Aceternity UI's Glare Card (Manu Arora).
// https://ui.aceternity.com/registry/glare-card.json
import { useRef, type PointerEvent, type ReactNode } from "react";

export function GlareCard({ children, disabled = false }: { children: ReactNode; disabled?: boolean }) {
  const card = useRef<HTMLDivElement>(null);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (disabled || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100));
    const y = Math.max(0, Math.min(100, (event.clientY - bounds.top) / bounds.height * 100));
    const element = card.current;
    if (!element) return;
    element.style.setProperty("--glare-x", `${x}%`);
    element.style.setProperty("--glare-y", `${y}%`);
    element.style.setProperty("--glare-rotate-x", `${(50 - y) * 0.025}deg`);
    element.style.setProperty("--glare-rotate-y", `${(x - 50) * 0.025}deg`);
    element.dataset.active = "true";
  };
  const reset = () => {
    const element = card.current;
    if (!element) return;
    delete element.dataset.active;
    element.style.removeProperty("--glare-rotate-x");
    element.style.removeProperty("--glare-rotate-y");
  };
  return (
    <div className="glare-card" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
      <div ref={card} className="glare-card-face" data-disabled={disabled || undefined}>
        {children}
        <div className="glare-card-reflection" aria-hidden="true" />
        <div className="glare-card-foil" aria-hidden="true" />
      </div>
    </div>
  );
}
