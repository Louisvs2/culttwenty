import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { getAllWorkSlugs, getWorkBySlug, workItems } from "@/lib/data/work";

interface WorkDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: WorkDetailPageProps): Metadata {
  const item = getWorkBySlug(params.slug);
  if (!item) {
    return { title: "Projekt nicht gefunden" };
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title: `${item.title} — CultTwenty`,
      description: item.summary,
      images: [{ url: item.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const item = getWorkBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const related = workItems
    .filter((work) => work.slug !== item.slug)
    .slice(0, 2);

  return (
    <>
      <section className="bg-paper pt-[calc(var(--nav-height)+3rem)] pb-section-sm">
        <Container>
          <Link
            href="/work"
            data-cursor="pointer"
            className="inline-flex items-center gap-2 font-mono text-sm text-ink/60 transition-colors duration-300 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Zurück zu Work
          </Link>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <AnimatedHeading
              as="h1"
              trigger="load"
              text={item.title}
              className="max-w-3xl font-display text-display-2 font-medium text-ink"
            />
            <dl className="flex gap-10">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-mute">
                  Kunde
                </dt>
                <dd className="mt-2 text-sm text-ink">{item.client}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-mute">
                  Jahr
                </dt>
                <dd className="mt-2 text-sm text-ink">{item.year}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <ImageReveal
        src={item.coverImage}
        alt={item.title}
        className="aspect-[16/9] w-full md:aspect-[21/9]"
        priority
        parallax={false}
      />

      <section className="bg-paper py-section">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-heading-1 font-medium text-ink">
                Die Herausforderung
              </h2>
              <p className="mt-6 text-body-lg text-ink/70">{item.challenge}</p>

              <h2 className="mt-14 font-display text-heading-1 font-medium text-ink">
                Unser Ansatz
              </h2>
              <p className="mt-6 text-body-lg text-ink/70">{item.approach}</p>

              <h2 className="mt-14 font-display text-heading-1 font-medium text-ink">
                Das Ergebnis
              </h2>
              <p className="mt-6 text-body-lg text-ink/70">{item.result}</p>
            </div>

            <aside className="md:col-span-5">
              <div className="sticky top-32 rounded-md border border-line p-8">
                <span className="font-mono text-xs uppercase tracking-wide text-mute">
                  Leistungen
                </span>
                <ul className="mt-4 flex flex-col gap-2">
                  {item.categories.map((category) => (
                    <li key={category} className="text-sm capitalize text-ink">
                      {category}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" withIcon className="w-fit">
                    Ähnliches Projekt anfragen
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {item.gallery.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[4/5] overflow-hidden rounded-md"
              >
                <Image
                  src={image}
                  alt={`${item.title} Galerie ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper pb-section">
        <Container>
          <h2 className="font-display text-heading-1 font-medium text-ink">
            Weitere Projekte
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-gutter gap-y-12 md:grid-cols-2">
            {related.map((work) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                data-cursor="pointer"
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                  <Image
                    src={work.coverImage}
                    alt={work.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="font-display text-heading-2 font-medium text-ink">
                    {work.title}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 text-ink transition-transform duration-300 ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
