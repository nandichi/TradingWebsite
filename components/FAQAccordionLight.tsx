"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqItems } from "@/data/faq";
import { motion, AnimatePresence } from "framer-motion";

interface FAQAccordionLightProps {
  maxItems?: number;
}

export function FAQAccordionLight({ maxItems }: FAQAccordionLightProps) {
  const items = maxItems ? faqItems.slice(0, maxItems) : faqItems;
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isOpen = (itemId: string) => openItems.includes(itemId);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <div
            className={`
              bg-white border border-gray-200 rounded-2xl transition-all duration-300 
              hover:shadow-lg hover:border-gray-300 overflow-hidden
              ${
                isOpen(item.id)
                  ? "shadow-lg border-primary/30 bg-primary/5"
                  : ""
              }
            `}
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-6 text-left flex items-center justify-between group/btn hover:bg-gray-50/50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4 flex-1">
                {/* Number Badge */}
                <div
                  className={`
                    w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${
                      isOpen(item.id)
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-600 group-hover/btn:bg-gray-200"
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
                        ? "text-primary"
                        : "text-gray-800 group-hover/btn:text-gray-900"
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
                      ? "bg-primary/10 text-primary"
                      : "bg-gray-100 text-gray-500 group-hover/btn:bg-gray-200 group-hover/btn:text-gray-700"
                  }
                `}
                animate={{ rotate: isOpen(item.id) ? 180 : 0 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

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
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

                    {/* Answer with Icon */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
