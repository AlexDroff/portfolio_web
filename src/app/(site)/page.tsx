import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { HomePage } from "@/components/pages/HomePage/HomePage";
import { getContent, getLocalizedPath } from "@/data/locales";

const content = getContent("pl");

export const metadata: Metadata = {
  title: content.seo.root.title,
  description: content.seo.root.description,
  alternates: {
    canonical: getLocalizedPath("pl", "/"),
    languages: {
      pl: getLocalizedPath("pl", "/"),
      en: getLocalizedPath("en", "/"),
      uk: getLocalizedPath("uk", "/"),
      "x-default": getLocalizedPath("pl", "/"),
    },
  },
  openGraph: {
    title: content.seo.root.openGraphTitle,
    description: content.seo.root.openGraphDescription,
    url: `${siteConfig.url}${getLocalizedPath("pl", "/")}`,
    type: "website",
  },
};

export default function Home() {
  return <HomePage locale="pl" content={content} />;
}
