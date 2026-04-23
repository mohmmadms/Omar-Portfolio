"use client";

import SectionHeader from "../ui/SectionHeader";
import { useLocale } from "../LocaleProvider";

export default function Process() {
  const { t, locale } = useLocale();
  const p = t.process;
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";

  return (
    <section id="process" className="station px-8 md:px-12 lg:px-20">
      <SectionHeader num={p.num} kicker={p.kicker} title={p.title} caption={p.caption} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-16">
        {p.steps.map((step, i) => (
          <article
            key={step.title}
            className="border border-ivory/10 p-6"
          >
            <p className={`text-[10px] tracking-[0.22em] uppercase text-brass ${fontMeta}`}>0{i + 1}</p>
            <h3 className={`mt-3 text-xl tracking-tight text-ivory ${locale === "ar" ? "font-arabic leading-[1.35]" : "font-display leading-[1.1]"}`}>
              {step.title}
            </h3>
            <p className={`mt-4 text-sm text-ivory/70 leading-relaxed ${fontBody}`}>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
