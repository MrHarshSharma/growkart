"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

function BulbIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="16" r="9" stroke="#0D1B3E" strokeWidth="2.2" fill="none" />
      <path d="M15 25h10M16.5 28.5h7M20 7V5" stroke="#0D1B3E" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 25v-4c0-1 1.5-2.5 2.5-4" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CreativityIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#0D1B3E" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 30c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#0D1B3E" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" fill="#0D1B3E" />
      <path d="M20 8V5M32 20h3M8 20H5M28.5 11.5l2-2M9.5 11.5l-2-2" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20l7-7 5 3 5-3 7 7" stroke="#0D1B3E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20l5 5 4-2 6 4 4-2 5-2 6-5" stroke="#0D1B3E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 26l3-3 3 3" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const values = [
  {
    icon: <BulbIcon />,
    title: "Our Expertise",
    description: "Deep technical know-how across web, mobile, and software — we bring the right skills to every project.",
  },
  {
    icon: <CreativityIcon />,
    title: "Creativity",
    description: "Thoughtful design thinking combined with creative execution to build experiences that stand out.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Collaboration",
    description: "We work alongside you as a true partner — transparent, communicative, and focused on your goals.",
  },
];

export default function Values() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#FAF3E8] w-full">
      {/* Divider */}
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            >
              <div className="mb-1">{v.icon}</div>
              <h3 className="text-[#0D1B3E] font-black text-xl tracking-tight">{v.title}</h3>
              <p className="text-[#0D1B3E]/60 text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
