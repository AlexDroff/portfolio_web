export const SCREEN_TYPES = {
  DESKTOP: 1,
  MOBILE: 2,
  COVER: 3,
} as const;

export const COVER_INDEX = SCREEN_TYPES.COVER;

export type Project = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  imageFolder: string;
  screenshotsCount: number;
  caseStudy: {
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
    cta: {
      title: string;
      subtext: string;
    };
  };
};
