"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type HoverCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  y?: number;
  scale?: number;
  duration?: number;
};

export function HoverCard({
  children,
  className,
  as = "div",
  y = -6,
  scale = 1.015,
  duration = 0.22,
}: HoverCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    switch (as) {
      case "article":
        return <article className={className}>{children}</article>;
      case "li":
        return <li className={className}>{children}</li>;
      default:
        return <div className={className}>{children}</div>;
    }
  }

  switch (as) {
    case "article":
      return (
        <motion.article
          className={className}
          whileHover={{ y, scale }}
          whileFocus={{ y, scale }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration, ease: "easeOut" }}
        >
          {children}
        </motion.article>
      );
    case "li":
      return (
        <motion.li
          className={className}
          whileHover={{ y, scale }}
          whileFocus={{ y, scale }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration, ease: "easeOut" }}
        >
          {children}
        </motion.li>
      );
    default:
      return (
        <motion.div
          className={className}
          whileHover={{ y, scale }}
          whileFocus={{ y, scale }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      );
  }
}
