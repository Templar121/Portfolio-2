import React from 'react';
import { techStacks } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const TechStack: React.FC = () => {
  const { theme } = useTheme();
  
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon className="w-6 h-6" /> : null;
  };

  return (
    <section id="tech-stack" className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-black to-slate-900' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]'
      }`}></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10"
        >
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Tech Stack
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My toolkit for building intelligent systems and solving complex problems.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 lg:space-y-20 relative z-10">
          {techStacks.map((stack, stackIndex) => (
            <motion.div
              key={stackIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
              className={`relative backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border ${
                theme === 'dark' 
                  ? 'bg-slate-800/30 border-slate-700/50' 
                  : 'bg-white/70 border-gray-200/50'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
                  <DynamicIcon name={getIconForCategory(stack.category)} />
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {stack.category}
                </h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {stack.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    className="relative group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-base sm:text-lg font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full border ${
                          theme === 'dark' 
                            ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 text-blue-400 border-blue-500/30'
                            : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border-blue-200'
                        }`}
                      >
                        {getProficiencyLabel(skill.proficiency)}
                      </motion.span>
                    </div>
                    
                    <div className={`relative h-2 rounded-full overflow-hidden ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-slate-700 to-slate-600' 
                        : 'bg-white/90 border-gray-300/30 shadow-lg'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.proficiency / 5) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg"
                      />
                    </div>
                    
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -right-2 -top-2 w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getProficiencyLabel(proficiency: number): string {
  switch (proficiency) {
    case 1: return 'Beginner';
    case 2: return 'Elementary';
    case 3: return 'Intermediate';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return 'Intermediate';
  }
}

function getIconForCategory(category: string): string {
  switch (category) {
    case 'Machine Learning & AI':
      return 'Brain';
    case 'Programming':
      return 'Code2';
    case 'Data Engineering':
      return 'Database';
    case 'MLOps & Tools':
      return 'Settings2';
    default:
      return 'Code';
  }
}

export default TechStack;