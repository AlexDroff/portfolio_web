"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

import {
  getLanguageSwitchPath,
  type Locale,
} from "@/data/locales";
import styles from "./PageLanguageToggle.module.css";

type PageLanguageToggleProps = {
  locale: Locale;
  currentPath: string;
};

const languageOrder: Locale[] = ["pl", "en", "uk"];

const languageLabels: Record<Locale, { code: "PL" | "EN" | "UA"; ariaLabel: string }> = {
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

export function PageLanguageToggle({ locale, currentPath }: PageLanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const menuId = useId();
  const otherLanguages = languageOrder.filter((language) => language !== locale);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target || !wrapperRef.current) {
        return;
      }

      if (!wrapperRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {isOpen ? (
        <button
          type="button"
          className={styles.trigger}
          aria-label="Choose language"
          aria-expanded="true"
          aria-controls={menuId}
          onClick={() => setIsOpen(false)}
        >
          <span>{languageLabels[locale].code}</span>
          <span
            className={`${styles.chevron} ${styles.chevronOpen}`}
            aria-hidden="true"
          />
        </button>
      ) : (
        <button
          type="button"
          className={styles.trigger}
          aria-label="Choose language"
          aria-expanded="false"
          aria-controls={menuId}
          onClick={() => setIsOpen(true)}
        >
          <span>{languageLabels[locale].code}</span>
          <span className={styles.chevron} aria-hidden="true" />
        </button>
      )}

      {isOpen ? (
        <ul id={menuId} className={styles.menu} aria-label="Available languages">
          {otherLanguages.map((language) => (
            <li key={language}>
              <Link
                href={getLanguageSwitchPath(language, currentPath)}
                className={styles.menuLink}
                aria-label={languageLabels[language].ariaLabel}
                onClick={() => setIsOpen(false)}
              >
                {languageLabels[language].code}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
