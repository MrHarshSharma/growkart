import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://growkart.in"),
  title: {
    default: "GrowKart — Web Design & Development Agency",
    template: "%s | GrowKart",
  },
  description:
    "GrowKart is a digital agency specializing in website design, web development, e-commerce solutions, UI/UX design, and brand identity for modern businesses.",
  keywords: [
    "web development agency",
    "website design",
    "e-commerce development",
    "UI UX design",
    "digital agency India",
    "Next.js development",
    "brand identity",
    "mobile app development",
    "GrowKart",
  ],
  authors: [{ name: "GrowKart" }],
  creator: "GrowKart",
  icons: {
    icon: "/growkartlogo.png",
    apple: "/growkartlogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://growkart.in",
    siteName: "GrowKart",
    title: "GrowKart — Web Design & Development Agency",
    description:
      "We design, build, and grow digital products that drive real results. Website design, e-commerce, UI/UX, and brand identity.",
    images: [
      {
        url: "/growkartlogo.png",
        width: 512,
        height: 512,
        alt: "GrowKart Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowKart — Web Design & Development Agency",
    description:
      "We design, build, and grow digital products that drive real results.",
    images: ["/growkartlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
