"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutMeData } from "@/data/aboutme";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

export default function About() {
  return (
    <main className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-900">
      <Hero />
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
              About Me
            </h1>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-500"></div>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {aboutMeData.description}
                </p>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
                  I started my coding journey with online tutorials and courses.
                  I love the problem-solving aspect of programming and the
                  satisfaction of building something from scratch. Currently,
                  I'm focusing on frontend development while gradually learning
                  backend technologies.
                </p>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
                  When I'm not coding, I enjoy reading tech blogs, watching
                  coding tutorials, and participating in coding challenges to
                  improve my skills.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Location:
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {aboutMeData.location}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Email:
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {aboutMeData.email}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {aboutMeData.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg bg-white p-4 text-center shadow-sm transition-all duration-200 hover:shadow-md dark:bg-zinc-800"
                  >
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Navigation />
    </main>
  );
}
