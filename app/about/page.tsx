"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '@/data/aboutme';
import { Github, Linkedin, Code } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function About() {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    leetcode: Code,
  };

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
              About Me
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {aboutMeData.description}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  I started my coding journey with online tutorials and courses. I love the problem-solving aspect 
                  of programming and the satisfaction of building something from scratch. Currently, I'm focusing 
                  on frontend development while gradually learning backend technologies.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  When I'm not coding, I enjoy reading tech blogs, watching coding tutorials, and participating 
                  in coding challenges to improve my skills.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-zinc-900 dark:text-white">Location:</span>
                  <span className="text-zinc-600 dark:text-zinc-300">{aboutMeData.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-zinc-900 dark:text-white">Email:</span>
                  <span className="text-zinc-600 dark:text-zinc-300">{aboutMeData.email}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {Object.entries(aboutMeData.socialLinks).map(([platform, url], index) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons];
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {aboutMeData.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center"
                  >
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">{skill}</span>
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