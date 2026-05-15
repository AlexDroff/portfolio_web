import { Container } from "@/components/ui/Container/Container";
import type { LocaleContent } from "@/data/locales";
import styles from "./ProjectContent.module.css";

type ProjectContentProps = {
  problem: string;
  solution: string;
  result: string;
  labels: LocaleContent["ui"]["projectDetail"];
};

export const ProjectContent = ({
  problem,
  solution,
  result,
  labels,
}: ProjectContentProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h3>{labels.problem}</h3>
            <p>{problem}</p>
          </div>

          <div>
            <h3>{labels.solution}</h3>
            <p>{solution}</p>
          </div>

          <div>
            <h3>{labels.outcome}</h3>
            <p>{result}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
