import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { CTA } from "@/components/ui/CTA/CTA";
import { homeContent } from "@/data/home";
import styles from "./ContactCTA.module.css";

export const ContactCTA = () => {
  const { projects } = homeContent;

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <CTA
            title={projects.cta.title}
            subtext={projects.cta.subtext}
            buttonLabel={projects.cta.buttonLabel}
            href={projects.cta.href}
          />
        </div>
      </Container>
    </Section>
  );
};

