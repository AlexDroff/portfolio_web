import type { ReactNode } from "react";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { getContent, getLocalizedPath } from "@/data/locales";

import "@/styles/globals.css";

const content = getContent("pl");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: content.seo.root.title,
    template: content.seo.root.titleTemplate,
  },
  description: content.seo.root.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
    type: "website",
    url: `${siteConfig.url}${getLocalizedPath("pl", "/")}`,
    siteName: siteConfig.name,
    title: content.seo.root.openGraphTitle,
    description: content.seo.root.openGraphDescription,
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.root.twitterTitle,
    description: content.seo.root.twitterDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
