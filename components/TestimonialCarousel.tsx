"use client";

import { useState, useEffect, useRef } from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Award,
  Timer,
} from "lucide-react";
import { testimonials, testimonialStats } from "@/data/testimonials";
import { motion, AnimatePresence, useInView } from "framer-motion";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const statsConfig = [
    {
      icon: Users,
      value: testimonialStats.totalStudents,
      label: "Students mentored",
      color: "text-blue-400",
    },
    {
      icon: Star,
      value: testimonialStats.averageRating,
      label: "Average rating",
      color: "text-yellow-400",
    },
    {
      icon: TrendingUp,
      value: testimonialStats.successRate,
      label: "Success rate",
      color: "text-green-400",
    },
    {
      icon: Timer,
      value: testimonialStats.monthsActive,
      label: "Months active",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient Lights */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" />

        {/* Floating Quote Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border border-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
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
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/70 font-medium">
              Student Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            What Students
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Real results from real people who followed the SMC journey.
            <br />
            Join hundreds of successful traders who transformed their lives.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {statsConfig.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center transition-all duration-300 hover:border-white/40 hover:shadow-xl hover:shadow-white/5">
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </motion.div>

                <motion.div
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 1 + index * 0.1,
                  }}
                >
                  {stat.value}
                </motion.div>

                <div className="text-sm text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="relative"
            >
              {/* Main Testimonial Card */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl shadow-white/5">
                {/* Floating Quote Icon */}
                <motion.div
                  className="absolute -top-6 left-12 w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-400/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                <div className="text-center">
                  {/* Quote */}
                  <motion.blockquote
                    className="text-xl md:text-2xl leading-relaxed text-white/90 mb-8 font-light italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.blockquote>

                  {/* Stars */}
                  <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.7 + i * 0.1,
                            type: "spring",
                            stiffness: 300,
                          }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                        </motion.div>
                      )
                    )}
                  </motion.div>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="font-bold text-xl text-white mb-2">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-white/60 font-medium">
                      {testimonials[currentIndex].role}
                    </div>
                  </motion.div>
                </div>

                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02), transparent 70%)",
                      "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.05), transparent 70%)",
                      "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.02), transparent 70%)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center items-center space-x-6 mt-12"
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300" />
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-green-400 shadow-lg shadow-green-400/50"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-green-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300" />
            </motion.button>
          </motion.div>

          {/* Auto-play Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center mt-6"
          >
            <div className="flex items-center space-x-2 text-white/50 text-xs">
              <div
                className={`w-2 h-2 rounded-full ${
                  isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-white/30"
                }`}
              />
              <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
