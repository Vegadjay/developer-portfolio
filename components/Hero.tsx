"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { aboutMeData } from "@/data/aboutme";
import { Github, Linkedin, Code, Twitter } from "lucide-react";
import Image from "next/image";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  leetcode: Code,
};

const getPlatformName = (platform: string) => {
  const names = {
    github: "GitHub",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    leetcode: "LeetCode",
  };
  return names[platform as keyof typeof names] || platform;
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 flex items-center gap-6"
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: imageLoaded ? 1 : 0,
            filter: imageLoaded ? "blur(0px)" : "blur(10px)",
          }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Image
            src={aboutMeData.profileImage}
            alt={aboutMeData.name}
            className="h-28 w-28 rounded-lg object-cover shadow-xl lg:h-32 lg:w-32"
            width={160}
            height={160}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
        {/* Name and Availability */}
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white lg:text-5xl">
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
            className="mt-2 flex space-x-4"
          >
            {Object.entries(aboutMeData.socialLinks).map(
              ([platform, url], index) => {
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
                    className="group relative rounded-lg border-2 bg-transparent p-2 text-zinc-600 transition-colors duration-200 dark:text-zinc-300"
                    title={getPlatformName(platform)}
                  >
                    <Icon size={20} />
                    {/* Custom Tooltip */}
                    <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-900">
                      {getPlatformName(platform)}
                      <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
                    </div>
                  </motion.a>
                );
              },
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
