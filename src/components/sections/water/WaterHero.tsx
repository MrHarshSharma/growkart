"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { phoneDisplay, phoneHref } from "@/data/business";
import { waterCity, waterFromPrice } from "@/data/water";

const trustPoints = [
  `From ${waterFromPrice} per bottle`,
  "Free mockup before you commit",
  "Weekly delivery across " + waterCity,
];

export default function WaterHero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="max-w-3xl">
          <motion.p
            className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.18em] uppercase text-[#0D1B3E]/60 border border-[#0D1B3E]/20 rounded-full px-4 py-2 mb-7"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F25C2A]" />
            Branded Water · {waterCity}
          </motion.p>

          <motion.h1
            className="text-[#0D1B3E] font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 62px)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Your brand,
            <br />
            on every table.
          </motion.h1>

          <motion.p
            className="text-[#0D1B3E]/70 text-lg leading-relaxed mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            We already build your brand on screen — now we put it on the bottle.
            Custom-labelled drinking water for restaurants, cafés and events: your
            name on every bottle, your own MRP, delivered every week.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
          >
            <a
              href="#mockup"
              className="inline-flex items-center justify-center gap-2 bg-[#F25C2A] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#d94d1e] transition-colors duration-200"
            >
              Design Your Bottle Free
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#0D1B3E] hover:text-[#FAF3E8] transition-colors duration-200"
            >
              Call {phoneDisplay}
            </a>
          </motion.div>

          <motion.ul
            className="flex flex-wrap gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[#0D1B3E]/60 text-xs font-bold"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 7.5l3 3 6-7"
                    stroke="#F25C2A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {point}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
