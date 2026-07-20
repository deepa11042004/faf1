"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Briefcase, Users, ShieldAlert, HeadphonesIcon } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="font-heading font-bold text-4xl md:text-5xl text-white">0{suffix}</span>;
}

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 100, suffix: "+", label: "Corporate Clients", icon: Users },
  { value: 50, suffix: "+", label: "Security Personnel", icon: ShieldAlert },
  { value: 24, suffix: "×7", label: "Dedicated Support", icon: HeadphonesIcon },
];

export function Statistics() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-secondary">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[200px] bg-white/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-background/5 backdrop-blur-md border border-background/10 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-background/10"
            >
              <div className="w-14 h-14 rounded-full bg-background/10 flex items-center justify-center border border-background/20 text-background mb-4 group-hover:bg-background group-hover:text-secondary transition-colors duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-background/80 text-sm md:text-base mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
