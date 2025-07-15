"use client";

import React from "react";
import Projects from "@/components/Projects";
import Navigation from "@/components/Navigation";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-900">
      <Projects />
      <Navigation />
    </main>
  );
}
