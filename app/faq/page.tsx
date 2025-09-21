import { Metadata } from 'next'
import { HelpCircle } from 'lucide-react'
import { FAQAccordion } from '@/components/FAQAccordion'
import { CTABanner } from '@/components/CTABanner'
import { generatePageMetadata } from '@/lib/seo'
import { generateFAQSchema } from '@/data/schema'

export const metadata: Metadata = generatePageMetadata({
  title: 'Veelgestelde Vragen (FAQ)',
  description: 'Antwoorden op de meest gestelde vragen over onze crypto trading mentorship programmas met Smart Money Concepts.',
  path: '/faq',
})

export default function FAQPage() {
  const faqSchema = generateFAQSchema()
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Veelgestelde Vragen
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alle antwoorden op vragen over onze mentorship programma's, Smart Money Concepts en het leerproces.
            </p>
          </div>

          <FAQAccordion />

          <div className="mt-16 text-center bg-muted/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Staat je vraag er niet bij?
            </h2>
            <p className="text-muted-foreground mb-6">
              Geen probleem! Plan een gratis intake gesprek waarin we al je vragen kunnen bespreken 
              en kijken welk programma het beste bij je past.
            </p>
            <CTABanner
              title=""
              description=""
              primaryText="Plan gratis intake"
              secondaryText="Stuur een email"
              className="!py-0 !bg-primary"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Klaar voor de volgende stap?"
        description="Nu je alle informatie hebt, is het tijd om in actie te komen. Plan een gratis kennismakingsgesprek."
        primaryText="Plan intake gesprek"
        secondaryText="Bekijk programmas"
      />
    </>
  )
}
