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
    title: "Business Websites",
    outcome: "So customers choose you before they call.",
    description:
      "A fast, mobile-first site that shows what you sell, why you're trusted, and how to reach you — with enquiry and WhatsApp buttons on every screen.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 7h20l-2 12H6L4 7z" stroke="#0D1B3E" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M4 7L3 3H1" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="23" r="1.6" fill="#0D1B3E"/>
        <circle cx="19" cy="23" r="1.6" fill="#0D1B3E"/>
      </svg>
    ),
    title: "Online Stores",
    outcome: "So you take orders while the shop is closed.",
    description:
      "A complete e-commerce store with your catalogue, online payments, and order management — built so you can run it yourself without a developer.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#0D1B3E" strokeWidth="2"/>
        <path d="M18 18l6 6" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 4v16M4 12h16" stroke="#0D1B3E" strokeWidth="1.2" opacity="0.5"/>
      </svg>
    ),
    title: "Google & Local SEO",
    outcome: "So people nearby find you first.",
    description:
      "Google Business setup, local search optimisation, and page structure that helps you show up when someone searches for what you sell in your area.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="9" y="2" width="10" height="24" rx="2" stroke="#0D1B3E" strokeWidth="2"/>
        <path d="M12 22h4" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 6h6M11 9h4" stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Mobile Apps",
    outcome: "So your best customers keep coming back.",
    description:
      "Android and iOS apps for businesses ready to own the relationship — loyalty, repeat orders, and notifications that bring people back in.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M17.5 4.5a5.5 5.5 0 0 0-7.4 6.9L4 17.5 6.5 20l6.1-6.1a5.5 5.5 0 0 0 6.9-7.4l-3 3-2.5-2.5 3-2.5z" stroke="#0D1B3E" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="19" cy="19" r="4" stroke="#0D1B3E" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Custom Tools & Software",
    outcome: "So the admin work stops eating your day.",
    description:
      "Billing, inventory, bookings, dashboards and internal tools built around how your business already runs — not the other way around.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l5-5 4 4 5-7 6 8" stroke="#0D1B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="8" r="3" stroke="#0D1B3E" strokeWidth="2"/>
        <path d="M18 5h6M18 8h4M18 11h5" stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Ongoing Growth",
    outcome: "So the site keeps earning after launch.",
    description:
      "Content updates, technical support, and paid campaigns when you're ready to scale — with plain-English reporting on what's actually working.",
  },
];

export default function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.p
            className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="w-5 h-px bg-[#0D1B3E]/40" /> What We Do
          </motion.p>

          <motion.h2
            className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            Start with a website.
            <br />
            Grow into everything else.
          </motion.h2>

          <motion.p
            className="text-[#0D1B3E]/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
          >
            Most clients come to us for a website, because that&apos;s what brings customers
            in first. When the business is ready for an app, a store, or custom software,
            you don&apos;t have to go find another agency.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#0D1B3E]/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-[#FAF3E8] p-8 lg:p-10 flex flex-col gap-2"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
            >
              <div className="flex flex-row items-center gap-4">
                <div className="shrink-0">{s.icon}</div>
                <h3 className="text-[#0D1B3E] font-black text-xl tracking-tight">
                  {s.title}
                </h3>
              </div>
              <p className="text-[#F25C2A] font-bold text-sm">{s.outcome}</p>
              <p className="text-[#0D1B3E]/55 text-sm leading-relaxed mt-2">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
