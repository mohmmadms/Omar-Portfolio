"use client";

import Magnetic from "../ui/Magnetic";
import { useLocale } from "../LocaleProvider";

export default function FinalCta() {
  const { t, locale } = useLocale();
  const c = t.finalCta;
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";

  return (
    <section className="px-8 md:px-12 lg:px-20 pb-8 md:pb-14">
      <div className="border border-ivory/10 p-7 md:p-10">
        <p className={`text-[10px] tracking-[0.24em] uppercase text-brass ${fontMeta}`}>{c.kicker}</p>
        <h2 className={`mt-4 text-3xl md:text-5xl tracking-tight ${
          locale === "ar" ? "font-arabic leading-[1.3]" : "font-display leading-[1.05]"
        }`}>
          <span className="text-ivory">{c.titleA}</span>{" "}
          <span className={`${locale === "ar" ? "font-arabic" : "font-serif italic"} text-brass`}>{c.titleHighlight}</span>{" "}
          <span className="text-ivory">{c.titleB}</span>
        </h2>
        <p className={`mt-5 max-w-3xl text-base md:text-lg text-ivory/70 leading-relaxed ${fontBody}`}>{c.caption}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Magnetic href="#contact" primary>{c.primary}</Magnetic>
          <Magnetic href="tel:+962785166620">
            <span dir="ltr">{c.secondary}</span>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
