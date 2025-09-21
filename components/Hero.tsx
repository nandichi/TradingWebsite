"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  TrendingUp,
  Shield,
  Users,
  Award,
  Play,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Interactive Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
      </div>

      <motion.section
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center px-4"
      >
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8 text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white/90 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Award className="w-3 h-3 mr-2" />
                  Free 15-min intake meeting
                </Badge>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Crypto Trading
                  <br />
                  <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Mentorship
                  </span>
                </h1>

                <div className="flex items-center space-x-2 text-white/60">
                  <div className="w-8 h-[1px] bg-white/40"></div>
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Smart Money Concepts
                  </span>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-white/70 leading-relaxed max-w-lg"
              >
                Get structure, clarity, and guidance from mentor Aaron Haden.
                Choose 1-on-1, group mentorship, or follow our livestreams.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-white text-black hover:bg-white/90 border-0 shadow-xl shadow-white/10 transition-all duration-300 hover:shadow-white/20"
                >
                  <Link href={siteConfig.contact.calendlyUrl}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/mentorship">
                    <Play className="mr-2 h-4 w-4" />
                    View the program
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex items-center space-x-6 pt-8"
              >
                <div className="flex items-center space-x-2 text-white/60">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">85% success rate</span>
                </div>
                <div className="flex items-center space-x-2 text-white/60">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">200+ students</span>
                </div>
                <div className="flex items-center space-x-2 text-white/60">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">5+ years experience</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Trading Chart Visualization */}
              <div className="relative">
                {/* Main Chart Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
                >
                  {/* Chart Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80 font-medium">
                        BTC/USDT
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">
                        +12.5%
                      </div>
                      <div className="text-white/60 text-sm">$67,432</div>
                    </div>
                  </div>

                  {/* Animated Chart Lines */}
                  <div className="relative h-48 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                        d="M0,150 Q100,120 200,80 T400,60"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="2"
                        fill="none"
                        className="drop-shadow-glow"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.2 }}
                        d="M0,160 Q150,100 300,70 T400,50"
                        stroke="#10b981"
                        strokeWidth="3"
                        fill="none"
                        className="drop-shadow-glow"
                      />
                    </svg>

                    {/* Gradient Fill */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent"
                      style={{
                        clipPath:
                          "polygon(0 75%, 25% 60%, 50% 40%, 75% 35%, 100% 25%, 100% 100%, 0 100%)",
                      }}
                    />
                  </div>

                  {/* Chart Indicators */}
                  <div className="flex justify-between items-center mt-4 text-xs text-white/60">
                    <span>1H</span>
                    <span>4H</span>
                    <span>1D</span>
                    <span className="text-white font-medium">1W</span>
                    <span>1M</span>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -top-4 -right-4 bg-green-500/20 backdrop-blur-xl border border-green-400/30 rounded-xl p-4 text-center"
                >
                  <div className="text-green-400 font-bold text-lg">78%</div>
                  <div className="text-white/70 text-xs">Win Rate</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center"
                >
                  <div className="text-white font-bold text-lg">5.2R</div>
                  <div className="text-white/70 text-xs">Avg. RRR</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="text-white/60 text-sm mb-2">Scroll for more</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-5 h-5 text-white/60 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 bg-gradient-to-b from-transparent to-white/5 backdrop-blur-sm border-t border-white/10 py-16"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/70 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
