"use client";

import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { scrollToHashTarget } from "@/utils/scrollToHashTarget";
import styles from "./Hero.module.css";

export const Hero = () => {
  const pathname = usePathname();

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
          <h1 className={styles.title}>
            I build simple websites that help businesses get clients
          </h1>

          <p className={styles.subtitle}>
            Clear structure, fast performance, and real user flows — without unnecessary complexity.
          </p>

          <div className={styles.actions}>
            <Button
              as="link"
              href="/#projects"
              variant="primary"
              onClick={handleProjectsClick}
            >
              View Work
            </Button>
            <Button as="link" href="/contact" variant="secondary">
              Start a project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
