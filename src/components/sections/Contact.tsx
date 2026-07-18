"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  auditLink,
  monthlySlots,
  phoneDisplay,
  phoneHref,
} from "@/data/business";

const auditPromises = [
  "What's stopping customers from finding you on Google",
  "What your website (or your competitor's) is doing wrong",
  "What it would cost and how long it would take to fix",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: offer */}
          <div className="lg:col-span-7">
            <motion.p
              className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <span className="w-5 h-px bg-[#0D1B3E]/40" /> Free Website Audit
            </motion.p>

            <motion.h2
              className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(32px, 4.2vw, 54px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            >
              Find out what&apos;s
              <br />
              costing you customers
            </motion.h2>

            <motion.p
              className="text-[#0D1B3E]/60 text-base leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            >
              Send us your business name on WhatsApp and we&apos;ll review your online
              presence for free. No cost, no obligation, no sales pressure. In return
              you get:
            </motion.p>

            <ul className="flex flex-col gap-3.5 mb-9">
              {auditPromises.map((promise, i) => (
                <motion.li
                  key={promise}
                  className="flex items-start gap-3 text-[#0D1B3E]/70 text-sm leading-relaxed"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.24 + i * 0.08, ease: "easeOut" }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 7.5l3 3 6-7"
                      stroke="#F25C2A"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {promise}
                </motion.li>
              ))}
            </ul>

            <motion.p
              className="flex items-center gap-2.5 text-[#0D1B3E]/55 text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F25C2A]" />
              Only {monthlySlots} project slots open each month.
            </motion.p>
          </div>

          {/* Right: actions */}
          <motion.div
            className="lg:col-span-5 bg-[#0D1B3E] rounded-2xl p-8 lg:p-10 flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          >
            <h3 className="text-[#FAF3E8] font-black text-2xl tracking-tight mb-1">
              Talk to us directly
            </h3>
            <p className="text-[#FAF3E8]/60 text-sm leading-relaxed mb-4">
              No forms, no ticket numbers, no waiting. You reach the people who will
              actually build your site.
            </p>

            <a
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F25C2A] text-white font-bold text-sm px-7 py-4 rounded-full hover:bg-[#d94d1e] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.25.69-1.43 1.32-1.99 1.4-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.6-1.21-3.06s.77-2.17 1.04-2.47c.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.42-.07.66.5.25.59.84 2.05.91 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.72.81 2.02.96.3.15.49.22.56.35.07.12.07.72-.18 1.41z" />
              </svg>
              Get My Free Audit
            </a>

            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2.5 border-2 border-[#FAF3E8] text-[#FAF3E8] font-bold text-sm px-7 py-4 rounded-full hover:bg-[#FAF3E8] hover:text-[#0D1B3E] transition-colors duration-200"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {phoneDisplay}
            </a>

            <p className="text-[#FAF3E8]/40 text-xs text-center mt-2">
              We usually reply within a few hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
