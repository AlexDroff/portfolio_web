import { notFound } from "next/navigation";

import { ProjectHero } from "@/components/project/ProjectHero/ProjectHero";
import { ProjectContent } from "@/components/project/ProjectContent/ProjectContent";
import { ProjectGallery } from "@/components/project/ProjectGallery/ProjectGallery";
import { ProjectCTA } from "@/components/project/ProjectCTA/ProjectCTA";
import { projects } from "@/data/projects";
import { getProjectImages } from "@/utils/getProjectImages";

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
