"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useMagnetic<T extends HTMLElement>(strength = 0.4) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const node: T = el;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const xTo = gsap.quickTo(node, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(node, "y", { duration: 0.5, ease: "power3.out" });

    function handleMouseMove(event: MouseEvent) {
      const rect = node.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;
      xTo(relX * strength);
      yTo(relY * strength);
    }

    function handleMouseLeave() {
      xTo(0);
      yTo(0);
    }

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
