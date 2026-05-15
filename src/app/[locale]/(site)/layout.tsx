import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";
import { getContent, isPrefixedLocale } from "@/data/locales";

type LocalizedSiteLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocalizedSiteLayout({
  children,
  params,
}: LocalizedSiteLayoutProps) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const content = getContent(locale);

  return (
    <>
      <Header
        locale={locale}
        navigation={content.ui.navigation}
        hero={content.home.hero}
      />
      {children}
      <BackToTop label={content.ui.common.backToTop} />
      <Footer locale={locale} common={content.ui.common} footer={content.ui.footer} />
    </>
  );
}
