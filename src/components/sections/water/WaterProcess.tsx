"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { waterAudience, waterProcess } from "@/data/water";

export default function WaterProcess() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="mb-16 max-w-2xl">
          <motion.p
            className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-5 h-px bg-[#0D1B3E]/40" /> How It Works
          </motion.p>

          <motion.h2
            className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            From your logo to
            <br />
            your table in four steps
          </motion.h2>

          <motion.p
            className="text-[#0D1B3E]/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
          >
            You see the bottle before you spend anything. Nothing is ordered until
            you&apos;ve approved the design and agreed the price.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0D1B3E]/10 mb-16">
          {waterProcess.map((step, i) => (
            <motion.div
              key={step.num}
              className="bg-[#FAF3E8] p-8 lg:p-10 flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="flex flex-row items-center gap-4">
                <span className="text-[#F25C2A] font-black text-3xl lg:text-4xl leading-none tracking-tight shrink-0 tabular-nums">
                  {step.num}
                </span>
                <h3 className="text-[#0D1B3E] font-black text-xl tracking-tight">
                  {step.title}
                </h3>
              </div>
              <p className="text-[#0D1B3E]/55 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Who it's for */}
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-[11px] font-black tracking-[0.18em] uppercase text-[#0D1B3E]/50 mr-1">
            We supply
          </span>
          {waterAudience.map((audience) => (
            <span
              key={audience}
              className="border border-[#0D1B3E]/20 text-[#0D1B3E]/70 text-sm font-bold rounded-full px-4 py-2"
            >
              {audience}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
