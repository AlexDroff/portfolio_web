import { Reveal } from "@/components/animation/Reveal";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";
import type { LocalePackageItem } from "@/data/locales/types";
import Link from "next/link";
import styles from "./Packages.module.css";

type PackagesProps = {
  locale: Locale;
  packages: LocaleContent["home"]["packages"];
};

export const Packages = ({ locale, packages }: PackagesProps) => {
  const packageItems = packages.items as LocalePackageItem[];

  return (
    <Section id="packages" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <Reveal className={styles.header}>
            <h2 className={styles.title}>{packages.title}</h2>
            <p className={styles.description}>{packages.description}</p>
          </Reveal>

          <ul className={styles.grid}>
            {packageItems.map((item, index) => (
              <li key={item.id} className={styles.card}>
                <Reveal delay={index * 0.08}>
                  {item.badge ? <span className={styles.badge}>{item.badge}</span> : null}
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
                  {item.ctaLabel && item.ctaHref ? (
                    <Link href={getLocalizedPath(locale, item.ctaHref)} className={styles.cardCta}>
                      {item.ctaLabel}
                    </Link>
                  ) : null}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
