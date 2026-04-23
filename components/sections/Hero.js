"use client";

import Magnetic from "../ui/Magnetic";
import { useLocale } from "../LocaleProvider";

export default function Hero() {
  const { t, locale } = useLocale();

  const fontBody = locale === "ar" ? "font-arabic" : "font-display";
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";

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
            <Magnetic href="#contact" primary>
              {t.hero.ctaPrimary}
            </Magnetic>
            <Magnetic href="tel:+962785166620">
              <span dir="ltr">{t.hero.ctaPhone}</span>
            </Magnetic>
            <Magnetic href="#services">
              {t.hero.ctaEmail}
            </Magnetic>
        </div>

        <div className="mt-8 border border-ivory/10 p-5">
          <p className={`text-[10px] tracking-[0.22em] uppercase text-brass ${fontMeta}`}>{t.hero.panelKicker}</p>
          <p className={`mt-3 text-sm md:text-base text-ivory/80 ${fontBody}`}>{t.hero.panelBody}</p>
          <ul className={`mt-4 space-y-2 text-sm text-ivory/75 ${fontBody}`}>
            {t.hero.panelBullets.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
