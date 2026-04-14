import { Container } from "@/components/ui/Container/Container";
import { CTA as CTAContent } from "@/components/ui/CTA/CTA";
import styles from "./CTA.module.css";

export const CTA = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <CTAContent
            title="Need a website that brings real clients?"
            subtext="I build fast, reliable websites with clear structure and real business logic."
            buttonLabel="Start a project"
            href="/contact"
          />
        </div>
      </Container>
    </section>
  );
};

