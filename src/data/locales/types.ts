import type { HomeContent } from "@/types/home";
import type { FAQContent } from "@/types/faq";
import type { Project } from "@/types/project";

export type LocaleServiceItem = HomeContent["services"]["items"][number] & {
  variant?: "default" | "cta";
  href?: string;
};

export type LocalePackageItem = HomeContent["packages"]["items"][number] & {
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type LocaleHomeContent = Omit<HomeContent, "services"> & {
  services: Omit<HomeContent["services"], "items"> & {
    items: LocaleServiceItem[];
  };
  packages: Omit<HomeContent["packages"], "items"> & {
    items: LocalePackageItem[];
  };
};

export type ContactContent = {
  title: string;
  intro: string;
  helperText: string;
  socialTitle: string;
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
    directEmailPrefix: string;
    responseTime: string;
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
    logoAlt: string;
  };
  footer: {
    copyright: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
};

export type LocaleSeoContent = {
  root: {
    title: string;
    titleTemplate: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  contact: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
  };
  projects: {
    notFoundTitle: string;
    fallbackDescription: string;
    openGraphTitleSuffix: string;
  };
  jsonLd: {
    websiteDescription: string;
    personJobTitle: string;
    professionalServiceDescription: string;
  };
};

export type LocaleContent = {
  home: LocaleHomeContent;
  faq: FAQContent;
  projects: Project[];
  contact: ContactContent;
  ui: LocaleUiContent;
  seo: LocaleSeoContent;
};
