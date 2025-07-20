"use client";

import React, { useState, useMemo } from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function ProjectsPage() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  // This function is for get all the technologies from the projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // And this function is for filter the projects based on the user preferences
  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) {
      return projectsData;
    }
    return projectsData.filter((project) =>
      project.technologies.some((tech) => selectedTechs.includes(tech)),
    );
  }, [selectedTechs]);

  const handleTechToggle = (tech: string) => {
    setSelectedTechs((prev) => {
      if (prev.includes(tech)) {
        return prev.filter((t) => t !== tech);
      } else {
        return [...prev, tech];
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors duration-300 dark:bg-zinc-900">
      <main className="mx-auto mt-24 mb-28 flex w-full max-w-4xl flex-1 flex-col justify-start space-y-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Here&apos;s the stuff, I made because my brain said, &quot;Trust me,
          this is a good idea&quot;... and I didn&apos;t question it.
        </p>

        {/* This is the filter component */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {selectedTechs.length > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechToggle(tech)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedTechs.includes(tech)
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          {selectedTechs.length > 0 && (
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
              {selectedTechs.length > 0 && (
                <> using: {selectedTechs.join(", ")}</>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.technologies.map((tech) => ({ name: tech }))}
              link={project.liveUrl}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              No projects found for the selected technologies.
            </p>
          </div>
        )}
      </main>
      <Navigation />
    </div>
  );
}
