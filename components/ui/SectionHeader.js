"use client";

import { useLocale } from "../LocaleProvider";

export default function SectionHeader({ num, kicker, title, caption }) {
  const { locale } = useLocale();
  const fontTitle = locale === "ar" ? "font-arabic" : "font-display";
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";
  const metaTone = locale === "ar" ? "text-xs tracking-[0.08em]" : "text-[10px] tracking-[0.24em] sm:tracking-[0.3em] uppercase";

  return (
    <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-end">
      <div className="lg:col-span-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-5">
          <span className={`${metaTone} text-brass ${locale === "ar" ? "font-arabic" : "font-mono"}`}>
            · {num}
          </span>
          <span className="hidden sm:block h-px w-12 bg-brass/40" />
          <span className={`${metaTone} text-ivory/60 ${fontMeta}`}>
            {kicker}
          </span>
        </div>
        <h2
          className={`text-3xl md:text-5xl lg:text-6xl tracking-tight text-ivory ${
            locale === "ar" ? "leading-[1.25] py-1" : "leading-[1.0]"
          } ${fontTitle}`}
        >
          {title}
        </h2>
      </div>
      {caption && (
        <p
          className={`lg:col-span-4 text-ivory/70 ${locale === "ar" ? "text-base md:text-lg" : "text-sm md:text-base"} leading-relaxed max-w-md ${fontBody}`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
