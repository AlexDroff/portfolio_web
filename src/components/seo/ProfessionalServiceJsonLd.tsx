import { siteConfig } from "@/config/site";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";

type ProfessionalServiceJsonLdProps = {
  locale: Locale;
  home: LocaleContent["home"];
  seo: LocaleContent["seo"];
};

export function ProfessionalServiceJsonLd({
  locale,
  home,
  seo,
}: ProfessionalServiceJsonLdProps) {
  const services = home.services.items.map((service) => service.title);
  const localizedHomeUrl = `${siteConfig.url}${getLocalizedPath(locale, "/")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.brandName,
        url: localizedHomeUrl,
        description: seo.jsonLd.websiteDescription,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.ownerName,
        url: siteConfig.url,
        email: siteConfig.email,
        jobTitle: seo.jsonLd.personJobTitle,
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl].filter(Boolean),
        knowsAbout: siteConfig.mainStack,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#professional-service`,
        name: siteConfig.brandName,
        url: localizedHomeUrl,
        email: siteConfig.email,
        description: seo.jsonLd.professionalServiceDescription,
        areaServed: {
          "@type": "Country",
          name: siteConfig.location,
        },
        provider: {
          "@id": `${siteConfig.url}/#person`,
        },
        serviceType: services,
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl].filter(Boolean),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
