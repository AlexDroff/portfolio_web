import { Container } from "@/components/ui/Container/Container";
import styles from "./ProjectContributions.module.css";

type ProjectContributionsProps = {
  title: string;
  items: string[];
};

export const ProjectContributions = ({
  title,
  items,
}: ProjectContributionsProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
