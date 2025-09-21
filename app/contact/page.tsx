import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MessageCircle, Mail, Clock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact & Intake Gesprek Plannen',
  description: 'Plan een gratis 15-minuten intake gesprek voor crypto trading mentorship. WhatsApp, email of Calendly beschikbaar.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Gratis kennismaking
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plan je Intake Gesprek
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De eerste stap naar consistent profitable trading begint met een 
              gratis 15-minuten kennismakingsgesprek. Geen verplichtingen, gewoon een open gesprek.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Calendly</CardTitle>
                <CardDescription>Plan direct online</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Kies een tijdslot dat jou uitkomt in mijn online agenda. 
                  Direct bevestiging en herinnering via email.
                </p>
                <Button asChild className="w-full">
                  <Link href={siteConfig.contact.calendlyUrl}>
                    Plan via Calendly
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>Direct contact</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Stuur me een berichtje via WhatsApp en ik plan persoonlijk 
                  een geschikt moment voor ons gesprek in.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={siteConfig.contact.whatsappUrl}>
                    WhatsApp sturen
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription>Traditioneel contact</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Liever via email? Stuur me je vraag en beschikbaarheid, 
                  dan reageer ik binnen 24 uur.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`mailto:${siteConfig.contact.email}`}>
                    Email versturen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hoe werkt het intake proces?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Plan het gesprek",
                  description: "Kies de methode die jou het beste uitkomt: Calendly, WhatsApp of email",
                  icon: Calendar
                },
                {
                  step: "2",
                  title: "15-min kennismaking",
                  description: "Gratis video call waarin we je doelen, ervaring en verwachtingen bespreken",
                  icon: Clock
                },
                {
                  step: "3",
                  title: "Programma advies",
                  description: "Ik adviseer welk programma (1-op-1, groep, streams) het beste bij je past",
                  icon: CheckCircle
                },
                {
                  step: "4",
                  title: "Jij beslist",
                  description: "Geen druk, geen verplichtingen. Jij beslist of en wanneer je wilt starten",
                  icon: CheckCircle
                }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* What to Expect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Wat we bespreken</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Je huidige ervaring met crypto trading",
                    "Doelen en verwachtingen voor de toekomst", 
                    "Beschikbare tijd voor leren en oefenen",
                    "Welk programma het beste bij je situatie past",
                    "Vragen over Smart Money Concepts",
                    "Praktische details over de mentorship"
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Wat je van mij kunt verwachten</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Eerlijk advies zonder sales pressure",
                    "Realistische verwachtingen over resultaten",
                    "Transparantie over wat wel/niet mogelijk is",
                    "Persoonlijke aandacht tijdens het gesprek",
                    "Antwoorden op al je vragen",
                    "Een no-obligation advies over vervolgstappen"
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="bg-muted/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Veelgestelde vragen over het intake
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Is het intake gesprek echt gratis?</h3>
                  <p className="text-sm text-muted-foreground">
                    Ja, volledig gratis en zonder verplichtingen. Het is een kennismakingsgesprek 
                    om te kijken of we een goede match zijn.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hoe lang duurt het gesprek?</h3>
                  <p className="text-sm text-muted-foreground">
                    Ongeveer 15 minuten. Genoeg tijd om elkaar te leren kennen en je vragen 
                    te beantwoorden, maar niet te lang.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Moet ik me voorbereiden?</h3>
                  <p className="text-sm text-muted-foreground">
                    Nee, gewoon jezelf zijn. Het kan helpen om na te denken over je doelen 
                    en hoeveel tijd je beschikbaar hebt voor leren.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wat als ik nog heel veel vragen heb?</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect! Dat is precies waarvoor het gesprek bedoeld is. We nemen de tijd 
                    voor al je vragen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
