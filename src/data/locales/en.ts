import type { FAQContent } from "@/types/faq";
import type { Project } from "@/types/project";
import type { LocaleContent } from "./types";

const home: LocaleContent["home"] = {
  "hero": {
    "title": "Fast websites for small service businesses that make it easier for customers to get in touch.",
    "description": "I organize your offer, design a clear structure and guide visitors toward an inquiry, booking request or conversation.",
    "primaryCta": {
      "label": "Tell me about your project",
      "href": "/contact"
    },
    "secondaryCta": {
      "label": "View projects",
      "href": "#projects"
    }
  },
  "about": {
    "title": "Loading \u2013 websites for small service businesses.",
    "description": [
      "My name is Oleksandr Aleksandrov and I'm developing Loading \u2013 a small studio that helps service businesses organize their online presence. I prepare websites, forms and simple solutions that help customers understand the offer faster and get in touch more easily.",
      "I design websites around a clear goal: presenting services clearly, creating a structure that works well across screen sizes, and guiding visitors from the first visit toward an inquiry, booking request or conversation.",
      "Loading is a young studio, so I approach every project with focus and strong involvement. I choose solutions that fit the current stage of the business, without adding features that do not help the user or the business owner.",
      "I already have completed websites and web applications, and now I'm developing Loading as a place for small businesses that want to start online, refresh an existing website or make customer contact easier."
    ],
    "blocks": [
      {
        "title": "What you get",
        "description": [
          "A website or simple web app with a clear structure, comfortable mobile experience and a path that guides customers toward contact."
        ],
        "items": [
          {
            "id": "business-first-structure",
            "iconSrc": "/icons/lightning.svg",
            "iconAlt": "",
            "title": "Offer structure",
            "description": "I help organize the page around your offer, key customer questions, contact points, and the next step you want visitors to take."
          },
          {
            "id": "mobile-first-ui",
            "iconSrc": "/icons/smartphone.svg",
            "iconAlt": "",
            "title": "Mobile comfort",
            "description": "I shape the layout to feel clear and comfortable on mobile, then adapt it for tablet and desktop."
          },
          {
            "id": "contact-booking-flows",
            "iconSrc": "/icons/grid.svg",
            "iconAlt": "",
            "title": "Contact & booking paths",
            "description": "I can add contact forms, call CTAs, and simple contact paths through email, Telegram, or WhatsApp."
          },
          {
            "id": "seo-deployment-basics",
            "iconSrc": "/icons/rocket.svg",
            "iconAlt": "",
            "title": "SEO & launch",
            "description": "I prepare metadata, clear structure, sitemap/robots, and launch setup so the project is ready to go live."
          }
        ]
      },
      {
        "title": "How I work",
        "description": [
          "First we define the goal and scope, then I prepare a clean version of the project, test it, and support you after launch."
        ],
        "items": [
          {
            "id": "clear-scope",
            "iconSrc": "/icons/lightbulb.svg",
            "iconAlt": "",
            "title": "Clear scope",
            "description": "Before implementation starts, I define what we build now, what can wait, and what is not needed at this stage."
          },
          {
            "id": "clean-implementation",
            "iconSrc": "/icons/code.svg",
            "iconAlt": "",
            "title": "Clean implementation",
            "description": "I keep the project structure clear and avoid extra dependencies unless there is a real need."
          },
          {
            "id": "direct-communication",
            "iconSrc": "/icons/rocket.svg",
            "iconAlt": "",
            "title": "Direct communication",
            "description": "You work directly with me, so decisions are faster and communication stays clear."
          },
          {
            "id": "post-launch-support",
            "iconSrc": "/icons/grid.svg",
            "iconAlt": "",
            "title": "Post-launch support",
            "description": "After launch, I can help with fixes, content updates, and practical improvements as your business grows."
          }
        ]
      }
    ]
  },
  "projects": {
    "title": "Selected work",
    "cta": {
      "title": "Need a website that makes customer contact easier?",
      "subtext": "I can prepare a clear website with a simple path to an inquiry, booking request or conversation.",
      "buttonLabel": "Start a project",
      "href": "/contact"
    }
  },
  "services": {
    "title": "What I can prepare for you",
    "description": "Websites and simple web apps that organize your offer, make contact easier and help you launch without unnecessary complexity.",
    "items": [
      {
        "id": "business-websites",
        "title": "Business websites",
        "description": "Service websites, landing pages, and portfolio pages that clearly present your offer and guide customers toward contact."
      },
      {
        "id": "booking-contact-flows",
        "title": "Contact & booking",
        "description": "Contact forms, booking requests, call CTAs, and simple contact paths through email, Telegram, or WhatsApp."
      },
      {
        "id": "web-apps-mvp",
        "title": "Web apps / MVP",
        "description": "Catalogs, dashboards, and simple web apps built around clear user actions and practical data handling."
      },
      {
        "id": "website-modernization",
        "title": "Website modernization",
        "description": "UI improvements, responsive fixes, performance updates, and cleanup of an existing website."
      },
      {
        "id": "seo-deployment",
        "title": "SEO basics & launch",
        "description": "Metadata, sitemap, robots, Open Graph, domain setup, and launch on your selected platform."
      },
      {
        "id": "services-contact-cta",
        "title": "Have a project idea?",
        "description": "Tell me about it ->",
        "variant": "cta",
        "href": "/contact"
      }
    ]
  },
  "packages": {
    "title": "Project packages",
    "description": "Starting points for common needs. The final scope and price are agreed after a short conversation about your project.",
    "items": [
      {
        "id": "landing-page",
        "title": "Landing Page",
        "price": "from 1800 PLN",
        "description": "For a single service, a campaign, or a simple offer that needs a clear and quick online presence.",
        "features": [
          "One-page structure",
          "Offer, benefits, and contact sections",
          "Responsive layout",
          "Clear contact CTA",
          "Basic SEO and launch"
        ],
        "ctaLabel": "Ask about this package ->",
        "ctaHref": "/contact"
      },
      {
        "id": "business-website",
        "title": "Business Website",
        "price": "from 3000 PLN",
        "description": "For small businesses that need a fuller website with offer details, trust elements, and clear contact.",
        "features": [
          "Offer and service structure",
          "Several sections or pages",
          "Responsive UI",
          "Contact section",
          "Basic SEO and deployment"
        ],
        "ctaLabel": "Ask about this package ->",
        "ctaHref": "/contact"
      },
      {
        "id": "booking-flow",
        "title": "Website + Booking Path",
        "price": "from 4500 PLN",
        "description": "For service businesses where quick inquiry, booking request, or direct customer contact matters.",
        "features": [
          "Business website",
          "Contact or booking form",
          "Email, Telegram, or WhatsApp contact path",
          "Validation and UX states",
          "Post-launch fixes"
        ],
        "note": "Best fit for local services, rentals, salons, and small service businesses.",
        "badge": "Most common choice",
        "ctaLabel": "Ask about this package ->",
        "ctaHref": "/contact"
      },
      {
        "id": "custom-web-app",
        "title": "Custom Web App / MVP",
        "price": "from 8000 PLN",
        "description": "For projects that need user accounts, data handling, dashboards, APIs, or custom business processes.",
        "features": [
          "React / Next.js frontend",
          "REST API integration",
          "Authentication and account access",
          "PostgreSQL or MongoDB when needed",
          "Scalable project structure"
        ],
        "ctaLabel": "Ask about this package ->",
        "ctaHref": "/contact"
      }
    ]
  }
};

