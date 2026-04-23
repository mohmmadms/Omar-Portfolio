"use client";

import Navigation from "./Navigation";
import { LocaleProvider } from "./LocaleProvider";

export default function Shell({ children }) {
  return (
    <LocaleProvider>
      <div className="site-bg" />
      <div className="vignette" />
      <Navigation />
      <main className="relative z-10">{children}</main>
    </LocaleProvider>
  );
}
