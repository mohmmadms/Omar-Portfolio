"use client";

import SectionHeader from "../ui/SectionHeader";
import { useLocale } from "../LocaleProvider";

export default function Clients() {
  const { t, locale } = useLocale();
  const c = t.clients;
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";

  return (
    <section id="clients" className="station px-8 md:px-12 lg:px-20">
      <SectionHeader
        num={c.num}
        kicker={c.kicker}
        title={
          <>
            {c.titleA}{" "}
            <span className={`brass-text ${locale === "ar" ? "font-arabic" : "font-serif italic"}`}>
              {c.titleHighlight}
            </span>
          </>
        }
        caption={c.caption}
      />

      <div className="space-y-3 mt-14">
          {c.items.map((item) => (
            <div
              key={item.tag}
              className="group relative glass hover:glass-strong p-5 md:p-6 flex items-center gap-4 md:gap-6 transition-colors"
            >
              <span className={`text-[11px] tracking-[0.22em] uppercase text-brass min-w-[3rem] ${fontMeta}`}>
                {item.tag}
              </span>
              <span className="h-px flex-1 bg-ivory/10" />
              <span className={`text-sm md:text-lg text-ivory/85 flex-[3] group-hover:text-ivory transition-colors ${fontBody}`}>
                {item.title}
              </span>
              <span className={`text-[10px] tracking-[0.22em] text-ivory/40 ${fontMeta}`}>
                {c.orbit} · 0{item.orbit}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
}
