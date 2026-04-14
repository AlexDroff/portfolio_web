import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./Projects.module.css";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";
import { CTA } from "@/components/ui/CTA/CTA";
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
                liveDemoUrl={project.liveDemoUrl}
              />
            ))}
          </div>

          <CTA
            title="Need a website that brings real clients?"
            subtext="I build fast, reliable websites with clear structure and real business logic."
            buttonLabel="Start a project"
            href="/contact"
          />
        </div>
      </Container>
    </Section>
  );
};

