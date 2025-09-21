import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BackButton } from '@/components/BackButton'

export default function NotFound() {
  return (
    <section className="py-20 px-4 min-h-[60vh] flex items-center">
      <div className="container max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pagina niet gevonden
          </h2>
          <p className="text-muted-foreground mb-8">
            Sorry, de pagina die je zoekt bestaat niet of is verplaatst. 
            Geen zorgen, je kunt altijd terug naar de homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Naar Homepage
            </Link>
          </Button>
          
          <BackButton />
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">
            Of ga direct naar een van deze paginas:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/over" className="text-sm text-primary hover:underline">
              Over Aaron
            </Link>
            <Link href="/mentorship" className="text-sm text-primary hover:underline">
              1-op-1 Mentorship
            </Link>
            <Link href="/groep" className="text-sm text-primary hover:underline">
              Groepsmentorship
            </Link>
            <Link href="/streams" className="text-sm text-primary hover:underline">
              Livestreams
            </Link>
            <Link href="/faq" className="text-sm text-primary hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
