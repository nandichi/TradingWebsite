"use client";

import { useState, useRef } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Plus,
  Minus,
} from "lucide-react";
import { faqItems } from "@/data/faq";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface FAQAccordionProps {
  maxItems?: number;
}

export function FAQAccordion({ maxItems }: FAQAccordionProps) {
  const items = maxItems ? faqItems.slice(0, maxItems) : faqItems;
  const [openItems, setOpenItems] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isOpen = (itemId: string) => openItems.includes(itemId);

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
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating Question Marks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-6xl font-bold"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ?
          </motion.div>
        ))}

        {/* Ambient Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="container max-w-5xl relative z-10">
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
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/70 font-medium">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Got Questions?
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Answers to the most frequently asked questions about our mentorship
            programs.
            <br />
            Can't find what you're looking for? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              {/* FAQ Item */}
              <div
                className={`
                  relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
                  border border-white/20 rounded-2xl transition-all duration-500 overflow-hidden
                  hover:border-white/40 hover:shadow-xl hover:shadow-white/5
                  ${
                    isOpen(item.id)
                      ? "border-green-400/30 shadow-lg shadow-green-400/10"
                      : ""
                  }
                `}
              >
                {/* Question Header */}
                <motion.button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between group/btn"
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Number Badge */}
                    <div
                      className={`
                      w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300
                      ${
                        isOpen(item.id)
                          ? "bg-green-400/20 text-green-400 border border-green-400/30"
                          : "bg-white/10 text-white/70 border border-white/20"
                      }
                    `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Question Text */}
                    <h3
                      className={`
                      text-lg font-semibold transition-colors duration-300
                      ${
                        isOpen(item.id)
                          ? "text-white"
                          : "text-white/90 group-hover/btn:text-white"
                      }
                    `}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    className={`
                      w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                      ${
                        isOpen(item.id)
                          ? "bg-green-400/20 border border-green-400/30"
                          : "bg-white/10 border border-white/20 group-hover/btn:bg-white/20"
                      }
                    `}
                    animate={{ rotate: isOpen(item.id) ? 180 : 0 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {isOpen(item.id) ? (
                      <Minus className="w-5 h-5 text-green-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-white/70 group-hover/btn:text-white" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Answer Content */}
                <AnimatePresence>
                  {isOpen(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="px-6 pb-6"
                      >
                        {/* Content Separator */}
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                        {/* Answer with Icon */}
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-green-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                            <MessageCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <p className="text-white/80 leading-relaxed text-lg">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Glow Effect for Open Items */}
                {isOpen(item.id) && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/70 mb-6">
              Can't find the answer you're looking for? Please chat with our
              friendly team.
            </p>
            <motion.div
              className="inline-flex items-center space-x-2 bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get in touch</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
