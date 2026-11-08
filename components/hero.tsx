"use client";

import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-[92svh] items-center overflow-hidden pt-20">
      <div className="grid-dots absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="soft-glow pointer-events-none absolute -right-32 top-20 h-[36rem] w-[36rem]" aria-hidden="true" />
      <div className="container-shell relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 text-xs text-[var(--muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <MapPin size={13} aria-hidden="true" />
            {t.hero.location}
          </div>
          <p className="eyebrow mb-4">{t.hero.eyebrow}</p>
          <h1 className="max-w-4xl text-[clamp(3.35rem,9vw,7.2rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
            {t.hero.headlineOne}
            <br />
            {t.hero.headlineTwo} <span className="text-[var(--accent)]">{t.hero.headlineAccent}</span>
          </h1>
          <p className="muted mt-7 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
            {t.hero.intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              {t.hero.projects} <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--line)] px-6 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {t.hero.contact} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--muted)]">
            {t.hero.chips.map((chip) => <span key={chip}>{chip}</span>)}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[390px]"
        >
          <div className="soft-glow absolute -inset-8 opacity-80" aria-hidden="true" />
          <div className="surface-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
            <div className="mb-9 flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">{t.hero.profile}</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                {t.hero.available}
              </span>
            </div>
            <div className="relative mx-auto grid aspect-square w-[76%] place-items-center overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-raised)]">
              <div className="absolute inset-0 grid-dots opacity-70" aria-hidden="true" />
              <div className="absolute -bottom-16 h-48 w-48 rounded-full bg-[var(--accent)]/10 blur-2xl" aria-hidden="true" />
              <span className="relative text-7xl font-semibold tracking-[-0.09em] text-[var(--accent)]">
                AK
              </span>
              <span className="absolute bottom-4 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                Casablanca · MA
              </span>
            </div>
            <div className="mt-7 flex items-end justify-between">
              <div>
                <p className="font-medium">Ayyoub El Kanaany</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{t.hero.role}</p>
              </div>
              <a
                href="/cv-ayoub-el-kanaany.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label={t.hero.cv}
              >
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="surface-card absolute -left-7 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-full px-4 py-3 text-xs shadow-xl sm:flex">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Spring Boot <span className="text-[var(--muted)]">×</span> Angular
          </div>
        </motion.div>
      </div>
    </section>
  );
}
