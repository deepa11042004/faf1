"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you provide custom security setups for industrial clients?",
    answer: "Yes, we specialize in tailored security architectures for industrial and corporate clients. We conduct a thorough site survey and design a system integrating CCTV, access control, and fire alarms specifically for your facility's layout and risks."
  },
  {
    question: "Are your security personnel trained for emergencies?",
    answer: "Absolutely. All our security guards undergo rigorous training programs including fire safety, emergency evacuation, first aid, and crisis management before they are deployed to any client site."
  },
  {
    question: "What happens if a camera or system goes down?",
    answer: "With our Annual Maintenance Contract (AMC) and 24×7 monitoring, our system detects failures instantly. Our rapid response technical team is dispatched immediately to resolve hardware or software issues, ensuring zero downtime."
  },
  {
    question: "Can your access control systems integrate with our HR software?",
    answer: "Yes, our modern biometric and smart card access systems can seamlessly integrate with most enterprise HR and payroll management software for accurate attendance tracking and restricted area management."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-text-gray text-lg mb-8">
              Find answers to common questions about our corporate security services and facility management solutions.
            </p>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/50 shadow-[0_0_20px_rgba(8,169,230,0.15)]' : 'border-white/10 hover:border-white/20'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white/5 text-text-gray'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 text-text-gray leading-relaxed border-t border-white/5 mt-2">
                          <p className="pt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
