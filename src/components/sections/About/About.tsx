import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./About.module.css";

export const About = () => {
  return (
    <Section>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>About</h2>

          <p className={styles.text}>
            I’m a fullstack developer with a background in design.
          </p>

          <p className={styles.text}>
            I help small businesses get clean, modern websites that are fast,
            simple, and easy to use.
          </p>
        </div>
      </Container>
    </Section>
  );
};
