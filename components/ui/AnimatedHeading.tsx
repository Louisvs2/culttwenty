"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  trigger?: "load" | "scroll";
}

export function AnimatedHeading({
  text,
  as = "h2",
  className,
  delay = 0,
  trigger = "scroll",
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const words = text.split(" ");
  const Tag = as;

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const lines = container.querySelectorAll<HTMLSpanElement>("[data-word]");

    if (prefersReducedMotion) {
      gsap.set(lines, { yPercent: 0, opacity: 1 });
      return;
    }

    const tween = gsap.fromTo(
      lines,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.045,
        delay,
        scrollTrigger:
          trigger === "scroll"
            ? {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none none",
              }
            : undefined,
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text, delay, trigger]);

  return (
    <Tag ref={containerRef} className={cn("break-words", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="reveal-mask mr-[0.28em] inline-block">
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
