import { Hero } from '@/components/Hero'
import { FeatureCards } from '@/components/FeatureCards'
import { PricingTiers } from '@/components/PricingTiers'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { FAQAccordion } from '@/components/FAQAccordion'
import { CTABanner } from '@/components/CTABanner'
import { generateFAQSchema } from '@/data/schema'

export default function HomePage() {
  const faqSchema = generateFAQSchema()
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <Hero />
      <FeatureCards />
      
      <section id="pricing">
        <PricingTiers />
      </section>
      
      <TestimonialCarousel />
      
      <FAQAccordion maxItems={6} />
      
      <CTABanner />
    </>
  )
}
