"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-nav transition-colors duration-500",
        isScrolled || isMenuOpen ? "glass border-b border-line" : "bg-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-[var(--nav-height)] items-center justify-between"
          aria-label="Hauptnavigation"
        >
          <Link
            href="/"
            data-cursor="pointer"
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            {siteConfig.name}
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {mainNav.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className={cn(
                      "relative font-mono text-sm uppercase tracking-wide text-ink/60 transition-colors duration-300 hover:text-ink",
                      isActive && "text-ink",
                    )}
                  >
                    {link.label}
                    {isActive ? (
                      <span className="absolute -bottom-1.5 left-0 h-px w-full bg-signal" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <MagneticButton>
              <Button href="/contact" variant="primary" withIcon>
                Projekt starten
              </Button>
            </MagneticButton>
          </div>

          <button
            type="button"
            data-cursor="pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <Container className="flex h-full flex-col justify-between pb-12 pt-6">
              <ul className="mt-10 flex flex-col gap-2">
                {mainNav.map((link, index) => (
                  <li key={link.href} className="overflow-hidden border-b border-line">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.08 * index,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-6 font-display text-display-3 font-medium text-ink"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-6">
                <Button href="/contact" variant="primary" withIcon className="w-fit">
                  Projekt starten
                </Button>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-sm text-ink/60"
                >
                  {siteConfig.email}
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
