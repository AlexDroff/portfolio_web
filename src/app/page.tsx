// src/app/page.tsx

import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { About } from "@/components/sections/About/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
