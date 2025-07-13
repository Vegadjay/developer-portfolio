"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '../data/aboutme';
import { Github, Linkedin, Code, Twitter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Clock from '../components/Clock';
import Image from 'next/image';
import Projects from './components/Projects';

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    leetcode: Code,
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Top Row: Image, Name, and Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6 mb-6"
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ 
              opacity: imageLoaded ? 1 : 0,
              filter: imageLoaded ? "blur(0px)" : "blur(10px)"
            }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src={aboutMeData.profileImage}
              alt={aboutMeData.name}
              className="w-28 h-28 lg:w-32 lg:h-32 rounded-lg object-cover shadow-xl" 
              width={160}
              height={160}
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
          
          {/* Name and Availability */}
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white">
              {aboutMeData.name}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zinc-600 dark:text-zinc-400"
            >
              {aboutMeData.title}
            </motion.p>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-4 mt-2"
          >
            {Object.entries(aboutMeData.socialLinks).map(([platform, url], index) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 text-zinc-600 dark:text-zinc-300"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
          </div>
        </motion.div>

        {/* Content Below */}
        <div className="space-y-6">
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-3"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">About Me</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {aboutMeData.description}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I'm currently learning modern web development technologies and building projects to improve my skills. 
              I enjoy solving coding challenges and contributing to open-source projects.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-3"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Skills & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {aboutMeData.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="mt-2">
        <Projects />
      </section>

      <Navigation />
    </main>
  );
}