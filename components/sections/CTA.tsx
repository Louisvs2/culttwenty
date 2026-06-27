import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section className="bg-paper py-section">
      <Container className="flex flex-col items-start gap-10 border-t border-line pt-section-sm">
        <span className="font-mono text-eyebrow uppercase text-mute">
          Bereit für den nächsten Schritt?
        </span>
        <AnimatedHeading
          as="h2"
          text="Lass uns über dein Projekt sprechen."
          className="max-w-4xl font-display text-display-2 font-medium text-ink"
        />
        <div className="flex flex-wrap items-center gap-6">
          <MagneticButton>
            <Button href="/contact" variant="primary" withIcon>
              Projekt starten
            </Button>
          </MagneticButton>
          <a
            href={`mailto:${siteConfig.email}`}
            data-cursor="pointer"
            className="font-mono text-sm text-ink/60 transition-colors duration-300 hover:text-ink"
          >
            {siteConfig.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
