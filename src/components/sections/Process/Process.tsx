import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./Process.module.css";

export const Process = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>How I work</h2>

          <div className={styles.grid}>
            <div>01 — Idea</div>
            <div>02 — Structure</div>
            <div>03 — Development</div>
            <div>04 — Launch</div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
