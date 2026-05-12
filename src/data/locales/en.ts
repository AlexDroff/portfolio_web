import type { HomeContent } from "@/types/home";
import type { FAQContent } from "@/types/faq";
import type { Project } from "@/types/project";
import type { LocaleContent } from "./types";

const home: HomeContent = {
  "hero": {
    "title": "I build fast websites and booking flows for small service businesses.",
    "description": "Mobile-first websites with clear structure, basic SEO, and contact flows that help visitors become real clients.",
    "primaryCta": {
      "label": "Tell me about your project",
      "href": "/contact"
    },
    "secondaryCta": {
      "label": "View case studies",
      "href": "#projects"
    }
  },
  "about": {
    "title": "Practical websites, not overcomplicated builds.",
    "description": [
      "I am a fullstack developer based in Poland. I build websites and web applications for small service businesses that need clear structure, responsive UI, and reliable contact flows.",
      "My focus is not only to make the interface look good, but to make the website useful: easy to understand, fast to navigate, simple to contact from, and ready to deploy."
    ],
    "blocks": [
      {
        "title": "What you get",
        "description": [
          "A practical website or web application focused on real business use, not unnecessary complexity."
        ],
        "items": [
          {
            "id": "business-first-structure",
            "iconSrc": "/icons/lightning.svg",
            "iconAlt": "",
            "title": "Business-first structure",
            "description": "I help organize the page around the offer, user questions, contact points, and the action the visitor should take."
          },
          {
            "id": "mobile-first-ui",
            "iconSrc": "/icons/smartphone.svg",
            "iconAlt": "",
            "title": "Mobile-first UI",
            "description": "Layouts are built for mobile first, then adapted for tablet and desktop so the site works well where most visitors actually use it."
          },
          {
            "id": "contact-booking-flows",
            "iconSrc": "/icons/grid.svg",
            "iconAlt": "",
            "title": "Contact & booking flows",
            "description": "I can add forms, direct-call CTAs, WhatsApp or Telegram flows, and simple request systems that help visitors become real leads."
          },
          {
            "id": "seo-deployment-basics",
            "iconSrc": "/icons/rocket.svg",
            "iconAlt": "",
            "title": "SEO & deployment basics",
            "description": "I prepare basic metadata, clean structure, sitemap/robots when needed, and deployment setup so the project can go live properly."
          }
        ]
      },
      {
        "title": "How I work",
        "description": [
          "Simple process, clear scope, direct communication, and clean implementation."
        ],
        "items": [
          {
            "id": "clear-scope",
            "iconSrc": "/icons/lightbulb.svg",
            "iconAlt": "",
            "title": "Clear scope",
            "description": "Before development, I define what needs to be built, what can wait, and what is not worth adding for the current stage."
          },
          {
            "id": "clean-implementation",
            "iconSrc": "/icons/code.svg",
            "iconAlt": "",
            "title": "Clean implementation",
            "description": "I keep the project structure understandable, split components by responsibility, and avoid adding dependencies without a real reason."
          },
          {
            "id": "direct-communication",
            "iconSrc": "/icons/rocket.svg",
            "iconAlt": "",
            "title": "Direct communication",
            "description": "You work directly with the person building the project, which keeps decisions faster and reduces misunderstanding."
          },
          {
            "id": "post-launch-support",
            "iconSrc": "/icons/grid.svg",
            "iconAlt": "",
            "title": "Post-launch support",
            "description": "After launch, I can help with fixes, content updates, small improvements, and further feature development."
          }
        ]
      }
    ]
  },
  "projects": {
    "title": "Selected Work",
    "cta": {
      "title": "Need a website that brings real clients?",
      "subtext": "I build fast, reliable websites with clear structure and real business logic.",
      "buttonLabel": "Start a project",
      "href": "/contact"
    }
  },
  "services": {
    "title": "What I can build",
    "description": "Practical websites and web applications focused on clear structure, responsive UI, and real contact flows.",
    "items": [
      {
        "id": "business-websites",
        "title": "Business websites",
        "description": "Landing pages and service websites for small businesses, local services, personal brands, and simple company websites."
      },
      {
        "id": "booking-contact-flows",
        "title": "Booking & contact flows",
        "description": "Contact forms, booking requests, Telegram or WhatsApp flows, direct-call CTAs, and simple request systems."
      },
      {
        "id": "web-apps-mvp",
        "title": "Web apps / MVP",
        "description": "Catalogs, dashboards, user flows, authentication, REST API integrations, and small custom web applications."
      },
      {
        "id": "website-modernization",
        "title": "Website modernization",
        "description": "UI cleanup, responsive fixes, performance improvements, structure cleanup, and frontend refactoring."
      },
      {
        "id": "seo-deployment",
        "title": "SEO basics & deployment",
        "description": "Basic metadata, sitemap, robots, Open Graph setup, Vercel deployment, domain setup, and post-launch fixes."
      }
    ]
  },
  "packages": {
    "title": "Project packages",
    "description": "Starting points for common project types. Final pricing depends on scope, content, integrations, and timeline.",
    "items": [
      {
        "id": "landing-page",
        "title": "Landing Page",
        "price": "from 1800 PLN",
        "description": "For simple service pages, personal brands, and small campaigns that need a clear online presence.",
        "features": [
          "One-page structure",
          "Responsive layout",
          "Clear contact CTA",
          "Basic SEO metadata",
          "Vercel deployment"
        ]
      },
      {
        "id": "business-website",
        "title": "Business Website",
        "price": "from 3000 PLN",
        "description": "For small businesses that need a stronger website with multiple sections or pages.",
        "features": [
          "Offer and service structure",
          "Several sections or pages",
          "Responsive UI",
          "Contact section",
          "Basic SEO and deployment"
        ]
      },
      {
        "id": "booking-flow",
        "title": "Website + Booking Flow",
        "price": "from 4500 PLN",
        "description": "For service businesses that need requests, bookings, direct contact, or structured lead flow.",
        "features": [
          "Business website",
          "Contact or booking form",
          "Telegram, WhatsApp, or email flow",
          "Validation and UX states",
          "Post-launch fixes"
        ],
        "note": "Best fit for local services, rentals, salons, and small service businesses."
      },
      {
        "id": "custom-web-app",
        "title": "Custom Web App / MVP",
        "price": "from 8000 PLN",
        "description": "For custom web applications, dashboards, catalogs, user flows, or API-based products.",
        "features": [
          "React / Next.js frontend",
          "REST API integration",
          "Authentication or user flows",
          "PostgreSQL or MongoDB when needed",
          "Scalable project structure"
        ]
      }
    ]
  }
};

