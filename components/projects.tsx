"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";

export function Projects() {
  const { locale, t } = useLanguage();

  return (
    <section id="projects" className="section-space">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
          <a
            href="mailto:elkanaany.ayyoub.ing@gmail.com"
            className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--accent)] md:mb-16"
          >
            {t.projects.discussion} <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] ${
                project.featured ? "md:col-span-2 md:grid md:grid-cols-[1.05fr_0.95fr]" : ""
              }`}
            >
              <div className={`relative overflow-hidden bg-[var(--surface-raised)] ${
                project.featured ? "aspect-[16/9] md:aspect-auto md:min-h-[330px]" : "aspect-[16/10]"
              }`}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes={project.featured ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white backdrop-blur">
                  {locale === "fr" ? project.category : project.categoryEn}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="eyebrow mb-3">{project.number} / Projet</p>
                <h3 className="text-2xl font-semibold tracking-tight">{locale === "fr" ? project.title : project.titleEn}</h3>
                <p className="muted mt-4 text-sm leading-7">{locale === "fr" ? project.description : project.descriptionEn}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="rounded-full bg-[var(--surface-raised)] px-3 py-1.5 text-[11px] text-[var(--muted)]">
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-4 border-t border-[var(--line)] pt-5 text-xs">
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-[var(--accent)]">
                      {t.projects.demo} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-[var(--muted)]">{t.projects.demoMissing}</span>
                  )}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)]">
                      <Github size={14} aria-hidden="true" /> GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-[var(--muted)]">
                      <Github size={14} aria-hidden="true" /> {t.projects.privateCode}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="muted mt-6 text-xs leading-5">
          {t.projects.note}
        </p>
      </div>
    </section>
  );
}
