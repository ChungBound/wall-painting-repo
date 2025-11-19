import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/muralhero/1920/1080" 
          alt="Adelaide Mural Art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950 dark:to-zinc-950 to-zinc-50/10"></div>
        {/* Additional overlay to ensure text pop on light mode if opacity changes */}
        <div className="absolute inset-0 bg-black/30"></div> 
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-zinc-300 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-medium">
            Adelaide Based · Professional Mural Artist
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 serif-font leading-tight drop-shadow-2xl">
            Make Every Wall <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-200">
              Tell a Story
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-200 text-lg md:text-xl font-light leading-relaxed mb-12 drop-shadow-md">
            We don't just paint; we reshape spaces. Using color and creativity to give soul and warmth to architecture across South Australia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#portfolio"
            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg min-w-[200px] overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-medium text-lg min-w-[200px] shadow-lg hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;