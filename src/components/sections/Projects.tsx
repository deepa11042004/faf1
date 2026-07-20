"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "Global Tech Hub",
    category: "Commercial Security",
    image: "/images/hero.png",
    description: "Complete overhaul of access control and CCTV for a 40-story commercial complex."
  },
  {
    title: "Metro Logistics Park",
    category: "Industrial Security",
    image: "/images/about.png",
    description: "Integrated fire alarm and PA system for a 1M sq.ft warehouse facility."
  },
  {
    title: "Azure Residences",
    category: "Residential Security",
    image: "/images/hero.png",
    description: "24/7 security guard deployment and smart surveillance for premium apartments."
  },
  {
    title: "City General Hospital",
    category: "Healthcare Security",
    image: "/images/about.png",
    description: "Specialized access control and monitoring systems for critical care units."
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-text-gray text-lg">
              Explore our portfolio of successful security implementations across various sectors.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all group">
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all group">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.2 },
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="w-full !overflow-visible"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="pb-16">
                <div className="group relative rounded-[2rem] overflow-hidden bg-card aspect-[16/10] sm:aspect-[16/9] md:aspect-video cursor-pointer">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Floating Content Card */}
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 glass-card p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-heading font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-text-gray text-sm md:text-base hidden sm:block">
                          {project.description}
                        </p>
                      </div>
                      <button className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 text-white group-hover:bg-primary group-hover:rotate-45 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
