import Image from "next/image";
import Link from "next/link";
import {
  auditLink,
  industries,
  instagramUrl,
  phoneDisplay,
  phoneHref,
} from "@/data/business";

// Root-relative so they resolve from sub-pages like /about, not just the home page.
const siteLinks = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Branded Water", href: "/branded-water" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Free Audit", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FAF3E8] border-t-4 border-[#0D1B3E]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/growkartlogo.png"
              alt="GrowKart"
              width={44}
              height={44}
              className="w-11 h-11 object-contain"
            />
            <p className="text-[#0D1B3E]/60 text-sm leading-relaxed max-w-xs">
              We help offline businesses become profitable online — websites and
              online stores for local businesses across India.
            </p>
          </div>

          {/* Site links */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#0D1B3E] font-black text-xs tracking-[0.18em] uppercase mb-1">
              Explore
            </h3>
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0D1B3E]/60 text-sm hover:text-[#0D1B3E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Industries */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#0D1B3E] font-black text-xs tracking-[0.18em] uppercase mb-1">
              Who We Help
            </h3>
            {industries.map((industry) => (
              <span key={industry.name} className="text-[#0D1B3E]/60 text-sm">
                {industry.name}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3.5 items-start">
            <h3 className="text-[#0D1B3E] font-black text-xs tracking-[0.18em] uppercase mb-1">
              Get In Touch
            </h3>
            <a
              href={phoneHref}
              className="text-[#0D1B3E]/60 text-sm hover:text-[#0D1B3E] transition-colors"
            >
              {phoneDisplay}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D1B3E]/60 text-sm hover:text-[#0D1B3E] transition-colors"
            >
              Instagram
            </a>
            <a
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#F25C2A] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#d94d1e] transition-colors duration-200"
            >
              Get a Free Audit
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#0D1B3E]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#0D1B3E]/50 text-sm">
            © {new Date().getFullYear()} GrowKart. All rights reserved.
          </p>
          <p className="text-[#0D1B3E]/50 text-sm">Built by GrowKart, in India.</p>
        </div>
      </div>
    </footer>
  );
}
