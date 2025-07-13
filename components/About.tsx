"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '../data/aboutme';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

const About = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    portfolio: Globe,
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutMeData.description}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that make a difference. 
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-900 dark:text-white">Location:</span>
                <span className="text-gray-600 dark:text-gray-300">{aboutMeData.location}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-900 dark:text-white">Email:</span>
                <span className="text-gray-600 dark:text-gray-300">{aboutMeData.email}</span>
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
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {aboutMeData.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;