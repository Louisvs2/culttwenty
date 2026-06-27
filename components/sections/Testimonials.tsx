"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data/team";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function next() {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  if (!current) return null;

  return (
    <section className="bg-paper-dim py-section">
      <Container>
        <SectionTitle eyebrow="Stimmen" title="Was Kunden sagen." />

        <div className="mt-16 max-w-3xl">
          <Quote
            className="h-10 w-10 text-signal"
            aria-hidden="true"
            strokeWidth={1.5}
          />

          <div className="relative mt-6 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote>
                  <p className="font-display text-heading-1 font-medium text-ink text-balance">
                    {current.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-8 font-mono text-sm text-mute">
                  {current.name} — {current.role}, {current.company}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              data-cursor="pointer"
              aria-label="Vorheriges Testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              data-cursor="pointer"
              aria-label="Nächstes Testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-ink"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="ml-2 font-mono text-xs text-mute">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
