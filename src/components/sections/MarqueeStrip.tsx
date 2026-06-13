"use client";

import { marqueeItems } from "@/data/techStack";

export default function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="bg-[#061119] py-4 marquee-wrap border-y border-white/[0.06]">
      <div className="marquee-inner">
        {items.map((item, i) => (
          <span key={i}
            className="flex items-center gap-5 px-8 text-[11px] font-bold tracking-[0.16em] uppercase text-[#3a6a7a] whitespace-nowrap">
            {item}
            <span className="w-1 h-1 rounded-full bg-[#079AC6] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
