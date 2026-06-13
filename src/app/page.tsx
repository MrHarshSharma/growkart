import Hero from "@/components/sections/Hero";
import Values from "@/components/sections/Values";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
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
