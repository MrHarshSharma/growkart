"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Discovery", body: "We deep-dive into your goals, users, and market. You get a clear product strategy and tech roadmap — not just a quote." },
  { n: "02", title: "Design",    body: "High-fidelity designs and interactive prototypes. You see exactly what we're building before a single line of code is written." },
  { n: "03", title: "Build",     body: "Agile development with weekly demos. We ship fast, iterate on feedback, and keep you in the loop every step of the way." },
  { n: "04", title: "Scale",     body: "Post-launch support, analytics, and growth optimization. We stay with you as your product evolves and scales." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-28 lg:py-36 bg-white border-t border-[#e8edf2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-16 items-start" ref={ref}>

          {/* Left label — sticky on desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.p className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#079AC6] mb-6"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
              <span className="w-6 h-px bg-[#079AC6]" /> Our Process
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.05] text-[#061119] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}>
              From idea<br />to shipped<br /><span className="grad">in weeks.</span>
            </motion.h2>
            <motion.p className="text-[#6a8a9a] text-sm leading-relaxed"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.25 }}>
              A proven process that removes guesswork and ships products that perform.
            </motion.p>
          </div>

          {/* Right steps */}
          <div className="lg:col-span-8 flex flex-col">
            {steps.map((s, i) => (
              <motion.div key={s.n}
                className="flex gap-8 py-10 border-b border-[#e8edf2] last:border-0 group"
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.1 }}>
                {/* Number */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-4xl font-black text-[#e0e8f0] group-hover:text-[#079AC6] transition-colors duration-300 leading-none"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {s.n}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-px h-full min-h-[40px] bg-[#e8edf2] group-hover:bg-[#079AC640] transition-colors duration-300" />
                  )}
                </div>
                {/* Content */}
                <div className="pt-1 pb-4">
                  <h3 className="text-2xl font-black text-[#061119] mb-2 tracking-[-0.02em] group-hover:text-[#079AC6] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {s.title}
                  </h3>
                  <p className="text-[#6a8a9a] text-sm leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
