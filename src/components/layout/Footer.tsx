import React from 'react';
import { socialLinks, personalInfo } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  return (
    <footer className={`py-8 sm:py-12 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black via-slate-900 to-black' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
    }`} id="contact">
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)]'
          : 'bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_50%,transparent_75%)]'
      }`}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <h3 className={`text-lg sm:text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Contact</h3>
            <p className={`mb-4 text-sm sm:text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>{personalInfo.about}</p>
            <div className="flex flex-col space-y-2">
              <p className={`text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span className="font-medium">Location:</span> {personalInfo.location}
              </p>
              <p className={`text-sm sm:text-base break-words ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span className="font-medium">Email:</span>{' '}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`hover:underline ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h3 className={`text-lg sm:text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a
                  href="#home"
                  className={`transition-colors text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`transition-colors text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className={`transition-colors text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className={`transition-colors text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Certifications
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h3 className={`text-lg sm:text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Connect</h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
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
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`border-t mt-6 sm:mt-10 pt-4 sm:pt-6 text-center ${
            theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200'
          }`}
        >
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;