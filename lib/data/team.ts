import type {
  ProcessStep,
  StatEntry,
  TeamMember,
  Testimonial,
  TimelineEntry,
  TrustedLogo,
} from "@/types";

export const teamMembers: TeamMember[] = [
  {
    name: "Louis Reinecke",
    role: "Creative Director & Gründer",
    image: "https://picsum.photos/seed/culttwenty-team-01/800/1000",
  },
  {
    name: "Mara Lindqvist",
    role: "Lead Designer",
    image: "https://picsum.photos/seed/culttwenty-team-02/800/1000",
  },
  {
    name: "Jonah Weber",
    role: "Director of Photography",
    image: "https://picsum.photos/seed/culttwenty-team-03/800/1000",
  },
  {
    name: "Elina Voss",
    role: "Lead Developer",
    image: "https://picsum.photos/seed/culttwenty-team-04/800/1000",
  },
  {
    name: "Tom Achterberg",
    role: "3D & Motion Artist",
    image: "https://picsum.photos/seed/culttwenty-team-05/800/1000",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2015",
    title: "Gründung",
    description:
      "CultTwenty startet als kleines Filmstudio mit dem Anspruch, Markenfilme anders zu denken.",
  },
  {
    year: "2018",
    title: "Erweiterung um Web",
    description:
      "Die ersten digitalen Markenauftritte entstehen — Film und Web wachsen als ein Designsystem zusammen.",
  },
  {
    year: "2021",
    title: "3D & Visualisierung",
    description:
      "Mit wachsender Nachfrage nach digitalen Produktwelten bauen wir ein eigenes 3D-Team auf.",
  },
  {
    year: "2023",
    title: "Internationale Kunden",
    description:
      "Erste Projekte für Kunden außerhalb der DACH-Region — Pitch Decks werden zur vierten Disziplin.",
  },
  {
    year: "2026",
    title: "Heute",
    description:
      "Ein interdisziplinäres Team aus fünf Experten mit über zehn Jahren gemeinsamer Erfahrung.",
  },
];

export const stats: StatEntry[] = [
  { value: "10", label: "Jahre Erfahrung" },
  { value: "5", label: "Experten im Team" },
  { value: "120+", label: "Realisierte Projekte" },
  { value: "38", label: "Aktive Markenpartner" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "CultTwenty hat unsere Marke nicht nur visuell, sondern strategisch neu gedacht. Das Ergebnis übertrifft alles, was wir zuvor hatten.",
    name: "Anna Berghoff",
    role: "Head of Brand",
    company: "Nordlicht Living",
  },
  {
    quote:
      "Selten erlebt man ein Team, das Film, Web und 3D gleichermaßen exzellent beherrscht — und das alles aus einer Hand.",
    name: "Markus Feldt",
    role: "Gründer",
    company: "Atlas Mobility",
  },
  {
    quote:
      "Die Zusammenarbeit war auf Augenhöhe, schnell und extrem präzise. Jedes Detail hatte einen Grund.",
    name: "Sophie Lang",
    role: "Marketing Director",
    company: "Fernweh Reisen",
  },
];

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "Wir verstehen Marke, Markt und Ziel, bevor wir eine einzige Idee entwickeln.",
  },
  {
    index: "02",
    title: "Strategie",
    description:
      "Aus Erkenntnissen wird eine klare kreative Richtung mit messbaren Zielen.",
  },
  {
    index: "03",
    title: "Konzeption",
    description:
      "Wir entwickeln Konzept, Bildsprache und Struktur — abgestimmt auf jeden Kanal.",
  },
  {
    index: "04",
    title: "Produktion",
    description:
      "Dreh, Design und Entwicklung mit höchstem Anspruch an Handwerk und Detail.",
  },
  {
    index: "05",
    title: "Launch & Wirkung",
    description:
      "Wir begleiten den Launch und messen die Wirkung gegen die definierten Ziele.",
  },
];

export const trustedLogos: TrustedLogo[] = [
  { name: "Nordlicht" },
  { name: "Atlas Mobility" },
  { name: "Fernweh" },
  { name: "Fabrik Studios" },
  { name: "Kontur" },
  { name: "Monolith Audio" },
];
