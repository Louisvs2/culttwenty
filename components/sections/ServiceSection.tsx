import { CheckIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { CyclingGallery } from "@/components/ui/CyclingGallery";
import type { Service } from "@/types";

interface ServiceSectionProps {
  service: Service;
}

export function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <section className="border-b border-line py-section-sm">
      <Container>
        <span className="font-mono text-eyebrow uppercase text-mute">
          {service.index}
        </span>
        <RevealText as="div" className="mt-6">
          <h2 className="font-display text-display-3 font-medium text-ink">
            {service.title}
          </h2>
        </RevealText>
        <p className="mt-8 max-w-2xl text-body-lg text-ink/70">
          {service.description}
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {service.capabilities.map((capability) => (
            <li key={capability} className="flex items-center gap-3 text-sm text-ink">
              <CheckIcon className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
              {capability}
            </li>
          ))}
        </ul>

        <CyclingGallery
          images={service.gallery}
          alt={`${service.title} Referenzbild`}
          className="mt-16"
        />
      </Container>
    </section>
  );
}
