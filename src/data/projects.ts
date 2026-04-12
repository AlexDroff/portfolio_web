import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "cleaning",
    title: "Cleaning Company Website",
    description:
      "Modern website for a local cleaning business focused on conversion and clarity.",
    highlights: ["Clean UI", "Mobile friendly", "Fast loading"],
    imageFolder: "cleaning",
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: "Cleaning Company Website",
        subtitle: "Modern website for a local cleaning service in Spain",
        role: "Fullstack Developer",
        type: "Business Website",
        location: "Spain",
      },
      content: {
        problem:
          "The client had no professional website and relied mostly on local advertising and word of mouth. Potential customers had no clear place to learn about services or quickly get in touch.",
        solution:
          "I designed and developed a clean, modern website focused on clarity and usability. The structure highlights key services, builds trust through simple design, and makes it easy for users to contact the business.",
        result:
          "The client received a fast, responsive website that clearly presents services and improves online presence. The new website makes it easier for potential customers to understand the offer and reach out.",
      },
      cta: {
        title: "Need a website like this?",
        subtext: "Let's build something simple, fast, and effective.",
      },
    },
  },
  {
    slug: "rental",
    title: "Countryside Rental Website",
    description:
      "Website for a vacation house with clean structure and atmospheric design.",
    highlights: ["Simple structure", "Atmospheric design", "Responsive"],
    imageFolder: "rental-house",
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: "Countryside Rental Website",
        subtitle: "Website for a peaceful vacation house surrounded by nature",
        role: "Fullstack Developer",
        type: "Rental / Hospitality Website",
        focus: "Atmosphere & simplicity",
      },
      content: {
        problem:
          "The client needed a simple website to present the house and attract guests, but had no clear online presence or structure.",
        solution:
          "I created a clean and atmospheric website focused on visual presentation and ease of navigation. The structure highlights the location, atmosphere, and key information for potential guests.",
        result:
          "The result is a calm, easy-to-use website that helps visitors quickly understand the place and feel its atmosphere, making it easier to get in touch and book.",
      },
      cta: {
        title: "Want a website like this?",
        subtext: "I can help you create a clean and inviting online presence.",
      },
    },
  },
  {
    slug: "rentalcar",
    title: "Car Rental Platform",
    description:
      "Full-featured booking platform with dynamic filtering and request system.",
    highlights: [
      "Backend-driven filtering",
      "Booking system",
      "State management",
    ],
    imageFolder: "rental-car",
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: "Car Rental Platform",
        subtitle:
          "Booking platform with dynamic search, filtering and rental requests",
        role: "Fullstack Developer",
        type: "Booking Platform",
      },
      content: {
        problem:
          "The business needed a scalable web platform where users could quickly discover available cars and submit rental requests with minimal friction.",
        solution:
          "I built a structured interface with backend-driven filters, fast category navigation, and a clear request flow designed to reduce drop-off.",
        result:
          "The platform provides a smoother booking experience, clearer inventory browsing, and a maintainable architecture for future growth.",
      },
      cta: {
        title: "Need a booking platform like this?",
        subtext: "I can help you design and build it end-to-end.",
      },
    },
  },
  {
    slug: "travel",
    title: "Travel Stories Platform",
    description:
      "Multi-page platform for sharing travel experiences with dynamic content and user profiles.",
    highlights: ["Dynamic routing", "User profiles", "Team collaboration"],
    imageFolder: "travel",
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: "Travel Stories Platform",
        subtitle:
          "Content platform for publishing travel experiences with profile-driven pages",
        role: "Fullstack Developer",
        type: "Content Platform",
      },
      content: {
        problem:
          "The team needed a structured space to publish travel stories with consistent presentation, author visibility, and scalable page architecture.",
        solution:
          "I developed a multi-page system with reusable content modules, dynamic routes, and profile-oriented sections to keep browsing intuitive.",
        result:
          "The final product supports cleaner publishing workflows, better content discoverability, and easier collaboration across contributors.",
      },
      cta: {
        title: "Building a content platform?",
        subtext: "Let's turn your concept into a scalable product.",
      },
    },
  },
];
