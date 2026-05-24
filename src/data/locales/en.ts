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
      "I am Oleksandr Aleksandrov, a full-stack developer. I design and build websites and simple web apps for small service businesses.",
      "Under the Loading brand, I help organize the offer, design a clear interface, and launch a website that guides visitors to contact, booking, or an inquiry.",
      "I combine UI/UX, frontend, and basic backend logic, so I can take a project from the first layout to deployment and later improvements."
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
    "flipOpenLabel": "Show details",
    "items": [
      {
        "id": "business-websites",
        "title": "Business websites",
        "description": "Service websites, landing pages, and portfolio pages that clearly present your offer and guide customers toward contact.",
        "backPoints": [
          "Key services visible from the first screen",
          "Offer divided into clear sections",
          "Clear step to contact or inquiry"
        ]
      },
      {
        "id": "booking-contact-flows",
        "title": "Contact & booking",
        "description": "Contact forms, booking requests, call CTAs, and simple contact paths through email, Telegram, or WhatsApp.",
        "backPoints": [
          "Short form without unnecessary fields",
          "Simple contact or booking path",
          "Message sent to the right channel"
        ]
      },
      {
        "id": "web-apps-mvp",
        "title": "Web apps / MVP",
        "description": "Catalogs, dashboards, and simple web apps built around clear user actions and practical data handling.",
        "backPoints": [
          "First version without unnecessary features",
          "Interface shaped around daily work",
          "Structure ready for future modules"
        ]
      },
      {
        "id": "website-modernization",
        "title": "Website modernization",
        "description": "UI improvements, responsive fixes, performance updates, and cleanup of an existing website.",
        "backPoints": [
          "Content arranged into clearer sections",
          "Better layout across screen sizes",
          "Fewer steps to contact"
        ]
      },
      {
        "id": "seo-deployment",
        "title": "SEO basics & launch",
        "description": "Metadata, sitemap, robots, Open Graph, domain setup, and launch on your selected platform.",
        "backPoints": [
          "Search visibility basics",
          "Website prepared for indexing",
          "Launch and domain connection"
        ]
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
      "answer": "A landing page usually takes 1вЂ“2 weeks, a business website 2вЂ“4 weeks, and a larger project 4вЂ“6 weeks or more. The exact timeline depends on scope."
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
    "title": "Cleaning company website",
    "description": "A website for a cleaning company with service pricing, package selection, and quick WhatsApp contact.",
    "highlights": [
      "Service selection UI",
      "WhatsApp booking path",
      "Order summary logic"
    ],
    "liveDemoUrl": "https://www.puresoft.es/",
    "imageFolder": "cleaning",
    "cardImage": "/projects cards/cleaning.webp",
    "businessSummary": "A website for a cleaning company with service pricing, package selection, and quick WhatsApp contact.",
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
        "title": "Cleaning company website",
        "subtitle": "Website for a local cleaning company with a service catalog and a complete WhatsApp-based order path."
      },
      "meta": [
        {
          "label": "Role",
          "value": "UI/UX design and full-stack development"
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
          "value": "3 weeks"
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
          "title": "FAQ & Content",
          "description": "Answers to the most common customer questions.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 6,
              "label": "FAQ section",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Gallery and footer",
          "description": "Gallery slider and the final contact area of the website.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 7,
              "label": "Gallery and footer",
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
              "index": 8,
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
              "index": 9,
              "label": "Cart sidebar with selected services and subtotal",
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
              "index": 10,
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
    "title": "Holiday cottages website",
    "description": "A website for holiday cottages with accommodation offers, a gallery, and a simple reservation inquiry path.",
    "highlights": [
      "Atmosphere-driven design",
      "House detail pages",
      "Direct call booking"
    ],
    "liveDemoUrl": "https://usadba.kr.ua/",
    "imageFolder": "rental-house",
    "cardImage": "/projects cards/rental house.webp",
    "businessSummary": "A website for holiday cottages with accommodation offers, a gallery, and a simple reservation inquiry path.",
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
        "title": "Holiday cottages website",
        "subtitle": "Website for a countryside guest house focused on atmosphere, property presentation, and direct-call booking."
      },
      "meta": [
        {
          "label": "Role",
          "value": "UI/UX design and full-stack development"
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
          "value": "3 weeks"
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
        },
        {
          "title": "Booking Form",
          "description": "Booking form that sends the request to Telegram.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 10,
              "label": "Booking form",
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
    "title": "Car rental catalog",
    "description": "A car rental catalog with filtering, favorites, and reservation inquiries.",
    "highlights": [
      "Dynamic filtering system",
      "API-driven catalog",
      "Booking request path"
    ],
    "liveDemoUrl": "https://rentalcar-frontend-six.vercel.app/",
    "imageFolder": "rental-car",
    "cardImage": "/projects cards/rental car.webp",
    "businessSummary": "A car rental catalog with filtering, favorites, and reservation inquiries.",
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
        "title": "Car rental catalog",
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
          "value": "1 week"
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
              "label": "Responsive Design",
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
    "slug": "booksy",
    "title": "Book catalog with cart",
    "description": "A bookstore app with a book catalog, filtering, product details, cart, and a simple purchase flow.",
    "highlights": [
      "Book catalog",
      "Product modal",
      "Cart and wishlist flow"
    ],
    "liveDemoUrl": "https://andrusway.github.io/project-CodeCrafters-3-js/",
    "githubUrl": "https://github.com/Andrusway/project-CodeCrafters-3-js",
    "imageFolder": "booksy",
    "cardImage": "/projects cards/booksy.webp",
    "businessSummary": "A bookstore app with a book catalog, filtering, product details, cart, and a simple purchase flow.",
    "badges": [
      "JavaScript",
      "Vite",
      "API",
      "Cart",
      "Product modal",
      "LocalStorage"
    ],
    "summary": {
      "projectType": "E-commerce catalog prototype",
      "goal": "Build a simple book catalog with filtering, product details, cart, and a basic purchase flow.",
      "mainFeatures": [
        "Book catalog",
        "Category filtering",
        "Product modal",
        "Cart",
        "Wishlist",
        "Notifications"
      ],
      "role": "Frontend development in a team project",
      "stack": [
        "HTML",
        "CSS",
        "JavaScript",
        "Vite",
        "API",
        "LocalStorage"
      ],
      "result": "A responsive bookstore prototype with a basic shopping flow and interactive UI states."
    },
    "caseStudy": {
      "hero": {
        "title": "Book catalog with cart",
        "subtitle": "Responsive bookstore catalog prototype with product details, cart interactions, and a simple purchase path."
      },
      "meta": [
        {
          "label": "Role",
          "value": "Frontend development in a team project"
        },
        {
          "label": "Type",
          "value": "E-commerce catalog prototype"
        },
        {
          "label": "Location",
          "value": "Course project"
        },
        {
          "label": "Focus",
          "value": "Building a practical bookstore catalog flow with filtering, product details, and cart interactions."
        },
        {
          "label": "Stack",
          "value": "HTML, CSS, JavaScript, Vite, API, LocalStorage"
        },
        {
          "label": "Duration",
          "value": "1 week"
        }
      ],
      "content": {
        "problem": "Users need a quick way to browse books, narrow the list by category, open product details, and add selected items to the cart without a complex flow.",
        "solution": "The project combines a book catalog, category filtering, product modal, cart, wishlist, and short system notifications. The interface was built as a responsive bookstore view with a basic shopping flow.",
        "result": "The result is a working bookstore prototype that shows the path from browsing books to adding a product to the cart and confirming the action."
      },
      "contributions": {
        "title": "What we did",
        "items": [
          "Implemented key frontend modules in a team workflow",
          "Built the catalog browsing and category filtering experience",
          "Implemented product modal interactions and detail states",
          "Added cart and wishlist state handling with LocalStorage",
          "Connected UI logic with API-driven book data",
          "Implemented responsive behavior for catalog sections",
          "Added notification states for cart and purchase actions",
          "Integrated and stabilized UI flows across team modules"
        ]
      },
      "gallery": [
        {
          "title": "Book catalog",
          "description": "Main section with hero, categories, and book list.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 3,
              "label": "Book catalog",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Responsive Design",
          "description": "Desktop and mobile views showing the responsive interface.",
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
          "title": "Feedbacks and events",
          "description": "Sections with customer feedback and bookstore events.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 4,
              "label": "Feedbacks and events",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Location section",
          "description": "Contact block with address, contact details, and map.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 5,
              "label": "Location section",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Product modal",
          "description": "Book details view with price, quantity, and purchase actions.",
          "layout": "single",
          "images": [
            {
              "index": 6,
              "label": "Product modal",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Product details",
          "description": "Expanded information sections for book details, shipping, and returns.",
          "layout": "single",
          "images": [
            {
              "index": 7,
              "label": "Product details",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Cart notifications",
          "description": "Messages after adding a product to the cart and completing purchase.",
          "layout": "single",
          "images": [
            {
              "index": 8,
              "label": "Cart notifications",
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
    "title": "Travel stories platform",
    "description": "A travel platform with login, user profiles, and publishing personal travel stories.",
    "highlights": [
      "Authentication system",
      "Story publishing path",
      "User profile system"
    ],
    "liveDemoUrl": "https://travelers-khaki-ten.vercel.app/",
    "imageFolder": "travel",
    "cardImage": "/projects cards/travels.webp",
    "businessSummary": "A travel platform with login, user profiles, and publishing personal travel stories.",
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
        "title": "Travel stories platform",
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
              "label": "Responsive Design",
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
  },
  {
    "slug": "notehub",
    "title": "Notes app with authentication",
    "description": "A notes management app with login, user profile, filtering, search, and note creation flow.",
    "highlights": [
      "Authentication flow",
      "Protected dashboard",
      "Notes CRUD path"
    ],
    "liveDemoUrl": "https://goit-next-hw-09.vercel.app/",
    "githubUrl": "https://github.com/AlexDroff/goit-next-hw-09",
    "imageFolder": "notehub",
    "cardImage": "/projects cards/notehub.webp",
    "businessSummary": "A notes management app with login, user profile, filtering, search, and note creation flow.",
    "badges": [
      "Next.js",
      "TypeScript",
      "Auth",
      "Protected routes",
      "CRUD",
      "Dashboard"
    ],
    "summary": {
      "projectType": "Notes application with authentication",
      "goal": "Build an app with login, protected routes, and a dashboard for browsing and creating notes.",
      "mainFeatures": [
        "Login and registration",
        "Protected routes",
        "User profile",
        "Notes list",
        "Category filtering",
        "Search",
        "Create note flow"
      ],
      "role": "Frontend development and auth logic integration",
      "stack": [
        "Next.js",
        "TypeScript",
        "CSS",
        "Auth",
        "Middleware",
        "API"
      ],
      "result": "A working notes app prototype with basic authentication, filtering, and note management."
    },
    "caseStudy": {
      "hero": {
        "title": "Notes app with authentication",
        "subtitle": "A notes dashboard prototype with login, protected routes, category filtering, search, and note creation."
      },
      "meta": [
        {
          "label": "Role",
          "value": "Frontend development and auth logic integration"
        },
        {
          "label": "Type",
          "value": "Notes application with authentication"
        },
        {
          "label": "Location",
          "value": "Course project"
        },
        {
          "label": "Focus",
          "value": "Building a practical notes workflow with secure access and dashboard navigation."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, CSS, Auth, Middleware, API"
        },
        {
          "label": "Duration",
          "value": "1 week"
        }
      ],
      "content": {
        "problem": "A notes app needs more than a list of entries: it also requires secure access, basic data navigation, and a quick way to find relevant information.",
        "solution": "The project combines login, registration, protected views, user profile, notes list, category filtering, search, and a form for creating new notes.",
        "result": "The result is a prototype that shows the full flow from landing page and authentication to working with notes inside the user dashboard."
      },
      "contributions": {
        "title": "What I did",
        "items": [
          "Implemented authentication UI and protected route behavior",
          "Integrated dashboard navigation and notes interaction flows",
          "Built filtering and search interactions for notes list",
          "Implemented create-note form flow with controlled state",
          "Connected frontend logic with app API routes",
          "Structured responsive page layouts for core views"
        ]
      },
      "gallery": [
        {
          "title": "Home screen",
          "description": "Landing page with a short description of the NoteHub app.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 1,
              "label": "Home screen",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Login",
          "description": "Sign-in form for an existing user.",
          "layout": "single",
          "images": [
            {
              "index": 2,
              "label": "Login",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Sign up",
          "description": "Registration form for creating a new user account.",
          "layout": "single",
          "images": [
            {
              "index": 3,
              "label": "Sign up",
              "kind": "default"
            }
          ]
        },
        {
          "title": "User profile",
          "description": "Protected profile page with signed-in user data.",
          "layout": "single",
          "images": [
            {
              "index": 4,
              "label": "User profile",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Notes dashboard",
          "description": "Notes list with categories, pagination, and create note action.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 5,
              "label": "Notes dashboard",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Category filtering",
          "description": "Notes view filtered by the selected category.",
          "layout": "single",
          "images": [
            {
              "index": 6,
              "label": "Category filtering",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Search",
          "description": "Filtering notes by a typed search phrase.",
          "layout": "single",
          "images": [
            {
              "index": 7,
              "label": "Search",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Create note",
          "description": "Form for adding a new note with title, content, and tag.",
          "layout": "single",
          "images": [
            {
              "index": 8,
              "label": "Create note",
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
    "slug": "ecotote",
    "title": "Website with eco bag catalog",
    "description": "A single-page website for an eco tote brand with a product catalog, gallery, testimonials, and a contact form.",
    "highlights": [
      "Brand website",
      "Product showcase",
      "Team collaboration flow"
    ],
    "liveDemoUrl": "https://alexdroff.github.io/group-project-html-css/",
    "githubUrl": "https://github.com/AlexDroff/group-project-html-css",
    "imageFolder": "ecotote",
    "cardImage": "/projects cards/ecotote.webp",
    "businessSummary": "A single-page website for an eco tote brand with a product catalog, gallery, testimonials, and a contact form.",
    "badges": [
      "HTML",
      "CSS",
      "JavaScript",
      "Handlebars",
      "Scrum Master",
      "Team project"
    ],
    "summary": {
      "projectType": "Product website with catalog",
      "goal": "Prepare a website for an eco tote brand with a product catalog and a simple contact path.",
      "mainFeatures": [
        "Brand hero",
        "Product catalog",
        "Benefits section",
        "Gallery",
        "Customer testimonials",
        "Contact form"
      ],
      "role": "Scrum Master and frontend contribution in a team project",
      "stack": [
        "HTML",
        "CSS",
        "JavaScript",
        "Handlebars",
        "Responsive layout",
        "Git"
      ],
      "result": "A responsive website presenting the brand offer, products, and a basic customer contact path."
    },
    "caseStudy": {
      "hero": {
        "title": "Website with eco bag catalog",
        "subtitle": "A single-page website for EcoTote with product catalog, visual sections, testimonials, and a contact form."
      },
      "meta": [
        {
          "label": "Role",
          "value": "Scrum Master and frontend contribution in a team project"
        },
        {
          "label": "Type",
          "value": "Product website with catalog"
        },
        {
          "label": "Location",
          "value": "Course project"
        },
        {
          "label": "Focus",
          "value": "Presenting the eco brand, showcasing products, and guiding users to a simple contact action."
        },
        {
          "label": "Stack",
          "value": "HTML, CSS, JavaScript, Handlebars, Responsive layout, Git"
        },
        {
          "label": "Duration",
          "value": "1 week"
        }
      ],
      "content": {
        "problem": "An eco tote brand needed a simple website that presents the product style, explains the benefits, and gives users a quick way to get in touch.",
        "solution": "The team prepared a single-page website with a large hero, brand value sections, product catalog, gallery, customer testimonials, and a contact form.",
        "result": "The result is a responsive presentation website that guides users from understanding the brand to viewing products and sending an inquiry."
      },
      "contributions": {
        "title": "My role in the project",
        "items": [
          "Coordinated team work as Scrum Master",
          "Built the Hero section",
          "Implemented the Footer with contact details",
          "Processed and prepared images for use on the website",
          "Prepared the sprite / icon set for the interface",
          "Supported the integration of sections into one consistent page"
        ]
      },
      "gallery": [
        {
          "title": "Brand hero",
          "description": "Main page opening with brand message and product image.",
          "layout": "fullWidth",
          "images": [
            {
              "index": 3,
              "label": "Brand hero",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Responsive Design",
          "description": "Desktop and mobile views showing the responsive interface.",
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
          "title": "Benefits section",
          "description": "Section about materials, durability, and product style.",
          "layout": "single",
          "images": [
            {
              "index": 4,
              "label": "Benefits section",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Product catalog",
          "description": "Product list with names, descriptions, prices, and purchase buttons.",
          "layout": "single",
          "images": [
            {
              "index": 5,
              "label": "Product catalog",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Brand gallery",
          "description": "Visual gallery showing EcoTote bags in everyday use.",
          "layout": "single",
          "images": [
            {
              "index": 6,
              "label": "Brand gallery",
              "kind": "default"
            }
          ]
        },
        {
          "title": "Testimonials and contact",
          "description": "Customer testimonials section and contact form.",
          "layout": "single",
          "images": [
            {
              "index": 7,
              "label": "Testimonials and contact",
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
    nameInvalid: "Name must be 3вЂ“18 characters.",
    emailInvalid: "Enter a valid email address.",
    messageInvalid: "Message must be 5вЂ“500 characters.",
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
    title: "Loading Studio \u2013 fast websites for small service businesses",
    titleTemplate: "%s | Loading Studio",
    description:
      "I design fast, responsive websites and simple contact or booking paths for small service businesses. I help organize the offer, prepare basic SEO and launch the website safely.",
    openGraphTitle: "Loading Studio \u2013 fast websites for small service businesses",
    openGraphDescription:
      "Fast websites, clear offers and easier customer contact for small service businesses.",
    twitterTitle: "Loading Studio \u2013 fast websites for small service businesses",
    twitterDescription:
      "Fast websites, clear offers and easier customer contact for small service businesses.",
  },
  contact: {
    title: "Contact",
    description:
      "Write to me if you need a website, landing page, contact form, booking request path, or web application.",
    openGraphTitle: "Contact \u2013 Loading Studio",
    openGraphDescription:
      "Tell me about your project and what you need. I'll reply with an initial scope, timeline, and possible budget.",
  },
  projects: {
    notFoundTitle: "Project not found",
    fallbackDescription: "Selected project from the Loading Studio portfolio.",
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


