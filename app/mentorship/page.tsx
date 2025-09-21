import { Metadata } from 'next'
import { Check, X, Clock, Users, MessageCircle, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CurriculumModules } from '@/components/CurriculumModules'
import { CTABanner } from '@/components/CTABanner'
import { generatePageMetadata } from '@/lib/seo'
import { pricingTiers, disclaimer } from '@/data/pricing'

export const metadata: Metadata = generatePageMetadata({
  title: '1-op-1 Mentorship - Persoonlijke Trading Begeleiding',
  description: 'Intensieve 1-op-1 crypto trading mentorship met Smart Money Concepts. Wekelijkse sessies, persoonlijke roadmap en directe feedback.',
  path: '/mentorship',
})

const oneOnOneTier = pricingTiers.find(tier => tier.id === 'one-on-one')!

export default function MentorshipPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Premium Mentorship
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              1-op-1 Mentorship
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De meest intensieve vorm van begeleiding met volledige persoonlijke aandacht. 
              Maatwerk training speciaal voor jouw trading doelen en uitdagingen.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Persoonlijke Aandacht</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  100% focus op jouw situatie, doelen en uitdagingen. Geen afleidingen, 
                  geen wachtlijsten, gewoon pure persoonlijke begeleiding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Maatwerk Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Jouw leertraject wordt volledig aangepast aan je ervaring, beschikbare tijd 
                  en specifieke trading doelen.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Directe Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  WhatsApp toegang tijdens kantooruren voor directe vragen en 
                  real-time feedback op je trades.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Wat is inbegrepen</h2>
              <div className="space-y-4">
                {oneOnOneTier.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Wat je NIET krijgt</h2>
              <div className="space-y-4">
                {[
                  "Gegarandeerde winsten of income claims",
                  "Trading signals of copy-trading",
                  "24/7 beschikbaarheid (alleen kantooruren)",
                  "Financieel advies of investment recommendations",
                  "Support voor andere trading strategieën dan SMC"
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="border-primary shadow-lg">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4">
                  Meest Populair
                </Badge>
                <CardTitle className="text-2xl">{oneOnOneTier.name}</CardTitle>
                <CardDescription>{oneOnOneTier.subtitle}</CardDescription>
                <div className="text-3xl font-bold text-primary pt-4">
                  {oneOnOneTier.price}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {oneOnOneTier.description}
                </p>
                <CTABanner
                  title=""
                  description=""
                  primaryText={oneOnOneTier.cta}
                  secondaryText="Meer info"
                  className="!py-0 !bg-primary"
                />
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Hoe werkt het?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Intake Gesprek",
                  description: "Gratis 15-min kennismaking om doelen en verwachtingen te bespreken"
                },
                {
                  step: "2", 
                  title: "Persoonlijke Roadmap",
                  description: "Op maat gemaakt curriculum gebaseerd op je ervaring en doelen"
                },
                {
                  step: "3",
                  title: "Wekelijkse Sessies",
                  description: "60-90 min persoonlijke sessies met theorie, praktijk en Q&A"
                },
                {
                  step: "4",
                  title: "Doorlopende Support",
                  description: "WhatsApp support en trade reviews tussen sessies door"
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> {disclaimer}
            </p>
          </div>
        </div>
      </section>

      <CurriculumModules />
      
      <CTABanner
        title="Start je 1-op-1 traject"
        description="Plan een gratis intake gesprek en ontdek hoe persoonlijke begeleiding jouw trading naar het volgende level kan brengen."
        primaryText="Plan intake gesprek"
        secondaryText="Bekijk andere opties"
      />
    </>
  )
}
