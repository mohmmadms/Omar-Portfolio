"use client";

import { useLocale } from "./LocaleProvider";

export default function LocaleToggle({ variant = "compact" }) {
  const { locale, toggle, t } = useLocale();
  const isAr = locale === "ar";

  if (variant === "pill") {
    return (
      <button
        onClick={toggle}
        className="glass px-4 py-2 font-mono text-[10px] tracking-[0.22em] uppercase hover:text-brass transition-colors flex items-center gap-3"
        aria-label={`Switch language to ${isAr ? "English" : "العربية"}`}
      >
        <span className={isAr ? "text-ivory/40" : "text-brass"}>EN</span>
        <span className="h-3 w-px bg-ivory/20" />
        <span className={isAr ? "text-brass font-arabic" : "text-ivory/40 font-arabic"}>
          عربي
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase hover:text-brass transition-colors"
      aria-label={`Switch language to ${isAr ? "English" : "العربية"}`}
    >
      <span className="text-brass">{t.nav.langLabel}</span>
      <span className="h-3 w-px bg-ivory/30" />
      <span className={`opacity-70 group-hover:opacity-100 transition-opacity ${isAr ? "" : "font-arabic"}`}>
        → {t.nav.langOther}
      </span>
    </button>
  );
}
