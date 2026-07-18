import type { Metadata } from "next";
import WaterHero from "@/components/sections/water/WaterHero";
import WaterReasons from "@/components/sections/water/WaterReasons";
import WaterProcess from "@/components/sections/water/WaterProcess";
import WaterTiers from "@/components/sections/water/WaterTiers";
import WaterCTA from "@/components/sections/water/WaterCTA";
import { phoneDisplay } from "@/data/business";
import { waterCity, waterFromPrice, waterTiers } from "@/data/water";

export const metadata: Metadata = {
  title: "Branded Water for Restaurants",
  description:
    `Custom-labelled packaged drinking water for restaurants, cafés and events in ${waterCity}. Your brand on the bottle, your own MRP, weekly delivery. Free mockup.`,
  keywords: [
    `branded water bottles ${waterCity}`,
    "custom label water bottles for restaurants",
    "personalised water bottles restaurant India",
    "private label drinking water",
    "customised water bottles for events",
    "branded water for banquets",
  ],
  alternates: {
    canonical: "/branded-water",
  },
  openGraph: {
    type: "website",
    url: "https://growkart.in/branded-water",
    title: "Branded Water for Restaurants | GrowKart",
    description:
      `Your restaurant's name on every bottle. Custom-labelled drinking water in ${waterCity}, from ${waterFromPrice} a bottle.`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Branded Water — Custom-Labelled Drinking Water",
  serviceType: "Custom-labelled packaged drinking water supply",
  description:
    "Custom-labelled packaged drinking water supplied to restaurants, cafés, banquet halls and events. Label design, supply and weekly delivery.",
  provider: {
    "@type": "Organization",
    name: "GrowKart",
    url: "https://growkart.in",
    telephone: phoneDisplay,
  },
  areaServed: {
    "@type": "City",
    name: waterCity,
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Restaurants, cafés, banquet halls and caterers",
  },
  offers: waterTiers.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    description: tier.tagline,
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: tier.price.replace(/[^\d.]/g, ""),
      priceCurrency: "INR",
      unitText: "bottle",
    },
  })),
};

export default function BrandedWaterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WaterHero />
      <WaterReasons />
      <WaterProcess />
      <WaterTiers />
      <WaterCTA />
    </>
  );
}
