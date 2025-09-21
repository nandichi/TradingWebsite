import { siteConfig } from "./site";
import { pricingTiers } from "./pricing";
import { faqItems } from "./faq";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aaron Haden",
    jobTitle: "Crypto Trading Mentor",
    description:
      "Professional crypto trading mentor specializing in Smart Money Concepts and institutional trading strategies.",
    url: siteConfig.url,
    image: `${siteConfig.url}/aaron-haden.jpg`,
    sameAs: siteConfig.socials.map((social) => social.href),
    knowsAbout: [
      "Smart Money Concepts",
      "Cryptocurrency Trading",
      "Technical Analysis",
      "Risk Management",
      "Trading Psychology",
    ],
    offers: {
      "@type": "EducationalOccupationalCredential",
      name: "Crypto Trading Mentorship",
      description:
        "Comprehensive crypto trading education using Smart Money Concepts",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31600000000",
      contactType: "customer service",
      email: siteConfig.contact.email,
    },
    sameAs: siteConfig.socials.map((social) => social.href),
    founder: {
      "@type": "Person",
      name: "Aaron Haden",
    },
  };
}

export function generateServiceSchema() {
  return pricingTiers.map((tier) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: tier.name,
    description: tier.description,
    provider: {
      "@type": "Person",
      name: "Aaron Haden",
    },
    offers: {
      "@type": "Offer",
      name: tier.name,
      description: tier.subtitle,
      price: tier.price.split(" ")[0].replace("€", "").replace("/maand", ""),
      priceCurrency: "EUR",
      priceValidUntil: "2024-12-31",
      availability: "InStock",
      url: `${siteConfig.url}${tier.href}`,
    },
    category: "Education",
    areaServed: "Netherlands",
  }));
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
