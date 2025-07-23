"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import PhotoGallery from "../components/PhotoGallery";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import {
  showHackathonGallery,
  showExperience,
  showProjects,
  showAbout,
  showContact,
  showSkills,
  showHero,
  showFooter,
} from "@/data/site-config";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      {showHero && <Hero />}

      {showAbout && (
        <section className="mt-10">
          <About />
        </section>
      )}

      {showSkills && (
        <section className="mt-10">
          <Skills />
        </section>
      )}

      {showExperience && (
        <section className="mt-1">
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
