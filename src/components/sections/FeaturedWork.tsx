"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { projects } from "@/data/work";

const gradients = [
  "linear-gradient(135deg, #061119 0%, #0d2535 50%, #061119 100%)",
  "linear-gradient(135deg, #05111a 0%, #071e2d 60%, #061119 100%)",
  "linear-gradient(135deg, #061119 0%, #091a25 50%, #061119 100%)",
];

export default function FeaturedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-28 lg:py-36 bg-[#f7f9fb] border-t border-[#e8edf2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-16 gap-8">
          <div>
            <motion.p className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#079AC6] mb-5"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
              <span className="w-6 h-px bg-[#079AC6]" /> Selected Work
            </motion.p>
            <motion.h2
              className="text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.0] text-[#061119]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}>
              Work that<br />speaks for itself.
            </motion.h2>
          </div>
          <motion.a href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-bold text-[#061119] border-2 border-[#061119] px-6 py-3 rounded-xl hover:bg-[#061119] hover:text-white transition-all duration-200"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.3 }}>
            Start a project →
          </motion.a>
        </div>

        {/* Grid */}
        <motion.div ref={ref}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {projects.map((p, i) => (
            <motion.div key={p.id}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover="hovered"
              className={`group rounded-2xl overflow-hidden cursor-pointer ${i === 0 ? "lg:col-span-2" : ""}`}>

              {/* Visual area */}
              <div className="relative overflow-hidden" style={{ height: i === 0 ? "380px" : "280px", background: gradients[i] }}>
                {/* Dot grid overlay */}
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(7,154,198,0.12) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} />

                {/* Accent glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
                  style={{ background: `radial-gradient(circle, ${p.accent}18 0%, transparent 65%)`, filter: "blur(24px)" }} />

                {/* Project name watermark */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <span className="font-black select-none whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: i === 0 ? "clamp(80px, 14vw, 180px)" : "clamp(60px, 10vw, 130px)",
                      color: p.accent,
                      opacity: 0.06,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}>
                    {p.title.toUpperCase()}
                  </span>
                </div>

                {/* Mock UI elements */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t}
                          className="text-[10px] font-black px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm text-white/70 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                    {/* Accent dot */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full dot-pulse" style={{ background: p.accent }} />
                      <span className="text-[10px] font-bold text-white/40">Live</span>
                    </div>
                  </div>

                  {/* Bottom info — shows on hover */}
                  <motion.div
                    variants={{ hovered: { y: 0, opacity: 1 }, hidden: { y: 12, opacity: 0 } }}
                    initial={{ y: 12, opacity: 0 }}
                    transition={{ duration: 0.25 }}>
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-white tracking-[-0.02em]"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}>
                          {p.title}
                        </h3>
                        <p className="text-white/50 text-sm mt-1 max-w-md">{p.description}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 ml-4"
                        style={{ borderColor: p.accent, color: p.accent }}>
                        →
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Top accent line */}
                <motion.div className="absolute top-0 left-0 h-0.5 w-0"
                  variants={{ hovered: { width: "100%" } }}
                  transition={{ duration: 0.4 }}
                  style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
              </div>

              {/* Card footer — always visible */}
              <div className="bg-white flex items-center justify-between px-6 py-4 border-t border-[#e8edf2] group-hover:border-[#079AC640] transition-colors">
                <span className="font-black text-[#061119] text-lg tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {p.title}
                </span>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#f0f4f8] text-[#8a9ab0]">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
