"use client";

import SectionHeader from "../ui/SectionHeader";
import { useLocale } from "../LocaleProvider";

export default function About() {
  const { t, locale } = useLocale();
  const a = t.about;
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";

  return (
    <section id="about" className="station px-8 md:px-12 lg:px-20">
      <SectionHeader
        num={a.num}
        kicker={a.kicker}
        title={
          <>
            {a.titleA}{" "}
            <span className={`brass-text ${locale === "ar" ? "font-arabic" : "font-serif italic"}`}>
              {a.titleHighlight}
            </span>{" "}
            {a.titleB}
          </>
        }
      />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-20">
        <div className={`lg:col-span-7 space-y-6 text-ivory/75 text-base md:text-lg leading-relaxed ${fontBody}`}>
          {a.paragraphs.map((p, i) => (
            <p key={i}>
              {p.parts.map((part, j) => {
                if (part.strong) return <span key={j} className="text-ivory">{part.strong}</span>;
                if (part.brass) return <span key={j} className="text-brass">{part.brass}</span>;
                return <span key={j}>{part.text}</span>;
              })}
            </p>
          ))}
        </div>

        <div className="lg:col-span-5 space-y-4">
          {a.pillars.map((p, i) => (
            <Pillar key={i} {...p} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillar({ label, body, locale }) {
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-serif italic";

  return (
    <div className="glass p-6">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] tracking-[0.22em] uppercase text-brass ${fontMeta}`}>
          {label}
        </span>
      </div>
      <p className={`text-base md:text-lg text-ivory/85 leading-snug ${fontBody}`}>
        {locale === "ar" ? `«${body}»` : `"${body}"`}
      </p>
    </div>
  );
}
