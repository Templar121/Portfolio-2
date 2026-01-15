import React from 'react';
import { publications, academicProfiles } from '../../data/portfolioData';
import { FileText, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Publications: React.FC = () => {
  const { theme } = useTheme();
  
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  return (
    <section id="publications" className={`py-16 sm:py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-slate-900 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_75%_25%,rgba(147,51,234,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_75%_25%,rgba(147,51,234,0.05),transparent_50%)]'
      }`}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Research Publications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-base sm:text-lg max-w-2xl mx-auto mb-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Contributing to the advancement of knowledge in machine learning and AI.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {academicProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-3 sm:px-4 py-2 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 border-slate-700/50 text-gray-300'
                    : 'bg-white/90 border-gray-200 text-gray-700'
                }`}
              >
                <DynamicIcon name={profile.icon} />
                <span className="ml-2 text-sm sm:text-base">{profile.platform}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 relative z-10">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border ${
                theme === 'dark' 
                  ? 'bg-slate-800/30 border-slate-700/50'
                  : 'bg-white/90 border-gray-200'
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex items-center justify-center border ${
                    theme === 'dark' 
                      ? 'bg-blue-900/50 border-blue-500/30'
                      : 'bg-blue-50 border-blue-200'
                  }`}>
                    <FileText size={20} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className={`text-base sm:text-xl font-bold mb-2 line-clamp-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {publication.title}
                  </h3>
                  <p className={`text-sm sm:text-base mb-2 line-clamp-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {publication.authors.join(', ')}
                  </p>
                  <div className={`flex flex-wrap items-center text-xs sm:text-sm mb-3 gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <span className="line-clamp-1">{publication.journal}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{publication.year}</span>
                  </div>
                  {publication.doi && (
                    <p className={`text-xs sm:text-sm mb-3 break-all ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      DOI: {publication.doi}
                    </p>
                  )}
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm sm:text-base transition-colors ${
                        theme === 'dark' 
                          ? 'text-blue-400 hover:text-blue-300'
                          : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      <span className="font-medium">Read Publication</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;