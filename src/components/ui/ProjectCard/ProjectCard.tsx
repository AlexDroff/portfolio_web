import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
};

export const ProjectCard = ({
  title,
  description,
  image,
  slug,
  highlights,
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`} className={styles.card}>
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

        <span className={styles.link}>View project</span>
      </div>
    </Link>
  );
};
