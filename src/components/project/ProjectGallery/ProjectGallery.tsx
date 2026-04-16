import { Container } from "@/components/ui/Container/Container";
import type { ProjectGalleryImage, ProjectGallerySection } from "@/types/project";
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

  const isFullContainerLayout = (section: ProjectGallerySection) =>
    section.layout === "single" || section.layout === "fullWidth";

  const getLayoutClass = (section: ProjectGallerySection) => {
    const classNames: string[] = [];

    if (section.layout === "responsive") {
      classNames.push(styles.responsivePair, styles.responsiveDesignLayout);
    }

    if (section.layout === "grid") {
      classNames.push(styles.gridLayout);
    }

    if (section.layout === "single") {
      classNames.push(styles.singleLayout);
    }

    if (section.layout === "fullWidth") {
      classNames.push(styles.heroLayout);
      classNames.push(styles.fullWidthVisualLayout);
    }

    return classNames.join(" ");
  };

  const getFrameClass = (
    section: ProjectGallerySection,
    imageKind: ProjectGalleryImage["kind"]
  ) => {
    if (section.layout === "responsive") {
      return imageKind === "mobile" ? styles.mobilePairFrame : styles.pairFrame;
    }

    if (section.layout === "fullWidth") {
      return `${styles.heroFrame} ${styles.autoHeightFrame}`;
    }

    return isFullContainerLayout(section)
      ? `${styles.gridFrame} ${styles.autoHeightFrame}`
      : styles.gridFrame;
  };

  const getImageSizes = (
    section: ProjectGallerySection,
    image: ProjectGalleryImage
  ) => {
    const mobileContainerWidth = "calc(100vw - 48px)";

    if (section.layout === "fullWidth") {
      return `(max-width: 768px) ${mobileContainerWidth}, 1136px`;
    }

    if (section.layout === "responsive") {
      if (image.kind === "mobile") {
        return `(max-width: 768px) ${mobileContainerWidth}, 340px`;
      }

      return `(max-width: 768px) ${mobileContainerWidth}, 860px`;
    }

    if (section.layout === "single") {
      return `(max-width: 768px) ${mobileContainerWidth}, 1136px`;
    }

    return `(max-width: 768px) ${mobileContainerWidth}, 560px`;
  };

  return (
    <section className={styles.section}>
      <Container>
        {sections.map((section) => (
          <div key={section.title} className={styles.group}>
            <header className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>{section.title}</h3>
              {section.description ? (
                <p className={styles.groupDescription}>{section.description}</p>
              ) : null}
            </header>
            <div className={getLayoutClass(section)}>
              {section.images.map((image) => (
                <article
                  key={`${section.title}-${image.index}`}
                  className={`${styles.item} ${
                    image.kind === "mobile" && section.layout === "responsive"
                      ? styles.mobileItem
                      : ""
                  }`}
                >
                  <div className={getFrameClass(section, image.kind)}>
                    {isFullContainerLayout(section) ? (
                      <Image
                        src={`/projects/${folder}/${image.index}.webp`}
                        alt={image.label}
                        width={1600}
                        height={900}
                        sizes={getImageSizes(section, image)}
                        className={`${styles.image} ${styles.imageNatural}`}
                      />
                    ) : (
                      <Image
                        src={`/projects/${folder}/${image.index}.webp`}
                        alt={image.label}
                        fill
                        sizes={getImageSizes(section, image)}
                        className={styles.image}
                      />
                    )}
                  </div>
                  <p className={styles.label}>{image.label}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
