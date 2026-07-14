import type { StatEntry, TeamMember, TimelineEntry } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "team-01",
    role: "Creative Director & Gründer",
    image: "https://picsum.photos/seed/culttwenty-team-01/800/1000",
  },
  {
    id: "team-02",
    role: "Lead Designer",
    image: "https://picsum.photos/seed/culttwenty-team-02/800/1000",
  },
  {
    id: "team-03",
    role: "Director of Photography",
    image: "https://picsum.photos/seed/culttwenty-team-03/800/1000",
  },
  {
    id: "team-04",
    role: "Lead Developer",
    image: "https://picsum.photos/seed/culttwenty-team-04/800/1000",
  },
  {
    id: "team-05",
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
