"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { motion } from "framer-motion"

interface CTABannerProps {
  title?: string
  description?: string
  primaryText?: string
  secondaryText?: string
  className?: string
}

export function CTABanner({
  title = "Klaar om te beginnen?",
  description = "Plan een gratis 15-minuten intake gesprek en ontdek welk programma het beste bij je past.",
  primaryText = "Plan een intake",
  secondaryText = "Bekijk pricing",
  className = ""
}: CTABannerProps) {
  return (
    <section className={`py-20 px-4 bg-primary text-primary-foreground ${className}`}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          
          <p className="text-xl opacity-90 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="group"
            >
              <Link href={siteConfig.contact.calendlyUrl}>
                <Calendar className="mr-2 h-4 w-4" />
                {primaryText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/#pricing">
                {secondaryText}
              </Link>
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm opacity-75">
              Geen verplichtingen • Gratis kennismakingsgesprek • Direct inplannen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
