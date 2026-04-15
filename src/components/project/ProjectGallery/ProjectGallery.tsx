import { Container } from "@/components/ui/Container/Container";
import type { ProjectGalleryImage, ProjectGallerySection } from "@/types/project";
import Image from "next/image";
import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  folder: string;
  sections: ProjectGallerySection[];
};

export const ProjectGallery = ({ folder, sections }: ProjectGalleryProps) => {
  const fullWidthVisualSectionTitles = new Set([
    "Landing Experience",
    "Services Catalog",
    "FAQ & Content",
    "Contact / Conversion",
    "About / Concept",
    "Houses Preview",
    "Lifestyle / Experience",
    "Gallery",
    "Contact / Location",
    "House Details"
  ]);
  const fullContainerSectionTitles = new Set([
    "Hero",
    ...fullWidthVisualSectionTitles
  ]);

  if (!sections.length) {
    return null;
  }

  const isFullWidthImageSection = (section: ProjectGallerySection) =>
    section.layout === "hero" ||
    (section.layout !== "responsive-pair" && section.images.length === 1);

  const getLayoutClass = (section: ProjectGallerySection) => {
    const classNames: string[] = [];

    if (section.layout === "hero") {
      classNames.push(styles.heroLayout);
    } else if (section.layout === "responsive-pair") {
      classNames.push(styles.responsivePair);
    } else {
      classNames.push(
        section.images.length === 1 ? styles.singleLayout : styles.gridLayout
      );
    }

    if (section.title === "Responsive Design") {
      classNames.push(styles.responsiveDesignLayout);
    }

    if (section.title === "Ordering Flow") {
      classNames.push(styles.orderingFlowLayout);
    }

    if (fullWidthVisualSectionTitles.has(section.title)) {
      classNames.push(styles.fullWidthVisualLayout);
    }

    return classNames.join(" ");
  };

  const getFrameClass = (
    section: ProjectGallerySection,
    imageKind: ProjectGalleryImage["kind"]
  ) => {
    const isFullContainerSection =
      fullContainerSectionTitles.has(section.title) ||
      isFullWidthImageSection(section);

    if (section.layout === "hero") {
      return isFullContainerSection
        ? `${styles.heroFrame} ${styles.autoHeightFrame}`
        : styles.heroFrame;
    }

    if (section.layout === "responsive-pair") {
      return imageKind === "mobile" ? styles.mobilePairFrame : styles.pairFrame;
    }

    return isFullContainerSection
      ? `${styles.gridFrame} ${styles.autoHeightFrame}`
      : styles.gridFrame;
  };

  const getImageSizes = (
    section: ProjectGallerySection,
    image: ProjectGalleryImage
  ) => {
    const mobileContainerWidth = "calc(100vw - 48px)";

    if (section.layout === "hero") {
      return `(max-width: 768px) ${mobileContainerWidth}, 1136px`;
    }

    if (section.layout === "responsive-pair") {
      if (image.kind === "mobile") {
        return `(max-width: 768px) ${mobileContainerWidth}, 340px`;
      }

      return `(max-width: 768px) ${mobileContainerWidth}, 860px`;
    }

    if (section.images.length === 1) {
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
                    image.kind === "mobile" && section.layout === "responsive-pair"
                      ? styles.mobileItem
                      : ""
                  }`}
                >
                  <div className={getFrameClass(section, image.kind)}>
                    {(
                      fullContainerSectionTitles.has(section.title) ||
                      isFullWidthImageSection(section)
                    ) ? (
                      <Image
                        src={`/projects/${folder}/${image.index}.webp`}
                        alt={image.label}
                        width={1600}
                        height={900}
                        sizes={getImageSizes(section, image)}
                        quality={100}
                        className={`${styles.image} ${styles.imageNatural}`}
                      />
                    ) : (
                      <Image
                        src={`/projects/${folder}/${image.index}.webp`}
                        alt={image.label}
                        fill
                        sizes={getImageSizes(section, image)}
                        quality={100}
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
