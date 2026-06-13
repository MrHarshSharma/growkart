import Hero from "@/components/sections/Hero";
import Values from "@/components/sections/Values";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Impact from "@/components/sections/Impact";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <ServicesGrid />
      <Impact />
      <Process />
      <Contact />
    </>
  );
}
