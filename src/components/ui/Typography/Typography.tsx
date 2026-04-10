import type { ReactNode } from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
  children: ReactNode;
};

export const H1 = ({ children }: TypographyProps) => (
  <h1 className={styles.h1}>{children}</h1>
);

export const H2 = ({ children }: TypographyProps) => (
  <h2 className={styles.h2}>{children}</h2>
);

export const Text = ({ children }: TypographyProps) => (
  <p className={styles.text}>{children}</p>
);
