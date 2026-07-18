"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { auditLink, phoneDisplay, phoneHref, startingPrice } from "@/data/business";

const trustPoints = [
  "8+ live business websites",
  `Websites from ${startingPrice}`,
  "Fixed price, fixed timeline",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-12 pb-10 lg:pt-16 lg:pb-14 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left: Text content */}
        <div className="flex-1 max-w-xl">
          <motion.p
            className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.18em] uppercase text-[#0D1B3E]/60 border border-[#0D1B3E]/20 rounded-full px-4 py-2 mb-7"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F25C2A]" />
            For restaurants, shops &amp; local businesses
          </motion.p>

          <motion.h1
            className="text-[#0D1B3E] font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(38px, 5.2vw, 66px)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Get More Customers
            <br />
            From Your Website.
          </motion.h1>

          <motion.p
            className="text-[#0D1B3E]/70 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            We build websites that turn Google searches into orders, enquiries and
            walk-ins — for offline businesses going online across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-7"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
          >
            <a
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F25C2A] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#d94d1e] transition-colors duration-200"
            >
              Get a Free Website Audit
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#0D1B3E] hover:text-[#FAF3E8] transition-colors duration-200"
            >
              Call {phoneDisplay}
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.ul
            className="flex flex-wrap gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[#0D1B3E]/60 text-xs font-bold"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 7.5l3 3 6-7"
                    stroke="#F25C2A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {point}
              </li>
            ))}
          </motion.ul>
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
            className="w-full max-w-[440px] lg:max-w-[500px] object-contain"
            priority
          />
          {/* Floor line */}
          <div className="w-full max-w-[440px] lg:max-w-[500px] h-px bg-[#0D1B3E]" />
        </motion.div>
      </div>
    </section>
  );
}
