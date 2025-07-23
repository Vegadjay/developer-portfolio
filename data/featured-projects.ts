/**
 * FEATURED PROJECTS CONFIGURATION
 *
 * This file contains your most important projects that appear in the hero section.
 * These should be your best work that you want to highlight prominently.
 */

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "1",
    title: "Rajwadi Poshak | E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, shopping cart, and payment integration with Stripe. This project is a clone of the popular e-commerce platform, Amazon.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Prisma",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/vegadjay/Rajwadi-Poshak",
    liveUrl: "https://rajwadiposhak.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    title: "Guruqool | Freelance project",
    description:
      "In this project, we build a platform for student and teacher to connect with each other. This project is a clone of the popular platform, Guruqool.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Material-UI",
    ],
    githubUrl: "https://github.com/vegadjay/Guruqool-frontend",
    liveUrl: "https://guruqool.vercel.app/",
    featured: true,
  },
  {
    id: "3",
    title: "Project Showcase | Vibe code project",
    description:
      "This project was created using Vibe Coding and primarily developed with AI. My contribution to the project involved enhancing the user interface and adding new elements, such as custom cards. However, I did not write the core code for this project myself. This project is a clone of the popular project showcase website, Project Showcase.",
    technologies: ["Replit AI Agent", "Vibe coding"],
    githubUrl: "https://github.com/vegadjay/Project-Showcase",
    liveUrl: "https://codefolio1.vercel.app/",
  },
  {
    id: "4",
    title: "Sardar Vallabhbhai Patel Biography",
    description:
      "A static biography website honoring Sardar Vallabhbhai Patel. Built using basic web technologies as a first semester project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/vegadjay/SardarPatel_BioGraphy",
    liveUrl: "https://vegadjay.github.io/SardarPatel_BioGraphy/",
  },
];

/**
 * HOW TO MODIFY FEATURED PROJECTS:
 *
 * 1. These projects appear prominently on your homepage
 * 2. Keep only your 3-4 best projects here
 * 3. Set featured: true for projects you want to highlight most
 * 4. Include both githubUrl and liveUrl when available
 * 5. Use descriptive titles and clear descriptions
 */
