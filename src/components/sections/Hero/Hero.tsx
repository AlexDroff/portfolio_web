"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import styles from "./Hero.module.css";
import { Button } from "@/components/ui/Button/Button";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title}>Websites that bring clients</h1>

          <p className={styles.subtitle}>
            I build clean, modern websites for small businesses — fast, simple,
            and effective.
          </p>

          <div className={styles.actions}>
            <Link href="/#projects">
              <Button>View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button>Contact Me</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
