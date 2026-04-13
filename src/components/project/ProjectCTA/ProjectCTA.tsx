import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import styles from "./ProjectCTA.module.css";

type ProjectCTAProps = {
  title?: string;
  subtext?: string;
  buttonLabel?: string;
};

export const ProjectCTA = ({
  title = "Need a website like this?",
  subtext = "",
  buttonLabel = "Contact me",
}: ProjectCTAProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          {subtext ? <p className={styles.subtitle}>{subtext}</p> : null}

          <Link href="/contact" className={styles.actions}>
            <Button>{buttonLabel}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
