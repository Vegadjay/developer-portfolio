import React from "react";
import { motion } from "framer-motion";
import { aboutMeData } from "@/data/aboutme";

const Skills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="space-y-3"
  >
    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
      Skills & Tools
    </h2>
    <div className="flex flex-wrap gap-2">
      {aboutMeData.skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 + index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default Skills;
