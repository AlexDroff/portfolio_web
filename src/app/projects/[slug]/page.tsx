import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { ProjectPageContent } from "@/components/pages/ProjectPage/ProjectPageContent";
import { getContent, getLocalizedPath } from "@/data/locales";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const plContent = getContent("pl");

export function generateStaticParams() {
  return plContent.projects.map((project) => ({
    slug: project.slug,
  }));
}

function projectAlternates(slug: string) {
  return {
    canonical: getLocalizedPath("pl", `/projects/${slug}`),
    languages: {
      pl: getLocalizedPath("pl", `/projects/${slug}`),
      en: getLocalizedPath("en", `/projects/${slug}`),
      uk: getLocalizedPath("uk", `/projects/${slug}`),
      "x-default": getLocalizedPath("pl", `/projects/${slug}`),
    },
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { seo } = plContent;
  const { slug } = await params;
  const project = plContent.projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: seo.projects.notFoundTitle,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    project.businessSummary ||
    project.summary?.goal ||
    seo.projects.fallbackDescription;

  return {
    title: project.title,
    description,
    alternates: projectAlternates(project.slug),
    openGraph: {
      title: `${project.title} ${seo.projects.openGraphTitleSuffix}`,
      description,
      url: `${siteConfig.url}${getLocalizedPath("pl", `/projects/${project.slug}`)}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = plContent.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageContent locale="pl" content={plContent} project={project} />;
}
