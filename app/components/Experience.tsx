"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="bg-white py-10 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 lg:text-4xl dark:text-white">
            Experience
          </h1>
        </div>
        <div className="space-y-4">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.position}
              company={experience.company}
              duration={experience.duration}
              logo={experience.logo}
            />
          ))}
        </div>
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
    <div className="w-full">
      <div className="rounded-lg border border-zinc-200 bg-transparent p-4 dark:border-zinc-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
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
    </div>
  );
};

export default Experience;
