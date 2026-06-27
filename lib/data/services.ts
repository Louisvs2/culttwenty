import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "video",
    index: "01",
    title: "Videoproduktion",
    shortTitle: "Video",
    description:
      "Markenfilme, Imagefilme und Social-Content, die nicht nur gesehen, sondern erinnert werden. Von der Konzeption über den Dreh bis zur finalen Farbkorrektur — wir produzieren Bewegtbild, das eine Haltung hat.",
    capabilities: [
      "Markenfilme & Imagefilme",
      "Social & Content Video",
      "Regie & Konzeption",
      "Color Grading & Sound Design",
    ],
    image: "https://picsum.photos/seed/culttwenty-video/1600/2000",
  },
  {
    id: "web",
    index: "02",
    title: "Websites",
    shortTitle: "Web",
    description:
      "Digitale Erlebnisse für Marken, die online genauso überzeugen müssen wie offline. Wir gestalten und entwickeln Websites, die schnell laden, klar kommunizieren und sich hochwertig anfühlen — auf jedem Endgerät.",
    capabilities: [
      "UI/UX Design",
      "Next.js Entwicklung",
      "E-Commerce & CMS",
      "Performance & SEO",
    ],
    image: "https://picsum.photos/seed/culttwenty-web/1600/2000",
  },
  {
    id: "3d",
    index: "03",
    title: "3D",
    shortTitle: "3D",
    description:
      "Dreidimensionale Produktwelten, Renderings und Animationen für Marken, die Realität neu inszenieren wollen. Wir bauen digitale Räume und Objekte, die fotorealistisch wirken — oder bewusst nicht.",
    capabilities: [
      "Produktvisualisierung",
      "3D Animation",
      "CGI & Compositing",
      "Virtuelle Produktwelten",
    ],
    image: "https://picsum.photos/seed/culttwenty-3d/1600/2000",
  },
  {
    id: "pitch",
    index: "04",
    title: "Pitch Decks",
    shortTitle: "Pitch",
    description:
      "Präsentationen, die überzeugen, bevor das erste Wort gesprochen ist. Wir gestalten Pitch Decks für Funding-Runden, Sales-Prozesse und Markenpräsentationen mit klarer Struktur und starker visueller Sprache.",
    capabilities: [
      "Investor Decks",
      "Sales & Brand Decks",
      "Informationsdesign",
      "Storytelling & Struktur",
    ],
    image: "https://picsum.photos/seed/culttwenty-pitch/1600/2000",
  },
];
