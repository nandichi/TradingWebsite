"use client";

import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricingTiers, disclaimer } from "@/data/pricing";
import { motion } from "framer-motion";

export function PricingTiers() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the program that fits you
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From personal guidance to livestreams - there's something for
            everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={tier.popular ? "md:scale-105" : ""}
            >
              <Card
                className={`h-full relative ${
                  tier.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Star className="w-3 h-3 mr-1" />
                    Most popular choice
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {tier.subtitle}
                  </CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-primary">
                      {tier.price}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-6">
                    {tier.description}
                  </p>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                  >
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
