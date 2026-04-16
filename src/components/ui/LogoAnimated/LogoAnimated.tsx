"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./LogoAnimated.module.css";

export function LogoAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadLogo = async () => {
      try {
        const response = await fetch("/logo.svg");
        if (!response.ok) {
          throw new Error(`Failed to load logo.svg: ${response.status}`);
        }

        const svgMarkup = await response.text();
        const parsedDocument = new DOMParser().parseFromString(
          svgMarkup,
          "image/svg+xml"
        );

        if (parsedDocument.querySelector("parsererror")) {
          throw new Error("Invalid SVG markup in logo.svg");
        }

        const svgElement = parsedDocument.querySelector("svg");
        if (!svgElement) {
          throw new Error("logo.svg does not contain an <svg> root");
        }

        if (!isMounted || !containerRef.current) {
          return;
        }

        containerRef.current.replaceChildren(svgElement);
        setHasError(false);
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setHasError(true);
        console.error("LogoAnimated: unable to render animated logo.", error);
      }
    };

    void loadLogo();

    return () => {
      isMounted = false;
    };
  }, []);

  if (hasError) {
    return (
      <Image
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        width={15662}
        height={2997}
        className={styles.logoFallback}
      />
    );
  }

  return <div ref={containerRef} className={styles.logo} />;
}
