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
        <div className={styles.stack}>
          {sections.map((section) => (
            <div key={section.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{section.title}</h3>
              <div className={styles.images}>
                {section.images.map((image) => (
                  <Image
                    key={`${section.title}-${image.index}`}
                    src={`/projects/${folder}/${image.index}.webp`}
                    alt={image.label}
                    width={1200}
                    height={700}
                    style={{ height: "auto" }}
                    className={styles.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
