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
import Contact from "@/app/components/Contact";
import Divider from "@/components/Divider";
import Footer from "@/app/components/Footer";
import {
  showHackathonGallery,
  showExperience,
  showProjects,
  showAbout,
  showContact,
  showSkills,
  showHero,
  showFooter,
} from "@/data/featureToggles";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      {showHero && <Hero />}
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {showAbout && <About />}
          {showSkills && <Skills />}
        </div>
      </div>

      {showExperience && (
        <section className="mt-10">
          <Experience />
        </section>
      )}

      {showProjects && (
        <section>
          <Projects />
        </section>
      )}

      {showHackathonGallery && (
        <section>
          <PhotoGallery />
        </section>
      )}

      {showContact && (
        <section>
          <Contact />
        </section>
      )}

      <Navigation />
    </main>
  );
}
