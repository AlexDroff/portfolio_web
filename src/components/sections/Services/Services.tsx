"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { Reveal } from "@/components/animation/Reveal";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";

import styles from "./Services.module.css";

type ServicesProps = {
  locale: Locale;
  services: LocaleContent["home"]["services"];
};

export const Services = ({ locale, services }: ServicesProps) => {
  type ServiceListItem = (typeof services.items)[number];

  const isCtaItem = (
    item: ServiceListItem,
  ): item is ServiceListItem & { variant: "cta"; href: string } =>
    "variant" in item &&
    item.variant === "cta" &&
    "href" in item &&
    typeof item.href === "string";

  const shouldReduceMotion = useReducedMotion();
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  useEffect(() => {
    if (!activeCardId) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCardId(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeCardId]);

  useEffect(() => {
    if (!activeCardId) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      if (target.closest(`[data-service-card-id="${activeCardId}"]`)) {
        return;
      }

      setActiveCardId(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activeCardId]);

  const toggleCard = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <Reveal className={styles.header}>
            <h2 className={styles.title}>{services.title}</h2>
            <p className={styles.description}>{services.description}</p>
          </Reveal>

          <ul className={styles.grid}>
            {services.items.map((item, index) => {
              if (isCtaItem(item)) {
                return (
                  <li key={item.id} className={styles.cardItem}>
                    <Reveal className={styles.cardReveal} delay={index * 0.08}>
                      <motion.div
                        className={styles.ctaMotion}
                        whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                      >
                        <Link href={getLocalizedPath(locale, item.href)} className={`${styles.card} ${styles.ctaCard}`}>
                          <div className={`${styles.cardHeading} ${styles.ctaHeading}`}>
                            <h3 className={`${styles.cardTitle} ${styles.ctaTitle}`}>{item.title}</h3>
                            <span className={`${styles.cardSeparator} ${styles.ctaSeparator}`} aria-hidden="true" />
                          </div>
                          <p className={`${styles.cardDescription} ${styles.ctaDescription}`}>{item.description}</p>
                        </Link>
                      </motion.div>
                    </Reveal>
                  </li>
                );
              }

              const isActive = activeCardId === item.id;
              const panelId = `service-back-${item.id}`;
              const cardClasses = styles.card;
              const frontCard = (
                <button
                  type="button"
                  className={`${cardClasses} ${styles.cardButton}`}
                  data-service-card-id={item.id}
                  onClick={() => toggleCard(item.id)}
                  aria-expanded={isActive ? "true" : "false"}
                  aria-controls={panelId}
                  aria-label={`${services.flipOpenLabel}: ${item.title}`}
                >
                  <div className={styles.cardHeading}>
                    <h3 className={`${styles.cardTitle} ${styles.cardFrontTitle}`}>{item.title}</h3>
                    <span className={styles.cardSeparator} aria-hidden="true" />
                  </div>
                  <p className={styles.cardDescription}>{item.description}</p>
                </button>
              );

              const backCard = (
                <button
                  id={panelId}
                  type="button"
                  className={`${cardClasses} ${styles.cardBackContent} ${styles.cardButton}`}
                  data-service-card-id={item.id}
                  onClick={() => toggleCard(item.id)}
                  aria-expanded={isActive ? "true" : "false"}
                  aria-controls={panelId}
                  aria-label={`${services.flipOpenLabel}: ${item.title}`}
                >
                  <h3 className={`${styles.cardTitle} ${styles.cardBackTitle}`}>{item.title}</h3>
                  <span className={styles.cardBackSeparator} aria-hidden="true" />
                  <ul className={styles.backPoints}>
                    {item.backPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </button>
              );

              return (
                <li key={item.id} className={styles.cardItem}>
                  <Reveal className={styles.cardReveal} delay={index * 0.08}>
                    {shouldReduceMotion ? (
                      <div className={styles.cardScene}>{isActive ? backCard : frontCard}</div>
                    ) : (
                      <div className={styles.cardScene}>
                        <motion.div
                          className={styles.cardInner}
                          animate={{ rotateY: isActive ? 180 : 0 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                        >
                          <div
                            className={`${styles.cardFace} ${styles.cardFront}`}
                            aria-hidden={isActive ? "true" : "false"}
                          >
                            {frontCard}
                          </div>

                          <div
                            className={`${styles.cardFace} ${styles.cardBack}`}
                            aria-hidden={isActive ? "false" : "true"}
                          >
                            {backCard}
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
