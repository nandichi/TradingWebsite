import { Metadata } from 'next'
import { Check, Users, MessageSquare, Calendar, DollarSign } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CTABanner } from '@/components/CTABanner'
import { generatePageMetadata } from '@/lib/seo'
import { pricingTiers, disclaimer } from '@/data/pricing'

export const metadata: Metadata = generatePageMetadata({
  title: 'Groepsmentorship - Leer Samen Met Anderen',
  description: 'Groepsmentorship voor crypto trading met Smart Money Concepts. Wekelijkse groepscalls, community en betaalbare prijs.',
  path: '/groep',
})

const groupTier = pricingTiers.find(tier => tier.id === 'group')!

export default function GroepPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Community Learning
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Groepsmentorship
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hetzelfde kwaliteitsvolle SMC curriculum, maar dan in een kleine groep van 
              gemotiveerde traders. Leer van elkaar en van mij tegen een betaalbare prijs.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Betaalbaar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Toegang tot professionele SMC training voor een fractie van de prijs 
                  van 1-op-1 begeleiding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Kleine Groepen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Maximaal 8-10 personen per groep zodat iedereen persoonlijke aandacht 
                  en feedback krijgt.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leer van medestudenten, deel ervaringen en motiveer elkaar om 
                  consistent te blijven.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexibel Schema</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Wekelijkse groepscalls op vaste tijden met opnames voor als je 
                  een keer niet kan.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Comparison */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Groep vs 1-op-1: Wat is het verschil?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Groepsmentorship Voordelen
                </h3>
                <div className="space-y-4">
                  {[
                    "Veel voordeliger dan 1-op-1 begeleiding",
                    "Leren van verschillende trading styles",
                    "Community support en accountability",
                    "Verschillende perspectieven en vragen",
                    "Networking met medestudenten",
                    "Minder druk, meer ontspannen leeromgeving"
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Wat je mist t.o.v. 1-op-1
                </h3>
                <div className="space-y-4">
                  {[
                    "Minder persoonlijke aandacht per sessie",
                    "Geen maatwerk curriculum",
                    "Geen WhatsApp support tussen sessies",
                    "Minder tijd voor individuele trade reviews",
                    "Geen flexibiliteit in timing van sessies",
                    "Focus ligt op groepsbehoeften, niet individueel"
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Wat krijg je?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {groupTier.features.slice(0, Math.ceil(groupTier.features.length / 2)).map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {groupTier.features.slice(Math.ceil(groupTier.features.length / 2)).map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="border-primary/50 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{groupTier.name}</CardTitle>
                <CardDescription>{groupTier.subtitle}</CardDescription>
                <div className="text-3xl font-bold text-primary pt-4">
                  {groupTier.price}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {groupTier.description}
                </p>
                <CTABanner
                  title=""
                  description=""
                  primaryText={groupTier.cta}
                  secondaryText="Plan intake"
                  className="!py-0 !bg-primary"
                />
              </CardContent>
            </Card>
          </div>

          {/* Schedule */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Groepssessie Schema</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  day: "Dinsdag",
                  time: "20:00 - 21:30 CET",
                  topic: "Theorie & Concepten",
                  description: "Nieuwe SMC concepten, uitleg en voorbeelden"
                },
                {
                  day: "Donderdag", 
                  time: "20:00 - 21:30 CET",
                  topic: "Praktijk & Analyse",
                  description: "Chart analyse oefeningen en trade reviews"
                },
                {
                  day: "Zondag",
                  time: "19:00 - 20:00 CET", 
                  topic: "Q&A & Planning",
                  description: "Vragen beantwoorden en week planning"
                }
              ].map((session) => (
                <Card key={session.day}>
                  <CardHeader>
                    <CardTitle className="text-lg">{session.day}</CardTitle>
                    <CardDescription>{session.time}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">{session.topic}</h4>
                    <p className="text-sm text-muted-foreground">{session.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Alle sessies worden opgenomen. Kan je niet live? Kijk later terug!
              </p>
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

      <CTABanner
        title="Join de volgende groep"
        description="Plekken zijn beperkt tot 10 personen per groep. Plan een intake gesprek om te zien of groepsmentorship bij je past."
        primaryText="Plan intake"
        secondaryText="Vergelijk opties"
      />
    </>
  )
}
