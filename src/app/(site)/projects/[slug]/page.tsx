import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container/Container";
import { ProjectHero } from "@/components/project/ProjectHero/ProjectHero";
import { ProjectMeta } from "@/components/project/ProjectMeta/ProjectMeta";
import { ProjectSummary } from "@/components/project/ProjectSummary/ProjectSummary";
import { ProjectContent } from "@/components/project/ProjectContent/ProjectContent";
import { ProjectContributions } from "@/components/project/ProjectContributions/ProjectContributions";
import { ProjectGallery } from "@/components/project/ProjectGallery/ProjectGallery";
import { ProjectCTA } from "@/components/project/ProjectCTA/ProjectCTA";
import { projects } from "@/data/projects";
import { siteContent } from "@/data/locales";
import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Nie znaleziono projektu",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    project.businessSummary ||
    project.summary?.goal ||
    "Wybrana realizacja web development od Alexandroff.";

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Realizacja`,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectDetail } = siteContent.ui;
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
            {`\u2190 ${projectDetail.backToHome}`}
          </Link>
        </Container>
      </div>
      <ProjectHero
        title={caseStudy.hero.title}
        subtitle={caseStudy.hero.subtitle}
        liveUrl={project.liveDemoUrl}
      />
      <ProjectMeta items={caseStudy.meta} />
      <ProjectSummary summary={project.summary} />
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
            {`\u2190 ${projectDetail.backToHome}`}
          </Link>
        </Container>
      </div>
    </>
  );
}


