"use client";

import { useLocale } from "../LocaleProvider";

export default function Footer() {
  const { t, locale } = useLocale();
  const f = t.footer;
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";

  return (
    <footer className="relative pt-24 pb-10 px-8 md:px-12 lg:px-20 border-t border-ivory/10">
      {/* <div className="overflow-hidden mb-16" dir="ltr">
        <h2 className="font-display tracking-tightest leading-[0.8] text-[22vw] lg:text-[18vw] chrome-text select-none">
          KANAKRIEH
        </h2>
      </div> */}

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className={`text-[10px] tracking-[0.22em] uppercase text-brass mb-6 ${fontMeta}`}>
            {f.legalKicker}
          </div>
          <div className="glass p-6 space-y-3">
            {f.legal.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-6 border-b border-ivory/5 pb-2 last:border-0"
              >
                <span className={`text-[10px] tracking-[0.18em] uppercase text-ivory/45 ${fontMeta}`}>
                  {k}
                </span>
                <span className={`text-sm text-ivory/85 text-end ${fontBody}`}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
          <div>
            <div className={`text-[10px] tracking-[0.22em] uppercase text-brass mb-4 ${fontMeta}`}>
              {f.contactKicker}
            </div>
            <a
              href="mailto:okanakrieh02@hotmail.com"
              className="block font-serif text-xl hover:text-brass transition-colors"
            >
              okanakrieh02@hotmail.com
            </a>
            <a
              href="tel:+962785166620"
              className="block font-mono text-sm text-ivory/70 hover:text-brass transition-colors mt-2"
              dir="ltr"
            >
              +962 785 166 620
            </a>
            <p className={`mt-6 text-sm text-ivory/60 leading-relaxed ${fontBody}`}>
              {f.address}
            </p>
          </div>

          <div>
            <div className={`text-[10px] tracking-[0.22em] uppercase text-brass mb-4 ${fontMeta}`}>
              {f.indexKicker}
            </div>
            <ul className="space-y-2">
              {t.nav.links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={`text-base text-ivory/75 hover:text-brass transition-colors ${fontBody}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={`mt-16 pt-6 border-t border-ivory/10 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.22em] uppercase text-ivory/40 ${fontMeta}`}>
        <span>
          © {new Date().getFullYear()} Kanakrieh · {f.bottomLeft}
        </span>
        <span className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          {f.bottomMid}
        </span>
        <span>{f.bottomRight}</span>
      </div>
    </footer>
  );
}
