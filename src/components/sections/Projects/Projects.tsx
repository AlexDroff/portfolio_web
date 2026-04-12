import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./Projects.module.css";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";
import { projects } from "@/data/projects";
import { COVER_INDEX } from "@/types/project";

export const Projects = () => {
  return (
    <Section id="projects" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>Selected Work</h2>
          </div>

          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                image={`/projects/${project.imageFolder}/${COVER_INDEX}.webp`}
                highlights={project.highlights}
              />
            ))}
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
