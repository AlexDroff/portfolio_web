import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import styles from "./CTA.module.css";
import { Button } from "@/components/ui/Button/Button";

export const CTA = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>Need a website?</h2>

          <p className={styles.subtitle}>
            Fast, clean, and focused on results.
          </p>

          <div className={styles.actions}>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
