import type { Metadata } from "next";
import { VideoHero } from "@/components/sections/VideoHero";
import { Services } from "@/components/sections/Services";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CyclingGallery } from "@/components/ui/CyclingGallery";
import { allProjectImages } from "@/lib/data/project-images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Videoproduktion, Websites, 3D-Visualisierung und Pitch Decks von CultTwenty — vier Disziplinen, eine konsistente kreative Haltung.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <VideoHero
        eyebrow="Services"
        headline="Vier Disziplinen, ein Designsystem."
        subheadline="Wir denken Film, Web, 3D und Präsentation nicht getrennt — sondern als ein konsistentes Markenerlebnis über alle Kanäle."
        primaryCta={{ label: "Projekt starten", href: "/contact" }}
        secondaryCta={{ label: "Zur Startseite", href: "/" }}
      />
      <Services />
      <section className="bg-paper-dim py-section">
        <Container>
          <SectionTitle eyebrow="Arbeiten" title="Eindrücke aus unseren Projekten." />
          <div className="mt-16">
            <CyclingGallery images={allProjectImages} alt="CultTwenty Projektbild" />
          </div>
        </Container>
      </section>
    </>
  );
}
