"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { waterCity, waterFromPrice } from "@/data/water";

/**
 * Deliberately a slim cross-sell band, not a seventh service card — water is a
 * different product to the same customer, and folding it into the services grid
 * would blunt the "websites for local businesses" positioning.
 */
export default function WaterBand() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-14 lg:py-16">
        <motion.div
          className="bg-[#0D1B3E] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#FAF3E8]/40 mb-4">
              <span className="w-5 h-px bg-[#FAF3E8]/30" /> Also From GrowKart
            </p>
            <h2
              className="text-[#FAF3E8] font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              Run a restaurant? Put your
              <br />
              brand on the water too.
            </h2>
            <p className="text-[#FAF3E8]/60 text-base leading-relaxed">
              Custom-labelled drinking water for restaurants and cafés in {waterCity} —
              your name on the bottle, your own MRP, from {waterFromPrice} a bottle.
            </p>
          </div>

          <Link
            href="/branded-water"
            className="inline-flex items-center justify-center gap-2 bg-[#F25C2A] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#d94d1e] transition-colors duration-200 shrink-0 self-start lg:self-auto whitespace-nowrap"
          >
            See Branded Water
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
