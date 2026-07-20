"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Flame, Fingerprint, Volume2, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "CCTV Installation",
    description: "High-definition surveillance systems with AI-powered analytics and 24/7 cloud recording capabilities.",
    icon: Camera,
    image: "/images/hero.png",
  },
  {
    title: "Fire Alarm System",
    description: "Advanced fire detection and early warning systems ensuring maximum safety for your premises.",
    icon: Flame,
    image: "/images/about.png",
  },
  {
    title: "Access Control",
    description: "Biometric and smart card access solutions to secure restricted areas and monitor personnel movement.",
    icon: Fingerprint,
    image: "/images/hero.png",
  },
  {
    title: "PA System",
    description: "Clear and reliable public address systems for emergency broadcasts and daily communications.",
    icon: Volume2,
    image: "/images/about.png",
  },
  {
    title: "Security Guard Services",
    description: "Highly trained, professional security personnel for on-site protection and rapid response.",
    icon: Shield,
    image: "/images/guard.png",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-card z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4"
          >
            <Shield className="w-4 h-4" />
            <span>Our Core Services</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6"
          >
            Comprehensive <span className="text-gradient">Protection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-gray text-lg"
          >
            We provide end-to-end security and facility management solutions tailored to your unique corporate requirements.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-[2rem] overflow-hidden glass-card hover:border-primary/50 transition-colors duration-500 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2746] via-[#0E2746]/60 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-6 w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-primary/50">
                  <service.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1 relative z-10 bg-transparent">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-gray leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors mt-auto group/btn"
                >
                  Read More 
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
              <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
