import Hero from "@/components/sections/Hero";
import Values from "@/components/sections/Values";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GrowKart",
  url: "https://growkart.in",
  logo: "https://growkart.in/growkartlogo.png",
  description:
    "Digital agency specializing in website design, web development, e-commerce solutions, UI/UX design, and brand identity.",
  telephone: "+91-9665654326",
  sameAs: ["https://instagram.com/growkart.in"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  serviceType: [
    "Website Design",
    "Web Development",
    "E-Commerce Development",
    "UI/UX Design",
    "Brand Identity",
    "Digital Marketing",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Values />
      <ServicesGrid />
      <FeaturedWork />
      <Impact />
      <Testimonials />
      <Process />
      <Contact />
    </>
  );
}
