"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { heroProjectsData } from '@/data/heroprojects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-10'
>
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
            Projects
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {heroProjectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.technologies.map(tech => ({ name: tech }))}
              link={project.liveUrl || project.githubUrl}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface Tag {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Tag[];
  link?: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [interactionPoint, setInteractionPoint] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      setInteractionPoint({
        x: (e.clientX - rect.left) / rect.width * 100,
        y: (e.clientY - rect.top) / rect.height * 100
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardVariants = {
    hover: {
      transition: { duration: 0.3, ease: "easeOut" }
    },
    initial: {
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hover: (index: number) => ({
      y: -2,
      scale: 1.02,
      backgroundColor: "rgba(139, 69, 19, 0.1)",
      transition: { delay: 0.03 * index, duration: 0.2, type: "spring" }
    }),
    initial: {
      y: 0,
      scale: 1,
      backgroundColor: "transparent",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="relative w-full h-auto min-h-72"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      initial="initial"
      whileHover="hover"
      animate={isHovered ? "hover" : "initial"}
      variants={cardVariants}
      onClick={() => {
        if (link) {
          window.open(link, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <div className="overflow-hidden h-full border border-zinc-200 dark:border-zinc-700 rounded-lg bg-transparent backdrop-blur-sm z-10 shadow-sm hover:shadow-md p-6 cursor-pointer">
        {/* Gradient hover effect that follows mouse */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${interactionPoint.x}% ${interactionPoint.y}%, rgba(139, 69, 19, 0.2) 0%, rgba(160, 82, 45, 0.1) 30%, rgba(210, 180, 140, 0.05) 60%, transparent 80%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease"
          }}
        />

        <div className="relative z-10 space-y-3">
          <motion.h3
            className="text-xl font-semibold text-zinc-900 dark:text-white"
          >
            {title}
          </motion.h3>
        </div>

        <div className="relative z-10 mt-4">
          <motion.p
            className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3"
            variants={{
              hover: {
                opacity: 0.9,
                y: -1,
                transition: { duration: 0.3 }
              },
              initial: {
                opacity: 0.8,
                y: 0,
                transition: { duration: 0.3 }
              }
            }}
          >
            {description}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 text-xs rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-600"
                custom={index}
                variants={tagVariants}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Light border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            borderRadius: 'inherit',
            boxShadow: `0 0 0 1px rgba(139, 69, 19, 0.2), 0 0 10px 1px rgba(139, 69, 19, 0.1)`,
            zIndex: 11,
            opacity: 0
          }}
          animate={isHovered ? {
            opacity: 1,
            transition: { duration: 0.3 }
          } : {
            opacity: 0,
            transition: { duration: 0.1 }
          }}
        />
      </div>
    </motion.div>
  );
};

export default Projects;