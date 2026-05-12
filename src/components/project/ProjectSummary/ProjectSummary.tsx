import { Container } from "@/components/ui/Container/Container";
import type { ProjectSummary as ProjectSummaryType } from "@/types/project";
import { siteContent } from "@/data/locales";
import styles from "./ProjectSummary.module.css";

type ProjectSummaryProps = {
  summary: ProjectSummaryType;
};

export const ProjectSummary = ({ summary }: ProjectSummaryProps) => {
  const { projectDetail } = siteContent.ui;

  return (
    <section className={styles.section} aria-labelledby="project-summary-title">
      <Container>
        <div className={styles.wrapper}>
          <h2 id="project-summary-title" className={styles.title}>
            {projectDetail.projectSummaryTitle}
          </h2>

          <dl className={styles.grid}>
            <div className={styles.item}>
              <dt className={styles.term}>{projectDetail.projectType}</dt>
              <dd className={styles.value}>{summary.projectType}</dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.term}>{projectDetail.goal}</dt>
              <dd className={styles.value}>{summary.goal}</dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.term}>{projectDetail.mainFeatures}</dt>
              <dd className={styles.value}>
                <ul className={styles.list}>
                  {summary.mainFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.term}>{projectDetail.myRole}</dt>
              <dd className={styles.value}>{summary.role}</dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.term}>{projectDetail.stack}</dt>
              <dd className={styles.value}>
                <ul className={styles.list}>
                  {summary.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.term}>{projectDetail.result}</dt>
              <dd className={styles.value}>{summary.result}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
};
