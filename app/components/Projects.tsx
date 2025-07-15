"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { heroProjectsData } from "@/data/heroprojects";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { ProjectCard } from "@/app/components/ProjectCard";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-zinc-900 dark:text-white lg:text-4xl"
          >
            Projects
          </motion.h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {heroProjectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.technologies.map((tech) => ({ name: tech }))}
              link={project.liveUrl || project.githubUrl}
            />
          ))}
        </motion.div>

        <div className="mt-10 text-center text-zinc-900 hover:cursor-pointer dark:text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex animate-pulse items-center justify-center"
          >
            <Link href={"/projects"} target="_blank" rel="noopener noreferrer">
              View More
            </Link>
            <ArrowDown className="ml-2 h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
