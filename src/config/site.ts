export const siteConfig = {
  name: "Alexandroff",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alexandroff.pl",
  email: "olexandr.alexandroff@gmail.com",
  location: "Poland",
  githubUrl: "https://github.com/AlexDroff",
  linkedinUrl: "https://www.linkedin.com/in/oleksandr-aleksandov/",
  telegramUrl: "https://t.me/Oleksandr_Alexandrov",
  availability: "Available for freelance projects",
  mainStack: ["Next.js", "React", "TypeScript", "Node.js"],
} as const;
