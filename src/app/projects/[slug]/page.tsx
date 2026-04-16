import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container/Container";
import { ProjectHero } from "@/components/project/ProjectHero/ProjectHero";
import { ProjectMeta } from "@/components/project/ProjectMeta/ProjectMeta";
import { ProjectContent } from "@/components/project/ProjectContent/ProjectContent";
import { ProjectContributions } from "@/components/project/ProjectContributions/ProjectContributions";
import { ProjectGallery } from "@/components/project/ProjectGallery/ProjectGallery";
import { ProjectCTA } from "@/components/project/ProjectCTA/ProjectCTA";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";
import { projects } from "@/data/projects";
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

  const { caseStudy } = project;

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
        title={caseStudy.hero.title}
        subtitle={caseStudy.hero.subtitle}
        liveUrl={project.liveDemoUrl}
      />
      <ProjectMeta items={caseStudy.meta} />
      <ProjectContent
        problem={caseStudy.content.problem}
        solution={caseStudy.content.solution}
        result={caseStudy.content.result}
      />
      <ProjectContributions
        title={caseStudy.contributions.title}
        items={caseStudy.contributions.items}
      />
      <ProjectGallery folder={project.imageFolder} sections={caseStudy.gallery} />
      <ProjectCTA
        title={caseStudy.cta.title}
        subtext={caseStudy.cta.subtext}
        buttonLabel={caseStudy.cta.buttonLabel}
      />
      <div className={styles.backLinkWrap}>
        <Container>
          <Link href="/" className={styles.backLink}>
            &larr; Back to main page
          </Link>
        </Container>
      </div>
      <BackToTop />
    </>
  );
}