const faq: FAQContent = {
  "title": "FAQ",
  "description": "Common questions about pricing, timeline, process, launch, and support.",
  "items": [
    {
      "id": "website-cost",
      "question": "How much does a website cost?",
      "answer": "A simple landing page usually starts from 1800 PLN, a business website from 3000 PLN, and a website with booking requests from 4500 PLN. Final pricing depends on scope, content, and integrations."
    },
    {
      "id": "price-factors",
      "question": "What affects the final price?",
      "answer": "Main factors are the number of sections or pages, content amount, form complexity, integrations, language versions, and whether the project needs backend, API, database, or authentication."
    },
    {
      "id": "timeline",
      "question": "How long does it take to build a website?",
      "answer": "A landing page usually takes 1–2 weeks, a business website 2–4 weeks, and a larger project 4–6 weeks or more. The exact timeline depends on scope."
    },
    {
      "id": "process",
      "question": "How does the process work?",
      "answer": "First we define the goal, scope, and required content. Then I prepare the website or app, test responsiveness, launch it, and support you with practical post-launch improvements."
    },
    {
      "id": "domain-deployment",
      "question": "Can you help with domain and deployment?",
      "answer": "Yes. I can help publish the project on your chosen platform, configure domain settings, environment variables, and basic technical SEO."
    },
    {
      "id": "mobile-friendly",
      "question": "Will the website work well on mobile?",
      "answer": "Yes. I design with mobile comfort in mind and then adapt the layout for tablet and desktop."
    },
    {
      "id": "booking-contact-form",
      "question": "Can you build a contact form or booking request?",
      "answer": "Yes. I can add contact forms, booking request forms, call CTAs, and simple contact paths through email, Telegram, or WhatsApp."
    },
    {
      "id": "content-editing",
      "question": "Will I be able to edit content myself?",
      "answer": "It depends on the project. For simple websites, content can stay in the project, and if you need frequent updates, we can add a CMS or a simple admin panel."
    },
    {
      "id": "seo",
      "question": "Do you handle SEO?",
      "answer": "Yes, at the technical basics level: clear structure, metadata, Open Graph, sitemap, robots, and launch-ready setup."
    },
    {
      "id": "support",
      "question": "Do you provide support after launch?",
      "answer": "Yes. After launch, I can help with fixes, content updates, new sections, performance, SEO improvements, and further feature development."
    }
  ]
};

