import { LogoAnimated } from "@/components/ui/LogoAnimated/LogoAnimated";
import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} aria-label="Home">
            <LogoAnimated />
          </Link>
          <a
            href="mailto:olexandr.alexandroff@gmail.com"
            className={styles.email}
          >
            olexandr.alexandroff@gmail.com
          </a>
          <p className={styles.copy}>
            {"\u00A9"} {year}
          </p>
        </div>
      </Container>
    </footer>
  );
};
