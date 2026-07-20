"use client";

import { motion } from "framer-motion";
import { Building2, Home, Factory, Store, Hotel, GraduationCap, Hospital, Warehouse } from "lucide-react";

const industries = [
  { name: "Residential", icon: Home },
  { name: "Commercial", icon: Store },
  { name: "Hospitals", icon: Hospital },
  { name: "Schools", icon: GraduationCap },
  { name: "Industries", icon: Factory },
  { name: "Hotels", icon: Hotel },
  { name: "Warehouses", icon: Warehouse },
  { name: "Banks", icon: Building2 },
];

export function TrustBar() {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="glass-card py-6 px-4 md:px-8 overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="flex flex-col items-center gap-2 text-text-gray hover:text-white transition-colors cursor-default"
              >
                <industry.icon className="w-6 h-6 md:w-8 md:h-8" />
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
