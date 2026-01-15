import React from 'react';
import { experiences } from '../../data/portfolioData';
import { Briefcase, MapPin, Calendar, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Experience: React.FC = () => {
  const { theme } = useTheme();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return theme === 'dark' ? 'text-green-400 bg-green-900/30 border-green-500/30' : 'text-green-700 bg-green-50 border-green-200';
      case 'internship':
        return theme === 'dark' ? 'text-blue-400 bg-blue-900/30 border-blue-500/30' : 'text-blue-700 bg-blue-50 border-blue-200';
      case 'freelance':
        return theme === 'dark' ? 'text-purple-400 bg-purple-900/30 border-purple-500/30' : 'text-purple-700 bg-purple-50 border-purple-200';
      default:
        return theme === 'dark' ? 'text-gray-400 bg-gray-900/30 border-gray-500/30' : 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  return (
    <section id="experience" className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-slate-900 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.05),transparent_50%)]'
      }`}></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 relative z-10"
        >
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Work Experience
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My professional journey in machine learning and artificial intelligence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {experiences.map((experience, index) => (
              <motion.div 
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-8 sm:mb-12"
              >
                {/* Company icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="flex-shrink-0 md:absolute left-6 md:transform md:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg z-10 mb-4 md:mb-0 mx-auto md:mx-0"
                >
                  <Briefcase size={20} className="text-white" />
                </motion.div>

                <div className="md:ml-16">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border ${
                      theme === 'dark' 
                        ? 'bg-slate-800/30 border-slate-700/50' 
                        : 'bg-white/90 border-gray-300/30 shadow-lg'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="mb-3 sm:mb-0">
                        <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {experience.title}
                        </h3>
                        <div className={`flex flex-col sm:flex-row sm:items-center gap-2 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span className={`font-medium ${
                            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {experience.company}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className={`flex items-center gap-1 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Calendar size={14} />
                          <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(experience.type)}`}>
                          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1).replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    <ul className={`space-y-2 mb-4 text-sm sm:text-base ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 mb-3">
                      <Code size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Technologies:
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 text-xs font-medium rounded-full border ${
                            theme === 'dark' 
                              ? 'bg-slate-700/50 text-gray-300 border-slate-600/50'
                              : 'bg-gray-100 text-gray-700 border-gray-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;