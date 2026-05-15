"use client";

import type { MouseEvent } from "react";
import { LogoAnimated } from "@/components/ui/LogoAnimated/LogoAnimated";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container/Container";
import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";
import styles from "./Footer.module.css";

type FooterProps = {
  locale: Locale;
  common: LocaleContent["ui"]["common"];
  footer: LocaleContent["ui"]["footer"];
};

export const Footer = ({ locale, common, footer }: FooterProps) => {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const homePath = getLocalizedPath(locale, "/");

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== homePath) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", homePath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <Link
            href={homePath}
            className={styles.logoLink}
            aria-label={common.homeAriaLabel}
            onClick={handleLogoClick}
          >
            <LogoAnimated />
          </Link>
          <p className={styles.copy}>{footer.copyright.replace("{year}", String(year))}</p>
        </div>
      </Container>
    </footer>
  );
};
