# Detailify Landing Page

A fully responsive, pixel-accurate landing page built with **Next.js 14**, **React**, and **Tailwind CSS**, based on a provided Figma design.  
The project follows a componenet-driven architecture, making use of modern React patterns such as component composition, prop-driven UI, and array mapping to generate repeated UI elements (e.g., feature cards, pricing lists, footer nav items) in a scalable way.

---

## Tech Stack

- **Next.js 14 (App Router)**
- **React**
- **Tailwind CSS**
- **CSS Variables for design tokens**
- **Netlify** for deployment

---

## Project Structure

```bash
detailify-landing/
├── .next/ # Next.js build output (auto-generated)
│ └── dev/ # Dev environment build artifacts
│
├── app/ # App Router pages & global layout
├── components/ # Reusable UI + section components
│ ├── layout/ # Layout-level components
│ │ ├── Footer.tsx
│ │ └── Navbar.tsx
│ │
│ ├── sections/ # Major landing page sections
│ │ ├── CtaSection.tsx
│ │ ├── FeaturesSection.tsx
│ │ ├── HeroSection.tsx
│ │ └── PricingSection.tsx
│ │
│ └── ui/ # Small UI components (reusable anywhere)
│ ├── Button.tsx
│ ├── Card.tsx
│ └── TickIcon.tsx
│
├── public/ # Static assets (SVGs, images, icons)
│
├── netlify.toml # Netlify build settings + plugin config
├── next-env.d.ts # Next.js TypeScript environment declarations
├── next.config.ts # Next.js framework config
│
├── package.json # Dependencies & scripts
├── package-lock.json
│
├── postcss.config.mjs # PostCSS configuration
├── eslint.config.mjs # ESLint rules
└── .gitignore # Git ignore rules
```


---

## Design System

Recurring colors (text, brand, buttons, accents) are defined as **CSS variables**:

```css
:root {
  --text-white: #ffffff;
  --text-footer-light: #d1d5dc;
  --text-cta-banner: #dbeafe;
  --text-paragraph: #4a5565;
  --text-card-p: #717182;
  --text-title: #0a0a0a;
 
  --brand-blue: #155dfc;
  --brand-purple: #9810fa;
  --footer-bg: #101828;
  --review-yellow: #f0b100;

  --button-dark: #030213;
  --button-light: #eceef2;
}
```

## Key Features
### Navbar
- Gradient logo and typography, nav links and two authentication buttons

### Hero Section
- Accurate typography, spacing, gradient text, and layout

### Features Section
- 4 cards with unique colors and custom icons
- Responsive card grid
- Text + spacing matched to design

### Pricing Section
- Exact card widths/heights from Figma:
  - Starter: 320 × 448  
  - Professional: 336 × 470  
  - Enterprise: 320 × 448
- Highlighted Professional card with:
  - Blue border  
  - Shadow 
  - "Most Popular" pill tag
- Custom tick list items using Figma svg icon

### CTA Banner
- Purple/blue gradient background
- Decorative corner circles positioned absolutely
- Clean, centered content and CTAs

### Footer
- Left-aligned logo + description
- Center-aligned link groups
- Fully responsive alignment
- Matching typography and spacing per Figma

## Development

### Navigate to base folder
```
cd detailify-landing
```
### Install dependencies:
```
npm install
```
### Run development server:
```
npm run dev
```

## Deployment
- The landing page is deployed to netlify at this link: https://ruachfigmatocode.netlify.app/


