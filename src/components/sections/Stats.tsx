"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/data/stats";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#061119]">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden" animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
          {stats.map((s) => (
            <motion.div key={s.label}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
              className="px-10 py-14 flex flex-col gap-2 group hover:bg-white/[0.02] transition-colors duration-300">
              <div className="text-5xl lg:text-6xl font-black tracking-[-0.04em] grad"
                style={{ fontFamily: "var(--font-space-grotesk)" }}>
                <CountUp end={s.value} suffix={s.suffix} duration={2.2} />
              </div>
              <p className="text-[11px] font-bold text-[#3a6a7a] tracking-[0.12em] uppercase">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
