"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { locale, t } = useLanguage();

  return (
    <section id="about" className="section-space border-t border-[var(--line)]">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="pt-1">
            <p className="text-lg leading-8 text-[var(--foreground)] sm:text-xl sm:leading-9">
              {t.about.intro}
            </p>
            <p className="muted mt-5 leading-7">
              {t.about.detail}
            </p>
            <ul className="mt-8 space-y-3">
              {t.about.values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                  <Check size={17} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
            <a
              href="/cv-ayoub-el-kanaany.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:gap-3"
            >
              {t.about.cv} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="mt-10 flex flex-wrap gap-2" aria-label={locale === "fr" ? "Langues parlées" : "Languages spoken"}>
              {t.about.languages.map((language) => (
                <span key={language} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
