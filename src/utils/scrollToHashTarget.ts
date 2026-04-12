export const scrollToHashTarget = (id: string): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const target = document.getElementById(id);
  if (!target) {
    return false;
  }

  const header = document.querySelector("header");
  const headerOffset =
    header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
  const top =
    target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  return true;
};
