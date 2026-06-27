import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/data/team";

export function AboutPreview() {
  return (
    <section className="bg-ink py-section text-paper">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <SectionTitle
              eyebrow="Über uns"
              title={
                <span className="text-paper">
                  Ein interdisziplinäres Team mit einer Sprache.
                </span>
              }
              description="Fünf Experten aus Film, Design, Entwicklung und 3D — seit zehn Jahren gemeinsam an der Frage, wie Marken heute wirken müssen."
              className="[&_p]:text-paper/70"
            />
            <div className="mt-10">
              <Button href="/about" variant="outline-light" withIcon>
                Mehr über CultTwenty
              </Button>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-line-light pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-display-3 font-medium text-paper">
                    {stat.value}
                  </dd>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-paper/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-md md:col-span-6">
            <Image
              src="https://picsum.photos/seed/culttwenty-studio/1400/1700"
              alt="CultTwenty Studio"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
