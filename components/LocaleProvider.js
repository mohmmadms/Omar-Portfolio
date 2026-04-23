"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { copy, isRTL } from "@/lib/copy";

const Ctx = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (saved === "ar" || saved === "en") setLocale(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    html.setAttribute("lang", locale);
    html.setAttribute("dir", isRTL(locale) ? "rtl" : "ltr");
    if (hydrated) localStorage.setItem("locale", locale);
  }, [locale, hydrated]);

  const toggle = useCallback(() => {
    setLocale((l) => (l === "en" ? "ar" : "en"));
  }, []);

  const t = copy[locale];

  return (
    <Ctx.Provider value={{ locale, setLocale, toggle, t, rtl: isRTL(locale) }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
