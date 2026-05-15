import Link from "next/link";

import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";
import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container/Container";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";
import { ProjectHero } from "@/components/project/ProjectHero/ProjectHero";
import { ProjectMeta } from "@/components/project/ProjectMeta/ProjectMeta";
import { ProjectSummary } from "@/components/project/ProjectSummary/ProjectSummary";
import { ProjectContent } from "@/components/project/ProjectContent/ProjectContent";
import { ProjectContributions } from "@/components/project/ProjectContributions/ProjectContributions";
import { ProjectGallery } from "@/components/project/ProjectGallery/ProjectGallery";
import { ProjectCTA } from "@/components/project/ProjectCTA/ProjectCTA";
import styles from "@/app/projects/[slug]/page.module.css";

type ProjectPageContentProps = {
  locale: Locale;
  content: LocaleContent;
  project: Project;
};

export function ProjectPageContent({ locale, content, project }: ProjectPageContentProps) {
  const { projectDetail, common } = content.ui;
  const { caseStudy } = project;
  const homePath = getLocalizedPath(locale, "/");

  return (
    <>
      <div className={styles.backLinkWrap}>
        <Container>
          <Link href={homePath} className={styles.backLink}>
            {`\u2190 ${projectDetail.backToHome}`}
          </Link>
        </Container>
      </div>
      <ProjectHero
        title={caseStudy.hero.title}
        subtitle={caseStudy.hero.subtitle}
        liveUrl={project.liveDemoUrl}
        liveProjectLabel={projectDetail.liveProject}
      />
      <ProjectMeta items={caseStudy.meta} />
      <ProjectSummary summary={project.summary} labels={projectDetail} />
      <ProjectContent
        problem={caseStudy.content.problem}
        solution={caseStudy.content.solution}
        result={caseStudy.content.result}
        labels={projectDetail}
      />
      <ProjectContributions
        title={caseStudy.contributions.title}
        items={caseStudy.contributions.items}
      />
      <ProjectGallery folder={project.imageFolder} sections={caseStudy.gallery} />
      <ProjectCTA
        locale={locale}
        labels={projectDetail}
        title={caseStudy.cta.title}
        subtext={caseStudy.cta.subtext}
        buttonLabel={caseStudy.cta.buttonLabel}
      />
      <div className={styles.backLinkWrap}>
        <Container>
          <Link href={homePath} className={styles.backLink}>
            {`\u2190 ${projectDetail.backToHome}`}
          </Link>
        </Container>
      </div>
      <BackToTop label={common.backToTop} />
    </>
  );
}
