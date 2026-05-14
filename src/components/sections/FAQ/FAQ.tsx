import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { faqContent } from "@/data/faq";
import styles from "./FAQ.module.css";

export const FAQ = () => {
  return (
    <Section id="faq" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>{faqContent.title}</h2>
            <p className={styles.description}>{faqContent.description}</p>
          </div>

          <ul className={styles.list}>
            {faqContent.items.map((item) => (
              <li key={item.id} className={styles.item}>
                <details className={styles.details}>
                  <summary className={styles.summary}>{item.question}</summary>
                  <p className={styles.answer}>{item.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
