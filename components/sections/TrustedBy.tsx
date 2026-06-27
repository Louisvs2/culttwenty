import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { trustedClients } from "@/lib/data/clients";

export function TrustedBy() {
  return (
    <section className="bg-ink py-section-sm">
      <Container>
        <span className="font-mono text-eyebrow uppercase text-paper/50">
          Vertrauen von Marken wie
        </span>
      </Container>
      <div className="mt-8">
        <Marquee items={trustedClients} variant="dark" />
      </div>
    </section>
  );
}
