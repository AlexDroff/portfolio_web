import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import styles from "./ProjectHero.module.css";

type ProjectHeroProps = {
  title: string;
  subtitle: string;
  liveUrl: string;
  liveProjectLabel: string;
};

export const ProjectHero = ({
  title,
  subtitle,
  liveUrl,
  liveProjectLabel,
}: ProjectHeroProps) => {
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
              {liveProjectLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
