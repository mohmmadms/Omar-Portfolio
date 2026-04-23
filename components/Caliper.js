"use client";

import { useLocale } from "./LocaleProvider";

export default function Caliper({ active, toggle }) {
  const { locale } = useLocale();
  return (
    <button
      onClick={toggle}
      className={`fixed bottom-6 ${locale === "ar" ? "left-6" : "right-6"} z-[85] glass px-3 py-2 font-mono text-[10px] tracking-[0.22em] uppercase hover:text-brass transition-colors`}
      aria-pressed={active}
      title={locale === "ar" ? "تبديل شبكة المعايرة (M)" : "Toggle calibration grid (M)"}
    >
      <span className={active ? "text-brass" : "text-ivory/60"}>
        ◧ {locale === "ar" ? "معاير · M" : "Calibrate · M"}
      </span>
    </button>
  );
}
