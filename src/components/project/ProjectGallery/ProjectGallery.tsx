import { Container } from "@/components/ui/Container/Container";
import Image from "next/image";
import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  images?: string[];
};

export const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  if (!images?.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.stack}>
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Project screenshot ${index + 1}`}
              width={1200}
              height={700}
              style={{ height: "auto" }}
              className={styles.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
