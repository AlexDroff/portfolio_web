"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container/Container";
import { LogoAnimated } from "@/components/ui/LogoAnimated/LogoAnimated";
import { siteContent } from "@/data/locales";
import { scrollToHashTarget } from "@/utils/scrollToHashTarget";

import styles from "./Header.module.css";

export const Header = () => {
  const { navigation } = siteContent.ui;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const skipScrollRestoreRef = useRef(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const { body } = document;
    const scrollY = window.scrollY;
    const originalOverflow = body.style.overflow;
    const originalPosition = body.style.position;
    const originalTop = body.style.top;
    const originalLeft = body.style.left;
    const originalRight = body.style.right;
    const originalWidth = body.style.width;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.overflow = originalOverflow;
      body.style.position = originalPosition;
      body.style.top = originalTop;
      body.style.left = originalLeft;
      body.style.right = originalRight;
      body.style.width = originalWidth;

      if (skipScrollRestoreRef.current) {
        skipScrollRestoreRef.current = false;
        return;
      }

      window.scrollTo(0, scrollY);
    };
  }, [isMenuOpen]);

  const handleProjectsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", "/#projects");
    scrollToHashTarget("projects");
  };

  const handleProjectsClickAndClose = (event: MouseEvent<HTMLAnchorElement>) => {
    skipScrollRestoreRef.current = true;

    if (pathname === "/") {
      event.preventDefault();
      window.history.replaceState(null, "", "/#projects");
    }

    setIsMenuOpen(false);

    window.setTimeout(() => {
      if (window.location.pathname !== "/" || window.location.hash !== "#projects") {
        return;
      }

      scrollToHashTarget("projects");
    }, 120);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} aria-label={navigation.home}>
            <LogoAnimated />
          </Link>

          <nav className={styles.nav}>
            <Link href="/#projects" onClick={handleProjectsClick}>
              {navigation.projects}
            </Link>
            <Link href="/contact">{navigation.contact}</Link>
          </nav>

          {isMenuOpen ? (
            <button
              type="button"
              className={styles.menuToggle}
              aria-label={navigation.closeMenu}
              aria-expanded="true"
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className={`${styles.menuIcon} ${styles.closeIcon}`} aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              className={styles.menuToggle}
              aria-label={navigation.openMenu}
              aria-expanded="false"
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className={`${styles.menuIcon} ${styles.burgerIcon}`} aria-hidden="true" />
            </button>
          )}
        </div>
      </Container>

      {isMenuOpen ? (
        <div className={styles.menuOverlay} onClick={closeMenu}>
          <div
            id="mobile-menu"
            className={styles.menuPanel}
            role="dialog"
            aria-modal="true"
            aria-label={navigation.mobileMenu}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.menuHeader}>
              <button
                type="button"
                className={styles.menuClose}
                aria-label={navigation.closeMenu}
                onClick={closeMenu}
              >
                <span className={`${styles.menuIcon} ${styles.closeIcon}`} aria-hidden="true" />
              </button>
            </div>

            <nav className={styles.menuNav}>
              <Link href="/#projects" onClick={handleProjectsClickAndClose}>
                {navigation.projects}
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                {navigation.contact}
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
};
