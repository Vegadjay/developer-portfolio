"use client";

import React, { useState, useRef } from "react";
import { heroProjectsData } from "@/data/heroprojects";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-3">
        <h1 className="font-bold text-zinc-900 sm:text-2xl md:text-3xl dark:text-white">
          Projects
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          {heroProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.technologies.map((tech) => ({ name: tech }))}
              link={project.liveUrl || project.githubUrl}
            />
          ))}
        </div>
        <div className="mt-10 text-center text-zinc-900 hover:cursor-pointer dark:text-white">
          <div className="flex items-center justify-center">
            <Link href={"/projects"} rel="noopener noreferrer">
              View More
            </Link>
            <ArrowDown className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
