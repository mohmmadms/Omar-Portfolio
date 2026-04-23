"use client";

import { useLocale } from "../LocaleProvider";

export default function Marquee() {
  const { t, locale } = useLocale();
  const row = [...t.marquee, ...t.marquee];
  return (
    <section className="py-10 border-y border-ivory/10 bg-abyss/30 backdrop-blur-sm overflow-hidden" dir="ltr">
      <div className="marquee-track gap-10 md:gap-16">
        {row.map((w, i) => (
          <span
            key={i}
            className={`flex items-center gap-10 md:gap-16 text-xs md:text-sm tracking-[0.3em] uppercase text-ivory/50 ${locale === "ar" ? "font-arabic" : "font-mono"}`}
          >
            {w}
            <span className="text-brass">◉</span>
          </span>
        ))}
      </div>
    </section>
  );
}
