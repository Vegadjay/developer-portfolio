"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '@/data/experience';
import { Calendar, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Experience() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Experience
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {exp.position}
                  </h3>
                  {exp.current && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <MapPin size={14} className="mr-2" />
                    <span className="font-semibold text-sm">{exp.company}</span>
                  </div>
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 text-sm">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 text-xs">
                      {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Navigation />
    </main>
  );
}