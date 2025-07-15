"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroProjectsData } from "@/data/heroprojects";
import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white py-20 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white lg:text-5xl">
            Featured Projects
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-zinc-600 dark:text-zinc-400">
            Here are some of my featured projects. Each one represents a unique
            challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {heroProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-zinc-700 dark:bg-zinc-800"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute left-4 top-4 z-20">
                  <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                    <Star size={14} />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image Container */}
              <div className="relative h-64 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/40" />

                {/* Placeholder Image - You can replace with actual project images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <div className="text-6xl font-bold text-white/30">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Hover Overlay with Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm"
                >
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/20 px-4 py-3 font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30"
                    >
                      <Github size={20} />
                      Code
                    </motion.a>
                  )}

                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-zinc-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
