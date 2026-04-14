import { Button } from "@/components/ui/Button/Button";
import styles from "./CTA.module.css";

type CTAProps = {
  title: string;
  subtext: string;
  buttonLabel: string;
  href: string;
};

export const CTA = ({ title, subtext, buttonLabel, href }: CTAProps) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.subtitle}>{subtext}</p>
      <div className={styles.actions}>
        <Button variant="primary" as="link" href={href}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};
