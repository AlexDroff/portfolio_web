import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./Projects.module.css";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects">
      <Section>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <h2 className={styles.title}>Selected Work</h2>
            </div>

            <div className={styles.grid}>
              <ProjectCard
                title="Cleaning Company Website"
                description="Website for a local cleaning business in Spain"
                image="/projects/cleaning/cleaning-3.webp"
                slug="cleaning"
                highlights={["Clean UI", "Mobile friendly", "Fast loading"]}
              />

              <ProjectCard
                title="Countryside Rental Website"
                description="Website for a vacation house"
                image="/projects/rental/rental-1.webp"
                slug="rental"
                highlights={[
                  "Simple structure",
                  "Atmospheric design",
                  "Responsive",
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
};
