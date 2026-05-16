"use client";

import { useEffect, useRef } from "react";
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
  const gridRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) {
      return;
    }

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(`.${styles.card}`));
    if (cards.length === 0) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 769px)");

    const syncHeights = () => {
      cards.forEach((card) => {
        card.style.minHeight = "";
      });

      if (!desktopQuery.matches) {
        return;
      }

      const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));
      cards.forEach((card) => {
        card.style.minHeight = `${maxHeight}px`;
      });
    };

    syncHeights();

    const resizeObserver = new ResizeObserver(syncHeights);
    cards.forEach((card) => resizeObserver.observe(card));

    window.addEventListener("resize", syncHeights);
    desktopQuery.addEventListener("change", syncHeights);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncHeights);
      desktopQuery.removeEventListener("change", syncHeights);
    };
  }, []);

  return (
    <Section id="packages" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <Reveal className={styles.header}>
            <h2 className={styles.title}>{packages.title}</h2>
            <p className={styles.description}>{packages.description}</p>
          </Reveal>

          <ul className={styles.grid} ref={gridRef}>
            {packageItems.map((item, index) => (
              <li key={item.id} className={styles.card}>
                <Reveal className={styles.cardContent} delay={index * 0.08}>
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