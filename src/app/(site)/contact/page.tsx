import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Napisz do Alexandroff w sprawie strony internetowej, flow rezerwacji, formularza kontaktowego albo aplikacji webowej.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Kontakt — Alexandroff",
    description:
      "Wyślij krótki opis projektu i otrzymaj orientacyjny zakres, termin oraz cenę startową.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}


