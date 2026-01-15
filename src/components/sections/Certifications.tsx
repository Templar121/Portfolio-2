import React from 'react';
import { certifications } from '../../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Certifications: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="certifications" className={`py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-black to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_40%_60%,rgba(147,51,234,0.1),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_40%_60%,rgba(147,51,234,0.05),transparent_50%)]'
      }`}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Professional credentials and certifications from NPTEL demonstrating expertise in various domains.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border ${
                theme === 'dark' 
                  ? 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'
                  : 'bg-white/90 border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="relative h-36 w-full overflow-hidden">
                {certification.image ? (
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="font-medium">{certification.issuer}</p>
                    <p className="text-sm opacity-80">{certification.date}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    <Award size={18} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div className="ml-2">
                    <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {certification.title}
                    </h3>
                    {certification.score && (
                      <p className={`text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`}>
                        Score: {certification.score}
                      </p>
                    )}
                    {certification.credentialId && (
                      <p className={`text-xs mb-2 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Credential ID: {certification.credentialId}
                      </p>
                    )}
                    {certification.credentialLink && (
                      <a
                        href={certification.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm transition-colors ${
                          theme === 'dark' 
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        <span className="font-medium">Verify</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;