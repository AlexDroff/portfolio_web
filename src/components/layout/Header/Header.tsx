import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { LogoAnimated } from "@/components/ui/LogoAnimated/LogoAnimated";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} aria-label="Home">
            <LogoAnimated />
          </Link>

          <nav className={styles.nav}>
            <Link href="#projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};
