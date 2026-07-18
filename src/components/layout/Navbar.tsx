"use client";

import Image from "next/image";
import Link from "next/link";
import { auditLink, phoneDisplay, phoneHref } from "@/data/business";

// Root-relative so they resolve from sub-pages like /about, not just the home page.
const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Branded Water", href: "/branded-water" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="bg-[#FAF3E8] w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/growkartlogo.png"
            alt="GrowKart"
            width={48}
            height={48}
            className="w-11 h-11 object-contain"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#0D1B3E] font-medium text-sm hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={phoneHref}
            className="hidden sm:block text-[#0D1B3E] font-bold text-sm hover:opacity-60 transition-opacity"
          >
            {phoneDisplay}
          </a>
          <a
            href={auditLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F25C2A] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 rounded-full hover:bg-[#d94d1e] transition-colors duration-200 whitespace-nowrap"
          >
            Free Audit
          </a>
        </div>
      </div>

      {/* Full-width divider */}
      <div className="w-full h-px bg-[#0D1B3E] opacity-30" />
    </header>
  );
}
