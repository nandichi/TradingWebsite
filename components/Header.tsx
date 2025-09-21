"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, ChevronDown, Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20"
            : "bg-black/80 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <Image
                    src="/Logo-Aaron.png"
                    alt="Aaron Hayden Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold text-white group-hover:text-white/80 transition-colors duration-300">
                    {siteConfig.author}
                  </span>
                  <div className="flex items-center space-x-1 mt-0.5">
                    <Star className="w-3 h-3 text-white/60 fill-current" />
                    <span className="text-xs text-white/60">Crypto Mentor</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {siteConfig.nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-all duration-300 group ${
                      pathname === item.href
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}

                    {/* Active/Hover Indicator */}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                        pathname === item.href ? "w-full" : ""
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Link
                  href={siteConfig.contact.calendlyUrl}
                  className="inline-flex items-center space-x-2 bg-white hover:bg-white/90 text-black font-medium px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Call</span>
                </Link>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="container py-6">
                <div className="flex flex-col space-y-6">
                  {/* Mobile Navigation Links */}
                  <div className="space-y-4">
                    {siteConfig.nav.map((item, index) => (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                            pathname === item.href
                              ? "bg-white/20 text-white border border-white/30"
                              : "text-white/80 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span className="font-medium">{item.name}</span>
                          {pathname === item.href && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <motion.div
                    variants={itemVariants}
                    custom={siteConfig.nav.length}
                    className="pt-4 border-t border-white/10"
                  >
                    <Link
                      href={siteConfig.contact.calendlyUrl}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-white hover:bg-white/90 text-black font-bold py-4 rounded-xl transition-all duration-300 shadow-lg"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Free Call</span>
                    </Link>
                  </motion.div>

                  {/* Mobile Quick Stats */}
                  <motion.div
                    variants={itemVariants}
                    custom={siteConfig.nav.length + 1}
                    className="pt-4 border-t border-white/10"
                  >
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-white font-bold text-lg">200+</div>
                        <div className="text-white/60 text-xs">Students</div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">
                          4.9/5
                        </div>
                        <div className="text-white/60 text-xs">Rating</div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">85%</div>
                        <div className="text-white/60 text-xs">Success</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Header Spacer */}
      <div className="h-20" />
    </>
  );
}
