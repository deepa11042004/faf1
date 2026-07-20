"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Home, Factory, HeartPulse, GraduationCap, Hotel, ShoppingBag, Warehouse, ShieldAlert, Briefcase } from "lucide-react";

const industries = [
  { name: "Residential", icon: Home, image: "/images/hero.png" },
  { name: "Corporate Offices", icon: Briefcase, image: "/images/about.png" },
  { name: "Factories", icon: Factory, image: "/images/guard.png" },
  { name: "Hospitals", icon: HeartPulse, image: "/images/about.png" },
  { name: "Schools", icon: GraduationCap, image: "/images/hero.png" },
  { name: "Hotels", icon: Hotel, image: "/images/about.png" },
  { name: "Retail", icon: ShoppingBag, image: "/images/guard.png" },
  { name: "Warehouses", icon: Warehouse, image: "/images/about.png" },
  { name: "Government", icon: ShieldAlert, image: "/images/guard.png" },
  { name: "Commercial", icon: Building2, image: "/images/hero.png" },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
            Industries We <span className="text-gradient">Secure</span>
          </h2>
          <p className="text-text-gray text-lg">
            Delivering specialized security protocols adapted for various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 5) * 0.1, duration: 0.5 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image 
                src={ind.image} 
                alt={ind.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 blur-[2px] group-hover:blur-0"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-[#081320]/80 group-hover:bg-[#081320]/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081320] via-transparent to-transparent opacity-80" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 text-white group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ind.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base tracking-wide">
                  {ind.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
