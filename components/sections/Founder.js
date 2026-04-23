"use client";

import SectionHeader from "../ui/SectionHeader";
import { useLocale } from "../LocaleProvider";

export default function Founder() {
  const { t, locale } = useLocale();
  const f = t.founder;
  const fontTitle = locale === "ar" ? "font-arabic" : "font-serif";
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";

  return (
    <section id="founder" className="station px-8 md:px-12 lg:px-20">
      <SectionHeader
        num={f.num}
        kicker={f.kicker}
        title={
          <>
            {f.titleA}{" "}
            <span className={`brass-text ${locale === "ar" ? "font-arabic" : "font-serif italic"}`}>
              {f.titleHighlight}
            </span>
          </>
        }
        caption={f.caption}
      />

      <div className="grid lg:grid-cols-12 gap-10 mt-20">
        <div className="lg:col-span-5 border border-ivory/10 p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className={`text-[10px] tracking-[0.22em] uppercase text-ivory/60 ${fontMeta}`}>
              {f.cardSubject}
            </span>
            <span className={`text-[10px] tracking-[0.22em] uppercase text-cyan ${fontMeta}`}>
              {f.cardOnRecord}
            </span>
          </div>

          <h3 className={`mt-6 text-2xl md:text-3xl leading-tight text-ivory ${fontTitle}`}>
            {f.titleA}{" "}
            <span className={`${locale === "ar" ? "font-arabic" : "italic"} text-brass`}>
              {f.titleHighlight}
            </span>
          </h3>

          <p className={`text-[10px] tracking-[0.22em] uppercase text-ivory/50 mt-3 ${fontMeta}`}>
            {f.cardRole}
          </p>
          <p className={`mt-2 text-[10px] tracking-[0.22em] uppercase text-brass ${fontMeta}`}>
            {f.yearsBadge}
          </p>

          <div className="hairline my-5" />
          <p className={`text-sm md:text-base text-ivory/75 leading-relaxed ${fontBody}`}>{f.caption}</p>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-4">
            {f.timeline.map((item, i) => (
              <li
                key={i}
                className="group grid grid-cols-[90px_1fr] md:grid-cols-[140px_1fr] gap-6 items-start border-t border-ivory/10 pt-4"
              >
                <span className="font-mono text-xs md:text-sm tracking-[0.18em] uppercase text-brass">
                  {item.year}
                </span>
                <span className={`text-xl md:text-2xl text-ivory/85 group-hover:text-ivory transition-colors ${fontBody}`}>
                  {item.note}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-3 gap-3" dir="ltr">
            {["GSO", "GULFMET", "ILAC", "BIPM", "OIML", "UNIDO"].map((x) => (
              <div
                key={x}
                className="glass px-4 py-5 font-mono text-[11px] tracking-[0.22em] uppercase text-ivory/70 text-center"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
