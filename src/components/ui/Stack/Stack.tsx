import type { ReactNode } from "react";
import styles from "./Stack.module.css";

type StackProps = {
  children: ReactNode;
  gap?: "sm" | "md" | "lg";
};

export const Stack = ({ children, gap = "md" }: StackProps) => {
  return (
    <div className={`${styles.stack} ${styles[`gap-${gap}`]}`}>{children}</div>
  );
};
