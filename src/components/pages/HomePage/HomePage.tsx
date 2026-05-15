import type { Locale, LocaleContent } from "@/data/locales";

import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { About } from "@/components/sections/About/About";
import { Services } from "@/components/sections/Services/Services";
import { Packages } from "@/components/sections/Packages/Packages";
import { FAQ } from "@/components/sections/FAQ/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA/ContactCTA";
import { ProfessionalServiceJsonLd } from "@/components/seo/ProfessionalServiceJsonLd";
import { HashScrollHandler } from "@/components/ui/HashScrollHandler/HashScrollHandler";

type HomePageProps = {
  locale: Locale;
  content: LocaleContent;
};

export function HomePage({ locale, content }: HomePageProps) {
  return (
    <>
      <ProfessionalServiceJsonLd locale={locale} home={content.home} seo={content.seo} />
      <HashScrollHandler hash="projects" />
      <Hero locale={locale} hero={content.home.hero} />
      <About about={content.home.about} profilePhotoLabel={content.ui.common.profilePhoto} />
      <Projects
        locale={locale}
        projectsContent={content.home.projects}
        projectsSectionLabels={content.ui.projectsSection}
        projectCardLabels={content.ui.projectCard}
        projects={content.projects}
      />
      <Services locale={locale} services={content.home.services} />
      <Packages locale={locale} packages={content.home.packages} />
      <FAQ faq={content.faq} />
      <ContactCTA locale={locale} projects={content.home.projects} />
    </>
  );
}
