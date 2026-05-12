import { Container } from "@/components/ui/Container/Container";
import { siteContent } from "@/data/locales";
import styles from "./ProjectContent.module.css";

type ProjectContentProps = {
  problem: string;
  solution: string;
  result: string;
};

export const ProjectContent = ({
  problem,
  solution,
  result,
}: ProjectContentProps) => {
  const { projectDetail } = siteContent.ui;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h3>{projectDetail.problem}</h3>
            <p>{problem}</p>
          </div>

          <div>
            <h3>{projectDetail.solution}</h3>
            <p>{solution}</p>
          </div>

          <div>
            <h3>{projectDetail.outcome}</h3>
            <p>{result}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
