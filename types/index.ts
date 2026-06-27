export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "mail" | "linkedin";
}

export type ServiceCategory = "video" | "web" | "3d" | "pitch";

export interface Service {
  id: ServiceCategory;
  index: string;
  title: string;
  shortTitle: string;
  pitch: string;
  description: string;
  capabilities: string[];
  image: string;
  gallery: string[];
}

export interface WorkCategory {
  id: string;
  label: string;
}

export interface WorkItem {
  slug: string;
  title: string;
  client: string;
  year: string;
  categories: ServiceCategory[];
  summary: string;
  description: string;
  challenge: string;
  approach: string;
  result: string;
  coverImage: string;
  gallery: string[];
  size: "lg" | "md";
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface StatEntry {
  value: string;
  label: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}
