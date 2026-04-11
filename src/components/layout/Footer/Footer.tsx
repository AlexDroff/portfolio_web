import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" aria-label="Home">
            <Image src="/logo.svg" alt="Logo" width={156} height={42} />
          </Link>
          <a href="mailto:hello@example.com" className={styles.email}>
            hello@example.com
          </a>
          <p className={styles.copy}>{"\u00A9"} {year}</p>
        </div>
      </Container>
    </footer>
  );
};
