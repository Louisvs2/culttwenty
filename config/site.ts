export const siteConfig = {
  name: "CultTwenty",
  legalName: "CultTwenty GbR",
  owner: "Louis Reinecke",
  domain: "culttwenty.de",
  url: "https://culttwenty.de",
  email: "redaktion@culttwenty.de",
  instagram: "https://instagram.com/culttwenty",
  instagramHandle: "@culttwenty",
  description:
    "CultTwenty ist eine Creative Agency für Videoproduktion, Webdesign, 3D und Pitch Decks. Wir entwickeln visuelle Identitäten für Marken, die etwas zu sagen haben.",
  shortDescription:
    "Creative Agency für Film, Web, 3D und Pitch Decks.",
  keywords: [
    "Creative Agency",
    "Videoproduktion",
    "Webdesign Agentur",
    "3D Visualisierung",
    "Pitch Deck Design",
    "Markenfilm",
    "Brand Design",
    "CultTwenty",
  ],
  founded: "2015",
  yearsOfExperience: "10",
  teamSize: "5",
  locale: "de_DE",
  themeColor: "#0a0a0a",
} as const;

export type SiteConfig = typeof siteConfig;
