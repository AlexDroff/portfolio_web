import { Container } from "@/components/ui/Container/Container";
import { CTA } from "@/components/ui/CTA/CTA";
import styles from "./ProjectCTA.module.css";

type ProjectCTAProps = {
  title?: string;
  subtext?: string;
  buttonLabel?: string;
};

export const ProjectCTA = ({
  title = "Need a website that brings real clients?",
  subtext = "I build fast, reliable websites with clear structure and real business logic.",
  buttonLabel = "Start a project",
}: ProjectCTAProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <CTA
            title={title}
            subtext={subtext}
            buttonLabel={buttonLabel}
            href="/contact"
          />
        </div>
      </Container>
    </section>
  );
};
