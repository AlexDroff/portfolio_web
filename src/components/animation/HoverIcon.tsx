"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type HoverIconProps = {
  children: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
};

export function HoverIcon({
  children,
  className,
  scale = 1.08,
  duration = 0.2,
}: HoverIconProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      whileHover={{ scale }}
      whileFocus={{ scale }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
