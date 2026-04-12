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
            <Link href="#projects">
              <Button>View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
