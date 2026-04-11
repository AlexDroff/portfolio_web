import { Container } from "@/components/ui/Container/Container";
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
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h3>Problem</h3>
            <p>{problem}</p>
          </div>

          <div>
            <h3>Solution</h3>
            <p>{solution}</p>
          </div>

          <div>
            <h3>Result</h3>
            <p>{result}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
