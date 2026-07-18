import type { Metadata } from "next";
import Link from "next/link";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Process from "@/components/sections/Process";
import { auditLink, founder } from "@/data/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the person behind GrowKart. We build websites and online stores for restaurants, shops, showrooms and local businesses across India.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "https://growkart.in/about",
    title: "About GrowKart",
    description:
      "Meet the person behind GrowKart — websites and online stores for local businesses across India.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://growkart.in/about",
  mainEntity: {
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    worksFor: {
      "@type": "Organization",
      name: "GrowKart",
      url: "https://growkart.in",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <About />
      <Values />
      <Process />

      {/* Closing CTA */}
      <section className="bg-[#FAF3E8] w-full">
        <div className="w-full h-px bg-[#0D1B3E] opacity-20" />
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28 flex flex-col items-start gap-6">
          <h2
            className="text-[#0D1B3E] font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}
          >
            Want to see if I can help?
          </h2>
          <p className="text-[#0D1B3E]/60 text-base leading-relaxed max-w-xl">
            Send me your business name and I&apos;ll tell you honestly what&apos;s
            stopping customers from finding you — free, and with no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F25C2A] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#d94d1e] transition-colors duration-200"
            >
              Get a Free Website Audit
              <span aria-hidden="true">&rarr;</span>
            </a>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#0D1B3E] hover:text-[#FAF3E8] transition-colors duration-200"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
