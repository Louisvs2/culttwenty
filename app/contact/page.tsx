import type { Metadata } from "next";
import { Instagram, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Lass uns über dein nächstes Projekt sprechen. Kontaktiere CultTwenty für Videoproduktion, Web, 3D oder Pitch Decks.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-paper pt-[calc(var(--nav-height)+4rem)] pb-section">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="mb-6 flex items-center gap-3 font-mono text-eyebrow uppercase text-mute">
              <span
                className="h-1.5 w-1.5 rounded-full bg-signal"
                aria-hidden="true"
              />
              Contact
            </span>
            <AnimatedHeading
              as="h1"
              trigger="load"
              text="Lass uns sprechen."
              className="font-display text-display-2 font-medium text-ink"
            />
            <p className="mt-8 max-w-md text-body-lg text-ink/70">
              Erzähl uns von deinem Projekt — wir melden uns innerhalb von 24
              Stunden mit nächsten Schritten zurück.
            </p>

            <div className="mt-14 flex flex-col gap-6 border-t border-line pt-10">
              <a
                href={`mailto:${siteConfig.email}`}
                data-cursor="pointer"
                className="group flex items-center gap-3 text-sm text-ink/80 transition-colors duration-300 hover:text-ink"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="group flex items-center gap-3 text-sm text-ink/80 transition-colors duration-300 hover:text-ink"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
