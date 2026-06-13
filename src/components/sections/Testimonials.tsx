"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  const c = testimonials[active];

  return (
    <section className="py-28 lg:py-36 bg-[#f7f9fb] border-t border-[#e8edf2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: label + quote */}
          <div className="lg:col-span-8">
            <motion.p className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#079AC6] mb-10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <span className="w-6 h-px bg-[#079AC6]" /> Client Voices
            </motion.p>

            {/* Giant quote mark */}
            <div className="text-[120px] leading-none text-[#079AC6] opacity-20 font-serif mb-4 -ml-2">
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote key={active}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}
                className="text-2xl lg:text-3xl font-bold text-[#061119] leading-[1.4] tracking-[-0.02em] mb-8"
                style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {c.quote}
              </motion.blockquote>
            </AnimatePresence>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div key={`author-${active}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#061119] flex items-center justify-center text-xs font-black text-white">
                  {c.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#061119] text-sm">{c.name}</p>
                  <p className="text-[#8a9ab0] text-xs">{c.role}, {c.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: navigation + other quotes preview */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {testimonials.map((t, i) => (
              <button key={t.id} onClick={() => setActive(i)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  i === active
                    ? "border-[#061119] bg-white shadow-[0_4px_24px_rgba(6,17,25,0.08)]"
                    : "border-[#e8edf2] bg-white/50 hover:border-[#c0cdd8]"
                }`}>
                <p className={`text-xs font-bold mb-1 transition-colors ${i === active ? "text-[#079AC6]" : "text-[#8a9ab0]"}`}>
                  {t.name}
                </p>
                <p className="text-xs text-[#8a9ab0] leading-relaxed line-clamp-2">{t.quote}</p>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
