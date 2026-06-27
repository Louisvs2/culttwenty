import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealText } from "@/components/ui/RevealText";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section className="bg-paper py-section">
      <Container>
        <SectionTitle
          eyebrow="Leistungen"
          title="Vier Disziplinen, eine Haltung."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-gutter gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <RevealText key={service.id} as="div" delay={index * 0.08}>
              <div className="group">
                <span className="font-mono text-sm text-mute">{service.index}</span>
                <h3 className="mt-4 font-display text-heading-1 font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-body text-ink/70">{service.pitch}</p>
                <ArrowUpRight
                  className="mt-6 h-5 w-5 text-ink/40 transition-colors duration-300 group-hover:text-signal"
                  aria-hidden="true"
                />
              </div>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
