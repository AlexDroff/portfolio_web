export type HeroContent = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export type AboutItem = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

export type AboutBlock = {
  title: string;
  description: string[];
  items: AboutItem[];
};

export type AboutContent = {
  title: string;
  description: string[];
  blocks: AboutBlock[];
};

export type ProjectsContent = {
  title: string;
  description?: string;
  cta: {
    title: string;
    subtext: string;
    buttonLabel: string;
    href: string;
  };
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export type ServicesContent = {
  title: string;
  description: string;
  items: ServiceItem[];
};

export type PackageItem = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  note?: string;
};

export type PackagesContent = {
  title: string;
  description: string;
  items: PackageItem[];
};

export type HomeContent = {
  hero: HeroContent;
  about: AboutContent;
  projects: ProjectsContent;
  services: ServicesContent;
  packages: PackagesContent;
};
