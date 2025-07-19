export interface HeroProjects {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const heroProjectsData: HeroProjects[] = [
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
    title: "Leetcode Clone | Leetcode Clone",
    description:
      "A leetcode clone that displays current weather conditions, forecasts, and historical data with interactive charts and maps. This project is a clone of the popular leetcode app, Leetcode.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Leetcode API"],
    githubUrl: "https://github.com/vegadjay/Leetcode-Clone",
    liveUrl: "https://leetcode-clone-app.vercel.app",
  },
  {
    id: "4",
    title: "Portfolio Website | Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and dark mode support. This project is a clone of the popular portfolio website, Portfolio Website.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/vegadjay/Portfolio-Website",
    liveUrl: "https://portfolio-website-app.vercel.app",
  },
];
