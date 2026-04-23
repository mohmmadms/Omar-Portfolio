"use client";

export default function Magnetic({ children, href, primary = false, onClick }) {
  const Tag = href ? "a" : "button";
  const props = href ? { href } : { onClick };

  return (
    <Tag
      onClick={onClick}
      className={`magnetic ${primary ? "magnetic-primary" : ""} font-mono text-[11px] tracking-[0.22em] uppercase`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
