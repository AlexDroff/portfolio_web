"use client";

import { useState, type FocusEvent, type MouseEvent } from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  liveDemoUrl: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  slug,
  highlights,
  liveDemoUrl,
}: ProjectCardProps) => {
  const enableHoverAccent = true;
  const [isCtaActive, setIsCtaActive] = useState(false);
  const clsx = (...classNames: Array<string | false>) =>
    classNames.filter(Boolean).join(" ");

  const activateOnButtonPointer = (target: EventTarget | null) => {
    const element = target instanceof HTMLElement ? target : null;
    setIsCtaActive(Boolean(element?.closest("a,button")));
  };

  const handleActionsPointerOver = (event: MouseEvent<HTMLDivElement>) => {
    activateOnButtonPointer(event.target);
  };

  const handleActionsPointerOut = (event: MouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget;
    if (!(relatedTarget instanceof Node) || !event.currentTarget.contains(relatedTarget)) {
      setIsCtaActive(false);
      return;
    }

    activateOnButtonPointer(relatedTarget);
  };

  const handleActionsFocusCapture = (event: FocusEvent<HTMLDivElement>) => {
    activateOnButtonPointer(event.target);
  };

  const handleActionsBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      setIsCtaActive(false);
      return;
    }

    activateOnButtonPointer(nextTarget);
  };

  return (
    <article
      className={clsx(
        styles.card,
        enableHoverAccent && styles["card--hover-accent"],
        isCtaActive && styles.cardActive
      )}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        {highlights.length > 0 ? (
          <div className={styles.highlights}>
            {highlights.map((item, index) => (
              <span key={`${item}-${index}`} className={styles.highlightItem}>
                <span className={styles.highlightText}>{item}</span>
              </span>
            ))}
          </div>
        ) : null}

        <div
          className={styles.actions}
          onMouseOver={handleActionsPointerOver}
          onMouseOut={handleActionsPointerOut}
          onFocusCapture={handleActionsFocusCapture}
          onBlurCapture={handleActionsBlurCapture}
        >
          <Button variant="primary" as="link" href={`/projects/${slug}`}>
            View project
          </Button>
          <Button
            variant="secondary"
            as="link"
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo
          </Button>
        </div>
      </div>
    </article>
  );
};
