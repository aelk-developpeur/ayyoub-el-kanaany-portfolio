"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";

type FormStatus = { kind: "success" | "error"; message: string } | null;

export function Contact() {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          locale,
        }),
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? t.contact.sendFailed);
      }

      setStatus({
        kind: "success",
        message: result.message ?? (locale === "fr" ? "Message envoyé." : "Message sent."),
      });
      form.reset();
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error
          ? error.message
          : t.contact.sendFailed,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="space-y-7">
            <a href="mailto:elkanaany.ayyoub.ing@gmail.com" className="group flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--surface-raised)] text-[var(--accent)]">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-[var(--muted)]">{t.contact.email}</span>
                <span className="mt-1 block text-sm transition group-hover:text-[var(--accent)]">elkanaany.ayyoub.ing@gmail.com</span>
              </span>
            </a>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--surface-raised)] text-[var(--accent)]">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-[var(--muted)]">{t.contact.location}</span>
                <span className="mt-1 block text-sm">{t.contact.locationValue}</span>
              </span>
            </div>
            <div className="border-t border-[var(--line)] pt-6">
              <p className="mb-4 text-xs text-[var(--muted)]">{t.contact.socials}</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2.5 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={locale === "fr" ? "GitHub — remplacer par le profil d’Ayyoub" : "GitHub — replace with Ayyoub’s profile"}
                >
                  <Github size={15} aria-hidden="true" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2.5 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={locale === "fr" ? "LinkedIn — remplacer par le profil d’Ayyoub" : "LinkedIn — replace with Ayyoub’s profile"}
                >
                  <Linkedin size={15} aria-hidden="true" /> LinkedIn
                </a>
              </div>
              <p className="mt-3 text-[10px] text-[var(--muted)]">{t.contact.socialNote}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="surface-card rounded-3xl p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-medium">
                {t.contact.name}
                <input
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder={t.contact.yourName}
                  className="mt-2.5 min-h-12 w-full rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]"
                />
              </label>
              <label className="text-xs font-medium">
                {t.contact.email}
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder={t.contact.emailPlaceholder}
                  className="mt-2.5 min-h-12 w-full rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]"
                />
              </label>
            </div>
            <label className="mt-5 block text-xs font-medium">
              {t.contact.message}
              <textarea
                name="message"
                required
                maxLength={5000}
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="mt-2.5 w-full resize-y rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm leading-6 text-[var(--foreground)] placeholder:text-[var(--muted)]"
              />
            </label>
            {status && (
              <p
                className={`mt-4 text-sm ${status.kind === "success" ? "text-[var(--accent)]" : "text-red-500"}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-ink transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitting ? t.contact.sending : t.contact.send}
              <Send size={15} aria-hidden="true" />
            </button>
            <p className="muted mt-4 text-[10px] leading-5">
              {t.contact.privacy}
            </p>
          </form>
        </div>
        <div className="mt-16 border-t border-[var(--line)] pt-6 text-center">
          <a href="mailto:elkanaany.ayyoub.ing@gmail.com" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]">
            {t.contact.direct} <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
