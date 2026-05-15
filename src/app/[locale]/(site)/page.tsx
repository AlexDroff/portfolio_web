import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { HomePage } from "@/components/pages/HomePage/HomePage";
import {
  getContent,
  getLocalizedPath,
  isPrefixedLocale,
  prefixedLocales,
  type Locale,
} from "@/data/locales";

type LocalizedHomePageProps = {
  params: Promise<{ locale: string }>;
};

function homeAlternates(locale: Locale) {
  return {
    canonical: getLocalizedPath(locale, "/"),
    languages: {
      pl: getLocalizedPath("pl", "/"),
      en: getLocalizedPath("en", "/"),
      uk: getLocalizedPath("uk", "/"),
      "x-default": getLocalizedPath("pl", "/"),
    },
  };
}

export async function generateMetadata({
  params,
}: LocalizedHomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    return {};
  }

  const content = getContent(locale);

  return {
    title: content.seo.root.title,
    description: content.seo.root.description,
    alternates: homeAlternates(locale),
    openGraph: {
      title: content.seo.root.openGraphTitle,
      description: content.seo.root.openGraphDescription,
      url: `${siteConfig.url}${getLocalizedPath(locale, "/")}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.root.twitterTitle,
      description: content.seo.root.twitterDescription,
    },
  };
}

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({ params }: LocalizedHomePageProps) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const localizedLocale: Locale = locale;
  return <HomePage locale={localizedLocale} content={getContent(localizedLocale)} />;
}
