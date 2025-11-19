import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950 relative transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white serif-font mb-8 leading-tight">
              Art Integreted into <br/> Every Corner of Life
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
              Established in 2015, DreamSpace is a collective of passionate artists dedicated to beauty and detail. We believe that a wall is not just a boundary, but a canvas to express personality and convey emotion.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
              Whether it's a massive commercial complex or a cozy private bedroom, we craft unique visual feasts tailored to your space. Based in Adelaide, we have served over 500 clients across Australia.
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <div>
                <span className="text-3xl font-bold text-zinc-900 dark:text-white block mb-1">8+</span>
                <span className="text-zinc-500 text-sm">Years Experience</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-zinc-900 dark:text-white block mb-1">500+</span>
                <span className="text-zinc-500 text-sm">Projects Done</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-zinc-900 dark:text-white block mb-1">100%</span>
                <span className="text-zinc-500 text-sm">Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
               <img 
                 src="https://picsum.photos/seed/artistworking/600/800" 
                 alt="Artist working on mural" 
                 className="w-full max-w-md ml-auto rounded-3xl shadow-2xl dark:shadow-black/50"
               />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-20 z-0 mix-blend-multiply dark:mix-blend-normal"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-600 rounded-full blur-3xl opacity-20 z-0 mix-blend-multiply dark:mix-blend-normal"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;