# Envirocycle Website — Project Context

> Last updated: **2026-08-25**
> Stack: React 19 + Vite 6 + Tailwind CSS v4

---

## Tech Stack

- **React 19** + **Vite 6** (`@vitejs/plugin-react`)
- **Tailwind CSS v4** — uses `@tailwindcss/vite` plugin (NOT postcss). Config is in `src/index.css` via `@import "tailwindcss"` and `@theme {}`
- **gh-pages** for deployment to GitHub Pages
- **Inter** font loaded from Google Fonts (weights 400–900) in `index.html`

---

## Deployment

- GitHub Pages URL: `https://maagadjm.github.io/hmr-envirocycle/`
- `vite.config.js` has `base: '/hmr-envirocycle/'`
- Deploy commands (run from inside `envirocycle/` folder):
  ```bash
  npm run build
  npm run deploy
  ```

---

## Project File Structure

```
envirocycle/
├── index.html                        ← Google Fonts (Inter) loaded here
├── vite.config.js                    ← base: '/hmr-envirocycle/', tailwindcss plugin
├── package.json                      ← deploy script: gh-pages -d dist
└── src/
    ├── index.css                     ← @import "tailwindcss", @theme tokens, body font
    ├── App.jsx                       ← Root, darkMode state, page routing state
    ├── main.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── ServicesSection.jsx
    │   ├── SustainabilitySection.jsx
    │   ├── StatsSection.jsx
    │   ├── CertificationsSection.jsx
    │   ├── CTASection.jsx
    │   └── Footer.jsx
    ├── pages/
    │   ├── AboutPage.jsx             ← Hero banner only (FAQ content moved out)
    │   └── FAQsPage.jsx              ← Full FAQ accordion page
    └── assets/images/
        ├── enviro_logo_dark.png      ← Used in Navbar (dark mode) & Footer
        ├── enviro_logo_light.png     ← Used in Navbar (light mode) & Footer
        ├── banners/
        │   ├── landing-page/
        │   │   └── main-section.png  ← Hero.jsx banner
        │   └── about-us/
        │       └── about-us-main-banner.png ← AboutPage & FAQsPage banner
        ├── service-logo/
        │   ├── ICT Asset Disposition  (ITAD R2v3).png
        │   ├── Asset Recovery & Disposal.png
        │   ├── Disposal of Hazardous Waste.png
        │   └── Reinstatement & Demolition.png
        ├── certifications/
        │   ├── r2-v3.png
        │   ├── iso-globe.png
        │   ├── denr.png
        │   ├── anab-accredited.png
        │   └── greenhouse-gases.png
        ├── environmental-impact/
        │   ├── 14,000 Tonnes.png
        │   ├── 8,000 Tonnes.png
        │   ├── Over 1 Million.png
        │   ├── 5,228 Tonnes.png
        │   ├── building-a-circular-future-background.png
        │   └── building-a-circular-future-background-light.png
        ├── sustainability/
        │   └── canon_enviro.jpg
        └── inquiry/
            └── inquiry-section.png
```

---

## Tailwind Theme Tokens (`src/index.css`)

```css
@theme {
  --color-green-accent: #6abf4b;
  --color-green-dark:   #3d7a2a;
  --color-navy:         #0a0e1a;
  --color-navy-light:   #0d1220;
  --color-card-bg:      #0f1623;
  --color-card-border:  #1e2d3d;
}
```

Dark mode uses `@custom-variant dark (&:is(.dark *))` — toggled by adding `dark` class to root div in App.jsx.

---

## Routing System (No React Router)

Routing is handled via `useState` in `App.jsx`:

```jsx
const [page, setPage] = useState('home')
```

Pages:
| `page` value | Component rendered |
|---|---|
| `'home'` | Hero + ServicesSection + SustainabilitySection + StatsSection + CertificationsSection + CTASection |
| `'about'` | AboutPage |
| `'faqs'` | FAQsPage |

`navigate` and `currentPage` are passed as props to `Navbar` and `Footer`.

Active nav link highlights green (`text-[#6abf4b]`).

---

