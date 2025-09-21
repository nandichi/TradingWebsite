"use client";

import Link from "next/link";
import {
  Check,
  Star,
  Crown,
  Zap,
  ArrowRight,
  Sparkles,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingTiers, disclaimer } from "@/data/pricing";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function PricingTiers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
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
            backgroundSize: "100px 100px",
          }}
        />

        {/* Radial Gradients */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/2 rounded-full blur-3xl" />
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
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/70 font-medium">
              Premium Training Programs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Choose The Program
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              That Fits You
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            From personal 1-on-1 guidance to group sessions and livestreams - there's something for
            everyone.
            <br />
            Start your professional trading journey today.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {pricingTiers.map((tier, index) => {
            const isPopular = tier.popular;
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={tier.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative ${
                  isPopular ? "md:scale-105 z-10" : ""
                }`}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 30 },
                }}
              >
                {/* Card Container */}
                <div
                  className={`
                  relative h-full 
                  ${
                    isPopular
                      ? "bg-gradient-to-br from-white/15 to-white/5"
                      : "bg-gradient-to-br from-white/10 to-white/5"
                  } 
                  backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500
                  ${
                    isPopular
                      ? "border-green-400/30 shadow-2xl shadow-green-400/10"
                      : "border-white/20 hover:border-white/40"
                  }
                  ${isHovered ? "shadow-2xl shadow-white/10" : ""}
                `}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.8,
                      }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                    >
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-4 py-2 rounded-full flex items-center space-x-1 shadow-lg">
                        <Star className="w-3 h-3" />
                        <span>Most Popular</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Background Glow Effect */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Header */}
                  <div className="relative z-10 text-center mb-8">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center
                        ${isPopular ? "bg-green-400/20" : "bg-white/10"}
                        ${isPopular ? "border-green-400/30" : "border-white/20"}
                        border backdrop-blur-sm
                      `}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {isPopular ? (
                        <Crown className="w-8 h-8 text-green-400" />
                      ) : index === 0 ? (
                        <Zap className="w-8 h-8 text-white" />
                      ) : (
                        <Sparkles className="w-8 h-8 text-white" />
                      )}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-white/70 mb-6">{tier.subtitle}</p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <motion.div
                        className={`text-4xl font-bold mb-2 ${
                          isPopular ? "text-green-400" : "text-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tier.price}
                      </motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 mb-8">
                    <p className="text-white/80 text-center leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="relative z-10 space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + index * 0.1 + featureIndex * 0.05,
                        }}
                        className="flex items-start space-x-3 group/feature"
                      >
                        <div
                          className={`
                          w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0
                          ${isPopular ? "bg-green-400/20" : "bg-white/10"}
                          group-hover/feature:scale-110 transition-transform duration-200
                        `}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              isPopular ? "text-green-400" : "text-white"
                            }`}
                          />
                        </div>
                        <span className="text-white/90 leading-relaxed group-hover/feature:text-white transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className={`
                        w-full group/btn relative overflow-hidden
                        ${
                          isPopular
                            ? "bg-green-400 hover:bg-green-500 text-black shadow-lg shadow-green-400/25"
                            : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                        }
                        transition-all duration-300 backdrop-blur-sm
                      `}
                      size="lg"
                    >
                      <Link
                        href={tier.href}
                        className="flex items-center justify-center space-x-2"
                      >
                        <span className="font-medium">{tier.cta}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Floating Particles for Popular Card */}
                  {isPopular && isHovered && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-green-400/60 rounded-full"
                          initial={{
                            x: Math.random() * 300,
                            y: Math.random() * 400,
                            opacity: 0,
                          }}
                          animate={{
                            x: Math.random() * 300,
                            y: Math.random() * 400,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3,
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

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-white/60" />
              <span className="text-white/80 font-medium">
                Important Disclaimer
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white/90">Disclaimer:</strong>{" "}
              {disclaimer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
