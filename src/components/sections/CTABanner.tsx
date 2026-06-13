"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-1.5%", "1.5%"]);

  return (
    <section id="contact" ref={ref}
      className="relative bg-[#061119] overflow-hidden border-t border-white/[0.05]">

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(7,154,198,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, #079AC608 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40">

        <div className="max-w-4xl">
          <motion.p className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#079AC6] mb-10"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
            <span className="w-6 h-px bg-[#079AC6]" /> Get In Touch
          </motion.p>

          {/* Headline with parallax */}
          <motion.div style={{ x }}>
            <motion.h2
              className="font-black leading-[0.95] tracking-[-0.04em] text-white mb-10"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(48px, 7vw, 96px)",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              Have a project<br />
              in mind? Let&apos;s<br />
              <span className="grad">build it together.</span>
            </motion.h2>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}>
            <p className="text-[#3a6a7a] text-base leading-relaxed max-w-sm">
              We respond within 24 hours with a clear plan and honest pricing. No fluff, no NDA needed to talk.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <a href="mailto:hello@growkart.in"
                className="inline-flex items-center gap-2 bg-[#079AC6] text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#38c4e8] transition-colors duration-200 shadow-[0_0_40px_#079AC625]">
                Start a Project →
              </a>
              <a href="mailto:hello@growkart.in"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-bold text-sm px-8 py-4 rounded-xl hover:border-white/40 hover:bg-white/[0.04] transition-all duration-200">
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/[0.07] flex items-center justify-between gap-4">
          <p className="text-[11px] text-[#2a4a5a]">© {new Date().getFullYear()} GrowKart Technologies. All rights reserved.</p>
          <a href="mailto:hello@growkart.in" className="text-[11px] text-[#3a6a7a] hover:text-[#079AC6] transition-colors font-medium">
            hello@growkart.in
          </a>
        </div>
      </div>
    </section>
  );
}
