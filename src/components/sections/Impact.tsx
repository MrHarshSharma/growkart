"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Impact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0D1B3E] w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left: Illustration */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/threepeople.svg"
            alt="Three people collaborating"
            width={520}
            height={480}
            className="w-full max-w-[480px] lg:max-w-[520px] object-contain"
          />
        </motion.div>

        {/* Right: Text content */}
        <div className="flex-1 max-w-lg">
          <motion.h2
            className="text-[#FAF3E8] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            Maximize Your Digital Impact
          </motion.h2>

          <motion.p
            className="text-[#FAF3E8]/60 text-base leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          >
            We help businesses unlock their full digital potential through strategic design, robust development, and measurable growth. Your success is our benchmark.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
          >
            <Link
              href="#contact"
              className="inline-block border-2 border-[#FAF3E8] text-[#FAF3E8] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#FAF3E8] hover:text-[#0D1B3E] transition-colors duration-200"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
