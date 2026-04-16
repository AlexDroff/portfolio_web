import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'cleaning',
    title: 'Cleaning Services',
    description:
      'Website for a local cleaning business with service catalog and WhatsApp-based booking flow.',
    highlights: [
      'Service selection UI',
      'WhatsApp booking flow',
      'Order summary logic',
    ],
    liveDemoUrl:
      'https://pure-soft-git-feature-dark-mode-i18n-alexdroffs-projects.vercel.app/',
    imageFolder: 'cleaning',
    cardImage: '/projects cards/cleaning.webp',
    screenshotsCount: 10,
    caseStudy: {
      hero: {
        title: 'Cleaning Services',
        subtitle:
          'Website for a local cleaning company with a service catalog and a complete WhatsApp-based ordering flow.',
      },
      meta: [
        { label: 'Role', value: 'Product Designer & Fullstack Developer' },
        { label: 'Type', value: 'Business Website with order flow' },
        { label: 'Location', value: 'Spain' },
        {
          label: 'Focus',
          value:
            'Designing a simple and clear ordering flow without complex forms or backend.',
        },
        { label: 'Stack', value: 'Next.js, TypeScript, CSS Modules' },
        {
          label: 'Duration',
          value: '3 weeks (1 week design, 2 weeks development)',
        },
      ],
      content: {
        problem:
          'The client had no website and no structured way to present services or accept orders. Requests were handled manually through calls and messaging apps, without a clear flow.',
        solution:
          "I designed and built a service-based website with a simple ordering flow. Users can browse services, view details in modals, and add them to an order. The system generates a pre-filled WhatsApp message with selected services and total price, removing the need for a backend.",
        result:
          'The result is a fast, clear website that helps the client receive structured service requests directly via WhatsApp.',
      },
      contributions: {
        title: 'What I did',
        items: [
          'Designed the full UI/UX from scratch',
          'Built fully responsive layouts (mobile, tablet, desktop)',
          'Implemented cart logic and price calculation',
          'Developed service detail modals',
          'Built WhatsApp message generation logic',
          'Implemented full order flow without backend',
          'Added multilingual support (EN / ES)',
          'Implemented dark and light themes',
        ],
      },
      gallery: [
        {
          title: 'Hero',
          description: 'Main project visual showing the primary landing header and value proposition.',
          layout: 'fullWidth',
          images: [{ index: 3, label: 'Main hero screen', kind: 'default' }],
        },
        {
          title: 'Responsive Design',
          description: 'Fully responsive layout optimized for desktop and mobile use.',
          layout: 'responsive',
          images: [
            { index: 1, label: 'Desktop viewport', kind: 'desktop' },
            { index: 2, label: 'Mobile viewport', kind: 'mobile' },
          ],
        },
        {
          title: 'Landing Experience',
          description:
            'Clear landing structure designed to communicate value and guide users through the service flow.',
          layout: 'fullWidth',
          images: [
            {
              index: 4,
              label: 'Service steps and trust-building content',
              kind: 'default',
            },
          ],
        },
        {
          title: 'Services Catalog',
          description:
            'Structured service grid with clear pricing and promotional emphasis.',
          layout: 'fullWidth',
          images: [
            {
              index: 5,
              label: 'Catalog cards grid with promo module',
              kind: 'default',
            },
          ],
        },
        {
          title: 'Service Details Modal',
          description:
            'Focused modal view presenting a selected service, short explanation, and quick pricing context before adding it to the order.',
          layout: 'single',
          images: [
            { index: 7, label: 'Selected service modal', kind: 'default' },
          ],
        },
        {
          title: 'Order Summary / Cart',
          description:
            'Order review step with selected services, quantity controls, and subtotal visibility before completing the request.',
          layout: 'single',
          images: [
            {
              index: 8,
              label: 'Cart sidebar with selected services and subtotal',
              kind: 'default',
            },
          ],
        },
        {
          title: 'FAQ & Content',
          description:
            'Supporting content blocks that reduce friction and answer common questions.',
          layout: 'fullWidth',
          images: [
            {
              index: 6,
              label: 'FAQ list with supporting visual content section',
              kind: 'default',
            },
          ],
        },
        {
          title: 'Contact / Conversion',
          description:
            'Quick order form designed to simplify the final conversion step.',
          layout: 'fullWidth',
          images: [
            {
              index: 9,
              label: 'Final order and contact form modal',
              kind: 'default',
            },
          ],
        },
      ],
      cta: {
        title: 'Need a website that brings real clients?',
        subtext:
          'I build fast, reliable websites with clear structure and real business logic.',
        buttonLabel: 'Start a project',
      },
    },
  },
  {
    slug: 'rental',
    title: 'Countryside Retreat',
    description:
      'Website for a countryside guest house with property presentation and direct-call booking flow.',
    highlights: [
      'Atmosphere-driven design',
      'House detail pages',
      'Direct call booking',
    ],
    liveDemoUrl: 'https://usadba.kr.ua/ua/',
    imageFolder: 'rental-house',
    cardImage: '/projects cards/rental house.webp',
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: 'Countryside Retreat',
        subtitle:
          'Website for a countryside guest house focused on atmosphere, property presentation, and direct-call booking.',
      },
      meta: [
        { label: 'Role', value: 'Product Designer & Fullstack Developer' },
        { label: 'Type', value: 'Vacation Rental Website' },
        { label: 'Location', value: 'Ukraine' },
        {
          label: 'Focus',
          value:
            'Designing a calm, conversion-oriented experience that encourages users to explore the property and contact the owner directly.',
        },
        { label: 'Stack', value: 'Next.js, TypeScript, CSS Modules' },
        {
          label: 'Duration',
          value: '3 weeks (1 week design, 2 weeks development)',
        },
      ],
      content: {
        problem:
          'The client had an outdated website that did not reflect the quality of the property or clearly present the offer. There was no simple way for users to contact the owner.',
        solution:
          "I designed and built a website focused on atmosphere and clarity. The structure highlights the property and houses, guiding users through the content. Instead of forms, the booking flow is simplified to a direct call.",
        result:
          'The new website improves presentation and makes it easier for users to understand the offer and contact the owner.',
      },
      contributions: {
        title: 'What I did',
        items: [
          'Designed the full UI/UX from scratch',
          'Built fully responsive layouts (mobile, tablet, desktop)',
          'Structured house cards and detailed property pages',
          'Implemented direct-call booking flow (no forms)',
          'Designed gallery and visual content presentation',
          'Built contact section with map and location context',
        ],
      },
      gallery: [
        {
          title: 'Hero',
          description:
            'Main project visual with the full desktop hero scene and sunset atmosphere.',
          layout: 'fullWidth',
          images: [{ index: 3, label: 'Main landing hero', kind: 'default' }],
        },
        {
          title: 'Responsive Design',
          description:
            'Desktop and mobile viewport presentation shown together as one responsive composition.',
          layout: 'responsive',
          images: [
            { index: 1, label: 'Desktop and mobile viewport presentation', kind: 'desktop' },
            { index: 2, label: 'Desktop and mobile viewport presentation', kind: 'mobile' },
          ],
        },
        {
          title: 'About / Concept',
          description:
            'Content storytelling block that explains the place, mood, and concept positioning.',
          layout: 'fullWidth',
          images: [
            { index: 4, label: 'Project concept and atmosphere', kind: 'default' },
          ],
        },
        {
          title: 'Houses Preview',
          description:
            'Accommodation preview section with house cards, structure, and clear booking CTAs.',
          layout: 'fullWidth',
          images: [
            { index: 5, label: 'Accommodation preview cards', kind: 'default' },
          ],
        },
        {
          title: 'Lifestyle / Experience',
          description:
            'Section focused on emotional value: nature, РѕС‚РґС‹С…, and leisure activities.',
          layout: 'fullWidth',
          images: [
            { index: 6, label: 'Lifestyle and РѕС‚РґС‹С… content section', kind: 'default' },
          ],
        },
        {
          title: 'Gallery',
          description:
            'Visual atmosphere and photo presentation block for browsing location imagery.',
          layout: 'fullWidth',
          images: [{ index: 7, label: 'Photo gallery section', kind: 'default' }],
        },
        {
          title: 'Contact / Location',
          description:
            'Final trust and conversion block with contact details and map context.',
          layout: 'fullWidth',
          images: [{ index: 8, label: 'Contact and location section', kind: 'default' }],
        },
        {
          title: 'House Details',
          description:
            'Detailed accommodation page with photos, description, pricing, and action path.',
          layout: 'fullWidth',
          images: [
            { index: 9, label: 'Detailed house page', kind: 'default' },
          ],
        },
      ],
      cta: {
        title: 'Need a website that brings real clients?',
        subtext:
          'I build fast, reliable websites with clear structure and real business logic.',
        buttonLabel: 'Start a project',
      },
    },
  },
  {
    slug: 'rentalcar',
    title: 'Car Rental App',
    description:
      'Web application for browsing, filtering, and requesting car rentals with a structured booking flow.',
    highlights: [
      'Dynamic filtering system',
      'API-driven catalog',
      'Booking request flow',
    ],
    liveDemoUrl: 'https://rentalcar-frontend-six.vercel.app/',
    imageFolder: 'rental-car',
    cardImage: '/projects cards/rental car.webp',
    screenshotsCount: 8,
    caseStudy: {
      hero: {
        title: 'Car Rental App',
        subtitle:
          'Web application for browsing, filtering, and booking rental cars with API-driven data and request flow.',
      },
      meta: [
        { label: 'Role', value: 'Frontend Developer' },
        { label: 'Type', value: 'Car Rental Web Application' },
        { label: 'Location', value: 'International' },
        {
          label: 'Focus',
          value:
            'Implementing a dynamic catalog with filtering, booking flow, and API integration.',
        },
        { label: 'Stack', value: 'Next.js, TypeScript, REST API' },
        { label: 'Duration', value: '3 days' },
      ],
      content: {
        problem:
          'Users needed a fast and intuitive way to browse cars, apply filters, and submit booking requests without friction.',
        solution:
          "I built a frontend application based on a provided design, focusing on dynamic filtering and API integration. Users can browse cars, filter results, view details, and submit booking requests with validation.",
        result:
          'The result is a functional application that demonstrates working with APIs, filtering logic, and real user interaction flows.',
      },
      contributions: {
        title: 'What I did',
        items: [
          'Implemented full frontend based on Figma design',
          'Built dynamic car catalog with API data',
          'Developed filtering system (brand, price, mileage)',
          'Implemented favorites functionality',
          'Created detailed car pages with specifications',
          'Built booking form with validation and date picker',
          'Integrated API for data fetching and rendering',
        ],
      },
      gallery: [
        {
          title: 'Hero',
          description:
            'Hero section with the main landing visual.',
          layout: 'fullWidth',
          images: [{ index: 3, label: 'Hero section', kind: 'default' }],
        },
        {
          title: 'Responsive Design',
          description:
            'Desktop and mobile viewport presentation.',
          layout: 'responsive',
          images: [
            { index: 1, label: 'Desktop view', kind: 'desktop' },
            { index: 2, label: 'Mobile view', kind: 'mobile' },
          ],
        },
        {
          title: 'Catalog Overview & Search',
          description:
            'Catalog layout with integrated search and browsing experience.',
          layout: 'single',
          images: [
            { index: 4, label: 'Catalog overview', kind: 'default' },
          ],
        },
        {
          title: 'Filtering',
          description:
            'Filtering by brand, price, and mileage.',
          layout: 'single',
          images: [
            { index: 5, label: 'Filtering by brand, price, and mileage', kind: 'default' },
          ],
        },
        {
          title: 'Favorites / Selected State',
          description:
            'Selected and favorites state in the catalog.',
          layout: 'single',
          images: [
            { index: 8, label: 'Selected / favorites state', kind: 'default' },
          ],
        },
        {
          title: 'Detail Variant',
          description:
            'Clean vehicle detail page variant.',
          layout: 'single',
          images: [
            { index: 6, label: 'Detail page variant', kind: 'default' },
          ],
        },
        {
          title: 'Booking Request Flow',
          description:
            'Submitting a rental request from the detail page.',
          layout: 'single',
          images: [
            { index: 7, label: 'Booking request flow', kind: 'default' },
          ],
        },
      ],
      cta: {
        title: 'Need a website that brings real clients?',
        subtext:
          'I build fast, reliable websites with clear structure and real business logic.',
        buttonLabel: 'Start a project',
      },
    },
  },
  {
    slug: 'travel',
    title: 'Travel Stories',
    description:
      'Fullstack web application for publishing travel stories with user profiles and authentication.',
    highlights: [
      'Authentication system',
      'Story publishing flow',
      'User profile system',
    ],
    liveDemoUrl: 'https://travelers-khaki-ten.vercel.app/',
    imageFolder: 'travel',
    cardImage: '/projects cards/travels.webp',
    screenshotsCount: 9,
    caseStudy: {
      hero: {
        title: 'Travel Stories',
        subtitle:
          'Fullstack platform for publishing travel stories with authentication, user profiles, and content management flows.',
      },
      meta: [
        {
          label: 'Role',
          value: 'Frontend Developer + backend contribution',
        },
        {
          label: 'Type',
          value: 'Fullstack Content Platform',
        },
        { label: 'Location', value: 'Course project' },
        {
          label: 'Focus',
          value:
            'Building a scalable content platform with authentication, publishing workflows, and profile-driven user experience.',
        },
        { label: 'Stack', value: 'Next.js, TypeScript, Node.js, REST API' },
        { label: 'Duration', value: '2 weeks' },
      ],
      content: {
        problem:
          'The project required a fullstack platform where users can register, publish stories, manage profiles, and interact with content.',
        solution:
          "As part of a 12-person team, I contributed to both frontend and backend development. I built key UI components, including headers, modals, story cards, and profile editing flows, and worked with shared data structures on the backend.",
        result:
          'The platform supports authentication, publishing, and user interaction, demonstrating real-world fullstack architecture and teamwork.',
      },
      contributions: {
        title: 'What I did',
        items: [
          'Implemented multiple header variations for different page contexts',
          'Built the confirmation modal component (ConfirmModal)',
          'Developed story card components',
          'Built the profile editing page',
          'Implemented active navigation logic based on route',
          'Integrated SVG sprite system',
          'Optimized image assets and structured public resources',
          'Contributed to backend typing and shared data structures',
          'Added project documentation (README)',
        ],
      },
      gallery: [
        {
          title: 'Hero - Guest State',
          description:
            'Public landing experience introducing the platform and inviting new users to join the community.',
          layout: 'single',
          images: [{ index: 3, label: 'Hero - Guest State', kind: 'default' }],
        },
        {
          title: 'Hero - Authenticated State',
          description:
            'Authenticated landing state showing how navigation and available actions expand after login.',
          layout: 'single',
          images: [{ index: 5, label: 'Hero - Authenticated State', kind: 'default' }],
        },
        {
          title: 'Authentication',
          description:
            'Login flow providing access to personalized features, profile actions, and story publishing.',
          layout: 'single',
          images: [
            { index: 4, label: 'Authentication', kind: 'default' },
          ],
        },
        {
          title: 'Responsive Design',
          description:
            'Responsive adaptation of the landing experience across desktop and mobile screens.',
          layout: 'responsive',
          images: [
            { index: 1, label: 'Desktop view', kind: 'desktop' },
            { index: 2, label: 'Mobile view', kind: 'mobile' },
          ],
        },
        {
          title: 'Stories Feed & Discovery',
          description:
            'Main content feed combined with category-based discovery for browsing and exploring travel stories.',
          layout: 'single',
          images: [
            { index: 6, label: 'Stories Feed & Discovery', kind: 'default' },
          ],
        },
        {
          title: 'Travelers',
          description:
            'Community directory presenting authors and making profile exploration easier.',
          layout: 'single',
          images: [
            { index: 7, label: 'Travelers', kind: 'default' },
          ],
        },
        {
          title: 'User Profile',
          description:
            'Personal user area for managing saved stories and reviewing individual activity.',
          layout: 'single',
          images: [
            { index: 8, label: 'User Profile', kind: 'default' },
          ],
        },
        {
          title: 'Story Creation',
          description:
            'Publishing flow for creating and sharing new travel stories.',
          layout: 'single',
          images: [
            { index: 9, label: 'Story Creation', kind: 'default' },
            ],
        },
        {
          title: 'Story Detail',
          description:
            'Full article view with author metadata, category context, and reading-focused layout.',
          layout: 'single',
          images: [
            { index: 10, label: 'Story Detail', kind: 'default' },
          ],
        },
      ],
      cta: {
        title: 'Need a website that brings real clients?',
        subtext:
          'I build fast, reliable websites with clear structure and real business logic.',
        buttonLabel: 'Start a project',
      },
    },
  },
];


