// src/app/page.tsx

import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { About } from "@/components/sections/About/About";
import { Services } from "@/components/sections/Services/Services";
import { Packages } from "@/components/sections/Packages/Packages";
import { FAQ } from "@/components/sections/FAQ/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA/ContactCTA";
import { ProfessionalServiceJsonLd } from "@/components/seo/ProfessionalServiceJsonLd";
import { HashScrollHandler } from "@/components/ui/HashScrollHandler/HashScrollHandler";

export default function Home() {
  return (
    <>
      <ProfessionalServiceJsonLd />
      <HashScrollHandler hash="projects" />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Packages />
      <FAQ />
      <ContactCTA />
    </>
  );
}
