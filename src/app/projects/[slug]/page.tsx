import { notFound } from "next/navigation";

import { ProjectHero } from "@/components/project/ProjectHero/ProjectHero";
import { ProjectContent } from "@/components/project/ProjectContent/ProjectContent";
import { ProjectGallery } from "@/components/project/ProjectGallery/ProjectGallery";
import { ProjectCTA } from "@/components/project/ProjectCTA/ProjectCTA";

type CaseStudyData = {
  hero: {
    title: string;
    subtitle: string;
    role: string;
    type: string;
    location?: string;
    focus?: string;
  };
  content: {
    problem: string;
    solution: string;
    result: string;
  };
  gallery: {
    images: string[];
  };
  cta: {
    title: string;
    subtext: string;
  };
};

const CASE_STUDIES: Record<string, CaseStudyData> = {
  cleaning: {
    hero: {
      title: "Cleaning Company Website",
      subtitle: "Modern website for a local cleaning service in Spain",
      role: "Fullstack Developer",
      type: "Business Website",
      location: "Spain",
    },
    content: {
      problem:
        "The client had no professional website and relied mostly on local advertising and word of mouth. Potential customers had no clear place to learn about services or quickly get in touch.",
      solution:
        "I designed and developed a clean, modern website focused on clarity and usability. The structure highlights key services, builds trust through simple design, and makes it easy for users to contact the business.",
      result:
        "The client received a fast, responsive website that clearly presents services and improves online presence. The new website makes it easier for potential customers to understand the offer and reach out.",
    },
    gallery: {
      images: [
        "/projects/cleaning/cleaning-1.webp?v=3",
        "/projects/cleaning/cleaning-2.webp?v=3",
        "/projects/cleaning/cleaning-3.webp?v=3",
        "/projects/cleaning/cleaning-4.webp?v=3",
        "/projects/cleaning/cleaning-5.webp?v=3",
        "/projects/cleaning/cleaning-6.webp?v=3",
        "/projects/cleaning/cleaning-7.webp?v=3",
        "/projects/cleaning/cleaning-8.webp?v=3",
        "/projects/cleaning/cleaning-9.webp?v=3",
      ],
    },
    cta: {
      title: "Need a website like this?",
      subtext: "Let's build something simple, fast, and effective.",
    },
  },
  rental: {
    hero: {
      title: "Countryside Rental Website",
      subtitle: "Website for a peaceful vacation house surrounded by nature",
      role: "Fullstack Developer",
      type: "Rental / Hospitality Website",
      focus: "Atmosphere & simplicity",
    },
    content: {
      problem:
        "The client needed a simple website to present the house and attract guests, but had no clear online presence or structure.",
      solution:
        "I created a clean and atmospheric website focused on visual presentation and ease of navigation. The structure highlights the location, atmosphere, and key information for potential guests.",
      result:
        "The result is a calm, easy-to-use website that helps visitors quickly understand the place and feel its atmosphere, making it easier to get in touch and book.",
    },
    gallery: {
      images: [
        "/projects/rental/rental-1.webp?v=3",
        "/projects/rental/rental-2.webp?v=3",
        "/projects/rental/rental-3.webp?v=3",
        "/projects/rental/rental-4.webp?v=3",
        "/projects/rental/rental-5.webp?v=3",
        "/projects/rental/rental-6.webp?v=3",
        "/projects/rental/rental-7.webp?v=3",
        "/projects/rental/rental-8.webp?v=3",
      ],
    },
    cta: {
      title: "Want a website like this?",
      subtext: "I can help you create a clean and inviting online presence.",
    },
  },
};

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES[slug];

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <ProjectHero
        title={caseStudy.hero.title}
        subtitle={caseStudy.hero.subtitle}
        role={caseStudy.hero.role}
        type={caseStudy.hero.type}
        location={caseStudy.hero.location}
        focus={caseStudy.hero.focus}
      />
      <ProjectContent
        problem={caseStudy.content.problem}
        solution={caseStudy.content.solution}
        result={caseStudy.content.result}
      />
      <ProjectGallery images={caseStudy.gallery.images} />
      <ProjectCTA title={caseStudy.cta.title} subtext={caseStudy.cta.subtext} />
    </>
  );
}
