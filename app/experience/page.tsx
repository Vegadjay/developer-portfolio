"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function Experience() {
  return (
    <main className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-900">
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
              Experience
            </h1>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-500"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-zinc-800"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {exp.position}
                  </h3>
                  {exp.current && (
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200">
                      Current
                    </span>
                  )}
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <MapPin size={14} className="mr-2" />
                    <span className="text-sm font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>

                <p className="mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">
                      Key Achievements:
                    </h4>
                    <ul className="list-inside list-disc space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                      {exp.achievements
                        .slice(0, 2)
                        .map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
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
