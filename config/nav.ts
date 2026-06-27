import type { NavLink, SocialLink } from "@/types";

export const mainNav: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/culttwenty", icon: "instagram" },
  { label: "E-Mail", href: "mailto:redaktion@culttwenty.de", icon: "mail" },
];
