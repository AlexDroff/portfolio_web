import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ContactPageClient } from "@/app/contact/ContactPageClient";
import {
  getContent,
  getLocalizedPath,
  isPrefixedLocale,
  prefixedLocales,
  type Locale,
} from "@/data/locales";

type LocalizedContactPageProps = {
  params: Promise<{ locale: string }>;
};

const buildContactAlternates = (locale: Locale) => ({
  canonical: getLocalizedPath(locale, "/contact"),
  languages: {
    pl: getLocalizedPath("pl", "/contact"),
    en: getLocalizedPath("en", "/contact"),
    uk: getLocalizedPath("uk", "/contact"),
    "x-default": getLocalizedPath("pl", "/contact"),
  },
});

export async function generateMetadata({
  params,
}: LocalizedContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  const contactPath = getLocalizedPath(locale, "/contact");

  return {
    title: content.seo.contact.title,
    description: content.seo.contact.description,
    alternates: buildContactAlternates(locale),
    openGraph: {
      title: content.seo.contact.openGraphTitle,
      description: content.seo.contact.openGraphDescription,
      url: `${siteConfig.url}${contactPath}`,
    },
  };
}

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export default async function LocalizedContactPage({
  params,
}: LocalizedContactPageProps) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const localizedLocale: Locale = locale;
  return (
    <ContactPageClient
      locale={localizedLocale}
      contact={getContent(localizedLocale).contact}
    />
  );
}
