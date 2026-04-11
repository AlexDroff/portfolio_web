import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
  highlights?: string[];
};

export const ProjectCard = ({
  title,
  description,
  image,
  slug,
  highlights = [],
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
          <ul className={styles.list}>
            {highlights.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <span className={styles.link}>View project</span>
      </div>
    </Link>
  );
};
