import type { ReactNode } from "react";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <BackToTop />
      <Footer />
    </>
  );
}
