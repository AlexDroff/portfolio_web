# Portfolio Website

Modern portfolio website built to showcase real-world projects with a strong focus on clarity, structure, and user experience.

---

## Overview

This project is a personal portfolio designed to present case studies in a structured and readable way.
Each project is displayed not just as a visual demo, but as a clear product story: problem → solution → result.

The goal is to make the work understandable for both developers and non-technical clients.

---

## Tech Stack

- **Frontend:** Next.js (App Router), React
- **Language:** TypeScript
- **Styling:** CSS Modules
- **State:** Zustand (where needed)
- **Forms:** Formik + Yup
- **API:** REST (for dynamic projects)

---

## Features

- Structured case-study pages (not just screenshots)
- Responsive layout (desktop + mobile)
- Reusable UI components
- Clean project cards with controlled hover interactions
- Image optimization with Next.js
- Consistent design system (colors, spacing, typography)

---

## Project Structure

```bash
src/
  app/
    projects/
      [slug]/          # dynamic project pages
  components/
    ui/               # reusable UI (Button, Card, etc.)
    sections/         # page sections (Hero, Projects, etc.)
  data/
    projects.ts       # project content and configuration
  styles/
    globals.css       # design tokens (colors, spacing)
```

---

## Case Study Approach

Each project follows a consistent structure:

- Hero (first impression)
- Responsive view
- Key sections (based on product logic)
- Interaction states (modals, forms, flows)
- Clear captions explaining what is happening

The goal is to show:

- how the product works
- what problem it solves
- how the user interacts with it

---

## Image Strategy

- Dedicated images for:
  - project cards
  - case-study gallery

- Fixed aspect ratios to maintain layout consistency
- No distortion or cropping of screenshots
- High-quality assets optimized for performance

---

## Interaction Design

- Card interactions are **CTA-driven**
- Hover effects are subtle and controlled
- No aggressive animations or unnecessary visual noise
- Focus on readability and usability

---

## Getting Started

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Build

```bash
npm run build
npm run start
```

---

## Purpose

This project is focused on:

- improving product thinking
- building real-world UI structure
- presenting work in a clear and professional way

---

## Author

Oleksandr Alexandrov
