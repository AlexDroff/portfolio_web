"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container/Container";
import { LogoAnimated } from "@/components/ui/LogoAnimated/LogoAnimated";
import { scrollToHashTarget } from "@/utils/scrollToHashTarget";

import styles from "./Header.module.css";

export const Header = () => {
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
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} aria-label="Home">
            <LogoAnimated />
          </Link>

          <nav className={styles.nav}>
            <Link href="/#projects" onClick={handleProjectsClick}>
              Projects
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};
