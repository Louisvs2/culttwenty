"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center bg-paper">
      <Container className="flex flex-col items-start">
        <span className="font-mono text-eyebrow uppercase text-mute">
          Unerwarteter Fehler
        </span>
        <h1 className="mt-6 font-display text-display-3 font-medium text-ink">
          Etwas ist schiefgelaufen.
        </h1>
        <p className="mt-6 max-w-md text-body-lg text-ink/70">
          Bitte versuche es erneut. Sollte das Problem bestehen bleiben,
          kontaktiere uns gerne direkt.
        </p>
        <div className="mt-10 flex gap-4">
          <Button onClick={reset} variant="primary">
            Erneut versuchen
          </Button>
          <Button href="/" variant="secondary">
            Zur Startseite
          </Button>
        </div>
      </Container>
    </section>
  );
}
