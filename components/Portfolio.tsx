import React, { useRef, useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Portfolio: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [width]);

  return (
    <section id="portfolio" className="py-24 bg-zinc-100 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-500">
      {/* Background gradient blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0 text-center md:text-left">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white serif-font mb-4"
          >
            Selected Works
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto md:mx-0"></div>
        </div>
        <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-200 dark:border-white/10">
          <ArrowLeft size={18} className="animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase">Swipe</span>
          <ArrowRight size={18} className="animate-pulse" />
        </div>
      </div>

      {/* Carousel Container */}
      <div className="pl-6 md:pl-[10vw] w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y">
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 md:gap-10 py-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative min-w-[85vw] md:min-w-[450px] lg:min-w-[550px] h-[500px] md:h-[650px] group overflow-hidden rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-black/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase mb-3 shadow-lg">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-3 serif-font">
                      {project.title}
                    </h3>
                    <p className="text-zinc-200 text-sm leading-relaxed line-clamp-3 backdrop-blur-sm bg-black/10 p-2 rounded-lg">
                      {project.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div 
             className="min-w-[85vw] md:min-w-[450px] h-[500px] md:h-[650px] flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-lg"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
          >
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                  <ArrowRight size={40} />
              </div>
              <h3 className="text-3xl text-zinc-900 dark:text-white mb-4 serif-font font-bold">Inspired?</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-xs mx-auto">Let's turn your blank walls into masterpieces.</p>
              <a href="#contact" className="inline-block px-10 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Start Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;