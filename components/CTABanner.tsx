"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Sparkles,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { motion, useInView } from "framer-motion";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  className?: string;
}

export function CTABanner({
  title = "Ready to Transform Your Trading?",
  description = "Join hundreds of successful traders who chose Aaron Haden's mentorship. Schedule your free 15-minute intake call today.",
  primaryText = "Schedule Free Call",
  secondaryText = "View All Programs",
  className = "",
}: CTABannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const trustIndicators = [
    { icon: Shield, text: "No obligations" },
    { icon: Clock, text: "15-min free call" },
    { icon: CheckCircle, text: "Instant scheduling" },
  ];

  return (
    <section
      ref={containerRef}
      className={`relative py-32 px-4 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden ${className}`}
    >
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

        {/* Floating Stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              rotate: 360,
              scale: [null, Math.random() * 0.8 + 0.6],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Star className="w-4 h-4 text-gray-400/20 fill-current" />
          </motion.div>
        ))}

        {/* Interactive Gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`,
          }}
        />

        {/* Ambient Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-700/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/2 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-400/10 to-gray-600/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-gray-300" />
            <span className="text-white/90 font-medium">
              Ready to Start Your Journey?
            </span>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            {title.split(" ").slice(0, 3).join(" ")}
            <br />
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              {title.split(" ").slice(3).join(" ")}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <Link
                href={siteConfig.contact.calendlyUrl}
                className="relative z-10 inline-flex items-center space-x-3 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-gray-400/25 hover:shadow-gray-400/40"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-lg">{primaryText}</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#pricing"
                className="inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-2xl transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                <span className="text-lg">{secondaryText}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-16"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center space-x-3 text-white/80"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <indicator.icon className="w-5 h-5 text-gray-300" />
                </div>
                <span className="font-medium">{indicator.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats/Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.div
                  className="text-3xl font-bold text-gray-300 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 1.3 }}
                >
                  200+
                </motion.div>
                <div className="text-white/70">Successful Students</div>
              </div>

              <div>
                <motion.div
                  className="text-3xl font-bold text-gray-300 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 1.4 }}
                >
                  4.9/5
                </motion.div>
                <div className="text-white/70 flex items-center justify-center space-x-1">
                  <span>Student Rating</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gray-300 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <motion.div
                  className="text-3xl font-bold text-gray-300 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 1.5 }}
                >
                  85%
                </motion.div>
                <div className="text-white/70">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
