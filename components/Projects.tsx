"use client";

import React from "react";
import { heroProjectsData } from "@/data/heroprojects";
import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white py-20 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 lg:text-5xl dark:text-white">
            Featured Projects
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-zinc-600 dark:text-zinc-400">
            Here are some of my featured projects. Each one represents a unique
            challenge and learning experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {heroProjectsData.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-zinc-700 dark:bg-zinc-800"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                    <Star size={14} />
                    Featured
                  </div>
                </div>
              )}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-blue-500/20 to-purple-500/20">
                  <div className="text-6xl font-bold text-white/30">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/20 px-4 py-3 font-medium text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/30"
                    >
                      <Github size={20} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-zinc-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
