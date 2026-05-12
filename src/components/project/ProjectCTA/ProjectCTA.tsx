import { Container } from "@/components/ui/Container/Container";
import { CTA } from "@/components/ui/CTA/CTA";
import { siteContent } from "@/data/locales";
import styles from "./ProjectCTA.module.css";

type ProjectCTAProps = {
  title?: string;
  subtext?: string;
  buttonLabel?: string;
};

export const ProjectCTA = ({
  title,
  subtext,
  buttonLabel,
}: ProjectCTAProps) => {
  const { projectDetail } = siteContent.ui;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <CTA
            title={title ?? projectDetail.projectCtaFallbackTitle}
            subtext={subtext ?? projectDetail.projectCtaFallbackDescription}
            buttonLabel={buttonLabel ?? projectDetail.projectCtaFallbackButton}
            href="/contact"
          />
        </div>
      </Container>
    </section>
  );
};
