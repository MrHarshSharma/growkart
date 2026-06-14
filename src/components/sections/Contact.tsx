"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="flex flex-col items-center lg:flex-row lg:justify-around gap-12">
          <div>
          <motion.p
            className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-5 h-px bg-[#0D1B3E]/40" /> Get In Touch
          </motion.p>

          <motion.h2
            className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            Have a project<br />in mind?
          </motion.h2>

          <motion.p
            className="text-[#0D1B3E]/60 text-base leading-relaxed mb-0 max-w-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
          >
            Give us a call — no forms, no wait. Let&apos;s talk about your project directly.
          </motion.p>

          </div>

          <motion.a
            href="tel:+919665654326"
            className="inline-flex items-center justify-center gap-3 bg-[#0D1B3E] text-[#FAF3E8] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#0D1B3E]/80 transition-colors duration-200 shrink-0"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91 96656 54326
          </motion.a>
        </div>
      </div>
    </section>
  );
}
