"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { auditLink, founder, founderFacts, phoneDisplay, phoneHref } from "@/data/business";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {founder.photo ? (
              <Image
                src={founder.photo}
                alt={`${founder.name}, ${founder.role}`}
                width={420}
                height={480}
                className="w-full max-w-[320px] lg:max-w-none aspect-[4/5] object-cover rounded-2xl"
              />
            ) : (
              <div
                className="w-full max-w-[320px] lg:max-w-none aspect-[4/5] rounded-2xl bg-[#0D1B3E] flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-[#FAF3E8] font-black text-5xl tracking-tight">
                  {founder.initials}
                </span>
              </div>
            )}
          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-8">
            <motion.p
              className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <span className="w-5 h-px bg-[#0D1B3E]/40" /> Who You&apos;re Hiring
            </motion.p>

            <motion.h1
              className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            >
              You&apos;ll be talking to me,
              <br />
              not a call centre
            </motion.h1>

            <motion.div
              className="flex flex-col gap-4 text-[#0D1B3E]/65 text-base leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            >
              <p>
                I&apos;m {founder.name}
                {founder.city ? `, based in ${founder.city}` : ""}. I build websites and
                online stores for businesses that already work — restaurants with regulars,
                shops with a name in the neighbourhood, showrooms people already trust.
              </p>
              <p>
                The problem is almost never the business. It&apos;s that none of it shows up
                when someone searches on their phone. That&apos;s the part I fix, and it&apos;s
                the only kind of work I take on.
              </p>
              <p>
                You&apos;ll have my number from the first call to long after launch. Same
                person quoting, designing, building, and picking up when something breaks.
              </p>
            </motion.div>

            {/* Verifiable facts */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-9"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {founderFacts.map((fact) => (
                <div key={fact.value} className="flex items-start gap-3 max-w-xs">
                  <span className="text-[#F25C2A] font-black text-2xl leading-none shrink-0 tabular-nums">
                    {fact.value}
                  </span>
                  <span className="text-[#0D1B3E]/55 text-sm leading-relaxed">
                    {fact.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
            >
              <a
                href={auditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F25C2A] text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#d94d1e] transition-colors duration-200"
              >
                Message Me Directly
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#0D1B3E] hover:text-[#FAF3E8] transition-colors duration-200"
              >
                Call {phoneDisplay}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
