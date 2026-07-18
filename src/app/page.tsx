import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import Industries from "@/components/sections/Industries";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Testimonials from "@/components/sections/Testimonials";
import Values from "@/components/sections/Values";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import { plans, phoneDisplay, founder } from "@/data/business";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GrowKart",
  url: "https://growkart.in",
  logo: "https://growkart.in/growkartlogo.png",
  image: "https://growkart.in/growkartlogo.png",
  description:
    "GrowKart builds websites, online stores, mobile apps and custom business software for restaurants, retail shops, showrooms and local service businesses across India.",
  telephone: phoneDisplay,
  priceRange: plans[0].price + "+",
  sameAs: ["https://instagram.com/growkart.in"],
  founder: {
    "@type": "Person",
    name: founder.name,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "Website Design for Small Business",
    "E-Commerce Website Development",
    "Restaurant Website Design",
    "Mobile App Development",
    "Custom Business Software",
    "Google Business Profile Setup",
    "Local SEO",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Order is a persuasion sequence: hook → problem → who → what → proof → trust → price → process → ask */}
      <Hero />
      <Impact />
      <Industries />
      <ServicesGrid />
      <FeaturedWork />
      <Testimonials />
      <Values />
      <Pricing />
      <Process />
      <Contact />
    </>
  );
}
