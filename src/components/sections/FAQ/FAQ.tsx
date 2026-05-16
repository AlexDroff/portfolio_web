import { Reveal } from "@/components/animation/Reveal";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import type { FAQContent } from "@/types/faq";
import styles from "./FAQ.module.css";

type FAQProps = {
  faq: FAQContent;
};

export const FAQ = ({ faq }: FAQProps) => {
  return (
    <Section id="faq" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <Reveal className={styles.header}>
            <h2 className={styles.title}>{faq.title}</h2>
            <p className={styles.description}>{faq.description}</p>
          </Reveal>

          <ul className={styles.list}>
            {faq.items.map((item, index) => (
              <li key={item.id} className={styles.item}>
                <Reveal delay={index * 0.06}>
                  <details className={styles.details}>
                    <summary className={styles.summary}>{item.question}</summary>
                    <p className={styles.answer}>{item.answer}</p>
                  </details>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
