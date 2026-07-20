"use client";

import { motion } from "framer-motion";
import { Award, Zap, Clock, ShieldCheck, Cpu, Wrench, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Award, title: "Certified Team", desc: "Expert technicians with industry certifications." },
  { icon: Zap, title: "Fast Installation", desc: "Quick and seamless deployment with zero downtime." },
  { icon: Clock, title: "24×7 Monitoring", desc: "Round-the-clock surveillance and rapid response." },
  { icon: ShieldCheck, title: "Affordable Solutions", desc: "Premium security that fits your corporate budget." },
  { icon: Cpu, title: "Latest Technology", desc: "Cutting-edge AI and IoT integrated systems." },
  { icon: Wrench, title: "AMC Support", desc: "Comprehensive Annual Maintenance Contracts." },
  { icon: ThumbsUp, title: "Trusted Professionals", desc: "Vetted and highly trained security personnel." }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-background/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-background leading-tight mb-6">
            Why Choose <span className="text-white">Family Anchor</span>
          </h2>
          <p className="text-background/90 text-lg font-medium">
            We don't just provide security; we deliver peace of mind through excellence, reliability, and advanced technology.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-background/0 via-background/50 to-background/0 -translate-x-1/2" />

          <div className="space-y-6 md:space-y-12">
            {reasons.map((reason, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12" />

                  {/* Center Node */}
                  <div className="relative w-12 h-12 rounded-full bg-background border-2 border-white/50 flex items-center justify-center z-10 shadow-xl shrink-0 hidden md:flex">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-full md:w-5/12"
                  >
                    <div className="bg-background/90 backdrop-blur-md border border-background/20 rounded-[1.5rem] p-6 flex gap-4 items-start group hover:-translate-y-1 hover:border-white/50 shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 shrink-0 text-white group-hover:bg-primary transition-colors">
                        <reason.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
