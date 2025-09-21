import Link from "next/link"
import { Instagram, Youtube, Twitter, Mail, Phone } from "lucide-react"
import { siteConfig } from "@/data/site"
import { disclaimer } from "@/data/pricing"

const iconMap = {
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{siteConfig.author}</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="flex space-x-4">
              {siteConfig.socials.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigatie</h4>
            <ul className="space-y-2">
              {siteConfig.nav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2">
              {siteConfig.nav.slice(4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="space-y-2">
              <Link
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </Link>
              <Link
                href={siteConfig.contact.whatsappUrl}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground bg-muted p-4 rounded-lg">
              <strong>Disclaimer:</strong> {disclaimer}
            </p>
            <p className="text-xs text-muted-foreground text-center">
              {siteConfig.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
