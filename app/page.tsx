"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '@/data/aboutme';
import { Github, Linkedin, Code, Twitter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Projects from '@/app/components/Projects';
import Experience from '@/app/components/Experience';

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    leetcode: Code,
  };

  const getPlatformName = (platform: string) => {
    const names = {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      leetcode: 'LeetCode'
    };
    return names[platform as keyof typeof names] || platform;
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      {/* Time Display */}
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm"
        >
          <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {currentTime.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit',
              second: '2-digit',
              hour12: true 
            })}
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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
            <h1 className="text-3xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
              {aboutMeData.name}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-zinc-600 dark:text-zinc-400"
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
                  className="relative group p-2 bg-transparent rounded-lg border-2 transition-colors duration-200 text-zinc-600 dark:text-zinc-300"
                  title={getPlatformName(platform)}
                >
                  <Icon size={20} />
                  
                  {/* Custom Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {getPlatformName(platform)}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
                  </div>
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
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
              {aboutMeData.description}
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

      <section className='mt-10'>
        <Experience />
      </section>

      <section>
        <Projects />
      </section>

      <Navigation />
    </main>
  );
}