"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Target, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image & Counters */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/images/about.png" 
                alt="Command Center" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 -right-4 md:right-4 lg:-right-10 glass-card p-6 flex items-center gap-6"
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl font-heading font-bold text-gradient">
                  <AnimatedCounter value={10} suffix="+" />
                </span>
                <span className="text-xs text-text-gray font-medium uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-heading font-bold text-gradient">
                  <AnimatedCounter value={500} suffix="+" />
                </span>
                <span className="text-xs text-text-gray font-medium uppercase tracking-wider">Clients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>About Family Anchor</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                Your Trusted Partner in <span className="text-gradient">Comprehensive Security</span>
              </h2>
              <p className="mt-4 text-text-gray leading-relaxed text-lg">
                We are a premier corporate security services provider, dedicated to safeguarding what matters most. From advanced technological surveillance to highly trained personnel, we deliver holistic protection for your facilities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass p-5 rounded-2xl flex flex-col gap-3 group hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-lg">Our Mission</h3>
                <p className="text-sm text-text-gray leading-relaxed">
                  To provide unparalleled security solutions utilizing cutting-edge technology and exceptional personnel.
                </p>
              </div>
              
              <div className="glass p-5 rounded-2xl flex flex-col gap-3 group hover:border-accent/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-lg">Our Vision</h3>
                <p className="text-sm text-text-gray leading-relaxed">
                  To be the gold standard in corporate facilities management and security services globally.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Highly Trained Security Professionals",
                "State-of-the-art Surveillance Systems",
                "Rapid Response Protocols",
                "Customized Security Architectures"
              ].map((val, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white font-medium">{val}</span>
                </div>
              ))}
            </div>

            <button className="self-start mt-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 glow-hover">
              Learn More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
