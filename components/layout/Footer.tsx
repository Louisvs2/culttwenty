import Link from "next/link";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { footerNav, legalNav, socialLinks } from "@/config/nav";
import { siteConfig } from "@/config/site";

const iconMap = {
  instagram: Instagram,
  mail: Mail,
  linkedin: Instagram,
} as const;

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="py-section">
        <AnimatedHeading
          as="h2"
          text="Lass uns etwas Außergewöhnliches bauen."
          className="max-w-4xl font-display text-display-3 font-medium text-paper"
        />
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            data-cursor="pointer"
            className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-paper/90"
          >
            Projekt starten
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            data-cursor="pointer"
            className="font-mono text-sm text-paper/70 transition-colors duration-300 hover:text-paper"
          >
            {siteConfig.email}
          </a>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-2 gap-10 border-t border-line-light py-14 md:grid-cols-4">
          <div>
            <span className="font-mono text-eyebrow uppercase text-paper/50">
              Navigation
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className="text-sm text-paper/80 transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-eyebrow uppercase text-paper/50">
              Rechtliches
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className="text-sm text-paper/80 transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-eyebrow uppercase text-paper/50">
              Social
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target={social.icon === "mail" ? undefined : "_blank"}
                      rel={social.icon === "mail" ? undefined : "noreferrer"}
                      data-cursor="pointer"
                      className="inline-flex items-center gap-2 text-sm text-paper/80 transition-colors duration-300 hover:text-paper"
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <span className="font-mono text-eyebrow uppercase text-paper/50">
              Studio
            </span>
            <p className="mt-5 text-sm text-paper/80">
              {siteConfig.legalName}
              <br />
              {siteConfig.owner}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line-light py-8 text-xs text-paper/50 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {siteConfig.legalName}. Alle Rechte
            vorbehalten.
          </span>
          <span className="font-mono uppercase tracking-wide">
            Designed &amp; built by CultTwenty
          </span>
        </div>
      </Container>
    </footer>
  );
}
