"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const inputClasses = (name: string) => `
    w-full bg-white/5 border rounded-xl px-5 py-4 text-white transition-all duration-300 outline-none
    ${focusedInput === name ? 'border-primary shadow-[0_0_15px_rgba(8,169,230,0.2)]' : 'border-white/10 hover:border-white/20'}
  `;

  const labelClasses = (name: string) => `
    absolute left-5 transition-all duration-300 pointer-events-none
    ${focusedInput === name ? '-top-2.5 text-xs text-primary bg-[#0E2746] px-1' : 'top-4 text-text-gray'}
  `;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-popover">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-text-gray text-lg">
            Ready to secure your corporate facilities? Contact our experts for a free consultation and site survey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Corporate Office</h3>
                  <p className="text-text-gray leading-relaxed">
                    Family Anchor Facilities Pvt. Ltd.<br />
                    123 Business Hub, Sector 62,<br />
                    Noida, Uttar Pradesh 201309
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-text-gray leading-relaxed">
                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a><br />
                    <a href="tel:01201234567" className="hover:text-primary transition-colors">0120 123 4567</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-text-gray leading-relaxed">
                    <a href="mailto:info@familyanchor.com" className="hover:text-primary transition-colors">info@familyanchor.com</a><br />
                    <a href="mailto:support@familyanchor.com" className="hover:text-primary transition-colors">support@familyanchor.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 relative group bg-[#0A1A2F]">
               <div className="absolute inset-0 opacity-50 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Noida,UP&zoom=13&size=800x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0xffffff&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:all|element:labels.icon|visibility:off&style=feature:landscape|element:geometry|color:0x050b14&style=feature:poi|element:geometry|color:0x0e2746&style=feature:road|element:geometry|color:0x1b365d&style=feature:transit|element:geometry|color:0x0e2746&style=feature:water|element:geometry|color:0x081320&key=YOUR_API_KEY')] bg-cover bg-center mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 animate-pulse">
                   <MapPin className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(8,169,230,0.8)]" />
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-10 relative">
              <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      className={inputClasses('name')}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={(e) => setFocusedInput(e.target.value ? 'name' : null)}
                    />
                    <label htmlFor="name" className={labelClasses('name')}>Full Name</label>
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="company"
                      className={inputClasses('company')}
                      onFocus={() => setFocusedInput('company')}
                      onBlur={(e) => setFocusedInput(e.target.value ? 'company' : null)}
                    />
                    <label htmlFor="company" className={labelClasses('company')}>Company Name</label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      className={inputClasses('email')}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={(e) => setFocusedInput(e.target.value ? 'email' : null)}
                    />
                    <label htmlFor="email" className={labelClasses('email')}>Email Address</label>
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      id="phone"
                      className={inputClasses('phone')}
                      onFocus={() => setFocusedInput('phone')}
                      onBlur={(e) => setFocusedInput(e.target.value ? 'phone' : null)}
                    />
                    <label htmlFor="phone" className={labelClasses('phone')}>Phone Number</label>
                  </div>
                </div>

                <div className="relative">
                  <select 
                    id="service"
                    className={`${inputClasses('service')} appearance-none`}
                    onFocus={() => setFocusedInput('service')}
                    onBlur={(e) => setFocusedInput(e.target.value ? 'service' : null)}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-dark-navy">Select a Service</option>
                    <option value="cctv" className="bg-dark-navy">CCTV Installation</option>
                    <option value="fire" className="bg-dark-navy">Fire Alarm System</option>
                    <option value="access" className="bg-dark-navy">Access Control</option>
                    <option value="pa" className="bg-dark-navy">PA System</option>
                    <option value="guard" className="bg-dark-navy">Security Guard Services</option>
                  </select>
                </div>

                <div className="relative">
                  <textarea 
                    id="message"
                    rows={4}
                    className={`${inputClasses('message')} resize-none`}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={(e) => setFocusedInput(e.target.value ? 'message' : null)}
                  ></textarea>
                  <label htmlFor="message" className={labelClasses('message')}>Your Message</label>
                </div>

                <button className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] glow-hover flex items-center justify-center gap-2 group">
                  Submit Request
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