## Navbar (`src/components/Navbar.jsx`)

- Fixed, `z-50`, `h-20`, 3-column grid on desktop
- Light mode: `bg-white`, Dark mode: `bg-[#0a0e1a]/95`
- Logo: `logoLight` in light mode, `logoDark` in dark mode
- Nav links defined in `navLinks` array:
  ```js
  { label: 'Insights',    page: null }   // no page yet
  { label: 'Industries',  page: null }   // no page yet
  { label: 'Services',    page: null }   // no page yet
  { label: 'About Us',    page: 'about' }
  { label: 'FAQs',        page: 'faqs' }
  ```
- Dark/light toggle button (sun/moon icons)
- Mobile hamburger menu with same nav links

---

## Hero (`src/components/Hero.jsx`)

- Banner image: `banners/landing-page/main-section.png`
- `mt-20 md:h-[50vh]`, image is `object-cover`
- Text overlay: `font-extralight leading-none tracking-tighter`
- Text: "Building a Circular / Economy for Assets"
- Layout: absolute overlay, `px-4 sm:px-8 md:px-20 lg:px-28`

---

## Services Section (`src/components/ServicesSection.jsx`)

- 4 service cards, carousel pattern with `translateX`
- Real PNG icons from `service-logo/`
- Card: `bg-[#0b1120] border border-white rounded-2xl px-6 py-10`
- Centered content: `flex flex-col items-center gap-5 text-center`
- Title colors: ICT=`#6abf4b`, Asset=`#f5a623`, Hazardous=`#f97316`, Reinstatement=`#4a9ff5`
- Section padding: `px-12 md:px-20 lg:px-28`

---

## Sustainability Section (`src/components/SustainabilitySection.jsx`)

- 5-slide carousel
- Section padding: `px-12 md:px-20 lg:px-28`

---

## Stats Section (`src/components/StatsSection.jsx`)

- 4-stat carousel with amber icons
- Section padding: `px-12 md:px-20 lg:px-28`

---

## Certifications Section (`src/components/CertificationsSection.jsx`)

- 5-cert carousel (R2, ISO, DENR, BSI/greenhouse-gases, ANAB)
- Section padding: `px-12 md:px-20 lg:px-28`

---

## CTA Section (`src/components/CTASection.jsx`)

- "Ready To Make an Impact?" section
- Section padding: `px-12 md:px-20 lg:px-28`

---

## Footer (`src/components/Footer.jsx`)

- Light mode: `bg-gray-50`, Dark mode: `bg-[#0a0e1a]`
- Layout: Logo full width on top, then 2-column grid (nav links left, contact right) on all screen sizes
- Nav links (left col): `About Us`, `Services`, `Industries`, `Insights`, `FAQs`
  - "Career" was removed
- Social icons: LinkedIn + Facebook
- Contact (right col, `pl-6` on mobile, right-aligned on desktop):
  - `info@envirocycle-inc.com`
  - `+63 917 834 9596`
  - CA Yulo Avenue, Silangan Industrial Park, Canlubang, Calamba City, Laguna, Philippines

---

## About Page (`src/pages/AboutPage.jsx`)

- Hero banner only (`about-us-main-banner.png`)
- Split layout: left 30% white/dark column + right image
- Text overlay at `top-[80%]`: "About Us" title
- FAQ content was moved out to FAQsPage

---

## FAQs Page (`src/pages/FAQsPage.jsx`)

Same hero layout as AboutPage but title reads "Frequently Asked Questions".

### FAQ Categories & Questions

1. **General Services** (5 questions)
   - What types of IT assets can Envirocycle securely process?
   - Who typically uses Envirocycle's IT Asset Disposition (ITAD) services?
   - What industries does Envirocycle serve?
   - What is IT Asset Disposition (ITAD)?
   - Why should my company use a professional ITAD provider instead of disposing of equipment internally?

