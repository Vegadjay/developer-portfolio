"use client";

import React from "react";
import { aboutMeData } from "@/data/aboutme";

const About = () => (
  <div className="mx-auto max-w-4xl space-y-3 px-4 sm:px-6 lg:px-8">
    <h2 className="font-bold text-zinc-900 sm:text-2xl md:text-3xl dark:text-white">
      About Me
    </h2>
    <p className="leading-relaxed whitespace-pre-line text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl">
      {aboutMeData.description}
    </p>
  </div>
);

export default About;
