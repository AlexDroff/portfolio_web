import { Container } from "@/components/ui/Container/Container";
import styles from "./ProjectHero.module.css";

type ProjectHeroProps = {
  title?: string;
  subtitle?: string;
  role?: string;
  type?: string;
  location?: string;
  focus?: string;
};

export const ProjectHero = ({
  title = "Cleaning Company Website",
  subtitle = "Website for a local cleaning business in Spain",
  role = "Fullstack",
  type = "Business website",
  location,
  focus,
}: ProjectHeroProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.meta}>
            <span>Role: {role}</span>
            <span>Type: {type}</span>
            {location ? <span>Location: {location}</span> : null}
            {focus ? <span>Focus: {focus}</span> : null}
          </div>
        </div>
      </Container>
    </section>
  );
};
