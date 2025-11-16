# Detailify Landing Page

A fully responsive, pixel-accurate landing page built with **Next.js 14**, **React**, and **Tailwind CSS**, based on a provided Figma design.  
The project includes a modular component structure, global design tokens, and polished UI sections matching the original layout.

---

## Tech Stack

- **Next.js 14 (App Router)**
- **React**
- **Tailwind CSS**
- **CSS Variables for design tokens**
- **Netlify** for deployment

---

## Project Structure

detailify-landing/
├── app/ # App Router pages
├── components/ # Reusable UI components (UI + Section components)
├── public/ # Static assets (Figma exports, icons, images)
├── styles/ # Global CSS + custom variables
├── netlify.toml # Netlify config with Next.js plugin
├── package.json


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
cd detalify-landing
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


