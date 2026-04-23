"use client";

import SectionHeader from "../ui/SectionHeader";
import { useLocale } from "../LocaleProvider";

export default function Services() {
  const { t, locale } = useLocale();
  const s = t.services;
  const fontTitle = locale === "ar" ? "font-arabic" : "font-display";
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";

  return (
    <section id="services" className="station px-8 md:px-12 lg:px-20">
      <SectionHeader
        num={s.num}
        kicker={s.kicker}
        title={
          <>
            {s.titleA}{" "}
            <span className={`brass-text ${locale === "ar" ? "font-arabic" : "font-serif italic"}`}>
              {s.titleHighlight}
            </span>
            <br />
            {s.titleB}
          </>
        }
        caption={s.caption}
      />

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-14">
        {s.items.map((item) => (
          <article
            key={item.num}
            className="border border-ivory/10 p-6 md:p-8"
          >
            <div className={`text-[10px] tracking-[0.22em] text-brass uppercase ${fontMeta}`}>
              {item.num} · {item.tag}
            </div>

            <h3 className={`mt-5 text-2xl md:text-3xl tracking-tight text-ivory ${
              locale === "ar" ? "leading-[1.3] py-1" : "leading-[1.05]"
            } ${fontTitle}`}>
              {item.title}
            </h3>

            <ul className={`mt-8 space-y-2.5 text-sm md:text-base text-ivory/75 leading-relaxed ${fontBody}`}>
              {item.items.map((bullet, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-brass mt-[0.6em] h-px w-3 bg-current shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`inline-flex mt-7 text-[10px] tracking-[0.22em] uppercase text-brass hover:text-ivory transition-colors ${fontMeta}`}
            >
              {s.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
