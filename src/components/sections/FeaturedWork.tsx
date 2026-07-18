"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { projects } from "@/data/work";
import { auditLink } from "@/data/business";

export default function FeaturedWork() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <span className="w-5 h-px bg-[#0D1B3E]/40" /> Our Work
            </motion.p>

            <motion.h2
              className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            >
              Real businesses.
              <br />
              Real websites. Live now.
            </motion.h2>

            <motion.p
              className="text-[#0D1B3E]/60 text-base leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            >
              Every site below is live and open. Click any of them and judge the work
              yourself — that&apos;s the only proof that counts.
            </motion.p>
          </div>

          <motion.a
            href={auditLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F25C2A] text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#d94d1e] transition-colors duration-200 text-center whitespace-nowrap self-start sm:self-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Get a Free Audit &rarr;
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {projects.map((p, i) => {
            const Wrapper = p.url ? "a" : "div";
            const linkProps = p.url
              ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.08, ease: "easeOut" }}
              >
                <Wrapper {...linkProps} className="group block">
                  {/* Visual area */}
                  <div
                    className="relative overflow-hidden bg-[#f0ece6] rounded-2xl"
                    style={{ height: "228px" }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-top bg-no-repeat scale-[1.01] transition-transform duration-500 group-hover:scale-[1.05]"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    {/* Industry label */}
                    <span className="absolute top-3 left-3 bg-[#0D1B3E] text-[#FAF3E8] text-[10px] font-black tracking-[0.14em] uppercase rounded-full px-3 py-1.5">
                      {p.industry}
                    </span>
                  </div>

                  {/* Card footer */}
                  <div className="bg-[#FAF3E8] px-1 pt-4">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <span className="font-black text-[#0D1B3E] text-base tracking-tight">
                        {p.title}
                      </span>
                      {p.url && (
                        <span className="text-xs font-bold text-[#0D1B3E]/50 group-hover:text-[#F25C2A] transition-colors duration-200 whitespace-nowrap">
                          Visit site &rarr;
                        </span>
                      )}
                    </div>
                    <p className="text-[#0D1B3E]/55 text-sm leading-relaxed">
                      {p.outcome}
                    </p>
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
