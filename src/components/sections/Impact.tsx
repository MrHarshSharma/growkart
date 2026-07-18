"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { auditLink } from "@/data/business";

const problems = [
  "Customers search for you and find nothing.",
  "Your menu or catalogue only exists on paper.",
  "Enquiries get lost across calls and DMs.",
  "Aggregators take a cut of every single order.",
];

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
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            Your business is
            <br />
            losing customers online
          </motion.h2>

          <motion.p
            className="text-[#FAF3E8]/60 text-base leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            People decide where to eat, shop and buy on their phone, before they ever
            reach your door. If you&apos;re not there, someone else is. Sound familiar?
          </motion.p>

          <ul className="flex flex-col gap-3.5 mb-10">
            {problems.map((problem, i) => (
              <motion.li
                key={problem}
                className="flex items-start gap-3 text-[#FAF3E8]/75 text-sm leading-relaxed"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.28 + i * 0.08, ease: "easeOut" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="7" stroke="#F25C2A" strokeWidth="1.8" />
                  <path
                    d="M5.5 5.5l5 5M10.5 5.5l-5 5"
                    stroke="#F25C2A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                {problem}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <a
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F25C2A] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#d94d1e] transition-colors duration-200"
            >
              Fix This — Get a Free Audit
              <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
