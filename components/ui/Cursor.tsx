"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3.out" });

    function handleMouseMove(event: MouseEvent) {
      setIsVisible(true);
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);

      const target = event.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [data-cursor='pointer']")));
    }

    function handleMouseLeave() {
      setIsVisible(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 0 : 1,
          transition: "opacity 0.2s ease, scale 0.2s ease",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring"
        style={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.8 : 1,
          transition: "opacity 0.2s ease, scale 0.3s ease",
        }}
      />
    </>
  );
}
