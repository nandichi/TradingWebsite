"use client";

import {
  BookOpen,
  CheckSquare,
  MessageCircle,
  Shield,
  FileText,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const iconMap = {
  BookOpen,
  CheckSquare,
  MessageCircle,
  Shield,
  FileText,
  Users,
};

export function FeatureCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-white/3 rounded-full blur-xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-white/70" />
            <span className="text-sm text-white/70 font-medium">
              Premium Mentorship Features
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Why Choose My
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Mentorship?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            A complete approach that goes beyond just technical analysis.
            <br />
            Build sustainable trading skills with proven methodologies.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteConfig.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Card Background with Glassmorphism */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10">
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <Icon className="h-8 w-8 text-white group-hover:text-green-400 transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {feature.title}
                    </motion.h3>

                    <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Subtle Call-to-Action */}
                    <motion.div
                      className="flex items-center text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Learn more</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.div>
                  </div>

                  {/* Card Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                    <span className="text-xs text-white/60 font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Interactive Particles */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/40 rounded-full"
                          initial={{
                            x: Math.random() * 300,
                            y: Math.random() * 200,
                            opacity: 0,
                          }}
                          animate={{
                            x: Math.random() * 300,
                            y: Math.random() * 200,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-2 text-white/60">
            <div className="w-8 h-[1px] bg-white/30"></div>
            <span className="text-sm font-medium tracking-wider uppercase">
              Ready to Start?
            </span>
            <div className="w-8 h-[1px] bg-white/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
