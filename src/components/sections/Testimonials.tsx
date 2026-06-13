"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      5500
    );
    return () => clearInterval(t);
  }, []);

  const c = testimonials[active];

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: quote */}
          <div className="lg:col-span-7">
            <motion.p
              className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <span className="w-5 h-px bg-[#0D1B3E]/40" /> Client Voices
            </motion.p>

            {/* Quote mark */}
            <div className="text-[100px] leading-none text-[#0D1B3E] opacity-10 font-serif -mb-8 -ml-1 select-none">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="text-2xl lg:text-3xl font-black text-[#0D1B3E] leading-snug tracking-tight mb-10"
              >
                {c.quote}
              </motion.blockquote>
            </AnimatePresence>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-[#0D1B3E] flex items-center justify-center text-xs font-black text-[#FAF3E8]">
                  {c.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#0D1B3E] text-sm">{c.name}</p>
                  <p className="text-[#0D1B3E]/50 text-xs">
                    {c.role}, {c.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: navigation */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  i === active
                    ? "border-[#0D1B3E]/20 bg-[#0D1B3E]/5"
                    : "border-[#0D1B3E]/8 bg-transparent hover:border-[#0D1B3E]/15"
                }`}
              >
                <p
                  className={`text-xs font-bold mb-1 transition-colors ${
                    i === active ? "text-[#0D1B3E]" : "text-[#0D1B3E]/40"
                  }`}
                >
                  {t.name}
                </p>
                <p className="text-xs text-[#0D1B3E]/40 leading-relaxed line-clamp-2">
                  {t.quote}
                </p>

                {/* Progress bar for active */}
                {i === active && (
                  <div className="mt-3 h-0.5 w-full bg-[#0D1B3E]/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#0D1B3E]/40 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.5, ease: "linear" }}
                      key={`progress-${active}`}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
