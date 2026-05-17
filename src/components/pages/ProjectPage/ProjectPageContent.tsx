import Link from "next/link";

import type { Locale, LocaleContent } from "@/data/locales";
import { getLocalizedPath } from "@/data/locales";
import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container/Container";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";
import { Reveal } from "@/components/animation/Reveal";
import { ProjectHero } from "@/components/project/ProjectHero/ProjectHero";
import { ProjectMeta } from "@/components/project/ProjectMeta/ProjectMeta";
import { ProjectSummary } from "@/components/project/ProjectSummary/ProjectSummary";
import { ProjectContent } from "@/components/project/ProjectContent/ProjectContent";
import { ProjectContributions } from "@/components/project/ProjectContributions/ProjectContributions";
import { ProjectGallery } from "@/components/project/ProjectGallery/ProjectGallery";
import { ProjectCTA } from "@/components/project/ProjectCTA/ProjectCTA";
import { PageLanguageToggle } from "@/components/ui/PageLanguageToggle/PageLanguageToggle";
import styles from "@/app/projects/[slug]/page.module.css";

type ProjectPageContentProps = {
  locale: Locale;
  content: LocaleContent;
  project: Project;
};

export function ProjectPageContent({ locale, content, project }: ProjectPageContentProps) {
  const { projectDetail, common } = content.ui;
  const { caseStudy } = project;
  const projectsPath = getLocalizedPath(locale, "/#projects");
  const currentProjectPath = getLocalizedPath(locale, `/projects/${project.slug}`);

  return (
    <>
      <Reveal duration={0.45} delay={0}>
        <div className={styles.backLinkWrap}>
          <Container>
            <div className={styles.topBar}>
              <Link href={projectsPath} className={styles.backLink}>
                {`\u2190 ${projectDetail.backToProjects}`}
              </Link>
              <PageLanguageToggle locale={locale} currentPath={currentProjectPath} />
            </div>
          </Container>
        </div>
      </Reveal>
      <Reveal duration={0.45} delay={0.05}>
        <ProjectHero
          title={caseStudy.hero.title}
          subtitle={caseStudy.hero.subtitle}
          liveUrl={project.liveDemoUrl}
          liveProjectLabel={projectDetail.liveProject}
        />
      </Reveal>
      <Reveal duration={0.45} delay={0.1}>
        <ProjectMeta items={caseStudy.meta} />
      </Reveal>
      <Reveal duration={0.45} delay={0.15}>
        <ProjectSummary
          summary={project.summary}
          labels={projectDetail}
          heroTitle={caseStudy.hero.title}
        />
      </Reveal>
      <Reveal duration={0.45} delay={0.2}>
        <ProjectContent
          problem={caseStudy.content.problem}
          solution={caseStudy.content.solution}
          result={caseStudy.content.result}
          labels={projectDetail}
        />
      </Reveal>
      <Reveal duration={0.45} delay={0.25}>
        <ProjectContributions
          title={caseStudy.contributions.title}
          items={caseStudy.contributions.items}
        />
      </Reveal>
      <Reveal duration={0.45} delay={0.3}>
        <ProjectGallery folder={project.imageFolder} sections={caseStudy.gallery} />
      </Reveal>
      <Reveal duration={0.45} delay={0.35}>
        <ProjectCTA
          locale={locale}
          labels={projectDetail}
          title={caseStudy.cta.title}
          subtext={caseStudy.cta.subtext}
          buttonLabel={caseStudy.cta.buttonLabel}
        />
      </Reveal>
      <Reveal duration={0.45} delay={0.4}>
        <div className={styles.backLinkWrap}>
          <Container>
            <Link href={projectsPath} className={styles.backLink}>
              {`\u2190 ${projectDetail.backToProjects}`}
            </Link>
          </Container>
        </div>
      </Reveal>
      <BackToTop label={common.backToTop} />
    </>
  );
}
