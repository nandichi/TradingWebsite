"use client";

import Link from "next/link";
import {
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
  ArrowUp,
  Star,
  Shield,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { disclaimer } from "@/data/pricing";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const iconMap = {
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
};

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-black to-black overflow-hidden">
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
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 md:col-span-2"
            >
              <div className="space-y-4">
                <motion.h3
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {siteConfig.author}
                </motion.h3>
                <p className="text-white/70 leading-relaxed max-w-md">
                  {siteConfig.tagline}
                </p>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  Professional crypto trading mentorship with proven Smart Money
                  Concepts. Join hundreds of successful traders worldwide.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-white font-medium">Follow Us</h4>
                <div className="flex space-x-4">
                  {siteConfig.socials.map((social, index) => {
                    const Icon = iconMap[social.icon as keyof typeof iconMap];
                    return (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={social.href}
                          className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center transition-all duration-300 group"
                          aria-label={social.name}
                        >
                          <Icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-white font-semibold">Navigation</h4>
              <ul className="space-y-3">
                {siteConfig.nav.slice(0, 4).map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services & Contact */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-white font-semibold">Get In Touch</h4>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-sm">Email Us</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={siteConfig.contact.whatsappUrl}
                    className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="text-sm">WhatsApp</span>
                  </Link>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-white/60">
                  <TrendingUp className="w-3 h-3 text-white/60" />
                  <span>85% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/60">
                  <Star className="w-3 h-3 text-white/60" />
                  <span>200+ Students</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/60">
                  <Shield className="w-3 h-3 text-white/60" />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
          />

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Disclaimer */}
            <div className="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-3 h-3 text-white/60" />
                </div>
                <div>
                  <h5 className="text-white/90 font-medium text-sm mb-2">
                    Important Disclaimer
                  </h5>
                  <p className="text-white/70 text-xs leading-relaxed">
                    <strong>Disclaimer:</strong> {disclaimer}
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-xs">
                {siteConfig.footer.copyright}
              </p>

              <div className="flex items-center space-x-4 text-white/60 text-xs">
                <span>Made with passion for crypto education</span>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <span>Netherlands</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white hover:bg-white/90 text-black rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
