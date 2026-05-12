"use client";

import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { homeContent } from "@/data/home";
import { scrollToHashTarget } from "@/utils/scrollToHashTarget";
import styles from "./Hero.module.css";

export const Hero = () => {
  const pathname = usePathname();
  const { hero } = homeContent;

  const handleProjectsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", "/#projects");
    scrollToHashTarget("projects");
  };

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title}>{hero.title}</h1>

          <p className={styles.subtitle}>{hero.description}</p>

          <div className={styles.actions}>
            <Button as="link" href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            {hero.secondaryCta ? (
              <Button
                as="link"
                href={hero.secondaryCta.href}
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

