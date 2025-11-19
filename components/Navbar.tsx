import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Paintbrush, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-white/10 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Paintbrush size={20} />
          </div>
          <span className={`text-xl font-bold serif-font tracking-wider transition-colors ${isScrolled ? 'text-zinc-900 dark:text-white' : 'text-white'}`}>
            DreamSpace
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-indigo-500 hover:after:w-full after:transition-all duration-300
                ${isScrolled ? 'text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white' : 'text-zinc-300 hover:text-white'}
              `}
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110
              ${isScrolled ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white' : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20'}
            `}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#contact"
            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105
              ${isScrolled 
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200' 
                : 'bg-white text-black hover:bg-zinc-200'
              }
            `}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${isScrolled ? 'text-zinc-900 dark:text-white' : 'text-white'}`}
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          
          <button
            className={`${isScrolled ? 'text-zinc-900 dark:text-white' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 md:hidden shadow-2xl rounded-b-3xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-800 dark:text-zinc-300 text-lg font-medium hover:text-indigo-600 dark:hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold mt-4 shadow-lg"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;