2. **Data Security & Compliance** (8 questions)
   - How can I be sure my data has been permanently destroyed?
   - What data destruction methods does Envirocycle use?
   - Do you provide on-site data destruction services?
   - How do you ensure the chain of custody of our IT assets?
   - Are Envirocycle's IT asset disposal and data destruction services compliant with the Data Privacy Act and other applicable regulations?
   - Why do Envirocycle's certifications matter?
   - How do you protect sensitive business information throughout the disposal process?
   - Can you securely destroy defective or damaged storage devices?

3. **Asset Recovery & Recycling** (6 questions)
   - What happens to my IT assets after secure data destruction?
   - Can my old IT equipment still have value?
   - Do you refurbish and remarket reusable IT equipment?
   - Do you recycle equipment that cannot be refurbished or reused?
   - What happens to equipment that cannot be repaired or resold?
   - Can you help maximize the value of our retired IT assets?

4. **Collection & Logistics** (6 questions)
   - How quickly can Envirocycle collect and process our IT assets?
   - Can Envirocycle collect IT assets from multiple locations nationwide?
   - Is there a minimum quantity of IT assets required for collection?
   - Can Envirocycle provide regular or scheduled IT asset collection services?
   - Can you support large-scale office relocations or technology refresh projects?
   - Can Envirocycle collect assets outside Metro Manila?

5. **Documentation & Reporting** (5 questions)
   - What documentation will I receive after my assets have been processed?
   - Do you issue Certificates of Data Destruction?
   - Will I receive a Certificate of Treatment (COT)?
   - Can you provide serialized inventory reports of all processed assets?
   - Can Envirocycle customize reports to meet our internal compliance requirements?

6. **Sustainability & ESG** (4 questions)
   - How does responsible IT asset disposal support our ESG and sustainability goals?
   - How does Envirocycle help reduce electronic waste?
   - Can Envirocycle help our company meet sustainability or environmental reporting requirements?
   - How does ITAD support a circular economy?

7. **Working with Envirocycle** (6 questions)
   - How do I schedule an IT asset collection?
   - What should we do before scheduling a collection?
   - Can Envirocycle customize its services to meet our company's requirements?
   - Do you offer one-time projects as well as ongoing partnerships?
   - How do I request a quotation?
   - Why should I choose Envirocycle as my ITAD partner?

### FAQ Accordion Styling
- Question: `text-sm md:text-md font-medium text-gray-800 dark:text-gray-100`
- Answer: `text-md text-gray-500 dark:text-gray-400 leading-relaxed`
- Category heading: `text-xl md:text-4xl font-semibold`
- Grid layout: `grid-cols-1 md:grid-cols-[250px_1fr]`

---

## Key Design Decisions

| Decision | Detail |
|---|---|
| Logo on dark navbar | `enviro_logo_dark.png` — do NOT change this |
| Light mode default | `useState(false)` for darkMode |
| No React Router | Simple `page` state in App.jsx |
| Tailwind v4 | `@tailwindcss/vite` plugin, NOT postcss |
| Hero font style | `font-extralight leading-none tracking-tighter` |
| Section padding | `px-12 md:px-20 lg:px-28` across all sections |
| Footer mobile layout | 2-col grid even on mobile (logo full width on top) |

---

## Changelog

### 2026-08-25
- Added **FAQs** as a separate page (`FAQsPage.jsx`) with 7 categories and 40 questions
- Moved FAQ content out of `AboutPage` — About Us now shows hero banner only
- Added **FAQs** nav link to Navbar and Footer
- Removed **Career** from Footer links
- Fixed Footer mobile layout: logo full width on top, 2-col grid (nav + contact) below
- Added left padding (`pl-6`) to contact column on mobile
- Fixed About Us hero left column: `bg-white` in light mode, `bg-[#0a0e1a]` in dark mode
- Reduced FAQ category heading and accordion font sizes on mobile
- Fixed light mode default: `useState(false)` for darkMode in App.jsx
- Restructured Hero to 2-column grid overlay layout
- Updated asset paths after folder reorganisation:
  - `banners/main-section.png` → `banners/landing-page/main-section.png`
  - `hero.png` → `banners/about-us/about-us-main-banner.png`
- Deployed to GitHub Pages (`npm run build && npm run deploy`)
