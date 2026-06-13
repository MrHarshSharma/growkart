"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and audience — no assumptions, just honest conversation.",
  },
  {
    num: "02",
    title: "Strategy",
    description: "We map out a clear plan: scope, tech stack, timelines, and milestones. You know exactly what to expect.",
  },
  {
    num: "03",
    title: "Creation",
    description: "Design and development happen in tight loops with your feedback. You see progress every step of the way.",
  },
  {
    num: "04",
    title: "Launch & Support",
    description: "We deploy, test, and hand off with full documentation. Then we stick around to keep things running smoothly.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0D1B3E] w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#FAF3E8]/40 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-5 h-px bg-[#FAF3E8]/30" /> How We Work
          </motion.p>

          <motion.h2
            className="text-[#FAF3E8] font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            A process that keeps<br />you in control
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col gap-5 border-t-2 border-[#FAF3E8]/15 pt-6"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <span className="text-[#FAF3E8]/20 font-black text-4xl leading-none tracking-tight">
                {step.num}
              </span>
              <h3 className="text-[#FAF3E8] font-black text-xl tracking-tight">{step.title}</h3>
              <p className="text-[#FAF3E8]/50 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
