import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-900 dark:bg-black text-white pt-24 pb-12 border-t border-zinc-800 dark:border-zinc-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold serif-font mb-8">
              Ready to Transform<br />Your Space?
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Whether it's a commercial project or a private residence in Adelaide, we'd love to hear your ideas. Contact us for a free consultation and quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 dark:bg-zinc-900 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-medium font-serif">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 dark:bg-zinc-900 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-medium font-serif">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 dark:bg-zinc-900 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Studio</p>
                  <p className="text-xl font-medium font-serif">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-800/50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-zinc-700/50 dark:border-zinc-800 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2 ml-1">Name</label>
                  <input type="text" className="w-full bg-zinc-900/50 dark:bg-black/50 border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-5 py-4 rounded-2xl outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2 ml-1">Phone</label>
                  <input type="tel" className="w-full bg-zinc-900/50 dark:bg-black/50 border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-5 py-4 rounded-2xl outline-none transition-all" placeholder="0400 000 000" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2 ml-1">Project Type</label>
                <div className="relative">
                    <select className="w-full bg-zinc-900/50 dark:bg-black/50 border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-5 py-4 rounded-2xl outline-none transition-all appearance-none">
                    <option>Commercial Mural</option>
                    <option>Home Decor</option>
                    <option>Outdoor / Graffiti</option>
                    <option>Other Inquiry</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2 ml-1">Description</label>
                <textarea rows={4} className="w-full bg-zinc-900/50 dark:bg-black/50 border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-5 py-4 rounded-2xl outline-none transition-all" placeholder="Tell us about your wall size, ideas, location..."></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-1 tracking-widest uppercase text-sm">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">© 2024 DreamSpace Murals Adelaide. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-indigo-600 transition-all"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-indigo-600 transition-all"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-indigo-600 transition-all"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;