const projects: Project[] = [
  {
    "slug": "cleaning",
    "title": "Cleaning Services",
    "description": "Website for a local cleaning business with service catalog and a WhatsApp booking path.",
    "highlights": [
      "Service selection UI",
      "WhatsApp booking path",
      "Order summary logic"
    ],
    "liveDemoUrl": "https://pure-soft-six.vercel.app/",
    "imageFolder": "cleaning",
    "cardImage": "/projects cards/cleaning.webp",
    "businessSummary": "Service website with pricing logic, a cart-like request path, and WhatsApp order requests.",
    "badges": [
      "React",
      "TypeScript",
      "Pricing logic",
      "WhatsApp request path"
    ],
    "summary": {
      "projectType": "Service business website",
      "goal": "Present cleaning services clearly and make it easier for users to calculate a request and contact the business.",
      "mainFeatures": [
        "Service structure",
        "Pricing logic",
        "Cart-like request path",
        "WhatsApp order request",
        "Responsive layout"
      ],
      "role": "Frontend implementation, UI structure, interaction logic, and deployment preparation.",
      "stack": [
        "React",
        "TypeScript",
        "CSS Modules"
      ],
      "result": "A service website with clearer offer presentation, interactive pricing, and a direct path from service selection to contact."
    },
    "caseStudy": {
      "hero": {
        "title": "Cleaning Services",
        "subtitle": "Website for a local cleaning company with a service catalog and a complete WhatsApp-based order path."
      },
      "meta": [
        {
          "label": "Role",
          "value": "Product Designer & Fullstack Developer"
        },
        {
          "label": "Type",
          "value": "Business website with an order path"
        },
        {
          "label": "Location",
          "value": "Spain"
        },
        {
          "label": "Focus",
          "value": "Designing a simple and clear order path without complex forms or backend."
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
        "problem": "The client had no website and no structured way to present services or accept orders. Requests were handled manually through calls and messaging apps, without a clear request path.",
        "solution": "I designed and built a service-based website with a simple order path. Users can browse services, view details in modals, and add them to an order. The system generates a pre-filled WhatsApp message with selected services and total price, removing the need for a backend.",
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
          "Implemented a full order path without backend",
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
          "description": "Clear landing structure designed to communicate value and guide users through the service path.",
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
        "title": "Need a website that makes customer contact easier?",
        "subtext": "I can prepare a clear website with a simple path to an inquiry, booking request or conversation.",
        "buttonLabel": "Start a project"
      }
    }
  },
  {
    "slug": "rental",
    "title": "Countryside Retreat",
    "description": "Website for a countryside guest house with property presentation and a direct-call booking path.",
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
      "Booking path"
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
      "result": "A production-ready rental website with structured house pages, clear mobile navigation, and booking-oriented contact path."
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
        "solution": "I designed and built a website focused on atmosphere and clarity. The structure highlights the property and houses, guiding users through the content. Instead of forms, the booking path is simplified to a direct call.",
        "result": "The new website improves presentation and makes it easier for users to understand the offer and contact the owner."
      },
      "contributions": {
        "title": "What I did",
        "items": [
          "Designed the full UI/UX from scratch",
          "Built fully responsive layouts (mobile, tablet, desktop)",
          "Structured house cards and detailed property pages",
          "Implemented a direct-call booking path (no forms)",
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
        "title": "Need a website that makes customer contact easier?",
        "subtext": "I can prepare a clear website with a simple path to an inquiry, booking request or conversation.",
        "buttonLabel": "Start a project"
      }
    }
  },
  {
    "slug": "rentalcar",
    "title": "Car Rental App",
    "description": "Web application for browsing, filtering, and requesting car rentals with a structured booking path.",
    "highlights": [
      "Dynamic filtering system",
      "API-driven catalog",
      "Booking request path"
    ],
    "liveDemoUrl": "https://rentalcar-frontend-six.vercel.app/",
    "imageFolder": "rental-car",
    "cardImage": "/projects cards/rental car.webp",
    "businessSummary": "Catalog-style web app with filtering, favorites, and a booking request path.",
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
        "Booking request path",
        "API integration"
      ],
      "role": "Frontend implementation, UI logic, API data handling, and responsive layout.",
      "stack": [
        "React",
        "TypeScript",
        "REST API",
        "CSS Modules"
      ],
      "result": "A catalog-style web application with structured browsing, user-friendly filtering, and a clear request path."
    },
    "caseStudy": {
      "hero": {
        "title": "Car Rental App",
        "subtitle": "Web application for browsing, filtering, and booking rental cars with API-driven data and a clear request path."
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
          "value": "Implementing a dynamic catalog with filtering, a booking path, and API integration."
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
        "result": "The result is a functional application that demonstrates working with APIs, filtering logic, and real user interaction paths."
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
              "label": "Booking request path",
              "kind": "default"
            }
          ]
        }
      ],
      "cta": {
        "title": "Need a website that makes customer contact easier?",
        "subtext": "I can prepare a clear website with a simple path to an inquiry, booking request or conversation.",
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
      "Story publishing path",
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
      "result": "A fullstack travel platform with account-based user paths, content publishing, and structured backend integration."
    },
    "caseStudy": {
      "hero": {
        "title": "Travel Stories",
        "subtitle": "Fullstack platform for publishing travel stories with authentication, user profiles, and content management paths."
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
          "value": "Building a scalable content platform with authentication, publishing paths, and a profile-driven user experience."
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
        "solution": "As part of a 12-person team, I contributed to both frontend and backend development. I built key UI components, including headers, modals, story cards, and the profile editing path, and worked with shared data structures on the backend.",
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
          "description": "Login path providing access to personalized features, profile actions, and story publishing.",
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
          "description": "Publishing path for creating and sharing new travel stories.",
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
        "title": "Need a website that makes customer contact easier?",
        "subtext": "I can prepare a clear website with a simple path to an inquiry, booking request or conversation.",
        "buttonLabel": "Start a project"
      }
    }
  }
];

