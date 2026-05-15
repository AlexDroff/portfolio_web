import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getContent, getLocalizedPath, locales } from "@/data/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticBaseRoutes = ["/", "/contact"];
  const projectSlugs = getContent("pl").projects.map((project) => project.slug);

  const staticRoutes = locales.flatMap((locale) =>
    staticBaseRoutes.map((route) => {
      const localizedPath = getLocalizedPath(locale, route);
      return {
        url: `${siteConfig.url}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: localizedPath === "/" ? 1 : 0.8,
      };
    }),
  );

  const projectRoutes = locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({
      url: `${siteConfig.url}${getLocalizedPath(locale, `/projects/${slug}`)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...projectRoutes];
}
