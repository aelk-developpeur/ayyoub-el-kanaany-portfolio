"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--line)] py-7">
      <div className="container-shell flex flex-col items-center justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row">
        <p>© {new Date().getFullYear()} Ayyoub El Kanaany. {t.footer.made}</p>
        <a href="#home" className="inline-flex items-center gap-1 transition hover:text-[var(--accent)]">
          {t.footer.top} <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
