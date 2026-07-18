"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { auditLink, phoneDisplay, phoneHref } from "@/data/business";

// Root-relative so they resolve from sub-pages like /about, not just the home page.
const navLinks = [
  { label: "Branded Water", href: "/branded-water" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll and wire up Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="bg-[#FAF3E8] w-full sticky top-0 z-50">
      {/*
        A 1fr/auto/1fr grid at every width, so the centre column is centred against
        the viewport regardless of how wide the sides are. justify-between would
        park the middle child off-centre. Navigation lives on the left at all
        breakpoints — desktop links, or the menu toggle that stands in for them.
      */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Left: nav links on desktop, menu toggle below lg */}
        <div className="flex items-center justify-self-start">
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0D1B3E] font-medium text-sm hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden flex items-center justify-center w-11 h-11 -ml-2 text-[#0D1B3E] cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18"}
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Centre: logo */}
        <Link href="/" className="flex-shrink-0 justify-self-center">
          <Image
            src="/growkartlogo.png"
            alt="GrowKart"
            width={48}
            height={48}
            className="w-11 h-11 object-contain"
            priority
          />
        </Link>

        {/* Right: actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-self-end">
          <a
            href={phoneHref}
            className="hidden sm:block text-[#0D1B3E] font-bold text-sm hover:opacity-60 transition-opacity"
          >
            {phoneDisplay}
          </a>
          {/*
            Icon-only, so the label has to live in the accessible name and the
            hover tooltip — otherwise the offer is invisible to both screen
            readers and anyone unsure what the icon does.
          */}
          <a
            href={auditLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get a free website audit on WhatsApp"
            title="Get a free website audit"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white hover:bg-[#1DA851] transition-colors duration-200 shrink-0"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.25.69-1.43 1.32-1.99 1.4-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.6-1.21-3.06s.77-2.17 1.04-2.47c.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.42-.07.66.5.25.59.84 2.05.91 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.72.81 2.02.96.3.15.49.22.56.35.07.12.07.72-.18 1.41z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Full-width divider */}
      <div className="w-full h-px bg-[#0D1B3E] opacity-30" />

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 top-[73px] bg-[#0D1B3E]/25 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.nav
              id="mobile-menu"
              className="lg:hidden absolute left-0 right-0 top-full bg-[#FAF3E8] border-b-4 border-[#0D1B3E] z-50 max-h-[calc(100vh-73px)] overflow-y-auto"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="px-8 py-6 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[#0D1B3E] font-black text-xl tracking-tight py-4 border-b border-[#0D1B3E]/10 hover:text-[#F25C2A] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href={phoneHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-[#0D1B3E] font-bold text-base py-5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {phoneDisplay}
                </a>

                <a
                  href={auditLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-[#F25C2A] text-white font-bold text-sm px-7 py-4 rounded-full hover:bg-[#d94d1e] transition-colors duration-200"
                >
                  Get a Free Audit
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
