import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { CTA } from "@/components/ui/CTA/CTA";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";
import styles from "./ContactCTA.module.css";

type ContactCTAProps = {
  locale: Locale;
  projects: LocaleContent["home"]["projects"];
};

export const ContactCTA = ({ locale, projects }: ContactCTAProps) => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <CTA
            title={projects.cta.title}
            subtext={projects.cta.subtext}
            buttonLabel={projects.cta.buttonLabel}
            href={getLocalizedPath(locale, projects.cta.href)}
          />
        </div>
      </Container>
    </Section>
  );
};

