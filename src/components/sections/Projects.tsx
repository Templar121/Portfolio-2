import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = activeTab
    ? projects.filter(project => project.tags.includes(activeTab))
    : projects;

  return (
    <section id="projects" className={`py-16 sm:py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-slate-900 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]'
      }`}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Exploring the intersection of machine learning and real-world applications.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8 px-2 relative z-10"
        >
          <button
            onClick={() => setActiveTab(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === null
                ? `${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'} shadow-lg`
                : `${theme === 'dark' 
                    ? 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  } backdrop-blur-sm`
            }`}
          >
            All
          </button>
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tag
                  ? `${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'} shadow-lg`
                  : `${theme === 'dark' 
                      ? 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    } backdrop-blur-sm`
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border ${
                theme === 'dark' 
                  ? 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'
                  : 'bg-white/90 border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-bold mb-2 line-clamp-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm sm:text-base mb-4 line-clamp-3 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 text-xs font-medium rounded-full border ${
                        theme === 'dark' 
                          ? 'bg-blue-900/50 text-blue-400 border-blue-500/30'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 transition-colors ${
                        theme === 'dark' 
                          ? 'text-blue-400 hover:text-blue-300'
                          : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 transition-colors ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
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

export default Projects;