"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { processSteps } from "@/lib/data/team";

export function Process() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-paper py-section">
      <Container>
        <SectionTitle
          eyebrow="Prozess"
          title="Wie wir arbeiten."
          description="Ein klarer, fünfstufiger Prozess von der ersten Erkenntnis bis zur messbaren Wirkung."
        />

        <div className="relative mt-16">
          <div className="absolute left-[0.4rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-line md:block">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-signal"
            />
          </div>

          <ol className="flex flex-col divide-y divide-line md:ml-10">
            {processSteps.map((step) => (
              <li
                key={step.index}
                className="grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <span className="font-mono text-sm text-mute md:col-span-2">
                  {step.index}
                </span>
                <h3 className="font-display text-heading-2 font-medium text-ink md:col-span-4">
                  {step.title}
                </h3>
                <p className="text-body text-ink/70 md:col-span-6">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
