import type { Metadata } from "next";
import { VideoHero } from "@/components/sections/VideoHero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CyclingGallery } from "@/components/ui/CyclingGallery";
import { allProjectImages } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Creative Agency für Film, Web, 3D & Pitch Decks",
  description:
    "CultTwenty entwickelt Videoproduktion, Websites, 3D-Visualisierung und Pitch Decks für Marken mit Anspruch. Premium Creative Agency aus Deutschland.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <TrustedBy />
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
