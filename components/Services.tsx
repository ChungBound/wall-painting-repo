import React from 'react';
import { SERVICES } from '../constants';
import { Brush, PaintBucket, Palette, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const IconMap = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Brush': return <Brush className={className} />;
    case 'SprayCan': return <PaintBucket className={className} />; 
    case 'Palette': return <Palette className={className} />;
    case 'Scaling': return <Box className={className} />;
    default: return <Brush className={className} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white serif-font mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            From concept design to final execution, we provide full-service artistic solutions across Adelaide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 relative overflow-hidden shadow-lg dark:shadow-none hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background Icon */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 text-black dark:text-white">
                <IconMap name={service.iconName} className="w-32 h-32" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconMap name={service.iconName} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;