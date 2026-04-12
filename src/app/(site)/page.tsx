// src/app/page.tsx

import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { About } from "@/components/sections/About/About";
import { HashScrollHandler } from "@/components/ui/HashScrollHandler/HashScrollHandler";

export default function Home() {
  return (
    <>
      <HashScrollHandler hash="projects" />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
