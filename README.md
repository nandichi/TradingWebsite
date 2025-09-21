# Aaron Reugebrink — Crypto Mentorship Website

Een moderne, statische marketing website voor crypto trading mentorship services, gebouwd met Next.js 14 en Smart Money Concepts focus.

## Features

- ✅ **Next.js 14 App Router** - Moderne React framework met server components
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS** - Utility-first styling met custom design system
- ✅ **shadcn/ui** - Herbruikbare, toegankelijke UI componenten
- ✅ **Framer Motion** - Subtiele animaties en micro-interactions
- ✅ **Lucide React** - Professionele iconen
- ✅ **Static Export** - Volledig statische website, geen server vereist
- ✅ **SEO Optimized** - Meta tags, Open Graph, sitemap, robots.txt
- ✅ **Schema.org JSON-LD** - Gestructureerde data voor zoekmachines
- ✅ **Responsive Design** - Mobile-first, werkt op alle devices
- ✅ **Accessibility** - WCAG compliant, screen reader friendly
- ✅ **Performance** - Geoptimaliseerd voor snelle laadtijden

## Project Structuur

```
aaron-crypto-mentorship/
├── app/                    # Next.js App Router paginas
│   ├── layout.tsx         # Root layout met SEO en schema
│   ├── page.tsx           # Homepage
│   ├── over/              # Over Aaron pagina
│   ├── mentorship/        # 1-op-1 mentorship pagina
│   ├── groep/             # Groepsmentorship pagina
│   ├── streams/           # Livestreams pagina
│   ├── faq/               # FAQ pagina
│   ├── contact/           # Contact en intake pagina
│   ├── not-found.tsx      # 404 pagina
│   ├── sitemap.ts         # XML sitemap generator
│   ├── robots.ts          # Robots.txt generator
│   └── globals.css        # Global CSS en Tailwind imports
├── components/            # Herbruikbare UI componenten
│   ├── ui/                # shadcn/ui basis componenten
│   ├── Header.tsx         # Site header met navigatie
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero sectie
│   ├── FeatureCards.tsx   # USP feature kaarten
│   ├── PricingTiers.tsx   # Pricing overzicht
│   ├── CurriculumModules.tsx # SMC curriculum
│   ├── TestimonialCarousel.tsx # Testimonial slider
│   ├── FAQAccordion.tsx   # FAQ accordion
│   └── CTABanner.tsx      # Call-to-action banner
├── data/                  # Statische content configuratie
│   ├── site.ts            # Site configuratie en navigatie
│   ├── pricing.ts         # Pricing tiers en features
│   ├── curriculum.ts      # SMC curriculum modules
│   ├── faq.ts             # FAQ vragen en antwoorden
│   ├── testimonials.ts    # Testimonials en reviews
│   ├── streams.ts         # Livestream schema en info
│   └── schema.ts          # Schema.org JSON-LD generators
├── lib/                   # Utility functies
│   ├── utils.ts           # Tailwind class merger
│   └── seo.ts             # SEO helper functies
└── public/                # Statische assets
    └── favicon.ico        # Favicon
```

## Quick Start

### 1. Installeer Dependencies

```bash
# Met pnpm (aanbevolen)
pnpm install

# Of met npm
npm install

# Of met yarn
yarn install
```

### 2. Development Server

```bash
# Start development server
pnpm dev

# Of met npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### 3. Build voor Productie

```bash
# Statische export genereren
pnpm build

# Of met npm  
npm run build
```

De statische bestanden worden gegenereerd in de `out/` folder.

## Content Beheer

Alle content wordt beheerd via TypeScript bestanden in de `/data/` folder:

### Site Configuratie (`/data/site.ts`)
- Site metadata en SEO settings
- Navigatie menu items  
- Contact informatie en social links
- Hero section content
- Feature bullets en stats

### Pricing (`/data/pricing.ts`)
- Pricing tiers (1-op-1, Groep, Streams)
- Features per tier
- CTA buttons en links
- Disclaimer tekst

### Curriculum (`/data/curriculum.ts`)  
- SMC module beschrijvingen
- Learning outcomes
- Week planning

### FAQ (`/data/faq.ts`)
- Veelgestelde vragen en antwoorden
- Automatisch Schema.org markup

### Testimonials (`/data/testimonials.ts`)
- Client reviews en ratings
- Statistieken voor social proof

### Streams (`/data/streams.ts`)
- Weekly stream schedule
- Platform informatie en features

## SEO & Schema.org

De website heeft uitgebreide SEO optimalisatie:

- **Meta Tags**: Title, description, keywords per pagina
- **Open Graph**: Social media preview optimization  
- **Twitter Cards**: Twitter-specific meta tags
- **Canonical URLs**: Duplicate content preventie
- **Sitemap**: Automatisch gegenereerde XML sitemap
- **Robots.txt**: Search engine crawler instructies

### Schema.org Structured Data
- **Person**: Aaron Reugebrink profiel
- **Organization**: Business informatie
- **Service**: Mentorship programma's
- **FAQ**: Veelgestelde vragen
- **Breadcrumbs**: Navigatie structuur

## Customization

### Design System
Het design gebruikt Tailwind CSS met een custom color palette gedefinieerd in `tailwind.config.ts`. De kleuren zijn gebaseerd op CSS custom properties voor dark/light mode support.

### Components
Alle componenten zijn gebaseerd op shadcn/ui voor consistentie en accessibility. Custom components maken gebruik van Framer Motion voor subtiele animaties.

### Content Updates
Om content te wijzigen, bewerk de relevante bestanden in `/data/`. Alle wijzigingen worden automatisch gereflecteerd in de UI.

## Performance & Best Practices

- **Static Generation**: Alle pagina's zijn volledig statisch
- **Image Optimization**: Next.js Image component waar relevant
- **Code Splitting**: Automatische route-based splitting
- **Tree Shaking**: Ongebruikte code wordt weggelaten
- **Minification**: CSS en JavaScript worden geminified
- **Compression**: Gzip/Brotli compatible output

## Browser Support

- ✅ Chrome (laatste 2 versies)
- ✅ Firefox (laatste 2 versies)  
- ✅ Safari (laatste 2 versies)
- ✅ Edge (laatste 2 versies)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (laatste 2 versies)

## Deployment

De website kan gehost worden op elke static hosting provider:

- **Vercel**: Aanbevolen voor Next.js projecten
- **Netlify**: Eenvoudige deployment vanaf Git
- **Cloudflare Pages**: Snelle edge deployment
- **GitHub Pages**: Gratis hosting via GitHub
- **AWS S3 + CloudFront**: Schaalbare enterprise oplossing

Voor deployment naar Vercel:
```bash
# Installeer Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## License

Private project - All rights reserved.

## Support

Voor vragen over de website implementatie, neem contact op via [info@aaronreugebrink.example](mailto:info@aaronreugebrink.example).
