"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="5" width="24" height="16" rx="2" stroke="#0D1B3E" strokeWidth="2"/>
        <path d="M9 21v2M19 21v2M7 24h14" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 11h5M7 14h9" stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Website Design",
    description: "Pixel-perfect, responsive websites that reflect your brand and convert visitors into customers.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 4h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="#0D1B3E" strokeWidth="2"/>
        <path d="M9 12l2.5 2.5L19 9" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 9h20" stroke="#0D1B3E" strokeWidth="1.5"/>
        <circle cx="7" cy="6.5" r="0.8" fill="#0D1B3E"/>
        <circle cx="10" cy="6.5" r="0.8" fill="#0D1B3E"/>
      </svg>
    ),
    title: "Web Development",
    description: "Scalable, high-performance web apps built on modern stacks — from MVPs to enterprise platforms.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="9" y="2" width="10" height="18" rx="2" stroke="#0D1B3E" strokeWidth="2"/>
        <path d="M12 18h4" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 6h6M11 9h4" stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 10h4M19 10h4" stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 1"/>
      </svg>
    ),
    title: "Mobile App Development",
    description: "Native and cross-platform iOS & Android apps that deliver seamless experiences on every device.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#0D1B3E" strokeWidth="2"/>
        <path d="M14 9v5l3 3" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 7l2 2M21 7l-2 2" stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "UI / UX Design",
    description: "Research-driven interfaces that feel intuitive. We prototype, test, and refine until it's right.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 9v5c0 5.25 4.3 10.15 10 11.35C19.7 24.15 24 19.25 24 14V9L14 4z" stroke="#0D1B3E" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10 14l2.5 2.5L18 11" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Brand Identity",
    description: "Logo, colour palette, typography, and brand guidelines — everything you need to show up consistently.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l5-5 4 4 5-7 6 8" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="8" r="3" stroke="#0D1B3E" strokeWidth="2"/>
        <path d="M18 5h6M18 8h4M18 11h5" stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Digital Marketing",
    description: "SEO, paid ads, and social media strategies that put your brand in front of the right audience.",
  },
];

export default function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-5 h-px bg-[#0D1B3E]/40" /> What We Do
          </motion.p>

          <motion.h2
            className="text-[#0D1B3E] font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            Services built for<br />modern businesses
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0D1B3E]/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-[#FAF3E8] p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
            >
              <div>{s.icon}</div>
              <h3 className="text-[#0D1B3E] font-black text-lg tracking-tight">{s.title}</h3>
              <p className="text-[#0D1B3E]/55 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
