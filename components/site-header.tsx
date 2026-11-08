"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/85 backdrop-blur-xl">
      <nav
        className="container-shell flex h-[4.5rem] items-center justify-between"
        aria-label="Navigation principale"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--accent)] text-xs font-bold text-ink">
            AK
          </span>
          <span>Ayyoub<span className="text-[var(--accent)]">.</span></span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-ink transition hover:bg-[var(--accent-strong)]"
          >
            {t.nav.talk}
          </a>
          <button
            type="button"
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="rounded-full border border-[var(--line)] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)] hover:text-[var(--accent)]"
            aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)]"
            aria-label={open ? t.accessibility.closeMenu : t.accessibility.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[var(--line)] bg-[var(--background)] md:hidden">
          <div className="container-shell flex flex-col py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl px-3 py-3 text-sm font-semibold text-[var(--accent)]"
              onClick={() => setOpen(false)}
            >
              {t.nav.contact}
            </a>
            <button
              type="button"
              onClick={() => { setLocale(locale === "fr" ? "en" : "fr"); setOpen(false); }}
              className="rounded-xl px-3 py-3 text-left text-sm text-[var(--muted)]"
            >
              {locale === "fr" ? "English" : "Français"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
