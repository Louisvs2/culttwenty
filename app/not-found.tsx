import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[90vh] items-center bg-paper pt-[var(--nav-height)]">
      <Container className="flex flex-col items-start">
        <span className="font-mono text-eyebrow uppercase text-mute">
          Fehler 404
        </span>
        <h1 className="mt-6 font-display text-display-2 font-medium text-ink">
          Diese Seite gibt es nicht.
        </h1>
        <p className="mt-6 max-w-md text-body-lg text-ink/70">
          Die gesuchte Seite wurde verschoben, gelöscht oder existiert nicht.
          Komm zurück zur Startseite oder sieh dir unsere Arbeit an.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" variant="primary" withIcon>
            Zur Startseite
          </Button>
          <Button href="/services" variant="secondary">
            Unsere Leistungen
          </Button>
        </div>
      </Container>
    </section>
  );
}
