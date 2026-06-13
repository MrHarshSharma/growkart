import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrowKart — Crafting Digital Solutions",
  description: "Elevate your brand with expert digital design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-[#FAF3E8] text-[#0D1B3E]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
