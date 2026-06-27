import type { WorkCategory, WorkItem } from "@/types";

export const workCategories: WorkCategory[] = [
  { id: "all", label: "Alle" },
  { id: "video", label: "Video" },
  { id: "web", label: "Web" },
  { id: "3d", label: "3D" },
  { id: "pitch", label: "Pitch" },
];

export const workItems: WorkItem[] = [
  {
    slug: "nordlicht-rebrand",
    title: "Nordlicht",
    client: "Nordlicht Living",
    year: "2025",
    categories: ["video", "web"],
    summary: "Markenrelaunch & digitales Erlebnis für ein skandinavisches Möbelhaus.",
    description:
      "Für den Markenrelaunch von Nordlicht Living haben wir eine vollständig neue digitale Identität entwickelt — von der Bildsprache bis zur Website-Architektur.",
    challenge:
      "Nordlicht wirkte trotz hochwertiger Produkte digital unscheinbar und konnte sich gegen größere Wettbewerber nicht differenzieren.",
    approach:
      "Wir entwickelten eine ruhige, editoriale Bildsprache mit großformatiger Typografie und produzierten einen Markenfilm als zentrales Hero-Element der neuen Website.",
    result:
      "Die Verweildauer auf der Website stieg um 64 %, die Anfragequote über das Kontaktformular verdreifachte sich innerhalb von drei Monaten.",
    coverImage: "https://picsum.photos/seed/culttwenty-work-01/1800/2200",
    gallery: [
      "https://picsum.photos/seed/culttwenty-work-01-a/1600/1200",
      "https://picsum.photos/seed/culttwenty-work-01-b/1600/2000",
      "https://picsum.photos/seed/culttwenty-work-01-c/1600/1200",
    ],
    size: "lg",
  },
  {
    slug: "atlas-pitch",
    title: "Atlas",
    client: "Atlas Mobility",
    year: "2025",
    categories: ["pitch", "3d"],
    summary: "Series-A Pitch Deck & 3D Produktvisualisierung für ein Mobility-Startup.",
    description:
      "Atlas Mobility ging mit unserem Pitch Deck in eine erfolgreiche Series-A-Finanzierungsrunde — inklusive fotorealistischer 3D-Visualisierung des noch nicht produzierten Fahrzeugs.",
    challenge:
      "Das Produkt existierte nur als Prototyp. Investoren mussten sich die finale Produktqualität bildlich vorstellen können.",
    approach:
      "Wir visualisierten das Fahrzeug fotorealistisch in 3D und bauten ein 28-seitiges Deck mit klarer Storyline rund um Markt, Produkt und Team.",
    result:
      "Atlas schloss die Finanzierungsrunde in unter sechs Wochen ab und übertraf die Zielsumme um 40 %.",
    coverImage: "https://picsum.photos/seed/culttwenty-work-02/1800/1400",
    gallery: [
      "https://picsum.photos/seed/culttwenty-work-02-a/1600/1200",
      "https://picsum.photos/seed/culttwenty-work-02-b/1600/1200",
    ],
    size: "md",
  },
  {
    slug: "fernweh-film",
    title: "Fernweh",
    client: "Fernweh Reisen",
    year: "2024",
    categories: ["video"],
    summary: "Markenfilm & Social Campaign für ein Premium-Reiseunternehmen.",
    description:
      "Ein dreiminütiger Markenfilm, der das Gefühl von Fernweh einfängt — gedreht an drei Locations in zwei Ländern, geschnitten als emotionale Reise statt klassischer Werbung.",
    challenge:
      "Fernweh wollte sich von austauschbarer Reise-Werbung lösen und eine emotionale, wiedererkennbare Filmsprache etablieren.",
    approach:
      "Wir entwickelten ein Drehbuch ohne gesprochenen Text, getragen von Bild, Musik und Schnittrhythmus, und schnitten parallel zehn Social-Cutdowns.",
    result:
      "Der Film erreichte über 2,1 Mio. organische Views und wurde als Referenzfilm der Branche zitiert.",
    coverImage: "https://picsum.photos/seed/culttwenty-work-03/1800/2200",
    gallery: [
      "https://picsum.photos/seed/culttwenty-work-03-a/1600/1200",
      "https://picsum.photos/seed/culttwenty-work-03-b/1600/2000",
    ],
    size: "lg",
  },
  {
    slug: "fabrik-web",
    title: "Fabrik",
    client: "Fabrik Studios",
    year: "2024",
    categories: ["web", "3d"],
    summary: "Editorial Website mit 3D-Produktkonfigurator für ein Designstudio.",
    description:
      "Für das Designstudio Fabrik entwickelten wir eine Website mit interaktivem 3D-Konfigurator, mit dem Kunden Möbelstücke in Echtzeit personalisieren können.",
    challenge:
      "Die bestehende Website konnte die Produktvielfalt nicht abbilden und führte zu hohem Beratungsaufwand im Verkauf.",
    approach:
      "Wir bauten eine performante Next.js-Website mit WebGL-Konfigurator, der Material- und Farboptionen in Echtzeit rendert.",
    result:
      "Beratungsanfragen mit bereits konfiguriertem Wunschprodukt stiegen um 80 %, die Abschlussquote verbesserte sich deutlich.",
    coverImage: "https://picsum.photos/seed/culttwenty-work-04/1800/1400",
    gallery: [
      "https://picsum.photos/seed/culttwenty-work-04-a/1600/1200",
      "https://picsum.photos/seed/culttwenty-work-04-b/1600/1200",
    ],
    size: "md",
  },
  {
    slug: "kontur-rebrand",
    title: "Kontur",
    client: "Kontur Architekten",
    year: "2024",
    categories: ["web", "pitch"],
    summary: "Markenauftritt & Projektpräsentationen für ein Architekturbüro.",
    description:
      "Ein zurückhaltender, typografiegetriebener Markenauftritt für ein Architekturbüro mit Fokus auf großformatige Projektfotografie.",
    challenge:
      "Das Büro hatte exzellente Projekte, aber keine konsistente visuelle Sprache, um diese digital zu präsentieren.",
    approach:
      "Wir entwickelten ein Editorial-Grid-System für Projektseiten und eine Deck-Vorlage für Kundenpräsentationen im selben Designsystem.",
    result:
      "Kontur gewann innerhalb eines Jahres drei überregionale Ausschreibungen mit den neuen Präsentationsunterlagen.",
    coverImage: "https://picsum.photos/seed/culttwenty-work-05/1800/2200",
    gallery: [
      "https://picsum.photos/seed/culttwenty-work-05-a/1600/2000",
      "https://picsum.photos/seed/culttwenty-work-05-b/1600/1200",
    ],
    size: "lg",
  },
  {
    slug: "monolith-3d",
    title: "Monolith",
    client: "Monolith Audio",
    year: "2023",
    categories: ["3d", "video"],
    summary: "3D-Produktfilm für ein High-End-Audio-Label.",
    description:
      "Ein vollständig in 3D produzierter Produktfilm für einen Lautsprecher, der physisch noch nicht existierte — von Materialstudien bis zum finalen Compositing.",
    challenge:
      "Der reale Prototyp war nicht filmreif, der Launch-Termin stand jedoch fest.",
    approach:
      "Wir bauten das Produkt vollständig in 3D nach, inklusive physikalisch korrekter Materialien, Licht-Setups und Kamerafahrten.",
    result:
      "Der Launch-Film wurde fristgerecht veröffentlicht und ist von echten Aufnahmen nicht zu unterscheiden.",
    coverImage: "https://picsum.photos/seed/culttwenty-work-06/1800/1400",
    gallery: [
      "https://picsum.photos/seed/culttwenty-work-06-a/1600/1200",
      "https://picsum.photos/seed/culttwenty-work-06-b/1600/1200",
    ],
    size: "md",
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return workItems.find((item) => item.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return workItems.map((item) => item.slug);
}
