"use client";

import type { FocusEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { LogoAnimated } from "@/components/ui/LogoAnimated/LogoAnimated";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLanguageSwitchPath, getLocalizedPath } from "@/data/locales";
import { scrollToHashTarget } from "@/utils/scrollToHashTarget";

import styles from "./Header.module.css";

type HeaderProps = {
  locale: Locale;
  navigation: LocaleContent["ui"]["navigation"];
  hero: LocaleContent["home"]["hero"];
};

export const Header = ({ locale, navigation, hero }: HeaderProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopLanguageOpen, setIsDesktopLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const skipScrollRestoreRef = useRef(false);
  const homePath = getLocalizedPath(locale, "/");
  const projectsPath = getLocalizedPath(locale, "/#projects");
  const packagesPath = getLocalizedPath(locale, "/#packages");
  const faqPath = getLocalizedPath(locale, "/#faq");
  const contactPath = getLocalizedPath(locale, "/contact");
  const currentPath = `${pathname}${currentHash}`;
  const languageOptions: ReadonlyArray<Locale> = ["pl", "en", "uk"];
  const languageLabels: Record<
    Locale,
    { code: "PL" | "EN" | "UA"; ariaLabel: "Switch language to Polish" | "Switch language to English" | "Switch language to Ukrainian" }
  > = {
    pl: {
      code: "PL",
      ariaLabel: "Switch language to Polish",
    },
    en: {
      code: "EN",
      ariaLabel: "Switch language to English",
    },
    uk: {
      code: "UA",
      ariaLabel: "Switch language to Ukrainian",
    },
  };
  const currentLanguage = languageLabels[locale];
  const otherLanguages = languageOptions.filter((language) => language !== locale);

  useEffect(() => {
    const syncHash = () => {
      setCurrentHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, [pathname]);

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

  const handleHashClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetPath: string,
    hash: "projects" | "packages" | "faq",
  ) => {
    if (pathname !== homePath) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", targetPath);
    scrollToHashTarget(hash);
  };

  const handleHashClickAndClose = (
    event: MouseEvent<HTMLAnchorElement>,
    targetPath: string,
    hash: "projects" | "packages" | "faq",
  ) => {
    skipScrollRestoreRef.current = true;

    if (pathname === homePath) {
      event.preventDefault();
      window.history.replaceState(null, "", targetPath);
    }

    setIsMenuOpen(false);

    window.setTimeout(() => {
      if (window.location.pathname !== homePath || window.location.hash !== `#${hash}`) {
        return;
      }

      scrollToHashTarget(hash);
    }, 120);
  };

  const closeMenu = () => {
    setIsMobileLanguageOpen(false);
    setIsMenuOpen(false);
  };

  const handleDesktopDropdownBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocused = event.relatedTarget as Node | null;
    if (!event.currentTarget.contains(nextFocused)) {
      setIsDesktopLanguageOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href={homePath} className={styles.logoLink} aria-label={navigation.home}>
            <LogoAnimated />
          </Link>

          <div className={styles.desktopControls}>
            <nav className={styles.nav}>
              <Link
                href={projectsPath}
                onClick={(event) => handleHashClick(event, projectsPath, "projects")}
              >
                {navigation.projects}
              </Link>
              <Link
                href={packagesPath}
                onClick={(event) => handleHashClick(event, packagesPath, "packages")}
              >
                {navigation.packages}
              </Link>
              <Link href={faqPath} onClick={(event) => handleHashClick(event, faqPath, "faq")}>
                {navigation.faq}
              </Link>
              <Link href={contactPath}>{navigation.contact}</Link>
            </nav>

            <div
              className={`${styles.languageDropdown} ${isDesktopLanguageOpen ? styles.languageDropdownOpen : ""}`}
              onBlurCapture={handleDesktopDropdownBlur}
            >
              {isDesktopLanguageOpen ? (
                <button
                  type="button"
                  className={styles.languageTrigger}
                  aria-label="Choose language"
                  aria-expanded="true"
                  aria-controls="desktop-language-menu"
                  onClick={() => setIsDesktopLanguageOpen(false)}
                >
                  <span>{currentLanguage.code}</span>
                  <span
                    className={`${styles.languageChevron} ${styles.languageChevronOpen}`}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.languageTrigger}
                  aria-label="Choose language"
                  aria-expanded="false"
                  aria-controls="desktop-language-menu"
                  onClick={() => setIsDesktopLanguageOpen(true)}
                >
                  <span>{currentLanguage.code}</span>
                  <span className={styles.languageChevron} aria-hidden="true" />
                </button>
              )}

              <ul
                id="desktop-language-menu"
                className={styles.languageMenu}
                aria-label="Available languages"
              >
                {otherLanguages.map((language) => (
                  <li key={language}>
                    <Link
                      href={getLanguageSwitchPath(language, currentPath)}
                      className={styles.languageMenuLink}
                      aria-label={languageLabels[language].ariaLabel}
                      onClick={() => setIsDesktopLanguageOpen(false)}
                    >
                      {languageLabels[language].code}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isMenuOpen ? (
            <button
              type="button"
              className={styles.menuToggle}
              aria-label={navigation.closeMenu}
              aria-expanded="true"
              aria-controls="mobile-menu"
              onClick={() => {
                setIsMobileLanguageOpen(false);
                setIsMenuOpen((prev) => !prev);
              }}
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
              onClick={() => {
                setIsMobileLanguageOpen(false);
                setIsMenuOpen((prev) => !prev);
              }}
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
              <Link
                href={projectsPath}
                className={styles.mobileNavLink}
                onClick={(event) => handleHashClickAndClose(event, projectsPath, "projects")}
              >
                {navigation.projects}
              </Link>
              <Link href={contactPath} className={styles.mobileNavLink} onClick={closeMenu}>
                {navigation.contact}
              </Link>
              <Link
                href={packagesPath}
                className={styles.mobileNavLink}
                onClick={(event) => handleHashClickAndClose(event, packagesPath, "packages")}
              >
                {navigation.packages}
              </Link>
              <Link
                href={faqPath}
                className={styles.mobileNavLink}
                onClick={(event) => handleHashClickAndClose(event, faqPath, "faq")}
              >
                {navigation.faq}
              </Link>
            </nav>

            <div
              className={`${styles.mobileLanguageDropdown} ${isMobileLanguageOpen ? styles.mobileLanguageDropdownOpen : ""}`}
            >
              {isMobileLanguageOpen ? (
                <button
                  type="button"
                  className={styles.mobileLanguageTrigger}
                  aria-label="Choose language"
                  aria-expanded="true"
                  aria-controls="mobile-language-menu"
                  onClick={() => setIsMobileLanguageOpen(false)}
                >
                  <span>{currentLanguage.code}</span>
                  <span
                    className={`${styles.languageChevron} ${styles.languageChevronOpen}`}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.mobileLanguageTrigger}
                  aria-label="Choose language"
                  aria-expanded="false"
                  aria-controls="mobile-language-menu"
                  onClick={() => setIsMobileLanguageOpen(true)}
                >
                  <span>{currentLanguage.code}</span>
                  <span className={styles.languageChevron} aria-hidden="true" />
                </button>
              )}

              <ul
                id="mobile-language-menu"
                className={styles.mobileLanguageMenu}
                aria-label="Available languages"
              >
                {otherLanguages.map((language) => (
                  <li key={language}>
                    <Link
                      href={getLanguageSwitchPath(language, currentPath)}
                      className={styles.mobileLanguageMenuLink}
                      aria-label={languageLabels[language].ariaLabel}
                      onClick={closeMenu}
                    >
                      {languageLabels[language].code}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.mobileMenuSeparator} aria-hidden="true" />

            <div className={styles.mobileMenuActions}>
              <Button as="link" href={getLocalizedPath(locale, hero.primaryCta.href)} onClick={closeMenu} fullWidth>
                {hero.primaryCta.label}
              </Button>
              <Button
                as="link"
                variant="secondary"
                href={projectsPath}
                onClick={(event) => handleHashClickAndClose(event, projectsPath, "projects")}
                fullWidth
              >
                {hero.secondaryCta?.label ?? navigation.projects}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};
