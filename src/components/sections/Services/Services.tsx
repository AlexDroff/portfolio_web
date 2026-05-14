import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { homeContent } from "@/data/home";
import Link from "next/link";
import styles from "./Services.module.css";

export const Services = () => {
  const { services } = homeContent;
  type ServiceListItem = (typeof services.items)[number];

  const isCtaItem = (
    item: ServiceListItem,
  ): item is ServiceListItem & { variant: "cta"; href: string } =>
    "variant" in item &&
    item.variant === "cta" &&
    "href" in item &&
    typeof item.href === "string";

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>{services.title}</h2>
            <p className={styles.description}>{services.description}</p>
          </div>

          <ul className={styles.grid}>
            {services.items.map((item) => {
              return (
                <li key={item.id} className={styles.cardItem}>
                  {isCtaItem(item) ? (
                    <Link href={item.href} className={`${styles.card} ${styles.ctaCard}`}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDescription}>{item.description}</p>
                    </Link>
                  ) : (
                    <div className={styles.card}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDescription}>{item.description}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
