"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Badge variant="secondary" className="mb-4">
            Free 15-min intake call
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {siteConfig.hero.title}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild size="lg" className="group">
              <Link href={siteConfig.contact.calendlyUrl}>
                <Calendar className="mr-2 h-4 w-4" />
                {siteConfig.hero.primaryCTA}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/mentorship">{siteConfig.hero.secondaryCTA}</Link>
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {siteConfig.stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
