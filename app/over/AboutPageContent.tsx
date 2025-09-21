"use client";

import { 
  TrendingUp, 
  Brain, 
  Target, 
  Lightbulb, 
  Shield, 
  Users, 
  Award, 
  BarChart3,
  Clock,
  CheckCircle,
  Quote,
  Zap,
  Eye,
  Heart,
  Bitcoin,
  TrendingDown,
  LineChart,
  Coins,
  DollarSign,
  Activity,
  PieChart,
  BarChart,
  Gauge,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Lock,
  Globe
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CTABanner } from "@/components/CTABanner";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Bitcoin & Altcoin Analysis", percentage: 95, color: "bg-black" },
  { name: "Crypto Risk Management", percentage: 98, color: "bg-gray-800" },
  { name: "DeFi & Blockchain Tech", percentage: 92, color: "bg-gray-600" },
  { name: "Crypto Trader Mentoring", percentage: 88, color: "bg-gray-400" }
];

const timeline = [
  {
    year: "2019",
    title: "Bitcoin Bull Run Entry",
    description: "Entered crypto trading during the bull run with traditional TA, learned harsh lessons about volatility.",
    status: "completed"
  },
  {
    year: "2021", 
    title: "Smart Money Breakthrough",
    description: "Discovered SMC principles during DeFi summer, shifted to institutional crypto trading perspective.",
    status: "completed"
  },
  {
    year: "2022",
    title: "Bear Market Mastery",
    description: "Survived and thrived through crypto winter using SMC risk management and liquidity hunting.",
    status: "completed"
  },
  {
    year: "2023",
    title: "Crypto Education Launch",
    description: "Started teaching crypto-specific SMC strategies, helping traders navigate altcoin seasons.",
    status: "completed"
  },
  {
    year: "2024",
    title: "Institutional Crypto Network",
    description: "Built exclusive crypto trading community with focus on Bitcoin, ETH, and major altcoins.",
    status: "current"
  }
];

const stats = [
  { number: "5+", label: "Years Trading Crypto", icon: Bitcoin },
  { number: "200+", label: "Traders Coached", icon: Users },
  { number: "50+", label: "Crypto Pairs Covered", icon: Coins },
  { number: "24/7", label: "Market Analysis", icon: Activity }
];

function TypingQuote() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const fullText = "Crypto trading is 80% psychology and 20% technique. Master your mind, and Bitcoin follows.";
  
  useEffect(() => {
    if (!isInView) return;
    
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, isInView]);
  
  return (
    <div ref={ref} className="text-center">
      <Quote className="h-12 w-12 mx-auto mb-6 text-gray-400" />
      <blockquote className="text-2xl md:text-3xl font-light italic text-foreground mb-4 min-h-[120px] flex items-center justify-center">
        "{displayedText}"
        <span className="animate-pulse ml-1">|</span>
      </blockquote>
      <cite className="text-muted-foreground">— Aaron Haden</cite>
    </div>
  );
}

