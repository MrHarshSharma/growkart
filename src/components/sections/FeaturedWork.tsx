"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { projects } from "@/data/work";

export default function FeaturedWork() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <span className="w-5 h-px bg-[#0D1B3E]/40" /> Selected Work
            </motion.p>

            <motion.h2
              className="text-[#0D1B3E] font-black leading-tight tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            >
              Work that speaks<br />for itself.
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            className="inline-block border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#0D1B3E] hover:text-[#FAF3E8] transition-colors duration-200 text-center whitespace-nowrap self-start sm:self-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Start a project &rarr;
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => {
            const Wrapper = p.url ? "a" : "div";
            const linkProps = p.url
              ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
            <motion.div
              key={p.id}
              className=""
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.08, ease: "easeOut" }}
            >
            <Wrapper
              {...linkProps}
              className="group block"
            >
              {/* Visual area */}
              <div
                className="relative overflow-hidden bg-[#f0ece6] rounded-2xl"
                style={{ height: "228px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-top bg-no-repeat scale-[1.01] transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
              </div>

              {/* Card footer */}
              <div className="bg-[#FAF3E8] flex items-center justify-between px-5 py-3">
                <span className="font-black text-[#0D1B3E] text-base tracking-tight">
                  {p.title}
                </span>
                <span className="text-xs font-bold text-[#0D1B3E]/50 group-hover:text-[#0D1B3E] transition-colors duration-200">
                  Link &rarr;
                </span>
              </div>
            </Wrapper>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
