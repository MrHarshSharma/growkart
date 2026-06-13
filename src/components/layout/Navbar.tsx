"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#FAF3E8] w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/growkartlogo.png"
            alt="GrowKart"
            width={100}
            height={100}
            className="w-24 h-24 object-contain"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-[#0D1B3E] font-medium text-sm border-b-2 border-[#0D1B3E] pb-0.5 hover:opacity-70 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="#contact"
            className="text-[#0D1B3E] font-medium text-sm hover:opacity-70 transition-opacity"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Full-width divider */}
      <div className="w-full h-px bg-[#0D1B3E] opacity-30" />
    </header>
  );
}
