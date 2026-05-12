"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./Projects.module.css";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";
import { homeContent } from "@/data/home";
import { projects } from "@/data/projects";
import { siteContent } from "@/data/locales";

export const Projects = () => {
  const { projects: projectsContent } = homeContent;
  const { projectsSection } = siteContent.ui;
  const trackRef = useRef<HTMLUListElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(projects.length > 1);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const slides = Array.from(
      track.querySelectorAll<HTMLElement>('[data-project-slide="true"]')
    );

    if (slides.length === 0) {
      return;
    }

    const scrollLeft = track.scrollLeft;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    setActiveIndex(nearestIndex);
    setCanScrollPrev(scrollLeft > 1);
    setCanScrollNext(scrollLeft < maxScrollLeft - 1);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const slides = Array.from(
      track.querySelectorAll<HTMLElement>('[data-project-slide="true"]')
    );

    if (slides.length === 0) {
      return;
    }

    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));

    slides[clampedIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, []);

  const handleTrackScroll = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      updateScrollState();
      frameRef.current = null;
    });
  };

  const handlePrevClick = () => {
    scrollToIndex(activeIndex - 1);
  };

  const handleNextClick = () => {
    scrollToIndex(activeIndex + 1);
  };

  useEffect(() => {
    const initFrame = requestAnimationFrame(() => {
      updateScrollState();
    });

    const handleResize = () => {
      updateScrollState();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(initFrame);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [updateScrollState]);

  return (
    <Section id="projects" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>{projectsContent.title}</h2>
          </div>

          <div className={styles.sliderFrame}>
            <button
              type="button"
              className={`${styles.arrowButton} ${styles.arrowButtonPrev}`}
              onClick={handlePrevClick}
              disabled={!canScrollPrev}
              aria-label={projectsSection.previousProject}
            >
              <span
                className={`${styles.arrowIcon} ${styles.arrowIconPrev}`}
                aria-hidden="true"
              />
            </button>

            <ul
              className={styles.sliderTrack}
              ref={trackRef}
              onScroll={handleTrackScroll}
            >
              {projects.map((project) => (
                <li
                  key={project.slug}
                  className={styles.slide}
                  data-project-slide="true"
                >
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    image={project.cardImage}
                    businessSummary={project.businessSummary}
                    badges={project.badges}
                    liveDemoUrl={project.liveDemoUrl}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`${styles.arrowButton} ${styles.arrowButtonNext}`}
              onClick={handleNextClick}
              disabled={!canScrollNext}
              aria-label={projectsSection.nextProject}
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

