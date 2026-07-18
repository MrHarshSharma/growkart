"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { industries } from "@/data/business";

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.p
            className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-5 h-px bg-[#0D1B3E]/40" /> Who We Help
          </motion.p>

          <motion.h2
            className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            We build for offline
            <br />
            businesses going online
          </motion.h2>

          <motion.p
            className="text-[#0D1B3E]/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
          >
            We know this customer well. Businesses that already work in the real world,
            with real regulars and real word-of-mouth, and now need that same reputation
            to show up when someone searches on a phone.
          </motion.p>
        </div>

        {/* Industry list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0D1B3E]/10">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              className="bg-[#FAF3E8] p-8 lg:p-10 flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="flex flex-row items-center gap-4">
                <span className="text-[#F25C2A] font-black text-3xl lg:text-4xl leading-none tracking-tight shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[#0D1B3E] font-black text-xl lg:text-2xl tracking-tight">
                  {industry.name}
                </h3>
              </div>
              <p className="text-[#0D1B3E]/55 text-sm leading-relaxed">
                {industry.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
