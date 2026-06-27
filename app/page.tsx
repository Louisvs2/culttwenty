import type { Metadata } from "next";
import { VideoHero } from "@/components/sections/VideoHero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

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
      <AboutPreview />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
