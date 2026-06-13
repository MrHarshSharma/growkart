"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { services } from "@/data/services";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="py-28 lg:py-36 bg-white border-t border-[#e8edf2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div>
            <motion.p className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#079AC6] mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
              <span className="w-6 h-px bg-[#079AC6]" /> What We Build
            </motion.p>
            <motion.h2
              className="text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.0] text-[#061119]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}>
              Services that<br /><span className="grad">scale with you.</span>
            </motion.h2>
          </div>
          <motion.p className="text-[#6a8a9a] text-base leading-relaxed self-end max-w-sm"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.25 }}>
            End-to-end digital execution — from the first wireframe to the final deployment. We work as an extension of your team.
          </motion.p>
        </div>

        {/* Service rows — hover to expand */}
        <div ref={ref} className="border-t border-[#e8edf2]">
          {services.map((s, i) => (
            <motion.div key={s.id}
              className="group border-b border-[#e8edf2] cursor-pointer"
              onMouseEnter={() => setActive(s.id)}
              onMouseLeave={() => setActive(null)}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.06 }}>

              <div className="flex items-center justify-between py-6 px-0 gap-8">
                {/* Number */}
                <span className="text-[11px] font-black text-[#c0cdd8] tracking-[0.1em] w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-black text-[#061119] flex-1 tracking-[-0.02em] group-hover:text-[#079AC6] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {s.title}
                </h3>

                {/* Tags — visible on hover */}
                <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
                  <AnimatePresence>
                    {active === s.id && s.tags.map((t, ti) => (
                      <motion.span key={t}
                        className="text-[11px] font-bold px-3 py-1 rounded-lg bg-[#079AC610] text-[#079AC6] border border-[#079AC625]"
                        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.15, delay: ti * 0.04 }}>
                        {t}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Arrow */}
                <motion.div
                  className="w-10 h-10 rounded-full border-2 border-[#e8edf2] flex items-center justify-center text-[#061119] shrink-0 text-sm group-hover:border-[#079AC6] group-hover:text-[#079AC6] group-hover:bg-[#079AC608] transition-all duration-200"
                  animate={active === s.id ? { x: 4 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                  →
                </motion.div>
              </div>

              {/* Expanded description */}
              <AnimatePresence>
                {active === s.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden">
                    <p className="text-[#6a8a9a] text-base pb-6 pl-8 leading-relaxed max-w-2xl">
                      {s.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
