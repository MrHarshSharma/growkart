import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FAF3E8] border-t-4 border-[#0D1B3E]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Image
          src="/growkartlogo.png"
          alt="GrowKart"
          width={80}
          height={80}
          className="w-20 h-20 object-contain"
        />

        {/* Copyright */}
        <p className="text-[#0D1B3E] text-sm font-medium">
          © 2025. All Rights Reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="text-[#0D1B3E] hover:opacity-60 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-[#0D1B3E] hover:opacity-60 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* X / Twitter */}
          <a href="#" aria-label="X" className="text-[#0D1B3E] hover:opacity-60 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
