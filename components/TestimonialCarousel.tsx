"use client"

import { useState, useEffect } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials, testimonialStats } from "@/data/testimonials"
import { motion, AnimatePresence } from "framer-motion"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wat studenten zeggen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Echte resultaten van echte mensen die het SMC traject hebben gevolgd
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">{testimonialStats.totalStudents}</div>
            <div className="text-sm text-muted-foreground">Studenten begeleid</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">{testimonialStats.averageRating}</div>
            <div className="text-sm text-muted-foreground">Gemiddelde waardering</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">{testimonialStats.successRate}</div>
            <div className="text-sm text-muted-foreground">Success rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">{testimonialStats.monthsActive}</div>
            <div className="text-sm text-muted-foreground">Maanden actief</div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
                  
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div>
                    <div className="font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
