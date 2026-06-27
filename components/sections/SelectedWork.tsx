import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";
import { workItems } from "@/lib/data/work";

export function SelectedWork() {
  const featured = workItems.slice(0, 4);

  return (
    <section className="bg-paper py-section">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Ausgewählte Arbeiten"
            title="Projekte, die unsere Haltung zeigen."
          />
          <Button href="/work" variant="secondary" withIcon>
            Alle Projekte
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-gutter gap-y-16 md:grid-cols-2">
          {featured.map((item, index) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              data-cursor="pointer"
              className={`group block ${
                item.size === "lg" && index % 2 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <ImageReveal
                src={item.coverImage}
                alt={item.title}
                className={`w-full rounded-md ${
                  item.size === "lg" && index % 2 === 0
                    ? "aspect-[16/9]"
                    : "aspect-[4/5]"
                }`}
                imageClassName="transition-transform duration-700 ease-out-quart group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-heading-2 font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-mute">
                    {item.client} · {item.year}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-2 h-5 w-5 shrink-0 text-ink transition-transform duration-300 ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
