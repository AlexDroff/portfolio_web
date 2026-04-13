import { Container } from "@/components/ui/Container/Container";
import type { ProjectGallerySection } from "@/types/project";
import Image from "next/image";
import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  folder: string;
  sections: ProjectGallerySection[];
};

export const ProjectGallery = ({ folder, sections }: ProjectGalleryProps) => {
  if (!sections.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        {sections.map((section) => (
          <div key={section.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{section.title}</h3>
            <div
              className={
                section.layout === "responsive-pair"
                  ? styles.responsivePair
                  : styles.gridLayout
              }
            >
              {section.images.map((image) => (
                <div key={`${section.title}-${image.index}`} className={styles.item}>
                  <div
                    className={
                      section.layout === "responsive-pair"
                        ? styles.pairFrame
                        : styles.gridFrame
                    }
                  >
                    <Image
                      src={`/projects/${folder}/${image.index}.webp`}
                      alt={image.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.label}>{image.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
