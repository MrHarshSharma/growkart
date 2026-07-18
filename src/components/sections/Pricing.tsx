"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { plans, quoteLink, monthlySlots } from "@/data/business";

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="bg-[#FAF3E8] w-full">
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
            <span className="w-5 h-px bg-[#0D1B3E]/40" /> Pricing
          </motion.p>

          <motion.h2
            className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            No hidden costs.
            <br />
            Here&apos;s what it costs.
          </motion.h2>

          <motion.p
            className="text-[#0D1B3E]/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
          >
            Every project gets a fixed quote after a free consultation. These are
            honest starting points so you know if we&apos;re in your range before you call.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-8 lg:p-9 ${
                plan.featured
                  ? "bg-[#0D1B3E] text-[#FAF3E8]"
                  : "bg-transparent border-2 border-[#0D1B3E]/15 text-[#0D1B3E]"
              }`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              {plan.featured && (
                <span className="self-start text-[10px] font-black tracking-[0.2em] uppercase bg-[#F25C2A] text-white rounded-full px-3 py-1.5 mb-5">
                  Most Popular
                </span>
              )}

              <h3
                className={`font-black text-xl tracking-tight mb-2 ${
                  plan.featured ? "text-[#FAF3E8]" : "text-[#0D1B3E]"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  plan.featured ? "text-[#FAF3E8]/60" : "text-[#0D1B3E]/55"
                }`}
              >
                {plan.tagline}
              </p>

              <div className="mb-7">
                <span
                  className={`block text-[11px] font-bold tracking-wider uppercase mb-1 ${
                    plan.featured ? "text-[#FAF3E8]/50" : "text-[#0D1B3E]/45"
                  }`}
                >
                  {plan.price === "Custom" ? "Tailored to you" : "Starting from"}
                </span>
                <span
                  className={`font-black tracking-tight ${
                    plan.featured ? "text-[#FAF3E8]" : "text-[#0D1B3E]"
                  }`}
                  style={{ fontSize: "clamp(32px, 3.4vw, 42px)" }}
                >
                  {plan.price}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${
                      plan.featured ? "text-[#FAF3E8]/75" : "text-[#0D1B3E]/65"
                    }`}
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
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={quoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 ${
                  plan.featured
                    ? "bg-[#F25C2A] text-white hover:bg-[#d94d1e]"
                    : "border-2 border-[#0D1B3E] text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-[#FAF3E8]"
                }`}
              >
                Get a Quote
                <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Scarcity */}
        <motion.p
          className="flex items-center justify-center gap-2.5 text-[#0D1B3E]/55 text-sm font-bold mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#F25C2A]" />
          We take on {monthlySlots} new projects a month so every client gets our full
          attention.
        </motion.p>
      </div>
    </section>
  );
}
