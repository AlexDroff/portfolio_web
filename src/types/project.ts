export type ProjectMetaItem = {
  label: string;
  value: string;
};

export type ProjectGalleryImage = {
  index: number;
  label: string;
  kind: 'desktop' | 'mobile' | 'default';
};

export type ProjectGallerySection = {
  title: string;
  description?: string;
  layout: 'single' | 'responsive' | 'grid' | 'fullWidth';
  images: ProjectGalleryImage[];
};

export type ProjectCaseStudy = {
  hero: {
    title: string;
    subtitle: string;
  };
  meta: ProjectMetaItem[];
  content: {
    problem: string;
    solution: string;
    result: string;
  };
  contributions: {
    title: string;
    items: string[];
  };
  gallery: ProjectGallerySection[];
  cta: {
    title: string;
    subtext: string;
    buttonLabel: string;
  };
};

export type ProjectSummary = {
  projectType: string;
  goal: string;
  mainFeatures: string[];
  role: string;
  stack: string[];
  result: string;
};

export type ProjectCardData = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  liveDemoUrl: string;
  imageFolder: string;
  cardImage: string;
  businessSummary: string;
  badges: string[];
};

export type Project = ProjectCardData & {
  summary: ProjectSummary;
  caseStudy: ProjectCaseStudy;
};