const faq: FAQContent = {
  "title": "FAQ",
  "description": "Common questions about pricing, timelines, process, deployment, and support.",
  "items": [
    {
      "id": "website-cost",
      "question": "How much does a website cost?",
      "answer": "Simple landing pages usually start from 1800 PLN. Business websites usually start from 3000 PLN. Websites with booking or contact flows usually start from 4500 PLN. Final pricing depends on scope, content, integrations, and timeline."
    },
    {
      "id": "price-factors",
      "question": "What affects the final price?",
      "answer": "The final price depends on the number of pages, amount of content, design complexity, forms, integrations, SEO scope, multilingual setup, and whether the project needs backend logic, API, database, or authentication."
    },
    {
      "id": "timeline",
      "question": "How long does it take to build a website?",
      "answer": "A simple landing page usually takes 1?2 weeks. A business website usually takes 2?4 weeks. A website with booking/contact flow or custom app logic can take 4?6 weeks or more depending on the scope."
    },
    {
      "id": "process",
      "question": "How does the process work?",
      "answer": "First, we define the goal, pages, content, contact flow, and technical scope. Then I prepare the structure, build the UI, connect required logic, test responsiveness, deploy the project, and help with post-launch fixes."
    },
    {
      "id": "domain-deployment",
      "question": "Can you help with domain and deployment?",
      "answer": "Yes. I can help deploy the project to Vercel, configure environment variables, connect a domain, and prepare basic technical SEO files such as metadata, sitemap, and robots when needed."
    },
    {
      "id": "mobile-friendly",
      "question": "Will the website work well on mobile?",
      "answer": "Yes. I build mobile-first, then adapt the layout for tablet and desktop. This is especially important for local and service businesses where many visitors open the website from a phone."
    },
    {
      "id": "booking-contact-form",
      "question": "Can you build a contact form or booking flow?",
      "answer": "Yes. I can build contact forms, booking request flows, direct-call CTAs, WhatsApp or Telegram flows, email-based requests, and simple API-backed forms with validation."
    },
    {
      "id": "content-editing",
      "question": "Will I be able to edit the content myself?",
      "answer": "It depends on the project. For simple websites, content can be stored directly in the project for speed and stability. If frequent edits are needed, we can add a CMS or a simple admin panel later."
    },
    {
      "id": "seo",
      "question": "Do you handle SEO?",
      "answer": "I handle basic technical SEO: semantic structure, metadata, Open Graph, sitemap, robots, clean headings, responsive layout, and performance-oriented implementation. Full ongoing SEO campaigns are a separate service."
    },
    {
      "id": "support",
      "question": "Do you provide support after launch?",
      "answer": "Yes. After launch, I can help with small fixes, content updates, new sections, performance improvements, SEO polish, and further feature development."
    }
  ]
};

