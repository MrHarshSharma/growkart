import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HashScroll from "@/components/layout/HashScroll";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://growkart.in"),
  title: {
    default: "GrowKart — Websites That Get Local Businesses More Customers",
    template: "%s | GrowKart",
  },
  description:
    "We build websites and online stores for restaurants, shops, showrooms and local businesses across India. Fixed price, fixed timeline. Get a free website audit.",
  keywords: [
    "website design for small business India",
    "restaurant website design",
    "online store for local shop",
    "ecommerce website India",
    "google business profile setup",
    "local SEO India",
    "affordable website design India",
    "website for showroom",
    "mobile app development India",
    "custom business software India",
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
    title: "GrowKart — Websites That Get Local Businesses More Customers",
    description:
      "Websites and online stores for restaurants, shops and local businesses across India. Fixed price, fixed timeline, free website audit.",
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
    title: "GrowKart — Websites That Get Local Businesses More Customers",
    description:
      "Websites and online stores for restaurants, shops and local businesses across India.",
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
        <HashScroll />
        {children}
        <Footer />
      </body>
      {/*
        Loads gtag.js and, unlike the raw snippet, also reports a pageview on
        client-side route changes — otherwise only the first page of a visit
        would ever be counted.
      */}
      <GoogleAnalytics gaId="G-GLYELFMEXH" />
    </html>
  );
}
