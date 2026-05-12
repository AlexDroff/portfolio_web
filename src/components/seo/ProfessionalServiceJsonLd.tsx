import { siteConfig } from "@/config/site";
import { homeContent } from "@/data/home";

export function ProfessionalServiceJsonLd() {
  const services = homeContent.services.items.map((service) => service.title);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description:
          "Portfolio i strona usługowa freelancera oferującego web development dla małych firm.",
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        jobTitle: "Fullstack Developer",
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl].filter(Boolean),
        knowsAbout: siteConfig.mainStack,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#professional-service`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description:
          "Usługi web development dla małych firm usługowych: szybkie strony internetowe, flow kontaktowe i rezerwacyjne, aplikacje webowe, modernizacja stron, podstawy SEO oraz wsparcie przy wdrożeniu.",
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
