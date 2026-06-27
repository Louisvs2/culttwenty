import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Videoproduktion, Websites, 3D-Visualisierung und Pitch Decks von CultTwenty — vier Disziplinen, eine konsistente kreative Haltung.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-paper pt-[calc(var(--nav-height)+4rem)] pb-section-sm">
        <Container>
          <span className="mb-6 flex items-center gap-3 font-mono text-eyebrow uppercase text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            Services
          </span>
          <AnimatedHeading
            as="h1"
            trigger="load"
            text="Vier Disziplinen, ein Designsystem."
            className="max-w-4xl font-display text-display-2 font-medium text-ink"
          />
          <p className="mt-8 max-w-xl text-body-lg text-ink/70">
            Wir denken Film, Web, 3D und Präsentation nicht getrennt — sondern als
            ein konsistentes Markenerlebnis über alle Kanäle.
          </p>
        </Container>
      </section>

      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}

      <CTA />
    </>
  );
}
