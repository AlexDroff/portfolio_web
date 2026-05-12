import type { HomeContent } from "@/types/home";
import type { FAQContent } from "@/types/faq";
import type { Project } from "@/types/project";

export type ContactContent = {
  title: string;
  intro: string;
  helperText: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  formTitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  validation: {
    nameInvalid: string;
    emailInvalid: string;
    messageInvalid: string;
  };
  mailto: {
    subject: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
  };
  links: {
    backHome: string;
    directEmail: string;
    trustResponseTime: string;
    telegram: string;
    linkedin: string;
    github: string;
  };
};

export type LocaleUiContent = {
  navigation: {
    home: string;
    about: string;
    projects: string;
    services: string;
    packages: string;
    faq: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    mobileMenu: string;
  };
  projectsSection: {
    previousProject: string;
    nextProject: string;
  };
  projectCard: {
    viewCaseStudy: string;
    liveWebsite: string;
  };
  projectDetail: {
    projectSummaryTitle: string;
    projectType: string;
    goal: string;
    mainFeatures: string;
    myRole: string;
    stack: string;
    result: string;
    problem: string;
    solution: string;
    outcome: string;
    contributions: string;
    gallery: string;
    liveProject: string;
    backToProjects: string;
    projectNotFoundTitle: string;
    projectNotFoundDescription: string;
    backToHome: string;
    projectCtaFallbackTitle: string;
    projectCtaFallbackDescription: string;
    projectCtaFallbackButton: string;
  };
  common: {
    backToTop: string;
    profilePhoto: string;
    homeAriaLabel: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
};

export type LocaleContent = {
  home: HomeContent;
  faq: FAQContent;
  projects: Project[];
  contact: ContactContent;
  ui: LocaleUiContent;
};
