import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case Studies von CultTwenty: Markenfilme, Websites, 3D-Visualisierungen und Pitch Decks für ambitionierte Marken.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-paper pt-[calc(var(--nav-height)+4rem)] pb-section-sm">
        <Container>
          <span className="mb-6 flex items-center gap-3 font-mono text-eyebrow uppercase text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            Work
          </span>
          <AnimatedHeading
            as="h1"
            trigger="load"
            text="Projekte, die für sich sprechen."
            className="max-w-4xl font-display text-display-2 font-medium text-ink"
          />
          <p className="mt-8 max-w-xl text-body-lg text-ink/70">
            Eine Auswahl unserer Arbeiten aus Videoproduktion, Webentwicklung, 3D
            und Pitch Deck Design.
          </p>
        </Container>
      </section>

      <section className="bg-paper pb-section">
        <Container>
          <WorkGrid />
        </Container>
      </section>

      <CTA />
    </>
  );
}
