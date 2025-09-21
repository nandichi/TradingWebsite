import { Metadata } from 'next'
import { User, Award, Target, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CTABanner } from '@/components/CTABanner'
import { generatePageMetadata } from '@/lib/seo'
import { motion } from 'framer-motion'

export const metadata: Metadata = generatePageMetadata({
  title: 'Over Aaron Reugebrink',
  description: 'Leer meer over Aaron Reugebrink, crypto trading mentor gespecialiseerd in Smart Money Concepts. Ervaring, filosofie en aanpak.',
  path: '/over',
})

export default function OverPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Over Aaron Reugebrink
            </h1>
            <p className="text-xl text-muted-foreground">
              Van traditionele analyse naar Smart Money Concepts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Photo placeholder */}
            <div className="lg:col-span-1">
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                <User className="h-24 w-24 text-muted-foreground" />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold">Mijn verhaal</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mijn reis in de crypto wereld begon 5 jaar geleden met traditionele technische analyse. 
                  Na jaren van inconsistente resultaten en frustratie, ontdekte ik Smart Money Concepts - 
                  een benadering die de markt bekijkt vanuit het perspectief van institutionele traders.
                </p>
                <p>
                  Deze shift in mindset veranderde alles. Plots begon ik de markt te begrijpen zoals de 
                  'grote spelers' dat doen. Liquidity grabs, order blocks, fair value gaps - concepten 
                  die me hielpen om consistent profitable te worden.
                </p>
                <p>
                  Nu help ik anderen om dezelfde transformatie te maken. Niet door valse beloften van 
                  snelle rijkdom, maar door gedegen educatie, sterke risicobeheer en een haalbare aanpak 
                  van trading.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  5+ jaar ervaring in crypto trading met focus op Smart Money Concepts. 
                  200+ studenten succesvol begeleid naar consistent trading.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Aanpak</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Gestructureerd curriculum met focus op risicobeheer. Geen shortcuts, 
                  maar een solide fundament voor lange termijn succes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Filosofie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trading is 80% psychologie en 20% techniek. Ik leer je niet alleen 
                  hoe je wint, maar vooral hoe je verlies voorkomt.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Approach */}
          <div className="bg-muted/20 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Mijn aanpak</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Wat ik WEL doe:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gedegen SMC educatie vanuit institutionele perspectief</li>
                  <li>• Focus op risicobeheer en capital preservation</li>
                  <li>• Realistische verwachtingen en doelen stellen</li>
                  <li>• Persoonlijke begeleiding en feedback</li>
                  <li>• Community support en accountability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Wat ik NIET doe:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Beloftes van gegarandeerde winsten</li>
                  <li>• "Get rich quick" schemes</li>
                  <li>• Emotioneel manipulatieve marketing</li>
                  <li>• Onrealistische income claims</li>
                  <li>• Verkoop van trading signals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Klaar om samen te werken?"
        description="Boek een gratis intake gesprek en ontdek hoe mijn aanpak jou kan helpen om consistent profitable te worden."
      />
    </>
  )
}
