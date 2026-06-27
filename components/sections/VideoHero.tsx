"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { RevealText } from "@/components/ui/RevealText";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

interface VideoHeroProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function VideoHero({
  eyebrow = "Creative Agency · Film · Web · 3D · Pitch",
  headline = "Marken, die im Gedächtnis bleiben.",
  subheadline = "CultTwenty entwickelt Film, Web, 3D und Pitch Decks für Marken mit Anspruch — präzise, hochwertig und mit klarer Haltung.",
  primaryCta = { label: "Projekt starten", href: "/contact" },
  secondaryCta = { label: "Unsere Leistungen", href: "/services" },
}: VideoHeroProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={sectionRef} className="relative h-screen h-[100dvh] w-full overflow-hidden">
      <motion.div style={{ scale: videoScale }} className="absolute inset-0">
        <VideoPlayer src="/videos/showreel.mp4" />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-ink"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative flex h-full flex-col justify-end pb-20 pt-[var(--nav-height)] md:pb-28"
      >
        <Container>
          <span className="mb-6 flex items-center gap-3 font-mono text-eyebrow uppercase text-paper/60">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            {eyebrow}
          </span>

          <AnimatedHeading
            as="h1"
            trigger="load"
            text={headline}
            className="max-w-5xl font-display text-display-1 font-medium text-paper"
          />

          <RevealText
            delay={0.5}
            as="p"
            className="mt-8 max-w-lg text-body-lg text-paper/75"
          >
            {subheadline}
          </RevealText>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <MagneticButton>
              <Button href={primaryCta.href} variant="primary" withIcon>
                {primaryCta.label}
              </Button>
            </MagneticButton>
            <Button href={secondaryCta.href} variant="outline-light">
              {secondaryCta.label}
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 text-paper/60 md:flex"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
