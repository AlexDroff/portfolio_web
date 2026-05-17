"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Reveal } from "@/components/animation/Reveal";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";
import type { Locale, LocaleContent } from "@/data/locales";
import type { Project } from "@/types/project";
import styles from "./Projects.module.css";

type ProjectsProps = {
  locale: Locale;
  projectsContent: LocaleContent["home"]["projects"];
  projectsSectionLabels: LocaleContent["ui"]["projectsSection"];
  projectCardLabels: LocaleContent["ui"]["projectCard"];
  projects: Project[];
};

export const Projects = ({
  locale,
  projectsContent,
  projectsSectionLabels,
  projectCardLabels,
  projects,
}: ProjectsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const shouldReduceMotion = useReducedMotion();
  const hasProjects = projects.length > 0;
  const safeIndex = hasProjects ? Math.max(0, Math.min(activeIndex, projects.length - 1)) : 0;
  const activeProject = hasProjects ? projects[safeIndex] : null;
  const canScrollPrev = hasProjects && safeIndex > 0;
  const canScrollNext = hasProjects && safeIndex < projects.length - 1;

  const slideVariants = shouldReduceMotion
    ? {
        initial: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
        animate: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
        exit: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
      }
    : {
        initial: (currentDirection: "next" | "prev") => ({
          opacity: 0,
          x: currentDirection === "next" ? 80 : -80,
          rotateY: currentDirection === "next" ? 8 : -8,
          scale: 0.98,
        }),
        animate: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
        exit: (currentDirection: "next" | "prev") => ({
          opacity: 0,
          x: currentDirection === "next" ? -80 : 80,
          rotateY: currentDirection === "next" ? -8 : 8,
          scale: 0.98,
        }),
      };

  const handlePrevClick = () => {
    if (!canScrollPrev) {
      return;
    }

    setDirection("prev");
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const handleNextClick = () => {
    if (!canScrollNext) {
      return;
    }

    setDirection("next");
    setActiveIndex((current) => Math.min(projects.length - 1, current + 1));
  };

  return (
    <Section id="projects" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <Reveal className={styles.header}>
            <h2 className={styles.title}>{projectsContent.title}</h2>
          </Reveal>

          <div className={styles.sliderFrame}>
            <button
              type="button"
              className={`${styles.arrowButton} ${styles.arrowButtonPrev}`}
              onClick={handlePrevClick}
              disabled={!canScrollPrev}
              aria-label={projectsSectionLabels.previousProject}
            >
              <span
                className={`${styles.arrowIcon} ${styles.arrowIconPrev}`}
                aria-hidden="true"
              />
            </button>

            <div className={styles.sliderStage}>
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeProject?.slug ?? "empty-project"}
                  className={styles.slideMotion}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.4, ease: "easeOut" }
                  }
                >
                  {activeProject ? (
                    <ProjectCard
                      locale={locale}
                      viewCaseStudyLabel={projectCardLabels.viewCaseStudy}
                      liveWebsiteLabel={projectCardLabels.liveWebsite}
                      slug={activeProject.slug}
                      title={activeProject.title}
                      image={activeProject.cardImage}
                      businessSummary={activeProject.businessSummary}
                      badges={activeProject.badges}
                      liveDemoUrl={activeProject.liveDemoUrl}
                    />
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              className={`${styles.arrowButton} ${styles.arrowButtonNext}`}
              onClick={handleNextClick}
              disabled={!canScrollNext}
              aria-label={projectsSectionLabels.nextProject}
            >
              <span
                className={`${styles.arrowIcon} ${styles.arrowIconNext}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
