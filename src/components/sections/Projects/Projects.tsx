import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./Projects.module.css";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";

export const Projects = () => {
  return (
    <Section id="projects" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>Selected Work</h2>
          </div>

          <div className={styles.grid}>
            <ProjectCard
              title="Cleaning Company Website"
              description="Website for a local cleaning business in Spain"
              image="/projects/cleaning/cleaning-3.webp?v=3"
              slug="cleaning"
              highlights={["Clean UI", "Mobile friendly", "Fast loading"]}
            />

            <ProjectCard
              title="Countryside Rental Website"
              description="Website for a vacation house"
              image="/projects/rental/rental-1.webp?v=3"
              slug="rental"
              highlights={["Simple structure", "Atmospheric design", "Responsive"]}
            />
          </div>

          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>Need a website?</h3>
            <p className={styles.ctaText}>Fast, clean, and focused on results.</p>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
