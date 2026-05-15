import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { ContactPageClient } from "./ContactPageClient";
import { getContent, getLocalizedPath } from "@/data/locales";

const content = getContent("pl");

export const metadata: Metadata = {
  title: content.seo.contact.title,
  description: content.seo.contact.description,
  alternates: {
    canonical: getLocalizedPath("pl", "/contact"),
    languages: {
      pl: getLocalizedPath("pl", "/contact"),
      en: getLocalizedPath("en", "/contact"),
      uk: getLocalizedPath("uk", "/contact"),
      "x-default": getLocalizedPath("pl", "/contact"),
    },
  },
  openGraph: {
    title: content.seo.contact.openGraphTitle,
    description: content.seo.contact.openGraphDescription,
    url: `${siteConfig.url}${getLocalizedPath("pl", "/contact")}`,
  },
};

export default function ContactPage() {
  return <ContactPageClient locale="pl" contact={content.contact} />;
}
