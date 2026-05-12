import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { siteContent } from "@/data/locales";
import styles from "./ProjectHero.module.css";

type ProjectHeroProps = {
  title: string;
  subtitle: string;
  liveUrl: string;
};

export const ProjectHero = ({ title, subtitle, liveUrl }: ProjectHeroProps) => {
  const { projectDetail } = siteContent.ui;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.actions}>
            <Button
              as="link"
              href={liveUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectDetail.liveProject}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
