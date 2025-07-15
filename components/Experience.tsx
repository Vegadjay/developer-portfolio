"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
          >
            Experience
          </motion.h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-blue-500"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-4 top-0 w-0.5 transform bg-gray-300 dark:bg-gray-600 md:left-1/2 md:-translate-x-0.5"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`ml-12 w-full md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </h4>
                      <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
