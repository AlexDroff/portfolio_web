"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

const VISIBILITY_SCROLL_OFFSET = 300;

type BackToTopProps = {
  label: string;
};

export const BackToTop = ({ label }: BackToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > VISIBILITY_SCROLL_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const className = isVisible
    ? `${styles.button} ${styles.visible}`
    : styles.button;

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      aria-label={label}
    >
      {"\u2191"}
    </button>
  );
};
