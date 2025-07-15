"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import Image from "next/image";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-white py-10 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-zinc-900 dark:text-white lg:text-4xl"
          >
            Experience
          </motion.h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              title={experience.position}
              company={experience.company}
              duration={experience.duration}
              logo={experience.logo}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  logo: string;
}

const ExperienceCard = ({
  title,
  company,
  duration,
  logo,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className="w-full"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="rounded-lg border border-zinc-200 bg-transparent p-4 dark:border-zinc-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Company Logo Placeholder */}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <span className="text-lg font-bold text-zinc-600 dark:text-zinc-400">
                <Image src={logo} alt={company} width={48} height={48} />
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {duration}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
