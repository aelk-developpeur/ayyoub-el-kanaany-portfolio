"use client";

import { GraduationCap, BriefcaseBusiness } from "lucide-react";
import { education, experience } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";

export function Experience() {
  const { locale, t } = useLanguage();

  return (
    <section id="experience" className="section-space bg-[var(--surface)]">
      <div className="container-shell">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div>
            <h3 className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
              <BriefcaseBusiness size={17} className="text-[var(--accent)]" aria-hidden="true" />
              {t.experience.jobs}
            </h3>
            <ol className="space-y-0">
              {experience.map((item, index) => (
                <li key={item.role} className="relative border-l border-[var(--line)] pb-9 pl-7 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-[var(--accent)] ring-4 ring-[var(--surface)]" aria-hidden="true" />
                  <p className="text-xs font-medium text-[var(--accent)]">{item.period}</p>
                  <h4 className="mt-2 text-lg font-semibold tracking-tight">{locale === "fr" ? item.role : item.roleEn}</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.organization}</p>
                  <p className="muted mt-4 text-sm leading-7">{locale === "fr" ? item.description : item.descriptionEn}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {(locale === "fr" ? item.tags : item.tagsEn).map((tag) => (
                      <li key={tag} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[10px] text-[var(--muted)]">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {index === 0 && (
                    <p className="mt-3 text-[10px] text-[var(--muted)]">
                      {t.experience.dateNote}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
              <GraduationCap size={18} className="text-[var(--accent)]" aria-hidden="true" />
              {t.experience.education}
            </h3>
            <ol className="space-y-0">
              {education.map((item) => (
                <li key={item.title} className="relative border-l border-[var(--line)] pb-8 pl-7 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-[var(--accent)] bg-[var(--surface)]" aria-hidden="true" />
                  <p className="text-xs font-medium text-[var(--accent)]">{item.period}</p>
                  <h4 className="mt-2 font-semibold">{locale === "fr" ? item.title : item.titleEn}</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.organization}</p>
                  {(locale === "fr" ? item.detail : item.detailEn) && (
                    <p className="muted mt-2 text-xs">{locale === "fr" ? item.detail : item.detailEn}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
