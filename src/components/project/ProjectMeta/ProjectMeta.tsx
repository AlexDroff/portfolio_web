import { Container } from "@/components/ui/Container/Container";
import type { ProjectMetaItem } from "@/types/project";
import styles from "./ProjectMeta.module.css";

type ProjectMetaProps = {
  items: ProjectMetaItem[];
};

export const ProjectMeta = ({ items }: ProjectMetaProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.label} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
