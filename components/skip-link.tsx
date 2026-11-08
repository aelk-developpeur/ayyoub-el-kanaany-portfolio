"use client";

import { useLanguage } from "@/components/language-provider";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only z-[100] rounded-full bg-[var(--accent)] px-5 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {t.accessibility.skip}
    </a>
  );
}
