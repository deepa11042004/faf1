"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Facility Manager, TechPark India",
    content: "Family Anchor transformed our entire security infrastructure. The transition was seamless, and their 24/7 monitoring team has been exceptionally proactive.",
    rating: 5,
    initials: "RK",
    color: "bg-blue-500",
  },
  {
    name: "Priya Sharma",
    role: "Operations Director, Azure Logistics",
    content: "The level of professionalism displayed by their security personnel is outstanding. The new access control systems have significantly improved our operational efficiency.",
    rating: 5,
    initials: "PS",
    color: "bg-purple-500",
  },
  {
    name: "Amit Desai",
    role: "CEO, Desai Enterprises",
    content: "A truly premium corporate security partner. Their fire alarm and PA system installations were completed ahead of schedule with zero disruptions.",
    rating: 5,
    initials: "AD",
    color: "bg-emerald-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-foreground z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-background leading-tight mb-6"
          >
            Client <span className="text-primary">Success Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-background/80 text-lg"
          >
            Don't just take our word for it. Hear what our corporate partners have to say.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-accent/30 border border-accent rounded-[2rem] p-8 relative group hover:border-primary/50 transition-colors duration-500 shadow-sm"
            >
              <div className="absolute top-6 right-6 text-background/5 group-hover:text-primary/10 transition-colors">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-background text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-background/10 pt-6">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-black/10`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-background font-semibold">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