const projects: Project[] = [
  {
    "slug": "cleaning",
    "title": "Cleaning Services",
    "description": "Website for a local cleaning business with service catalog and WhatsApp-based booking flow.",
    "highlights": [
      "Service selection UI",
      "WhatsApp booking flow",
      "Order summary logic"
    ],
    "liveDemoUrl": "https://pure-soft-six.vercel.app/",
    "imageFolder": "cleaning",
    "cardImage": "/projects cards/cleaning.webp",
    "businessSummary": "Service website with pricing logic, cart-like flow and WhatsApp order request.",
    "badges": [
      "React",
      "TypeScript",
      "Pricing logic",
      "WhatsApp flow"
    ],
    "summary": {
      "projectType": "Service business website",
      "goal": "Present cleaning services clearly and make it easier for users to calculate a request and contact the business.",
      "mainFeatures": [
        "Service structure",
        "Pricing logic",
        "Cart-like request flow",
        "WhatsApp order request",
        "Responsive layout"
      ],
      "role": "Frontend implementation, UI structure, interaction logic, and deployment preparation.",
      "stack": [
        "React",
        "TypeScript",
        "CSS Modules"
      ],
      "result": "A service website with clearer offer presentation, interactive pricing flow, and a direct path from service selection to contact."
    },
    "caseStudy": {
      "hero": {
        "title": "Cleaning Services",
        "subtitle": "Website for a local cleaning company with a service catalog and a complete WhatsApp-based ordering flow."
      },
      "meta": [
        {
          "label": "Role",
          "value": "Product Designer & Fullstack Developer"
        },
        {
          "label": "Type",
          "value": "Business Website with order flow"
        },
        {
          "label": "Location",
          "value": "Spain"
        },
        {
          "label": "Focus",
          "value": "Designing a simple and clear ordering flow without complex forms or backend."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, CSS Modules"
        },
        {
          "label": "Duration",
          "value": "3 weeks (1 week design, 2 weeks development)"
        }
      ],
      "content": {
        "problem": "The client had no website and no structured way to present services or accept orders. Requests were handled manually through calls and messaging apps, without a clear flow.",
        "solution": "I designed and built a service-based website with a simple ordering flow. Users can browse services, view details in modals, and add them to an order. The system generates a pre-filled WhatsApp message with selected services and total price, removing the need for a backend.",
        "result": "The result is a fast, clear website that helps the client receive structured service requests directly via WhatsApp."
      },
      "contributions": {
        "title": "What I did",
        "items": [
          "Designed the full UI/UX from scratch",
          "Built fully responsive layouts (mobile, tablet, desktop)",
          "Implemented cart logic and price calculation",
          "Developed service detail modals",
          "Built WhatsApp message generation logic",
          "Implemented full order flow without backend",
          "Added multilingual support (EN / ES)",
          "Implemented dark and light themes"
        ]
      },
      "gallery": [
        {
          "title": "Hero",
          "description": "Main project visual showing the primary landing header and value proposition.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 3,
              "label": "Main hero screen",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Responsive Design",
          "description": "Fully responsive layout optimized for desktop and mobile use.",
          "layout": "responsive",
          "images": [
            {
              "index": 1,
              "label": "Desktop viewport",
              "kind": "desktop"
            },
            {
              "index": 2,
              "label": "Mobile viewport",
              "kind": "mobile"
            }
          ]
        },
        {
          "title": "Landing Experience",
          "description": "Clear landing structure designed to communicate value and guide users through the service flow.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 4,
              "label": "Service steps and trust-building content",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Services Catalog",
          "description": "Structured service grid with clear pricing and promotional emphasis.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 5,
              "label": "Catalog cards grid with promo module",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Service Details Modal",
          "description": "Focused modal view presenting a selected service, short explanation, and quick pricing context before adding it to the order.",
          "layout": "single",
          "images": [
            {
              "index": 7,
              "label": "Selected service modal",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Order Summary / Cart",
          "description": "Order review step with selected services, quantity controls, and subtotal visibility before completing the request.",
          "layout": "single",
          "images": [
            {
              "index": 8,
              "label": "Cart sidebar with selected services and subtotal",
              "kind": "default"
            }
          ]
        },
        {
          "title": "FAQ & Content",
          "description": "Supporting content blocks that reduce friction and answer common questions.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 6,
              "label": "FAQ list with supporting visual content section",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Contact / Conversion",
          "description": "Quick order form designed to simplify the final conversion step.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 9,
              "label": "Final order and contact form modal",
              "kind": "default"
            }
          ]
        }
      ],
      "cta": {
        "title": "Need a website that brings real clients?",
        "subtext": "I build fast, reliable websites with clear structure and real business logic.",
        "buttonLabel": "Start a project"
      }
    }
  },
  {
    "slug": "rental",
    "title": "Countryside Retreat",
    "description": "Website for a countryside guest house with property presentation and direct-call booking flow.",
    "highlights": [
      "Atmosphere-driven design",
      "House detail pages",
      "Direct call booking"
    ],
    "liveDemoUrl": "https://sablino.vercel.app/",
    "imageFolder": "rental-house",
    "cardImage": "/projects cards/rental house.webp",
    "businessSummary": "Website for a countryside rental business with house pages, gallery, contact CTAs and booking-oriented structure.",
    "badges": [
      "Next.js",
      "TypeScript",
      "SEO basics",
      "Booking flow"
    ],
    "summary": {
      "projectType": "Rental business website",
      "goal": "Show houses, conditions, gallery, and contact options for a countryside rental business.",
      "mainFeatures": [
        "House listing",
        "House detail pages",
        "Gallery",
        "Contact CTAs",
        "SEO-ready structure"
      ],
      "role": "Frontend implementation, content structure, responsive UI, SEO basics, and deployment support.",
      "stack": [
        "Next.js",
        "React",
        "TypeScript",
        "CSS Modules"
      ],
      "result": "A production-ready rental website with structured house pages, clear mobile navigation, and booking-oriented contact flow."
    },
    "caseStudy": {
      "hero": {
        "title": "Countryside Retreat",
        "subtitle": "Website for a countryside guest house focused on atmosphere, property presentation, and direct-call booking."
      },
      "meta": [
        {
          "label": "Role",
          "value": "Product Designer & Fullstack Developer"
        },
        {
          "label": "Type",
          "value": "Vacation Rental Website"
        },
        {
          "label": "Location",
          "value": "Ukraine"
        },
        {
          "label": "Focus",
          "value": "Designing a calm, conversion-oriented experience that encourages users to explore the property and contact the owner directly."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, CSS Modules"
        },
        {
          "label": "Duration",
          "value": "3 weeks (1 week design, 2 weeks development)"
        }
      ],
      "content": {
        "problem": "The client had an outdated website that did not reflect the quality of the property or clearly present the offer. There was no simple way for users to contact the owner.",
        "solution": "I designed and built a website focused on atmosphere and clarity. The structure highlights the property and houses, guiding users through the content. Instead of forms, the booking flow is simplified to a direct call.",
        "result": "The new website improves presentation and makes it easier for users to understand the offer and contact the owner."
      },
      "contributions": {
        "title": "What I did",
        "items": [
          "Designed the full UI/UX from scratch",
          "Built fully responsive layouts (mobile, tablet, desktop)",
          "Structured house cards and detailed property pages",
          "Implemented direct-call booking flow (no forms)",
          "Designed gallery and visual content presentation",
          "Built contact section with map and location context"
        ]
      },
      "gallery": [
        {
          "title": "Hero",
          "description": "Main project visual with the full desktop hero scene, direct call CTA, and calm countryside atmosphere.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 3,
              "label": "Main landing hero",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Responsive Design",
          "description": "Desktop and mobile viewport presentation showing how the landing page adapts across devices.",
          "layout": "responsive",
          "images": [
            {
              "index": 1,
              "label": "Desktop viewport presentation",
              "kind": "desktop"
            },
            {
              "index": 2,
              "label": "Mobile viewport presentation",
              "kind": "mobile"
            }
          ]
        },
        {
          "title": "About / Concept",
          "description": "Content storytelling block that explains the place, mood, and positioning of the countryside retreat.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 4,
              "label": "About section with atmosphere and concept",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Houses Preview",
          "description": "Accommodation preview section with house cards, pricing, and clear navigation to detailed pages.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 5,
              "label": "Accommodation preview cards",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Gallery",
          "description": "Photo gallery section designed to show the property, houses, and surrounding atmosphere.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 6,
              "label": "Photo gallery section",
              "kind": "default"
            }
          ]
        },
        {
          "title": "CTA Section",
          "description": "Conversion-focused section that gives the visitor a final clear action: call the estate and move from browsing to direct contact.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 7,
              "label": "Final call-to-action section",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Contact / Location",
          "description": "Final trust and conversion block with contact details, phone numbers, map, and location context.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 8,
              "label": "Contact and location section",
              "kind": "default"
            }
          ]
        },
        {
          "title": "House Details",
          "description": "Detailed accommodation page with photos, characteristics, pricing, and direct action path.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 9,
              "label": "Detailed house page",
              "kind": "default"
            }
          ]
        }
      ],
      "cta": {
        "title": "Need a website that brings real clients?",
        "subtext": "I build fast, reliable websites with clear structure and real business logic.",
        "buttonLabel": "Start a project"
      }
    }
  },
  {
    "slug": "rentalcar",
    "title": "Car Rental App",
    "description": "Web application for browsing, filtering, and requesting car rentals with a structured booking flow.",
    "highlights": [
      "Dynamic filtering system",
      "API-driven catalog",
      "Booking request flow"
    ],
    "liveDemoUrl": "https://rentalcar-frontend-six.vercel.app/",
    "imageFolder": "rental-car",
    "cardImage": "/projects cards/rental car.webp",
    "businessSummary": "Catalog-style web app with filtering, favorites and booking request flow.",
    "badges": [
      "React",
      "API",
      "Filtering",
      "Booking request"
    ],
    "summary": {
      "projectType": "Catalog web app",
      "goal": "Create a car rental interface where users can browse cars, filter offers, save favorites, and start a booking request.",
      "mainFeatures": [
        "Car catalog",
        "Filtering",
        "Favorites",
        "Booking request flow",
        "API integration"
      ],
      "role": "Frontend implementation, UI logic, API data handling, and responsive layout.",
      "stack": [
        "React",
        "TypeScript",
        "REST API",
        "CSS Modules"
      ],
      "result": "A catalog-style web application with structured browsing, user-friendly filtering, and a clear request flow."
    },
    "caseStudy": {
      "hero": {
        "title": "Car Rental App",
        "subtitle": "Web application for browsing, filtering, and booking rental cars with API-driven data and request flow."
      },
      "meta": [
        {
          "label": "Role",
          "value": "Frontend Developer"
        },
        {
          "label": "Type",
          "value": "Car Rental Web Application"
        },
        {
          "label": "Location",
          "value": "International"
        },
        {
          "label": "Focus",
          "value": "Implementing a dynamic catalog with filtering, booking flow, and API integration."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, REST API"
        },
        {
          "label": "Duration",
          "value": "3 days"
        }
      ],
      "content": {
        "problem": "Users needed a fast and intuitive way to browse cars, apply filters, and submit booking requests without friction.",
        "solution": "I built a frontend application based on a provided design, focusing on dynamic filtering and API integration. Users can browse cars, filter results, view details, and submit booking requests with validation.",
        "result": "The result is a functional application that demonstrates working with APIs, filtering logic, and real user interaction flows."
      },
      "contributions": {
        "title": "What I did",
        "items": [
          "Implemented full frontend based on Figma design",
          "Built dynamic car catalog with API data",
          "Developed filtering system (brand, price, mileage)",
          "Implemented favorites functionality",
          "Created detailed car pages with specifications",
          "Built booking form with validation and date picker",
          "Integrated API for data fetching and rendering"
        ]
      },
      "gallery": [
        {
          "title": "Hero",
          "description": "Hero section with the main landing visual.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 3,
              "label": "Hero section",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Responsive Design",
          "description": "Desktop and mobile viewport presentation.",
          "layout": "responsive",
          "images": [
            {
              "index": 1,
              "label": "Desktop view",
              "kind": "desktop"
            },
            {
              "index": 2,
              "label": "Mobile view",
              "kind": "mobile"
            }
          ]
        },
        {
          "title": "Catalog Overview & Search",
          "description": "Catalog layout with integrated search and browsing experience.",
          "layout": "single",
          "images": [
            {
              "index": 4,
              "label": "Catalog overview",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Filtering",
          "description": "Filtering by brand, price, and mileage.",
          "layout": "single",
          "images": [
            {
              "index": 5,
              "label": "Filtering by brand, price, and mileage",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Favorites / Selected State",
          "description": "Selected and favorites state in the catalog.",
          "layout": "single",
          "images": [
            {
              "index": 8,
              "label": "Selected / favorites state",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Detail Variant",
          "description": "Clean vehicle detail page variant.",
          "layout": "single",
          "images": [
            {
              "index": 6,
              "label": "Detail page variant",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Booking Request Flow",
          "description": "Submitting a rental request from the detail page.",
          "layout": "single",
          "images": [
            {
              "index": 7,
              "label": "Booking request flow",
              "kind": "default"
            }
          ]
        }
      ],
      "cta": {
        "title": "Need a website that brings real clients?",
        "subtext": "I build fast, reliable websites with clear structure and real business logic.",
        "buttonLabel": "Start a project"
      }
    }
  },
  {
    "slug": "travel",
    "title": "Travel Stories",
    "description": "Fullstack web application for publishing travel stories with user profiles and authentication.",
    "highlights": [
      "Authentication system",
      "Story publishing flow",
      "User profile system"
    ],
    "liveDemoUrl": "https://travelers-khaki-ten.vercel.app/",
    "imageFolder": "travel",
    "cardImage": "/projects cards/travels.webp",
    "businessSummary": "Fullstack travel platform with authentication, user profiles and story publishing.",
    "badges": [
      "React",
      "Node.js",
      "MongoDB",
      "Auth"
    ],
    "summary": {
      "projectType": "Fullstack web platform",
      "goal": "Build a travel stories platform with user accounts, profiles, and story publishing features.",
      "mainFeatures": [
        "Authentication",
        "User profiles",
        "Story publishing",
        "Backend API",
        "Database integration"
      ],
      "role": "Fullstack development contribution across frontend, backend API, data structure, and feature implementation.",
      "stack": [
        "React",
        "Node.js",
        "MongoDB",
        "REST API"
      ],
      "result": "A fullstack travel platform with account-based user flows, content publishing, and structured backend integration."
    },
    "caseStudy": {
      "hero": {
        "title": "Travel Stories",
        "subtitle": "Fullstack platform for publishing travel stories with authentication, user profiles, and content management flows."
      },
      "meta": [
        {
          "label": "Role",
          "value": "Frontend Developer + backend contribution"
        },
        {
          "label": "Type",
          "value": "Fullstack Content Platform"
        },
        {
          "label": "Location",
          "value": "Course project"
        },
        {
          "label": "Focus",
          "value": "Building a scalable content platform with authentication, publishing workflows, and profile-driven user experience."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, Node.js, REST API"
        },
        {
          "label": "Duration",
          "value": "2 weeks"
        }
      ],
      "content": {
        "problem": "The project required a fullstack platform where users can register, publish stories, manage profiles, and interact with content.",
        "solution": "As part of a 12-person team, I contributed to both frontend and backend development. I built key UI components, including headers, modals, story cards, and profile editing flows, and worked with shared data structures on the backend.",
        "result": "The platform supports authentication, publishing, and user interaction, demonstrating real-world fullstack architecture and teamwork."
      },
      "contributions": {
        "title": "What I did",
        "items": [
          "Implemented multiple header variations for different page contexts",
          "Built the confirmation modal component (ConfirmModal)",
          "Developed story card components",
          "Built the profile editing page",
          "Implemented active navigation logic based on route",
          "Integrated SVG sprite system",
          "Optimized image assets and structured public resources",
          "Contributed to backend typing and shared data structures",
          "Added project documentation (README)"
        ]
      },
      "gallery": [
        {
          "title": "Hero - Guest State",
          "description": "Public landing experience introducing the platform and inviting new users to join the community.",
          "layout": "single",
          "images": [
            {
              "index": 3,
              "label": "Hero - Guest State",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Hero - Authenticated State",
          "description": "Authenticated landing state showing how navigation and available actions expand after login.",
          "layout": "single",
          "images": [
            {
              "index": 5,
              "label": "Hero - Authenticated State",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Authentication",
          "description": "Login flow providing access to personalized features, profile actions, and story publishing.",
          "layout": "single",
          "images": [
            {
              "index": 4,
              "label": "Authentication",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Responsive Design",
          "description": "Responsive adaptation of the landing experience across desktop and mobile screens.",
          "layout": "responsive",
          "images": [
            {
              "index": 1,
              "label": "Desktop view",
              "kind": "desktop"
            },
            {
              "index": 2,
              "label": "Mobile view",
              "kind": "mobile"
            }
          ]
        },
        {
          "title": "Stories Feed & Discovery",
          "description": "Main content feed combined with category-based discovery for browsing and exploring travel stories.",
          "layout": "single",
          "images": [
            {
              "index": 6,
              "label": "Stories Feed & Discovery",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Travelers",
          "description": "Community directory presenting authors and making profile exploration easier.",
          "layout": "single",
          "images": [
            {
              "index": 7,
              "label": "Travelers",
              "kind": "default"
            }
          ]
        },
        {
          "title": "User Profile",
          "description": "Personal user area for managing saved stories and reviewing individual activity.",
          "layout": "single",
          "images": [
            {
              "index": 8,
              "label": "User Profile",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Story Creation",
          "description": "Publishing flow for creating and sharing new travel stories.",
          "layout": "single",
          "images": [
            {
              "index": 9,
              "label": "Story Creation",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Story Detail",
          "description": "Full article view with author metadata, category context, and reading-focused layout.",
          "layout": "single",
          "images": [
            {
              "index": 10,
              "label": "Story Detail",
              "kind": "default"
            }
          ]
        }
      ],
      "cta": {
        "title": "Need a website that brings real clients?",
        "subtext": "I build fast, reliable websites with clear structure and real business logic.",
        "buttonLabel": "Start a project"
      }
    }
  }
];

const contact: LocaleContent["contact"] = {
  title: "Tell me about your project",
  intro:
    "Send me a short message about your business, what you need, and when you want to launch. I'll reply with an estimated scope, timeline, and starting price.",
  helperText:
    "You can include the project type, expected timeline, required features, and any reference websites.",
  namePlaceholder: "Your name",
  emailPlaceholder: "your@email.com",
  messagePlaceholder:
    "Tell me what you want to build, what features you need, and when you want to launch.",
  submitLabel: "Send project details",
  formTitle: "Send a message",
  nameLabel: "Name",
  emailLabel: "Email",
  messageLabel: "Message",
  validation: {
    nameInvalid: "Name must be 3-18 characters and contain only letters.",
    emailInvalid: "Enter a valid email address.",
    messageInvalid: "Message must be 5-500 characters.",
  },
  mailto: {
    subject: "New project inquiry",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
  },
  links: {
    backHome: "Back to home",
    directEmail: "Or email me directly:",
    trustResponseTime: "I usually reply within 24 hours.",
    telegram: "Telegram",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};

const ui: LocaleContent["ui"] = {
  navigation: {
    home: "Home",
    about: "About",
    projects: "Projects",
    services: "Services",
    packages: "Packages",
    faq: "FAQ",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileMenu: "Mobile navigation menu",
  },
  projectsSection: {
    previousProject: "Previous project",
    nextProject: "Next project",
  },
  projectCard: {
    viewCaseStudy: "View case study",
    liveWebsite: "Live website",
  },
  projectDetail: {
    projectSummaryTitle: "Project summary",
    projectType: "Project type",
    goal: "Goal",
    mainFeatures: "Main features",
    myRole: "My role",
    stack: "Stack",
    result: "Result",
    problem: "Problem",
    solution: "Solution",
    outcome: "Result",
    contributions: "Contributions",
    gallery: "Gallery",
    liveProject: "Live project",
    backToProjects: "Back to projects",
    projectNotFoundTitle: "Project not found",
    projectNotFoundDescription:
      "The project you are looking for does not exist or has been removed.",
    backToHome: "Back to home",
    projectCtaFallbackTitle: "Want something similar?",
    projectCtaFallbackDescription:
      "Send me a short message about your project and I'll reply with an estimated scope, timeline, and starting price.",
    projectCtaFallbackButton: "Tell me about your project",
  },
  common: {
    backToTop: "Back to top",
    profilePhoto: "Olexandr Alexandroff - fullstack developer",
    homeAriaLabel: "Home",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for doesn't exist or was moved.",
    backHome: "Back to home",
  },
};

export const enContent: LocaleContent = {
  home,
  faq,
  projects,
  contact,
  ui,
};
