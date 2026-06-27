"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/lib/data/services";

export function Services() {
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? "");
  const activeService = services.find((service) => service.id === activeId);

  return (
    <section className="bg-paper py-section">
      <Container>
        <SectionTitle
          eyebrow="Leistungen"
          title="Vier Disziplinen, eine Haltung."
          description="Wir kombinieren Bewegtbild, digitale Produkte, 3D und Storytelling zu einem konsistenten Markenerlebnis."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <ul className="md:col-span-7">
            {services.map((service) => (
              <li key={service.id} className="border-b border-line">
                <Link
                  href="/services"
                  data-cursor="pointer"
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  className="group flex items-baseline justify-between gap-6 py-8"
                >
                  <span className="flex items-baseline gap-6">
                    <span className="font-mono text-sm text-mute">
                      {service.index}
                    </span>
                    <span className="font-display text-heading-1 font-medium text-ink transition-colors duration-300 group-hover:text-ink/60">
                      {service.title}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 text-ink transition-transform duration-300 ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-md md:col-span-5 md:block">
            <AnimatePresence mode="wait">
              {activeService ? (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
