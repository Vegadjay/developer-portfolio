import React from "react";
import { personalInfo } from "@/data/personal-info";

const Skills = () => (
  <div className="mx-auto max-w-4xl space-y-3 px-4 sm:px-6 lg:px-8">
    <h2 className="font-bold text-zinc-900 sm:text-2xl md:text-3xl dark:text-white">
      Skills & Tools
    </h2>
    <div className="flex flex-wrap gap-2">
      {personalInfo.skills.map((skill) => (
        <span
          key={skill}
          className="cursor-default rounded-md bg-zinc-100 px-3 py-1 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          {skill.charAt(0).toUpperCase() + skill.slice(1)}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
