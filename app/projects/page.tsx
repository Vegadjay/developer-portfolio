"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/app/components/ProjectCard";
import Navigation from "@/components/Navigation";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors duration-300 dark:bg-zinc-900">
      <main className="mx-auto mt-24 flex w-full max-w-4xl flex-1 flex-col justify-start space-y-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight">Projects</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.technologies.map((tech) => ({ name: tech }))}
              link={project.liveUrl}
            />
          ))}
        </div>
      </main>
      <Navigation />
    </div>
  );
}
