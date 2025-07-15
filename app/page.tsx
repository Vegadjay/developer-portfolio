"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import PhotoGallery from "./components/PhotoGallery";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-900">
      <Hero />
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Content Below */}
        <div className="space-y-6">
          <About />
          <Skills />
        </div>
      </div>

      <section className="mt-10">
        <Experience />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <PhotoGallery />
      </section>

      <Navigation />
    </main>
  );
}
