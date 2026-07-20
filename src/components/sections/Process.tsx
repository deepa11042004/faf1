"use client";

import { motion } from "framer-motion";
import { MessageSquare, Map, PenTool, Wrench, ShieldCheck, HeadphonesIcon } from "lucide-react";

const steps = [
  { num: "01", title: "Consultation", icon: MessageSquare },
  { num: "02", title: "Site Survey", icon: Map },
  { num: "03", title: "Planning", icon: PenTool },
  { num: "04", title: "Installation", icon: Wrench },
  { num: "05", title: "Testing", icon: ShieldCheck },
  { num: "06", title: "Support", icon: HeadphonesIcon },
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-background leading-tight mb-6">
            Our Proven <span className="text-primary">Process</span>
          </h2>
          <p className="text-background/80 text-lg">
            A systematic approach to ensuring flawless security implementation for your organization.
          </p>
        </div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-background/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-xl group-hover:border-primary transition-colors duration-300 mb-6">
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  
                  <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-background/60 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-background font-semibold text-lg lg:text-xl group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
