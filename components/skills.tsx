"use client";

import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-space bg-[var(--surface)]">
      <div className="container-shell">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="surface-card rounded-3xl p-6 sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--muted)]">0{index + 1}</span>
                <ArrowUpRight size={17} className="text-[var(--accent)]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{t.skills.groups[index].title}</h3>
              <p className="muted mt-2 min-h-12 text-sm leading-6">{t.skills.groups[index].description}</p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--background)]/60 px-3 py-2 text-xs text-[var(--muted)]"
                  >
                    <Icon size={14} className="text-[var(--accent)]" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
