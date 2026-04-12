import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container/Container";
import { ProjectHero } from "@/components/project/ProjectHero/ProjectHero";
import { ProjectContent } from "@/components/project/ProjectContent/ProjectContent";
import { ProjectGallery } from "@/components/project/ProjectGallery/ProjectGallery";
import { ProjectCTA } from "@/components/project/ProjectCTA/ProjectCTA";
import { projects } from "@/data/projects";
import { getProjectImages } from "@/utils/getProjectImages";
import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const images = getProjectImages(project.imageFolder, project.screenshotsCount);

  return (
    <>
      <div className={styles.backLinkWrap}>
        <Container>
          <Link href="/" className={styles.backLink}>
            &larr; Back to main page
          </Link>
        </Container>
      </div>
      <ProjectHero
        title={project.caseStudy.hero.title}
        subtitle={project.caseStudy.hero.subtitle}
        role={project.caseStudy.hero.role}
        type={project.caseStudy.hero.type}
        location={project.caseStudy.hero.location}
        focus={project.caseStudy.hero.focus}
      />
      <ProjectContent
        problem={project.caseStudy.content.problem}
        solution={project.caseStudy.content.solution}
        result={project.caseStudy.content.result}
      />
      <ProjectGallery images={images.map((image) => image.src)} />
      <ProjectCTA
        title={project.caseStudy.cta.title}
        subtext={project.caseStudy.cta.subtext}
      />
    </>
  );
}
