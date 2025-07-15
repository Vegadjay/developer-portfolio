"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutMeData } from "@/data/aboutme";

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="space-y-3"
  >
    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
      About Me
    </h2>
    <p className="whitespace-pre-line leading-relaxed text-zinc-600 dark:text-zinc-400">
      {aboutMeData.description}
    </p>
  </motion.div>
);

export default About;
