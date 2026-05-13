"use client";

import Magnetic from "../ui/Magnetic";
import { useLocale } from "../LocaleProvider";

export default function Hero() {
  const { t, locale } = useLocale();

  const fontBody = locale === "ar" ? "font-arabic" : "font-display";
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const actions = t.hero.actions ?? [
    { label: t.hero.ctaPrimary, href: "#contact", primary: true },
    { label: t.hero.ctaPhone, href: "tel:+962785166620" },
    { label: t.hero.ctaEmail, href: "#services" },
  ];
  const highlightsTitle = t.hero.highlightsTitle ?? t.hero.panelKicker;
  const highlights = t.hero.highlights ?? t.hero.panelBullets ?? [];

  return (
    <section className="relative px-8 md:px-12 lg:px-20 pt-28 pb-14">
      <div className="max-w-5xl">
        <p className={`text-[10px] md:text-xs tracking-[0.24em] uppercase text-brass mb-6 ${fontMeta}`}>
          {t.hero.kicker}
        </p>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl tracking-tight ${
            locale === "ar" ? "font-arabic leading-[1.25]" : "font-display leading-[1.08]"
          }`}
        >
          {t.hero.h1a}
          <br />
          <span className={locale === "ar" ? "font-arabic" : "font-serif italic"}>{t.hero.h1b}</span>
        </h1>

        <p className={`mt-6 max-w-3xl text-base md:text-lg text-ivory/80 leading-relaxed ${fontBody}`}>
          {t.hero.lede}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {actions.map((action) => (
            <Magnetic key={action.label} href={action.href} primary={action.primary}>
              {action.label}
            </Magnetic>
          ))}
        </div>

        <div className="mt-8 border border-ivory/10 p-5">
          <p className={`text-[10px] tracking-[0.22em] uppercase text-brass ${fontMeta}`}>{highlightsTitle}</p>
          <ul className={`mt-4 grid md:grid-cols-2 gap-2 text-sm text-ivory/80 ${fontBody}`}>
            {highlights.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
