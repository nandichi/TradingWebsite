"use client"

import { Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { curriculumModules, learningOutcomes } from "@/data/curriculum"
import { motion } from "framer-motion"

export function CurriculumModules() {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Smart Money Concepts Curriculum
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Een gestructureerd 20-weken programma van basis tot gevorderde trading strategieën
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {curriculumModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {module.duration}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Module {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-muted/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Wat je leert in dit programma
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
