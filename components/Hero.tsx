"use client";

import React from "react";
import { personalInfo } from "@/data/personal-info";
import { Github, Linkedin, Code, Twitter, File } from "lucide-react";
import Image from "next/image";
import { motion, px } from "motion/react";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  leetcode: Code,
  resume: File,
};

const getPlatformName = (platform: string) => {
  const names = {
    github: "GitHub",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    leetcode: "LeetCode",
    resume: "Resume",
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
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="h-28 w-28 rounded-lg object-cover shadow-xl lg:h-32 lg:w-32"
            width={160}
            height={160}
          />
        </motion.div>
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold text-zinc-900 lg:text-5xl dark:text-white">
            {personalInfo.name}
          </h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400">
            {personalInfo.title}
          </p>
          <div className="mt-2 flex space-x-4">
            {Object.entries(personalInfo.socialLinks).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              const isResume = platform === "resume";

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative cursor-pointer rounded-lg border-2 bg-transparent p-2 text-zinc-600 transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
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
