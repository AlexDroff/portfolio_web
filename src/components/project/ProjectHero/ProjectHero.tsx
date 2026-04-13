import { Container } from "@/components/ui/Container/Container";
import styles from "./ProjectHero.module.css";

type ProjectHeroProps = {
  title: string;
  subtitle: string;
};

export const ProjectHero = ({ title, subtitle }: ProjectHeroProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Container>
    </section>
  );
};
