"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left: Text content */}
        <div className="flex-1 max-w-xl">
          <motion.h1
            className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Crafting Digital Solutions
          </motion.h1>

          <motion.p
            className="text-[#0D1B3E]/70 text-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            Elevate your brand with experts.
          </motion.p>

        </div>

        {/* Right: Illustration */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-end"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <Image
            src="/twopeople.svg"
            alt="Two people working together"
            width={520}
            height={480}
            className="w-full max-w-[480px] lg:max-w-[520px] object-contain"
            priority
          />
          {/* Floor line */}
          <div className="w-full max-w-[480px] lg:max-w-[520px] h-px bg-[#0D1B3E]" />
        </motion.div>
      </div>
    </section>
  );
}
