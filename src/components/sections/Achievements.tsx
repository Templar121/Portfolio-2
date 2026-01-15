import React from 'react';
import { achievements } from '../../data/portfolioData';
import { Trophy, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Achievements: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="achievements" className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-black to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_60%_60%,rgba(147,51,234,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_60%_60%,rgba(147,51,234,0.05),transparent_50%)]'
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
            Achievements
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Recognition and milestones in my professional journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-8 sm:space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Achievement icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="flex-shrink-0 md:absolute left-6 md:transform md:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg z-10 mb-4 md:mb-0 mx-auto md:mx-0"
                >
                  <Trophy size={20} className="text-white" />
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
                          {achievement.title}
                        </h3>
                        <div className={`flex flex-col sm:flex-row sm:items-center gap-2 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span className={`font-medium ${
                            theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                          }`}>
                            {achievement.issuer}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className={`flex items-center gap-1 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Calendar size={14} />
                          <span>{achievement.date}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${
                          theme === 'dark' 
                            ? 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30'
                            : 'text-yellow-700 bg-yellow-50 border-yellow-200'
                        }`}>
                          Achievement
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mb-4">
                      <Award size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                      <p className={`text-sm sm:text-base ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {achievement.description}
                      </p>
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

export default Achievements;