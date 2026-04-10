// src/app/page.tsx

import { Hero } from "@/components/sections/Hero/Hero";
import { Statement } from "@/components/sections/Statement/Statement";
import { Projects } from "@/components/sections/Projects/Projects";
import { About } from "@/components/sections/About/About";
import { Process } from "@/components/sections/Process/Process";
import { CTA } from "@/components/sections/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <Statement lines={["Clean.", "Simple.", "Effective."]} />

      <Projects />

      <About />

      <Process />

      <Statement
        lines={["No templates.", "No chaos.", "Just a clear process."]}
      />

      <CTA />
    </>
  );
}
