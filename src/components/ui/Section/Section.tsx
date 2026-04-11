import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export const Section = ({ children, id, className }: SectionProps) => {
  const classes = className ? `${styles.section} ${className}` : styles.section;
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};
