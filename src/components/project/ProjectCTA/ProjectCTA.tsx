import { Container } from "@/components/ui/Container/Container";
import { CTA } from "@/components/ui/CTA/CTA";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";
import styles from "./ProjectCTA.module.css";

type ProjectCTAProps = {
  locale: Locale;
  labels: LocaleContent["ui"]["projectDetail"];
  title?: string;
  subtext?: string;
  buttonLabel?: string;
};

export const ProjectCTA = ({
  locale,
  labels,
  title,
  subtext,
  buttonLabel,
}: ProjectCTAProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <CTA
            title={title ?? labels.projectCtaFallbackTitle}
            subtext={subtext ?? labels.projectCtaFallbackDescription}
            buttonLabel={buttonLabel ?? labels.projectCtaFallbackButton}
            href={getLocalizedPath(locale, "/contact")}
          />
        </div>
      </Container>
    </section>
  );
};
