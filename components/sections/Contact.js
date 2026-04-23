"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Magnetic from "../ui/Magnetic";
import { useLocale } from "../LocaleProvider";

export default function Contact() {
  const { t, locale } = useLocale();
  const c = t.contact;
  const [sent, setSent] = useState(false);
  const [serviceType, setServiceType] = useState(c.dials[0] ?? "");

  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";
  const metaText = locale === "ar" ? "text-xs tracking-[0.08em]" : "text-[10px] tracking-[0.22em] uppercase";

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="station px-8 md:px-12 lg:px-20">
      <SectionHeader
        num={c.num}
        kicker={c.kicker}
        title={
          <>
            {c.titleA}{" "}
            <span className={`brass-text ${locale === "ar" ? "font-arabic" : "font-serif italic"}`}>
              {c.titleHighlight}
            </span>
            {c.titleB}
          </>
        }
        caption={c.caption}
      />

      <div className="grid lg:grid-cols-12 gap-10 mt-20">
        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 glass p-6 md:p-10"
        >
          <div className="flex items-center justify-between mb-6">
            <span className={`${metaText} text-brass ${fontMeta}`}>
              {c.instrument}
            </span>
            <span className={`${metaText} text-cyan ${fontMeta}`}>
              {c.ready}
            </span>
          </div>

          <div className="mb-6">
            <label className={`${metaText} text-ivory/60 mb-3 block ${fontMeta}`}>
              {c.dialLabel}
            </label>
            <input type="hidden" name="serviceType" value={serviceType} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {c.dials.map((d) => {
                const active = serviceType === d;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setServiceType(d)}
                    className={`border px-3 py-3 text-start transition-colors ${
                      active
                        ? "border-brass bg-brass/10 text-ivory"
                        : "border-ivory/15 text-ivory/70 hover:border-brass/50 hover:text-ivory"
                    }`}
                  >
                    <span className={`block ${metaText} ${fontMeta}`}>{d}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label={c.fields.name} name="name" locale={locale} />
            <Field label={c.fields.org} name="org" locale={locale} />
            <Field label={c.fields.email} name="email" type="email" wide locale={locale} />
          </div>
          <div className="mt-5">
            <Field label={c.fields.message} name="message" textarea wide locale={locale} />
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
            <div className={`${metaText} text-ivory/40 ${fontMeta}`}>
              {c.signal}
            </div>
            <Magnetic primary onClick={() => {}}>
              {c.transmit}
            </Magnetic>
          </div>

          {sent && (
            <div className={`mt-6 glass px-4 py-3 text-xs text-cyan ${fontMeta}`}>
              {c.sent}
            </div>
          )}
        </form>

        <div className="lg:col-span-5 space-y-4">
          {c.cards.map((card, i) => (
            <ContactRow key={i} {...card} locale={locale} fontMeta={fontMeta} fontBody={fontBody} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea = false, wide = false, locale }) {
  const fontMeta = locale === "ar" ? "font-arabic" : "font-mono";
  const fontBody = locale === "ar" ? "font-arabic" : "font-display";
  const metaText = locale === "ar" ? "text-xs tracking-[0.08em]" : "text-[10px] tracking-[0.22em] uppercase";
  return (
    <label className={`block ${wide ? "md:col-span-2" : ""}`}>
      <span className={`${metaText} text-ivory/55 mb-2 block ${fontMeta}`}>
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className={`w-full bg-transparent border-b border-ivory/15 focus:border-brass outline-none py-3 text-ivory placeholder-ivory/30 resize-none transition-colors ${fontBody}`}
          placeholder="—"
        />
      ) : (
        <input
          type={type}
          name={name}
          className={`w-full bg-transparent border-b border-ivory/15 focus:border-brass outline-none py-3 text-ivory placeholder-ivory/30 transition-colors ${fontBody}`}
          placeholder="—"
        />
      )}
    </label>
  );
}

function ContactRow({ label, value, lines, href, locale, fontMeta, fontBody }) {
  const Inner = href ? "a" : "div";
  const isPhone = href?.startsWith("tel:");
  const isEmail = href?.startsWith("mailto:");
  const metaText = locale === "ar" ? "text-xs tracking-[0.08em]" : "text-[10px] tracking-[0.22em] uppercase";
  return (
    <div className="glass p-5 hover:glass-strong transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className={`${metaText} text-brass ${fontMeta}`}>
          {label}
        </span>
      </div>
      <Inner
        href={href}
        className={`block text-lg md:text-xl text-ivory/90 hover:text-brass transition-colors leading-snug ${fontBody}`}
        dir={isPhone || isEmail ? "ltr" : undefined}
      >
        {lines ? lines.map((l, i) => <span key={i} className="block">{l}</span>) : value}
      </Inner>
    </div>
  );
}
