import React, { useRef, useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Drag state for desktop mouse interaction
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Check scroll position to toggle button visibility
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Use a small buffer (10px) for float precision
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' 
        ? -(current.clientWidth * 0.75) 
        : (current.clientWidth * 0.75);
      
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Mouse Drag Handlers (Desktop "Swipe")
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // 1.5x scroll speed for natural feel
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section id="portfolio" className="py-24 bg-zinc-100 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-500">
      {/* Background gradient blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0 text-center md:text-left">
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white serif-font mb-4"
          >
            Selected Works
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"></div>
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center gap-3 text-zinc-500 dark:text-zinc-400 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-200 dark:border-white/10">
          <ArrowLeft size={16} className="animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase">Swipe</span>
          <ArrowRight size={16} className="animate-pulse" />
        </div>
      </div>

      {/* Carousel Container with Buttons */}
      <div className="relative group w-full">
        
        {/* Left Button */}
        <div className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-300 hidden md:block ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button 
            onClick={() => scroll('left')}
            className="p-4 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md text-zinc-900 dark:text-white border border-white/40 dark:border-white/10 shadow-lg hover:bg-white/80 dark:hover:bg-black/80 hover:scale-110 transition-all duration-300 group/btn"
          >
            <ChevronLeft size={24} className="group-hover/btn:-translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Right Button */}
        <div className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-300 hidden md:block ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button 
            onClick={() => scroll('right')}
            className="p-4 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md text-zinc-900 dark:text-white border border-white/40 dark:border-white/10 shadow-lg hover:bg-white/80 dark:hover:bg-black/80 hover:scale-110 transition-all duration-300 group/btn"
          >
            <ChevronRight size={24} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Scrollable Area */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 md:gap-10 overflow-x-auto pb-12 pt-4 px-6 md:px-[10vw] snap-x snap-mandatory no-scrollbar touch-pan-x ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              className="relative flex-shrink-0 snap-center w-[85vw] md:w-auto md:min-w-[450px] lg:min-w-[550px] h-[450px] md:h-[600px] group cursor-pointer rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-black/50 border border-white/50 dark:border-white/5 select-none"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => {
                if (!isDragging) setSelectedProject(project);
              }}
            >
              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay (Hint) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                    <Maximize2 size={32} />
                 </div>
              </div>

              {/* Bottom Info Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="bg-white/90 dark:bg-black/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0 border border-white/20 dark:border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase shadow-md">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2 serif-font">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div 
             className="flex-shrink-0 snap-center w-[85vw] md:w-auto md:min-w-[450px] h-[450px] md:h-[600px] flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-lg"
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
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-zinc-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/30 dark:bg-white/30 backdrop-blur-md text-white hover:bg-black/50 dark:hover:bg-white/50 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-white/10"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-3/5 h-[300px] md:h-auto relative shrink-0">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col bg-white dark:bg-zinc-900">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white serif-font leading-tight mb-6">
                    {selectedProject.title}
                  </h3>
                  <div className="h-1 w-20 bg-indigo-500 rounded-full mb-8"></div>
                </div>
                
                <div className="prose dark:prose-invert">
                  <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    We worked closely with the client to ensure the color palette matched the surrounding environment while providing a striking visual element. The mural was executed using premium weather-resistant paints to ensure longevity.
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    Inquire About This Style
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;