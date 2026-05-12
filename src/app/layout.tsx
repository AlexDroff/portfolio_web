import type { ReactNode } from "react";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Alexandroff — strony internetowe dla małych firm",
    template: "%s | Alexandroff",
  },
  description:
    "Tworzę szybkie, responsywne strony internetowe oraz proste systemy kontaktu i rezerwacji dla małych firm usługowych. Next.js, React, TypeScript, podstawy SEO i wsparcie przy wdrożeniu.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Alexandroff — strony internetowe dla małych firm",
    description:
      "Szybkie strony internetowe i proste flow kontaktowe dla małych firm usługowych.",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandroff — strony internetowe dla małych firm",
    description:
      "Szybkie strony internetowe i proste flow kontaktowe dla małych firm usługowych.",
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

