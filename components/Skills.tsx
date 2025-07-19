import React from "react";
import { aboutMeData } from "@/data/aboutme";

const Skills = () => (
  <div className="space-y-3">
    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
      Skills & Tools
    </h2>
    <div className="flex flex-wrap gap-2">
      {aboutMeData.skills.map((skill) => (
        <span
          key={skill}
          className="rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
