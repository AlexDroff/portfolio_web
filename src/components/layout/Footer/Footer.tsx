"use client";

import type { MouseEvent } from "react";
import { LogoAnimated } from "@/components/ui/LogoAnimated/LogoAnimated";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container/Container";
import { siteContent } from "@/data/locales";
import styles from "./Footer.module.css";

export const Footer = () => {
  const pathname = usePathname();
  const { common } = siteContent.ui;
  const year = new Date().getFullYear();
  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label={common.homeAriaLabel}
            onClick={handleLogoClick}
          >
            <LogoAnimated />
          </Link>
          <p className={styles.copy}>
            © {year} Loading. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </Container>
    </footer>
  );
};

