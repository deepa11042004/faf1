"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-foreground">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-[72px] font-heading font-extrabold leading-[1.1] text-background"
            >
              Protecting <br /> What <br />
              <span className="text-primary">Matters Most</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-background/80 max-w-xl leading-relaxed font-medium"
            >
              Family Anchor Facilities Pvt. Ltd. provides advanced CCTV
              surveillance, fire alarm systems, access control, public address
              systems, and professional security guard services for residential,
              commercial, and industrial clients.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 glow-hover">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 rounded-full bg-background/5 border border-background/20 text-background font-semibold text-lg hover:bg-background/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                Explore Services <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 mt-4"
            >
              {[
                "24×7 Support",
                "Certified Professionals",
                "Modern Technology",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-background">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[600px] aspect-[4/5] lg:aspect-auto lg:h-full rounded-[2rem] overflow-hidden border border-background/10 shadow-2xl shadow-background/5">
              <Image
                src="/images/hero.png"
                alt="Advanced Corporate Security Solutions"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />

              {/* Floating UI Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute top-10 right-[-20px] bg-white/90 backdrop-blur-md rounded-2xl border border-background/10 p-4 flex items-center gap-4 animate-bounce-slow shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <div className="w-3 h-3 bg-primary rounded-full animate-ping" />
                </div>
                <div>
                  <div className="text-xs text-background/60 font-semibold">System Status</div>
                  <div className="text-sm font-bold text-background">Live Monitoring</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute bottom-16 left-[-20px] bg-white/90 backdrop-blur-md rounded-2xl border border-background/10 shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-background/60">Security Score</span>
                  <span className="text-xs font-bold text-primary">99.9%</span>
                </div>
                <div className="h-1.5 w-full bg-background/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
