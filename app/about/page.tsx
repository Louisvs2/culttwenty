import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Timeline } from "@/components/sections/Timeline";
import { CTA } from "@/components/sections/CTA";
import { stats } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "CultTwenty ist eine Creative Agency mit fünf Experten für Film, Web, 3D und Pitch Deck Design — gegründet 2024, entstanden aus der Einzelarbeit seit 2020.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper pt-[calc(var(--nav-height)+4rem)] pb-section-sm">
        <Container>
          <span className="mb-6 flex items-center gap-3 font-mono text-eyebrow uppercase text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            About
          </span>
          <AnimatedHeading
            as="h1"
            trigger="load"
            text="Wir gestalten Marken, die etwas zu sagen haben."
            className="max-w-4xl font-display text-display-2 font-medium text-ink"
          />
        </Container>
      </section>

      <section className="bg-paper pb-section-sm">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <span className="font-mono text-eyebrow uppercase text-mute">
                Mission
              </span>
              <p className="mt-6 text-body-lg text-ink/80">
                Wir glauben, dass die beste Markenkommunikation an der
                Schnittstelle von Handwerk und Klarheit entsteht. CultTwenty
                übersetzt komplexe Marken in einfache, starke Bilder — über
                Film, Web, 3D und Präsentation hinweg.
              </p>
            </div>
            <div className="md:col-span-6">
              <span className="font-mono text-eyebrow uppercase text-mute">
                Vision
              </span>
              <p className="mt-6 text-body-lg text-ink/80">
                Wir wollen die Agentur sein, an der sich anspruchsvolle Marken
                orientieren, wenn es um konsistente, hochwertige visuelle
                Kommunikation geht — unabhängig vom Kanal.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="https://loremflickr.com/2000/1400/creative,studio,workspace/all?lock=42"
          alt="CultTwenty Team bei der Arbeit im Studio"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="bg-paper py-section">
        <Container>
          <SectionTitle
            eyebrow="Team"
            title="Fünf Experten, eine Sprache."
            description="Gebündelte Erfahrung in Regie, Design, Entwicklung und 3D."
          />
          <div className="mt-16">
            <TeamGrid />
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim py-section">
        <Container>
          <SectionTitle eyebrow="Werdegang" title="Von der Einzelarbeit zur Agentur." />
          <div className="mt-16">
            <Timeline />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-section text-paper">
        <Container>
          <dl className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-display-2 font-medium text-paper">
                  {stat.value}
                </dd>
                <p className="mt-3 font-mono text-xs uppercase tracking-wide text-paper/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CTA />
    </>
  );
}
