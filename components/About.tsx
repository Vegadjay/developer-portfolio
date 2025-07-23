"use client";

import React from "react";
import { personalInfo } from "@/data/personal-info";

const About = () => (
  <div className="mx-auto max-w-4xl space-y-3 px-4 sm:px-6 lg:px-8">
    <h2 className="font-bold text-zinc-900 sm:text-2xl md:text-3xl dark:text-white">
      About Me
    </h2>
    <p className="text-base leading-relaxed whitespace-pre-line text-zinc-600 sm:text-lg md:text-xl dark:text-zinc-400">
      {personalInfo.description}
    </p>
  </div>
);

export default About;
