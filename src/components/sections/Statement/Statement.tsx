import { Container } from "@/components/ui/Container/Container";
import styles from "./Statement.module.css";

type StatementProps = {
  lines: string[];
};

export const Statement = ({ lines }: StatementProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.text}>
            {lines.map((line, index) => (
              <span key={index} className={styles.line}>
                {line}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
};
