"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="bg-[#FAF3E8] w-full">
      <div className="w-full h-px bg-[#0D1B3E] opacity-20" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <div>
            <motion.p
              className="flex items-center gap-2 text-[11px] font-black tracking-[0.22em] uppercase text-[#0D1B3E]/50 mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <span className="w-5 h-px bg-[#0D1B3E]/40" /> Get In Touch
            </motion.p>

            <motion.h2
              className="text-[#0D1B3E] font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            >
              Have a project<br />in mind?
            </motion.h2>

            <motion.p
              className="text-[#0D1B3E]/60 text-base leading-relaxed mb-10 max-w-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            >
              We respond within 24 hours with a clear plan and honest pricing.
              No fluff, no NDA needed to start the conversation.
            </motion.p>

            {/* Contact details */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.26, ease: "easeOut" }}
            >
              <a
                href="mailto:hello@growkart.in"
                className="flex items-center gap-3 text-[#0D1B3E] font-bold text-sm group"
              >
                <span className="w-8 h-8 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center shrink-0 group-hover:bg-[#0D1B3E] group-hover:text-[#FAF3E8] transition-colors duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                hello@growkart.in
              </a>

              <a
                href="https://instagram.com/growkart.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#0D1B3E] font-bold text-sm group"
              >
                <span className="w-8 h-8 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center shrink-0 group-hover:bg-[#0D1B3E] group-hover:text-[#FAF3E8] transition-colors duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                  </svg>
                </span>
                @growkart.in
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.form
            action="mailto:hello@growkart.in"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[#0D1B3E] text-xs font-bold tracking-wide uppercase opacity-60">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="bg-transparent border-b-2 border-[#0D1B3E]/20 py-3 text-[#0D1B3E] text-sm placeholder:text-[#0D1B3E]/30 focus:outline-none focus:border-[#0D1B3E] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#0D1B3E] text-xs font-bold tracking-wide uppercase opacity-60">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="bg-transparent border-b-2 border-[#0D1B3E]/20 py-3 text-[#0D1B3E] text-sm placeholder:text-[#0D1B3E]/30 focus:outline-none focus:border-[#0D1B3E] transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#0D1B3E] text-xs font-bold tracking-wide uppercase opacity-60">Service needed</label>
              <select
                name="service"
                className="bg-transparent border-b-2 border-[#0D1B3E]/20 py-3 text-[#0D1B3E] text-sm focus:outline-none focus:border-[#0D1B3E] transition-colors duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select a service…</option>
                <option>Website Design</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI / UX Design</option>
                <option>Brand Identity</option>
                <option>Digital Marketing</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#0D1B3E] text-xs font-bold tracking-wide uppercase opacity-60">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project…"
                className="bg-transparent border-b-2 border-[#0D1B3E]/20 py-3 text-[#0D1B3E] text-sm placeholder:text-[#0D1B3E]/30 focus:outline-none focus:border-[#0D1B3E] transition-colors duration-200 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#0D1B3E] text-[#FAF3E8] font-bold text-sm px-10 py-4 rounded-full hover:bg-[#0D1B3E]/80 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
