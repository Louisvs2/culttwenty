import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className="bg-paper pt-[calc(var(--nav-height)+4rem)] pb-section">
      <Container className="max-w-3xl">
        <h1 className="font-display text-display-3 font-medium text-ink">
          Impressum
        </h1>

        <div className="mt-12 flex flex-col gap-10 text-body text-ink/80">
          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {siteConfig.legalName}
              <br />
              Inhaber: {siteConfig.owner}
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
              <br />
              Website: {siteConfig.domain}
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              Vertreten durch
            </h2>
            <p>{siteConfig.owner}</p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Wird auf Anfrage mitgeteilt. Als GbR ist die Angabe einer
              Umsatzsteuer-Identifikationsnummer nur erforderlich, sofern eine
              solche beantragt und erteilt wurde.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              Redaktionell verantwortlich
            </h2>
            <p>{siteConfig.owner}</p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
              nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
