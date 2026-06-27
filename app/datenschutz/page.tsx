import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-paper pt-[calc(var(--nav-height)+4rem)] pb-section">
      <Container className="max-w-3xl">
        <h1 className="font-display text-display-3 font-medium text-ink">
          Datenschutzerklärung
        </h1>

        <div className="mt-12 flex flex-col gap-10 text-body text-ink/80">
          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung
              (DSGVO) ist:
              <br />
              {siteConfig.legalName}, {siteConfig.owner}
              <br />
              E-Mail:{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              2. Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer
              grundsätzlich nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung personenbezogener Daten
              erfolgt regelmäßig nur nach Einwilligung des Nutzers oder auf
              Basis einer gesetzlichen Erlaubnis gemäß Art. 6 Abs. 1 lit. a
              bis f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              3. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der von
              Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
              Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
              Fällen beruht die Verarbeitung auf unserem berechtigten
              Interesse an der effektiven Bearbeitung von Anfragen (Art. 6
              Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              4. Hosting und Server-Logfiles
            </h2>
            <p>
              Beim Aufruf unserer Website erfasst unser Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Logfiles, die
              Ihr Browser automatisch übermittelt, etwa Browsertyp,
              verwendetes Betriebssystem, Referrer-URL, Hostname des
              zugreifenden Rechners und Uhrzeit der Serveranfrage. Diese
              Daten werden zur Sicherstellung eines reibungslosen
              Verbindungsaufbaus und einer komfortablen Nutzung verarbeitet
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              5. Cookies und lokale Speicherung
            </h2>
            <p>
              Diese Website verwendet keine Tracking- oder Marketing-Cookies.
              Zur Steuerung der Ladeanimation wird beim Aufruf der Seite ein
              technischer Eintrag im Session Storage Ihres Browsers
              gespeichert, der ausschließlich der Funktionalität der Seite
              dient und keine personenbezogenen Daten enthält.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              6. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger sowie den Zweck der Datenverarbeitung sowie ein Recht
              auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
              jederzeit über die im Impressum angegebene Adresse an uns
              wenden.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-heading-2 font-medium text-ink">
              7. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Ihnen steht zudem ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde für den Datenschutz zu, wenn Sie der Ansicht
              sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
              die DSGVO verstößt.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
