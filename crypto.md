Je rol
Je bent een senior Next.js-ontwikkelaar en UX-schrijver. Bouw een productieklare, statische marketingwebsite in Next.js 14 (App Router) met TypeScript en Tailwind CSS. Gebruik shadcn/ui en lucide-react voor UI, en framer-motion voor subtiele animaties. Geen database, geen externe CMS of API-calls: ALLE content is hardcoded in config-bestanden/consts. Resultaat moet out-of-the-box draaien met `pnpm dev`/`npm run dev`.

Project/doel
Website voor “Aaron Reugebrink — Crypto Mentorship”. Doel: leads werven voor 1-op-1 mentorship, groepsmentorship en livestreams rond traden met Smart Money Concepts (SMC). Positionering: persoonlijk, duidelijk, geen hype. Zet overal een zichtbare CTA om een intake te plannen.

Technische randvoorwaarden
- Next.js 14 App Router, TypeScript, Tailwind, shadcn/ui, framer-motion, lucide-react.
- Volledig statisch (Static Export waar mogelijk); geen server actions, geen DB.
- Content in `/data/*.ts` als geëxporteerde objecten/arrays (koppen, teksten, FAQ, prijzen, testimonials, social links, schema.org).
- Sterke SEO: metadata via `app/layout.tsx`, Open Graph, favicon, sitemap en robots via `app/sitemap.ts` en `app/robots.ts`.
- Schema.org JSON-LD voor Person (Aaron), Organization, Product/Offer (mentorships), en FAQ.
- Accessibility: semantische HTML, aria-labels, focus states, voldoende contrast.
- Responsive (mobile-first), dark/light mode met system preference.
- Netjes getype-checked; ESLint + basic tsconfig. Geen onnodige deps.

Navigatie & pagina’s
- `/` (Home): Hero, social proof, SMC-uitleg, features, pricing snel overzicht, CTA.
- `/over` (Over Aaron): bio, foto placeholder, aanpak/filosofie.
- `/mentorship` (1-op-1): inhoud, wat je leert, voorbeeldcurriculum (SMC), wat is wél/niet inbegrepen, CTA.
- `/groep` (Groepsmentorship): zelfde structuur, benadruk lagere prijs vs minder persoonlijke aandacht.
- `/streams` (Livestreams): vaste tijden (hardcoded), voorbeeldonderwerpen, hoe je meekijkt/terugkijkt.
- `/faq` (FAQ): 10–14 vragen/antwoorden.
- `/contact` (Contact/Intake): uitleg intakeproces + knoppen naar Calendly/WhatsApp/Email (placeholder-URL’s).
- 404 en eenvoudige “dank je”-pagina na intake redirect.

Secties/Componenten (herbruikbaar)
- Header/Nav (sticky), MobileNav drawer, Footer met socials.
- Hero met krachtige kop, subkop, primaire en secundaire CTA.
- FeatureCards (3–6) voor kernvoordelen.
- PricingTiers (3 kaarten): 1-op-1, Groep, Streams. Duidelijk verschil in “aandacht vs prijs”.
- Curriculum/Modules (SMC): market structure, BOS/CHOCH, premium/discount zones, liquidity (EQH/EQL), inducement, order blocks, FVG, risk management.
- TestimonialCarousel (hardcoded quotes).
- FAQAccordion.
- CTA-band (sticky bottom CTA op mobile).
- Badge/Stat componenten (aantal studenten, uren content, etc. – allemaal placeholders).

Huisstijl (hardcoded theme)
- Modern, rustig, vertrouwenwekkend. Veel witruimte, grid-layout.
- Heldere typografie (Tailwind defaults), kaartjes met xl afgeronde hoeken en zachte schaduwen.
- Beperk kleurgebruik tot neutraal + 1 accentkleur.
- Animaties subtiel (fade/slide bij in-viewport).

Copy (NL, hardcoded – gebruik onderstaande teksten)
[Hero]
- H1: “Leer 1-op-1 traden met Smart Money Concepts”
- Sub: “Krijg structuur, duidelijkheid en begeleiding van mentor Aaron Reugebrink. Kies voor 1-op-1, een groepsmentorship of volg onze livestreams.”
- Primary CTA: “Plan een intake”
- Secondary CTA: “Bekijk het programma”

[USP’s/Features – 6 bullets in cards]
1) SMC van A tot Z
2) Concreet stappenplan per sessie
3) Live Q&A en feedback
4) Risicobeheer als fundament
5) Templates en checklists
6) Community en accountability

