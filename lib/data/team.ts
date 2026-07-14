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
    year: "2020",
    title: "Als Einzelperson",
    description:
      "Vor der Gründung entstehen erste Projekte in Eigenregie — als Einzelperson mit Fokus auf Film, Design und digitale Markenauftritte.",
  },
  {
    year: "2024",
    title: "Gründung",
    description:
      "Aus der Einzelarbeit wird CultTwenty — eine eigenständige Creative Agency mit klarer Haltung für Film, Web, 3D und Pitch Decks.",
  },
  {
    year: "2026",
    title: "Heute",
    description:
      "CultTwenty entwickelt visuelle Identitäten für Marken mit Anspruch — präzise, hochwertig und interdisziplinär gedacht.",
  },
];

export const stats: StatEntry[] = [
  { value: "2024", label: "Gegründet" },
  { value: "5", label: "Experten im Team" },
  { value: "120+", label: "Realisierte Projekte" },
  { value: "38", label: "Aktive Markenpartner" },
];
