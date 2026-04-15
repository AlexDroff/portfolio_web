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
  const clsx = (...classNames: Array<string | false>) =>
    classNames.filter(Boolean).join(" ");

  return (
    <article
      className={clsx(
        styles.card,
        enableHoverAccent && styles["card--hover-accent"]
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

        <div className={styles.actions}>
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
