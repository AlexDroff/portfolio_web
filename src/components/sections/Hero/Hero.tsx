"use client";

import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";
import { scrollToHashTarget } from "@/utils/scrollToHashTarget";
import styles from "./Hero.module.css";

type HeroProps = {
  locale: Locale;
  hero: LocaleContent["home"]["hero"];
};

export const Hero = ({ locale, hero }: HeroProps) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const homePath = getLocalizedPath(locale, "/");
  const projectsPath = getLocalizedPath(locale, "/#projects");
  const titleWords = hero.title.split(/\s+/).filter(Boolean);

  const handleProjectsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== homePath) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", projectsPath);
    scrollToHashTarget("projects");
  };

  if (shouldReduceMotion) {
    return (
      <section className={styles.hero}>
        <Container>
          <div className={styles.inner}>
            <h1 className={styles.title}>{hero.title}</h1>

            <p className={styles.subtitle}>{hero.description}</p>

            <div className={styles.actions}>
              <Button as="link" href={getLocalizedPath(locale, hero.primaryCta.href)} variant="primary">
                {hero.primaryCta.label}
              </Button>
              {hero.secondaryCta ? (
                <Button
                  as="link"
                  href={getLocalizedPath(locale, hero.secondaryCta.href)}
                  variant="secondary"
                  onClick={handleProjectsClick}
                >
                  {hero.secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title} aria-label={hero.title}>
            <motion.span
              className={styles.titleReveal}
              aria-hidden="true"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.045,
                  },
                },
              }}
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className={styles.titleWord}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: "easeOut" },
                    },
                  }}
                >
                  {index < titleWords.length - 1 ? `${word} ` : word}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.4, ease: "easeOut" }}
          >
            <Button as="link" href={getLocalizedPath(locale, hero.primaryCta.href)} variant="primary">
              {hero.primaryCta.label}
            </Button>
            {hero.secondaryCta ? (
              <Button
                as="link"
                href={getLocalizedPath(locale, hero.secondaryCta.href)}
                variant="secondary"
                onClick={handleProjectsClick}
              >
                {hero.secondaryCta.label}
              </Button>
            ) : null}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
