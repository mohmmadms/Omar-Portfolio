"use client";

import { useState } from "react";
import LocaleToggle from "./LocaleToggle";
import { useLocale } from "./LocaleProvider";

export default function Navigation() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);

  const links = t.nav.links;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-10 py-4 bg-abyss/90 backdrop-blur-sm border-b border-ivory/10">
        <div className="flex items-center justify-between gap-5">
        <a
          href="#top"
          className="flex items-center gap-3 text-ivory hover:text-brass transition-colors"
        >
          <Mark />
          <span className={`text-[11px] tracking-[0.22em] uppercase ${locale === "ar" ? "font-arabic" : "font-mono"}`}>
            {t.nav.brand}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-[11px] tracking-[0.18em] uppercase text-ivory/70 font-mono">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-ivory transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-ivory/60 font-mono">
          <a href="#contact" className="text-brass hover:text-ivory transition-colors">
            {locale === "ar" ? "اطلب استشارة" : "Request Consultation"}
          </a>
          <LocaleToggle />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="group flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase hover:text-brass transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`hidden sm:inline ${locale === "ar" ? "font-arabic" : "font-mono"}`}>
            {t.nav.indexLabel}
          </span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
          </span>
        </button>
        </div>
      </header>

      {open && (
        <div className="fixed top-[72px] left-0 right-0 z-40 px-8 md:px-10 pb-4">
          <div className="glass p-4 md:p-5">
            <ul className="grid sm:grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 text-sm tracking-[0.12em] uppercase text-ivory/80 hover:text-brass ${
                      locale === "ar" ? "font-arabic" : "font-mono"
                    }`}
                  >
                    {l.num} · {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeOpacity="0.7" />
      <circle cx="14" cy="14" r="2" fill="#C9A86A" />
      <line x1="14" y1="0" x2="14" y2="4" stroke="currentColor" strokeOpacity="0.7" />
      <line x1="14" y1="24" x2="14" y2="28" stroke="currentColor" strokeOpacity="0.7" />
      <line x1="0" y1="14" x2="4" y2="14" stroke="currentColor" strokeOpacity="0.7" />
      <line x1="24" y1="14" x2="28" y2="14" stroke="currentColor" strokeOpacity="0.7" />
    </svg>
  );
}
