"use client";

import { useLocale } from "../LocaleProvider";

export default function TrustIndicators() {
  const { t, locale } = useLocale();
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";

  return (
    <section className="px-8 md:px-12 lg:px-20 pb-8 md:pb-14">
      <div className="border border-ivory/10 p-5 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className={`text-[10px] tracking-[0.24em] uppercase text-brass ${fontMeta}`}>
            {t.trust.kicker}
          </p>
          <a href="#contact" className={`text-[10px] tracking-[0.2em] uppercase text-ivory/70 hover:text-brass ${fontMeta}`}>
            {t.trust.link}
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {t.trust.items.map((item) => (
            <article
              key={item.label}
              className="border border-ivory/10 p-4 md:p-5"
            >
              <p className={`text-3xl md:text-4xl tracking-tight text-ivory ${locale === "ar" ? "font-arabic" : "font-display"}`}>
                {item.value}
              </p>
              <p className={`mt-2 text-xs tracking-[0.2em] uppercase text-brass/80 ${fontMeta}`}>{item.label}</p>
              <p className={`mt-3 text-sm text-ivory/65 leading-relaxed ${fontBody}`}>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
