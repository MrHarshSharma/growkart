"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { waterMockupLink, waterReasons } from "@/data/water";

export default function WaterReasons() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0D1B3E] w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="mb-16 max-w-2xl">
          <motion.p
            className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#FAF3E8]/40 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-5 h-px bg-[#FAF3E8]/30" /> Why Restaurants Switch
          </motion.p>

          <motion.h2
            className="text-[#FAF3E8] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            You&apos;re already buying
            <br />
            water every week
          </motion.h2>

          <motion.p
            className="text-[#FAF3E8]/50 text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
          >
            The only question is whose name is on it, and who keeps the margin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#FAF3E8]/15">
          {waterReasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="bg-[#0D1B3E] p-8 lg:p-9 flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="flex flex-row items-center gap-4">
                <span className="text-[#F25C2A] font-black text-3xl lg:text-4xl leading-none tracking-tight shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[#FAF3E8] font-black text-lg lg:text-xl tracking-tight">
                  {reason.title}
                </h3>
              </div>
              <p className="text-[#FAF3E8]/50 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}

          {/* Fills the trailing grid cell so it doesn't read as an empty card. */}
          <motion.div
            className="bg-[#0D1B3E] p-8 lg:p-9 flex flex-col justify-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: waterReasons.length * 0.08,
              ease: "easeOut",
            }}
          >
            <h3 className="text-[#FAF3E8] font-black text-lg lg:text-xl tracking-tight">
              Curious what it looks like?
            </h3>
            <p className="text-[#FAF3E8]/50 text-sm leading-relaxed">
              We&apos;ll put your logo on a bottle and send it over. Free, no
              obligation.
            </p>
            <a
              href={waterMockupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F25C2A] text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#d94d1e] transition-colors duration-200 self-start"
            >
              Get a Free Mockup
              <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
