import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { ProjectPageContent } from "@/components/pages/ProjectPage/ProjectPageContent";
import {
  getContent,
  getLocalizedPath,
  isPrefixedLocale,
  prefixedLocales,
  type Locale,
} from "@/data/locales";

type LocalizedProjectPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const baseProjects = getContent("pl").projects.map((project) => project.slug);

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) =>
    baseProjects.map((slug) => ({ locale, slug })),
  );
}

function projectAlternates(locale: Locale, slug: string) {
  return {
    canonical: getLocalizedPath(locale, `/projects/${slug}`),
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
}: LocalizedProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isPrefixedLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  const project = content.projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: content.seo.projects.notFoundTitle,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    project.businessSummary ||
    project.summary?.goal ||
    content.seo.projects.fallbackDescription;

  return {
    title: project.title,
    description,
    alternates: projectAlternates(locale, project.slug),
    openGraph: {
      title: `${project.title} ${content.seo.projects.openGraphTitleSuffix}`,
      description,
      url: `${siteConfig.url}${getLocalizedPath(locale, `/projects/${project.slug}`)}`,
      type: "article",
    },
  };
}

export default async function LocalizedProjectPage({
  params,
}: LocalizedProjectPageProps) {
  const { locale, slug } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const localizedLocale: Locale = locale;
  const content = getContent(localizedLocale);
  const project = content.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectPageContent
      locale={localizedLocale}
      content={content}
      project={project}
    />
  );
}