[Pricing – bedragen als placeholders, duidelijk aangeven dat dit placeholders zijn]
- 1-op-1 Mentorship — “Persoonlijk traject met maximale aandacht”
  • €999/maand (placeholder)
  • Wekelijks 1 sessie (60–90 min), persoonlijke roadmap, trade-reviews, DM-support tijdens kantooruren.
- Groepsmentorship — “Zelfde programma, lagere prijs – minder 1-op-1 aandacht”
  • €349/maand (placeholder)
  • Wekelijkse groepscall, Q&A, huiswerkfeedback, community chat.
- Livestreams — “Kijk mee tijdens de markt”
  • €49/maand (placeholder)
  • 2–3 streams per week (hardcoded rooster), terugkijken mogelijk.

[Curriculum (voorbeelden, puntsgewijs)]
- Marktstructuur, BOS/CHOCH, premium/discount.
- Liquidity: equal highs/lows, inducement.
- Order blocks & FVG’s.
- Entries, management, journaling en R-multiple.
- Risk & money management, playbook opstellen.
- Psychologie & routine.

[FAQ – voorbeelden]
- “Wat is Smart Money Concepts?” – Korte uitleg zonder promesses.
- “Voor wie is dit geschikt?”
- “Ben ik na één maand winstgevend?” – Antwoord: geen garantie; focus op proces, risicobeheer.
- “Krijg ik opnames/terugkijk?” – Ja, zie streams/mentor.
- “Welke brokers/exchanges?” – Geen aanbeveling; algemeen advies en due diligence.
- “Hoe plan ik een intake?”
- “Is dit financieel advies?” – Nee; zie disclaimer.

[Disclaimer – toon op elke relevante pagina/onder pricing]
“De informatie op deze website en in alle sessies is uitsluitend educatief. Dit is geen financieel advies. Handelen in crypto brengt risico’s met zich mee; je kunt je volledige inleg verliezen.”

Data/config structuur (vereist)
- `/data/site.ts`: siteTitle, tagline, nav, footer, socials, contact links (calendlyUrl, whatsappUrl, email).
- `/data/pricing.ts`: tiers[] met id, naam, prijs string (placeholder), bullets[], cta.
- `/data/curriculum.ts`: modules[] met titel, topics[].
- `/data/faq.ts`: items[] met vraag/antwoord.
- `/data/testimonials.ts`: items[] met naam (mag pseudoniem), rol, quote.
- `/data/streams.ts`: schedule[] met dag/tijd (CE(S)T), onderwerp, duur, call-link placeholder.
- `/data/schema.ts`: functies die JSON-LD objecten exporteren.

Routing & bestanden
- App Router met routes zoals hierboven.
- Shared UI in `/components/*` (Header, Footer, Section, Container, Button, Card, Accordion, Badge, Icon, CTA, TestimonialCarousel, PricingCard, ModuleList).
- Utility: `/lib/utils.ts` (cn merge), `/lib/seo.ts` (helpers).
- Stijlen: Tailwind met `@tailwind base/components/utilities`, paar CSS-vars voor accentkleur.
- `README.md` met setup-stappen (pnpm create next-app, installatie deps, `shadcn/ui` init, run-scripts).

Intake/CTA
- Buttons linken naar placeholders: `https://calendly.com/aaron-reugebrink/intake`, `https://wa.me/31600000000`, `mailto:info@aaronreugebrink.example`.
- CTA-banner met korte bullet “Gratis 15-min intake”.

Output-vorm (belangrijk)
- Schrijf eerst een korte bestandsboom.
- Genereer vervolgens ALLE bestanden volledig. Gebruik per bestand het formaat:
  FILE: path/to/file.ext
  <volledige inhoud hier>
- Lever werkende code (geen pseudocode). Voor tekst/copy mag je placeholders laten staan waar bedragen/links komen.
- Zorg dat het project direct start en alle pagina’s renderen met de hardcoded data.

Acceptatiecriteria
- Build/dev start zonder fouten.
- Alle pagina’s bestaan en zijn gevuld met de opgegeven NL-copy.
- Pricing/FAQ/Testimonial/Streams worden vanuit `/data/*.ts` gerenderd.
- Schema.org JSON-LD aanwezig op relevante pagina’s.
- Geen netwerkrequests behalve fonts/favicon.
- Lighthouse basis-score: performance/accessibility/SEO minimaal “goed” voor desktop.

Begin nu met de bestandsboom en ga daarna meteen alle bestanden uitschrijven.
