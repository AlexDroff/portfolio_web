import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { homeContent } from "@/data/home";
import styles from "./Packages.module.css";

export const Packages = () => {
  const { packages } = homeContent;

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>{packages.title}</h2>
            <p className={styles.description}>{packages.description}</p>
          </div>

          <ul className={styles.grid}>
            {packages.items.map((item) => (
              <li key={item.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.price}>{item.price}</p>
                <p className={styles.cardDescription}>{item.description}</p>
                <ul className={styles.features}>
                  {item.features.map((feature) => (
                    <li key={`${item.id}-${feature}`} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
                {item.note ? <p className={styles.note}>{item.note}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
