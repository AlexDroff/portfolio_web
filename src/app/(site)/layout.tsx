import type { ReactNode } from "react";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";
import { getContent } from "@/data/locales";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const content = getContent("pl");

  return (
    <>
      <Header locale="pl" navigation={content.ui.navigation} hero={content.home.hero} />
      {children}
      <BackToTop label={content.ui.common.backToTop} />
      <Footer locale="pl" common={content.ui.common} footer={content.ui.footer} />
    </>
  );
}
