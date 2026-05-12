"use client";

import styles from "./ProjectCard.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { siteContent } from "@/data/locales";

type ProjectCardProps = {
  slug: string;
  title: string;
  image: string;
  businessSummary: string;
  badges: string[];
  liveDemoUrl?: string;
};

export const ProjectCard = ({
  title,
  image,
  slug,
  businessSummary,
  badges,
  liveDemoUrl,
}: ProjectCardProps) => {
  const { projectCard } = siteContent.ui;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 82vw, 48vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{businessSummary}</p>

        {badges.length > 0 ? (
          <ul className={styles.badges}>
            {badges.map((badge) => (
              <li key={`${slug}-${badge}`} className={styles.badgeItem}>
                {badge}
              </li>
            ))}
          </ul>
        ) : null}

        <div className={styles.actions}>
          <Button variant="primary" as="link" href={`/projects/${slug}`}>
            {projectCard.viewCaseStudy}
          </Button>
          {liveDemoUrl ? (
            <Button
              variant="secondary"
              as="link"
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectCard.liveWebsite}
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
};
