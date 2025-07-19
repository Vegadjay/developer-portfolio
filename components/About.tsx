"use client";

import React from "react";
import { aboutMeData } from "@/data/aboutme";

const About = () => (
  <div className="space-y-3">
    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
      About Me
    </h2>
    <p className="leading-relaxed whitespace-pre-line text-zinc-600 dark:text-zinc-400">
      {aboutMeData.description}
    </p>
  </div>
);

export default About;
