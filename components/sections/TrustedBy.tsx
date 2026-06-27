import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { trustedLogos } from "@/lib/data/team";

export function TrustedBy() {
  const names = trustedLogos.map((logo) => logo.name);

  return (
    <section className="border-y border-line bg-paper py-section-sm">
      <Container>
        <span className="font-mono text-eyebrow uppercase text-mute">
          Vertrauen von Marken wie
        </span>
      </Container>
      <div className="mt-8">
        <Marquee items={names} variant="light" />
      </div>
    </section>
  );
}
