import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FAF3E8] border-t-4 border-[#0D1B3E]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Image
          src="/growkartlogo.png"
          alt="GrowKart"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />

        {/* Copyright */}
        <p className="text-[#0D1B3E] text-sm font-medium">
          © 2025. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
