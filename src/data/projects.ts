import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'cleaning',
    title: 'Cleaning Company Website',
    description:
      'Website for a local cleaning business focused on services, trust, and clear contact flow.',
    highlights: [
      'Service-focused layout',
      'Clear contact flow',
      'Mobile-first design',
      'Trust-oriented structure',
      'Fast page loading',
      'Responsive interface',
    ],
    imageFolder: 'cleaning',
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: 'Cleaning Company Website',
        subtitle: 'Modern website for a local cleaning service in Spain',
      },
      meta: [
        { label: 'Role', value: 'Fullstack Developer' },
        { label: 'Type', value: 'Business Website' },
        { label: 'Location', value: 'Spain' },
        { label: 'Focus', value: 'Clarity and trust' },
        { label: 'Stack', value: 'Next.js, TypeScript, CSS Modules' },
        { label: 'Duration', value: '4 weeks' },
      ],
      content: {
        problem:
          'The client had no professional website and relied mostly on local advertising and word of mouth. Potential customers had no clear place to learn about services or quickly get in touch.',
        solution:
          'I designed and developed a clean, modern website focused on clarity and usability. The structure highlights key services, builds trust through simple design, and makes it easy for users to contact the business.',
        result:
          'The client received a fast, responsive website that clearly presents services and improves online presence. The new website makes it easier for potential customers to understand the offer and reach out.',
      },
      contributions: {
        title: 'What I did',
        items: [
          'Planned the information architecture around service priorities.',
          'Built responsive page layouts for desktop and mobile.',
          'Implemented reusable UI blocks for faster content updates.',
          'Optimized content flow to reduce friction before contact actions.',
        ],
      },
      gallery: [
        {
          title: 'Responsive views',
          layout: 'responsive-pair',
          images: [
            { index: 1, label: 'Desktop view', kind: 'desktop' },
            { index: 2, label: 'Mobile view', kind: 'mobile' },
          ],
        },
        {
          title: 'Key screens',
          layout: 'grid',
          images: [
            { index: 3, label: 'Hero section', kind: 'default' },
            { index: 4, label: 'Main content', kind: 'default' },
            { index: 5, label: 'Section', kind: 'default' },
            { index: 6, label: 'Section', kind: 'default' },
          ],
        },
        {
          title: 'Additional screens',
          layout: 'grid',
          images: [
            { index: 7, label: 'Screen', kind: 'default' },
            { index: 8, label: 'Screen', kind: 'default' },
            { index: 9, label: 'Screen', kind: 'default' },
          ],
        },
      ],
      cta: {
        title: 'Need a website like this?',
        subtext: "Let's build something simple, fast, and effective.",
        buttonLabel: 'Contact me',
      },
    },
  },
  {
    slug: 'rental',
    title: 'Countryside Rental Website',
    description:
      'Website for a countryside rental property focused on atmosphere and clear presentation.',
    highlights: [
      'Atmosphere design',
      'Property presentation',
      'Mobile-first layout',
      'Simple inquiry flow',
      'Responsive interface',
      'Clear structure',
    ],
    imageFolder: 'rental-house',
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: 'Countryside Rental Website',
        subtitle: 'Website for a peaceful vacation house surrounded by nature',
      },
      meta: [
        { label: 'Role', value: 'Fullstack Developer' },
        { label: 'Type', value: 'Rental / Hospitality Website' },
        { label: 'Location', value: 'Europe' },
        { label: 'Focus', value: 'Atmosphere and simplicity' },
        { label: 'Stack', value: 'Next.js, TypeScript, CSS Modules' },
        { label: 'Duration', value: '5 weeks' },
      ],
      content: {
        problem:
          'The client needed a simple website to present the house and attract guests, but had no clear online presence or structure.',
        solution:
          'I created a clean and atmospheric website focused on visual presentation and ease of navigation. The structure highlights the location, atmosphere, and key information for potential guests.',
        result:
          'The result is a calm, easy-to-use website that helps visitors quickly understand the place and feel its atmosphere, making it easier to get in touch and book.',
      },
      contributions: {
        title: 'What I did',
        items: [
          'Designed a visual hierarchy that supports a calm, premium feel.',
          'Built responsive sections for property details and inquiries.',
          'Structured content modules for easy seasonal content updates.',
          'Improved mobile readability for key booking information.',
        ],
      },
      gallery: [
        {
          title: 'Responsive views',
          layout: 'responsive-pair',
          images: [
            { index: 1, label: 'Desktop view', kind: 'desktop' },
            { index: 2, label: 'Mobile view', kind: 'mobile' },
          ],
        },
        {
          title: 'Key screens',
          layout: 'grid',
          images: [
            { index: 3, label: 'Hero section', kind: 'default' },
            { index: 4, label: 'Main content', kind: 'default' },
            { index: 5, label: 'Section', kind: 'default' },
            { index: 6, label: 'Section', kind: 'default' },
          ],
        },
        {
          title: 'Additional screens',
          layout: 'grid',
          images: [
            { index: 7, label: 'Screen', kind: 'default' },
            { index: 8, label: 'Screen', kind: 'default' },
            { index: 9, label: 'Screen', kind: 'default' },
          ],
        },
      ],
      cta: {
        title: 'Want a website like this?',
        subtext: 'I can help you create a clean and inviting online presence.',
        buttonLabel: 'Contact me',
      },
    },
  },
  {
    slug: 'rentalcar',
    title: 'Car Rental Platform',
    description:
      'Web platform for car rental with catalog, filtering, and booking flow.',
    highlights: [
      'Dynamic filtering',
      'Paginated catalog',
      'Detailed listing pages',
      'Favorites system',
      'Booking request flow',
      'Responsive application',
    ],
    imageFolder: 'rental-car',
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: 'Car Rental Platform',
        subtitle:
          'Booking platform with dynamic search, filtering and rental requests',
      },
      meta: [
        { label: 'Role', value: 'Fullstack Developer' },
        { label: 'Type', value: 'Booking Platform' },
        { label: 'Location', value: 'International' },
        { label: 'Focus', value: 'Search, filtering, and conversion flow' },
        { label: 'Stack', value: 'Next.js, TypeScript, REST API' },
        { label: 'Duration', value: '6 weeks' },
      ],
      content: {
        problem:
          'The business needed a scalable web platform where users could quickly discover available cars and submit rental requests with minimal friction.',
        solution:
          'I built a structured interface with backend-driven filters, fast category navigation, and a clear request flow designed to reduce drop-off.',
        result:
          'The platform provides a smoother booking experience, clearer inventory browsing, and a maintainable architecture for future growth.',
      },
      contributions: {
        title: 'What I did',
        items: [
          'Implemented catalog filtering and pagination driven by API data.',
          'Designed reusable listing cards and detail page templates.',
          'Built a clear booking request flow with validation.',
          'Structured the codebase for scalable feature expansion.',
        ],
      },
      gallery: [
        {
          title: 'Responsive views',
          layout: 'responsive-pair',
          images: [
            { index: 1, label: 'Desktop view', kind: 'desktop' },
            { index: 2, label: 'Mobile view', kind: 'mobile' },
          ],
        },
        {
          title: 'Key screens',
          layout: 'grid',
          images: [
            { index: 3, label: 'Hero section', kind: 'default' },
            { index: 4, label: 'Main content', kind: 'default' },
            { index: 5, label: 'Section', kind: 'default' },
            { index: 6, label: 'Section', kind: 'default' },
          ],
        },
        {
          title: 'Additional screens',
          layout: 'grid',
          images: [
            { index: 7, label: 'Screen', kind: 'default' },
            { index: 8, label: 'Screen', kind: 'default' },
            { index: 9, label: 'Screen', kind: 'default' },
          ],
        },
      ],
      cta: {
        title: 'Need a booking platform like this?',
        subtext: 'I can help you design and build it end-to-end.',
        buttonLabel: 'Contact me',
      },
    },
  },
  {
    slug: 'travel',
    title: 'Travel Stories Platform',
    description:
      'Multi-page platform for sharing travel stories with user profiles and content management.',
    highlights: [
      'User profiles',
      'Story publishing flow',
      'Protected routes',
      'Dynamic content',
      'Responsive interface',
      'Content management',
    ],
    imageFolder: 'travel',
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: 'Travel Stories Platform',
        subtitle:
          'Content platform for publishing travel experiences with profile-driven pages',
      },
      meta: [
        { label: 'Role', value: 'Fullstack Developer' },
        { label: 'Type', value: 'Content Platform' },
        { label: 'Location', value: 'International' },
        { label: 'Focus', value: 'Publishing workflow and discoverability' },
        { label: 'Stack', value: 'Next.js, TypeScript, Authentication' },
        { label: 'Duration', value: '7 weeks' },
      ],
      content: {
        problem:
          'The team needed a structured space to publish travel stories with consistent presentation, author visibility, and scalable page architecture.',
        solution:
          'I developed a multi-page system with reusable content modules, dynamic routes, and profile-oriented sections to keep browsing intuitive.',
        result:
          'The final product supports cleaner publishing workflows, better content discoverability, and easier collaboration across contributors.',
      },
      contributions: {
        title: 'What I did',
        items: [
          'Built a modular content architecture for story pages.',
          'Implemented dynamic routes for user and article experiences.',
          'Integrated protected flows for authenticated actions.',
          'Improved content browsing with reusable UI patterns.',
        ],
      },
      gallery: [
        {
          title: 'Responsive views',
          layout: 'responsive-pair',
          images: [
            { index: 1, label: 'Desktop view', kind: 'desktop' },
            { index: 2, label: 'Mobile view', kind: 'mobile' },
          ],
        },
        {
          title: 'Key screens',
          layout: 'grid',
          images: [
            { index: 3, label: 'Hero section', kind: 'default' },
            { index: 4, label: 'Main content', kind: 'default' },
            { index: 5, label: 'Section', kind: 'default' },
            { index: 6, label: 'Section', kind: 'default' },
          ],
        },
        {
          title: 'Additional screens',
          layout: 'grid',
          images: [
            { index: 7, label: 'Screen', kind: 'default' },
            { index: 8, label: 'Screen', kind: 'default' },
            { index: 9, label: 'Screen', kind: 'default' },
          ],
        },
      ],
      cta: {
        title: 'Building a content platform?',
        subtext: "Let's turn your concept into a scalable product.",
        buttonLabel: 'Contact me',
      },
    },
  },
];
