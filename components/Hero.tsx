"use client";

import React from "react";
import { aboutMeData } from "@/data/aboutme";
import { Github, Linkedin, Code, Twitter } from "lucide-react";
import Image from "next/image";
import { motion, px } from "motion/react";

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
  return (
    <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center gap-6">
        <motion.div
          initial={{ filter: "blur(3px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Image
            src={aboutMeData.profileImage}
            alt={aboutMeData.name}
            className="h-28 w-28 rounded-lg object-cover shadow-xl lg:h-32 lg:w-32"
            width={160}
            height={160}
          />
        </motion.div>
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold text-zinc-900 lg:text-5xl dark:text-white">
            {aboutMeData.name}
          </h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400">
            {aboutMeData.title}
          </p>
          <div className="mt-2 flex space-x-4">
            {Object.entries(aboutMeData.socialLinks).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-lg border-2 bg-transparent p-2 text-zinc-600 transition-colors duration-200 dark:text-zinc-300"
                  title={getPlatformName(platform)}
                >
                  <Icon size={20} />
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 transform rounded-md bg-zinc-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-900">
                    {getPlatformName(platform)}
                    <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-4 border-r-4 border-l-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
