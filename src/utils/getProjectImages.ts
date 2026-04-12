import { SCREEN_TYPES } from "@/types/project";

export const getProjectImages = (folder: string, count: number) => {
  const firstIndex = SCREEN_TYPES.DESKTOP;
  return Array.from({ length: count }, (_, i) => ({
    src: `/projects/${folder}/${i + firstIndex}.webp`,
    index: i + firstIndex,
  }));
};