function AnimatedSkillBar({ skill, index }: { skill: typeof skills[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setWidth(skill.percentage);
      }, index * 200);
      return () => clearTimeout(timeout);
    }
  }, [isInView, skill.percentage, index]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: typeof timeline[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-lg">{item.year}</span>
            {item.status === 'current' && (
              <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            )}
          </div>
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-4 ${
          item.status === 'current' ? 'bg-black border-black animate-pulse' : 'bg-white border-gray-300'
        }`} />
        {index < timeline.length - 1 && (
          <div className="w-px h-16 bg-gray-300 mt-2" />
        )}
      </div>
      
      <div className="w-1/2" />
    </motion.div>
  );
}

export default function AboutPageContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-gray-200 rotate-45 opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-gray-300 rotate-12 opacity-30" />
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gray-100 rotate-45 opacity-40" />
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border-2 border-gray-200 rotate-12 opacity-25" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Bitcoin className="h-4 w-4" />
                  Crypto Trading Specialist
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block">Aaron</span>
                  <span className="block text-gray-600">Haden</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Transforming crypto traders through blockchain mastery and Smart Money Concepts
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                {["SMC Expert", "Crypto Mentor", "Blockchain Analyst"].map((tag, index) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo with Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-600 rounded-full blur-3xl opacity-20 scale-110" />
                
                {/* Main Photo */}
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/aaron-haden.jpg"
                    alt="Aaron Haden - Crypto Trading Mentor"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg"
                >
                  <LineChart className="h-6 w-6 text-black" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-black rounded-full p-4 shadow-lg"
                >
                  <Bitcoin className="h-6 w-6 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -left-8 bg-gray-800 rounded-full p-3 shadow-lg"
                >
                  <Coins className="h-5 w-5 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-2 -right-8 bg-white border-2 border-black rounded-full p-3 shadow-lg"
                >
                  <Activity className="h-5 w-5 text-black" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Crypto Market Visualizer */}
      <section className="py-16 bg-black text-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Bitcoin Price Ticker */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Bitcoin className="h-12 w-12 mx-auto mb-4 text-orange-400" />
              <div className="text-2xl font-bold mb-1">BTC/USD</div>
              <motion.div 
                animate={{ color: ["#10b981", "#ef4444", "#10b981"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-lg"
              >
                $67,845
              </motion.div>
              <div className="flex items-center justify-center gap-1 text-sm text-green-400">
                <ArrowUpRight className="h-4 w-4" />
                +5.24%
              </div>
            </motion.div>

            {/* Trading Chart Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-32 bg-gray-900 rounded-lg p-4"
            >
              <div className="flex items-end justify-between h-full">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [
                        `${Math.random() * 60 + 20}%`,
                        `${Math.random() * 60 + 20}%`,
                        `${Math.random() * 60 + 20}%`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-2 bg-gradient-to-t from-green-500 to-green-300 rounded-t"
                  />
                ))}
              </div>
              <BarChart className="absolute top-2 right-2 h-4 w-4 text-gray-400" />
            </motion.div>

            {/* Portfolio Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <PieChart className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <div className="text-lg font-semibold mb-1">Portfolio</div>
              <div className="text-sm text-gray-300">60% BTC, 25% ETH</div>
              <div className="text-sm text-gray-300">15% Altcoins</div>
            </motion.div>

            {/* Risk Gauge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [-30, 30, -30] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Gauge className="h-12 w-12 mx-auto mb-4 text-red-400" />
              </motion.div>
              <div className="text-lg font-semibold mb-1">Risk Level</div>
              <div className="text-sm text-green-400">Conservative</div>
              <div className="text-xs text-gray-400">SMC Protected</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-black" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">My Crypto Journey</h2>
            <p className="text-xl text-muted-foreground">
              From Bitcoin beginner to Smart Money crypto mastery
            </p>
          </motion.div>

          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-black text-white">
        <div className="container max-w-4xl">
          <TypingQuote />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Crypto Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Blockchain skills mastered through bull runs, bear markets, and DeFi evolution
            </p>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <AnimatedSkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Crypto Specializations</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive blockchain trading education and DeFi mastery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Bitcoin,
                title: "Crypto Market Mastery",
                description: "Advanced Bitcoin and altcoin trading using institutional Smart Money Concepts for crypto markets.",
                features: ["Bitcoin Dominance Analysis", "Altcoin Season Timing", "Crypto Liquidity Hunting"]
              },
              {
                icon: Wallet,
                title: "DeFi Risk Control",
                description: "Comprehensive crypto risk management protecting capital in volatile digital asset markets.",
                features: ["Crypto Position Sizing", "Multi-Chain Strategy", "Bear Market Survival"]
              },
              {
                icon: Gauge,
                title: "Blockchain Psychology",
                description: "Mental frameworks specifically designed for crypto trading's unique psychological challenges.",
                features: ["FOMO Control", "Diamond Hand Training", "Whale Move Reading"]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-black rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-black" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {[
              { width: 80, height: 80, left: 10, top: 20, rotate: 45 },
              { width: 60, height: 60, left: 80, top: 15, rotate: 30 },
              { width: 70, height: 70, left: 20, top: 70, rotate: 60 },
              { width: 90, height: 90, left: 70, top: 60, rotate: 15 },
              { width: 50, height: 50, left: 45, top: 40, rotate: 75 },
              { width: 65, height: 65, left: 85, top: 80, rotate: 90 },
              { width: 75, height: 75, left: 15, top: 45, rotate: 120 },
              { width: 55, height: 55, left: 60, top: 85, rotate: 180 }
            ].map((shape, i) => (
              <div
                key={i}
                className="absolute border border-gray-400"
                style={{
                  width: `${shape.width}px`,
                  height: `${shape.height}px`,
                  left: `${shape.left}%`,
                  top: `${shape.top}%`,
                  transform: `rotate(${shape.rotate}deg)`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Crypto Vision & Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To democratize institutional-level crypto trading education and build a community 
                  of disciplined Bitcoin & altcoin traders who understand blockchain market mechanics.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Globe,
                    title: "Crypto Vision",
                    description: "A decentralized world where retail crypto traders access the same blockchain insights as institutional whales."
                  },
                  {
                    icon: Bitcoin,
                    title: "Blockchain Mission", 
                    description: "Teaching crypto-specific SMC strategies while building diamond-hand mentality for bull and bear cycles."
                  },
                  {
                    icon: Lock,
                    title: "Crypto Values",
                    description: "Transparency, HODLing discipline, continuous blockchain learning, and prioritizing trader success over fees."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 p-2 bg-black rounded-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg"
                  />
                ))}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-black text-white rounded-full p-8 shadow-2xl"
                >
                  <Lightbulb className="h-12 w-12" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Master Crypto Trading?"
        description="Join hundreds of crypto traders who've mastered Bitcoin, altcoins, and DeFi using Smart Money Concepts."
      />
    </>
  );
}
