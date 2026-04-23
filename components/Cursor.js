"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
    };

    const raf = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring) ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      requestAnimationFrame(raf);
    };

    const hoverIn = () => {
      ring?.classList.add("scale-[2]");
      ring?.classList.add("bg-brass/10");
    };
    const hoverOut = () => {
      ring?.classList.remove("scale-[2]");
      ring?.classList.remove("bg-brass/10");
    };

    window.addEventListener("mousemove", move);
    document
      .querySelectorAll("a, button, [data-magnetic]")
      .forEach((el) => {
        el.addEventListener("mouseenter", hoverIn);
        el.addEventListener("mouseleave", hoverOut);
      });

    raf();
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-[6px] w-[6px] rounded-full bg-brass"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-9 w-9 rounded-full border border-ivory/30 transition-[transform,background-color] duration-300 ease-out"
      />
    </>
  );
}