const contact: LocaleContent["contact"] = {
  title: "Tell me about your project",
  intro:
    "Write briefly what your business does, what you need and when you would like to launch. I'll reply with an initial estimate of the scope, timeline and possible budget.",
  helperText:
    "You can include the project type, planned timeline, required features and links to your current website or references.",
  socialTitle: "You can also find me here:",
  namePlaceholder: "Your name",
  emailPlaceholder: "your@email.com",
  messagePlaceholder:
    "Tell me what you need, what your goal is, and when you would like to launch.",
  submitLabel: "Send project details",
  formTitle: "Send a message",
  nameLabel: "Name",
  emailLabel: "Email",
  messageLabel: "Message",
  validation: {
    nameInvalid: "Name must be 3–18 characters.",
    emailInvalid: "Enter a valid email address.",
    messageInvalid: "Message must be 5–500 characters.",
  },
  mailto: {
    subject: "Project inquiry",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
  },
  links: {
    backHome: "Back to home",
    directEmailPrefix: "You can also email me directly:",
    responseTime: "I usually reply within 24 hours.",
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
    viewCaseStudy: "Details",
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
    projectCtaFallbackTitle: "Need something similar?",
    projectCtaFallbackDescription:
      "Send a short message about what you need and I'll reply with an initial scope estimate.",
    projectCtaFallbackButton: "Tell me about your project",
  },
  common: {
    backToTop: "Back to top",
    profilePhoto: "Oleksandr Aleksandrov \u2013 fullstack developer",
    homeAriaLabel: "Home",
    logoAlt: "OA logo",
  },
  footer: {
    copyright: "\u00A9 {year} Loading. All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for doesn't exist or was moved.",
    backHome: "Back to home",
  },
};

const seo: LocaleContent["seo"] = {
  root: {
    title: "Alexandroff \u2013 websites for small service businesses",
    titleTemplate: "%s | Alexandroff",
    description:
      "I design fast, responsive websites and simple contact or booking paths for small service businesses. I help organize the offer, prepare basic SEO and launch the website safely.",
    openGraphTitle: "Alexandroff \u2013 websites for small service businesses",
    openGraphDescription:
      "Fast websites, clear offers and easier customer contact for small service businesses.",
    twitterTitle: "Alexandroff \u2013 websites for small service businesses",
    twitterDescription:
      "Fast websites, clear offers and easier customer contact for small service businesses.",
  },
  contact: {
    title: "Contact",
    description:
      "Write to me if you need a website, landing page, contact form, booking request path, or web application.",
    openGraphTitle: "Contact \u2013 Alexandroff",
    openGraphDescription:
      "Tell me about your project and what you need. I'll reply with an initial scope, timeline, and possible budget.",
  },
  projects: {
    notFoundTitle: "Project not found",
    fallbackDescription: "Selected project from the Alexandroff portfolio.",
    openGraphTitleSuffix: "\u2013 Case Study",
  },
  jsonLd: {
    websiteDescription:
      "Portfolio and website services for small service businesses.",
    personJobTitle: "Fullstack Developer",
    professionalServiceDescription:
      "I help small service businesses launch fast websites with clear offers and simple paths to contact or booking requests.",
  },
};

export const enContent: LocaleContent = {
  home,
  faq,
  projects,
  contact,
  ui,
  seo,
};
