import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <section className={styles.section}>{children}</section>;
};
