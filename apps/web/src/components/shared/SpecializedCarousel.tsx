"use client";

import { useState } from "react";
import Image from "next/image";
import { brand } from "@/config/brand";

const cards = [
  {
    img:   brand.images.gallery[0].src,
    label: "Masonry & Tile",
    title: "Artisanal Restoration",
    desc:  "Restoring the mosaic beauty of pool linings using period-correct materials and modern sealing techniques.",
  },
  {
    img:   brand.images.gallery[5].src,
    label: "Illumination",
    title: "Hydraulic Light Design",
    desc:  "Custom LED integration to transform your pool into a nocturnal masterpiece after twilight.",
  },
  {
    img:   brand.images.gallery[2].src,
    label: "Eco-Balance",
    title: "Organic Purification",
    desc:  "Ozone and UV-C purification systems that minimize chemical reliance for a gentler, more natural swim.",
  },
];

export function SpecializedCarousel() {
  const [active, setActive] = useState(0);
  const n = cards.length;

  const prev = () => setActive((i) => (i - 1 + n) % n);
  const next = () => setActive((i) => (i + 1) % n);

  // Returns position relative to active: -1 (left), 0 (center), +1 (right)
  const getPos = (idx: number) => {
    let d = idx - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div>
      {/* Prev / Next buttons */}
      <div className="flex justify-end gap-3 mb-10">
        <button
          onClick={prev}
          className="p-3 border border-outline-variant rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Previous"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button
          onClick={next}
          className="p-3 border border-outline-variant rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Next"
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      {/* Card track — overflow visible so side cards peek in */}
      <div className="relative h-[600px] flex items-center justify-center overflow-visible">
        {cards.map((c, i) => {
          const pos    = getPos(i);
          const center = pos === 0;
          const side   = Math.abs(pos) === 1;

          return (
            <div
              key={c.title}
              className="absolute w-[320px] md:w-[400px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(${pos * 460}px) scale(${center ? 1 : 0.83})`,
                opacity:    center ? 1 : side ? 0.42 : 0,
                filter:     center ? "none" : side ? "blur(5px)" : "blur(10px)",
                zIndex:     center ? 10 : side ? 5 : 0,
                pointerEvents: center ? "auto" : "none",
              }}
            >
              {/* Image card */}
              <div
                className={`h-[480px] bg-surface-container rounded-xl overflow-hidden mb-6 relative${center ? " group" : ""}`}
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className={`object-cover${center ? " transition-transform duration-700 group-hover:scale-110" : ""}`}
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-lg shadow-xl">
                  <span className="editorial-caps text-[10px] font-bold text-secondary">{c.label}</span>
                  <h4 className="font-headline text-lg text-primary">{c.title}</h4>
                </div>
              </div>

              {/* Description — only shown for center card */}
              <div
                className="transition-all duration-500"
                style={{ opacity: center ? 1 : 0 }}
              >
                <p className="text-on-surface-variant text-sm leading-relaxed font-light text-center max-w-xs mx-auto">
                  {c.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width:      active === i ? 24 : 8,
              height:     8,
              background: active === i ? "var(--color-secondary, #775a19)" : "var(--color-outline-variant, #c4c6cf)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
