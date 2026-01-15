import React from 'react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  const techChips = ['PyTorch', 'Computer Vision', 'XAI', 'MLOps'];

  return (
    <section id="home" className={`min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-slate-900 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${
        theme === 'dark' ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      <div className={`absolute inset-0 ${
        theme === 'dark' ? 'bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)]' : 'bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_50%,transparent_75%)]'
      }`}></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left lg:col-span-3"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                <span className="block">Hi, I'm</span>
                <span className={`text-transparent bg-clip-text ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400'
                    : 'bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600'
                }`}>
                  {personalInfo.name}
                </span>
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {personalInfo.title}
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={`flex items-center space-x-2 text-xs sm:text-sm px-3 py-1 rounded-full border w-fit mx-auto lg:mx-0 ${
                  theme === 'dark' 
                    ? 'text-blue-400 bg-blue-900/20 border-blue-500/30'
                    : 'text-blue-600 bg-blue-50 border-blue-200'
                }`}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>NPTEL Discipline Star</span>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Building intelligent systems that bridge the gap between cutting-edge ML research and real-world applications.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className={`text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <span className={`font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Currently focused on:</span> Computer Vision, Explainable AI, and end-to-end ML systems.
              </motion.p>
              
              {/* Tech Stack Chips */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2"
              >
                {techChips.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full border ${
                      theme === 'dark' 
                        ? 'bg-slate-800/50 text-gray-300 border-slate-600/50'
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 pt-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 rounded-full backdrop-blur-sm shadow-lg border transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-slate-800/50 text-blue-400 hover:bg-slate-700/50 hover:text-blue-300 border-slate-700/50'
                        : 'bg-white/70 text-blue-600 hover:bg-white hover:text-blue-700 border-gray-200'
                    }`}
                    aria-label={link.platform}
                  >
                    <DynamicIcon name={link.icon} />
                  </motion.a>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold shadow-xl transition-all duration-300 text-lg"
                >
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 sm:px-4 py-2 backdrop-blur-sm rounded-lg font-medium shadow-md border transition-all duration-300 flex items-center justify-center text-sm ${
                    theme === 'dark' 
                      ? 'bg-slate-800/30 text-gray-400 hover:bg-slate-700/30 hover:text-gray-300 border-slate-700/30'
                      : 'bg-white/50 text-gray-600 hover:bg-white hover:text-gray-700 border-gray-200'
                  }`}
                >
                  <DynamicIcon name="FileDown" />
                  <span className="ml-2">Download Resume</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className={`px-3 sm:px-4 py-2 backdrop-blur-sm rounded-lg font-medium shadow-md border transition-all duration-300 text-sm flex items-center justify-center  ${
                    theme === 'dark' 
                      ? 'bg-slate-800/30 text-gray-400 hover:bg-slate-700/30 hover:text-gray-300 border-slate-700/30'
                      : 'bg-white/70 text-gray-700 hover:bg-white hover:text-gray-800 border-gray-300/50'
                  }`}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center lg:col-span-2"
          >
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className={`w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border-2 shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900'
                    : 'border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200'
                }`}
              >
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  loading="eager"
                  style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 text-white px-3 sm:px-4 py-2 rounded-lg shadow-xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-slate-700/50'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 border-gray-200'
                }`}
              >
                <p className="font-medium text-xs sm:text-sm">ML Engineer</p>
              </motion.div>
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
              ></motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
              ></motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;