"use client";

import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";

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
  const homePath = getLocalizedPath(locale, "/");
  const projectsPath = getLocalizedPath(locale, "/#projects");

  const handleProjectsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== homePath) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", projectsPath);
    scrollToHashTarget("projects");
  };

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
};

