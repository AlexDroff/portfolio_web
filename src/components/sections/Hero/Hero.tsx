"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            I build clean, fast websites
            <br />
            for real businesses
          </h1>

          <p className={styles.subtitle}>
            Fullstack developer with a design background.
            <br />
            I help small businesses launch modern, simple, and effective
            websites.
          </p>

          <div className={styles.actions}>
            <Link
              href="/#projects"
              className={styles.primaryBtn}
              onClick={handleProjectsClick}
            >
              View Work
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Get a website
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
