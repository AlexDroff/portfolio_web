import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./Process.module.css";

export const Process = () => {
  return (
    <Section id="process" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>How I work</h2>

          <div className={styles.grid}>
            <div className={styles.step}>{"\u{1F4A1} Idea"}</div>
            <div className={styles.step}>{"\u{1F9F1} Structure"}</div>
            <div className={styles.step}>&lt;/&gt; Development</div>
            <div className={styles.step}>{"\u{1F680} Launch"}</div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
