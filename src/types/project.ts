export const SCREEN_TYPES = {
  DESKTOP: 1,
  MOBILE: 2,
  COVER: 3,
} as const;

export const COVER_INDEX = SCREEN_TYPES.COVER;

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
  layout: 'responsive-pair' | 'grid';
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

export type ProjectCardData = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  imageFolder: string;
  screenshotsCount: number;
};

export type Project = ProjectCardData & {
  caseStudy: ProjectCaseStudy;
};
