"use client";

import { useEffect, useRef } from "react";
import styles from "./LogoAnimated.module.css";

export function LogoAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/logo.svg")
      .then((res) => res.text())
      .then((svg) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      });
  }, []);

  return <div ref={containerRef} className={styles.logo} />;
}
