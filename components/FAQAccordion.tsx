"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqItems } from "@/data/faq"
import { motion } from "framer-motion"

interface FAQAccordionProps {
  maxItems?: number
}

export function FAQAccordion({ maxItems }: FAQAccordionProps) {
  const items = maxItems ? faqItems.slice(0, maxItems) : faqItems

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze mentorship programma's
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={item.id} 
                  className="border rounded-lg px-6 bg-card hover:shadow-sm transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
