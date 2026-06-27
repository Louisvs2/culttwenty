import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { trustedClients } from "@/lib/data/clients";

export function TrustedBy() {
  return (
    <section className="border-y border-line bg-paper py-section-sm">
      <Container>
        <span className="font-mono text-eyebrow uppercase text-mute">
          Vertrauen von Marken wie
        </span>
      </Container>
      <div className="mt-8">
        <Marquee items={trustedClients} variant="light" />
      </div>
    </section>
  );
}
