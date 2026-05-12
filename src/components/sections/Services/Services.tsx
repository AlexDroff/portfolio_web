import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { homeContent } from "@/data/home";
import styles from "./Services.module.css";

export const Services = () => {
  const { services } = homeContent;

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>{services.title}</h2>
            <p className={styles.description}>{services.description}</p>
          </div>

          <ul className={styles.grid}>
            {services.items.map((item) => (
              <li key={item.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
