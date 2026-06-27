import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceSectionProps {
  service: Service;
  reverse?: boolean;
}

export function ServiceSection({ service, reverse = false }: ServiceSectionProps) {
  return (
    <section className="border-b border-line py-section-sm">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div
            className={cn(
              "md:col-span-6",
              reverse ? "md:order-2" : "md:order-1",
            )}
          >
            <span className="font-mono text-eyebrow uppercase text-mute">
              {service.index}
            </span>
            <RevealText as="div" className="mt-6">
              <h2 className="font-display text-display-3 font-medium text-ink">
                {service.title}
              </h2>
            </RevealText>
            <p className="mt-8 max-w-lg text-body-lg text-ink/70">
              {service.description}
            </p>
            <ul className="mt-10 flex flex-col gap-4">
              {service.capabilities.map((capability) => (
                <li key={capability} className="flex items-center gap-3 text-sm text-ink">
                  <CheckIcon
                    className="h-4 w-4 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "md:col-span-6",
              reverse ? "md:order-1" : "md:order-2",
            )}
          >
            <div className="sticky top-32 aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
