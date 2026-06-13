"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { techStack } from "@/data/techStack";

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-28 lg:py-36 bg-white border-t border-[#e8edf2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#079AC6] mb-6"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
              <span className="w-6 h-px bg-[#079AC6]" /> Tech Stack
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.05] text-[#061119] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}>
              Modern tools.<br /><span className="grad">Proven results.</span>
            </motion.h2>
            <motion.p className="text-[#6a8a9a] text-base leading-relaxed max-w-sm"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.2 }}>
              We work with the tools that top engineering teams use — chosen for performance, reliability, and developer experience.
            </motion.p>
          </div>

          {/* Grid */}
          <motion.div ref={ref}
            initial="hidden" animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
            className="grid grid-cols-4 border border-[#e8edf2] rounded-2xl overflow-hidden">
            {techStack.map((t, i) => (
              <motion.div key={t.name}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
                whileHover={{ backgroundColor: "#f7f9fb" }}
                className={`flex flex-col items-center gap-2 p-5 transition-colors duration-200 cursor-default
                  ${(i + 1) % 4 !== 0 ? "border-r border-[#e8edf2]" : ""}
                  ${i < 8 ? "border-b border-[#e8edf2]" : ""}`}>
                <span className="text-xl">{t.icon}</span>
                <span className="text-[10px] font-bold text-[#8a9ab0] tracking-wide text-center leading-tight">{t.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
