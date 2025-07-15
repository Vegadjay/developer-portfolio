export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, shopping cart, and payment integration with Stripe.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Prisma",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.vercel.app",
    image: "/projects/ecommerce.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Material-UI",
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-app.netlify.app",
    image: "/projects/task-manager.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions, forecasts, and historical data with interactive charts and maps.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet", "CSS3"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard.vercel.app",
    image: "/projects/weather.jpg",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and dark mode support.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
    image: "/projects/portfolio.jpg",
  },
  {
    id: "5",
    title: "Chat Application",
    description:
      "Real-time chat application with user authentication, message history, file sharing, and emoji support.",
    technologies: [
      "React",
      "Firebase",
      "Socket.io",
      "Tailwind CSS",
      "React Router",
    ],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-app-demo.vercel.app",
    image: "/projects/chat.jpg",
  },
  {
    id: "6",
    title: "Recipe Finder",
    description:
      "A recipe discovery app that helps users find recipes based on available ingredients, dietary preferences, and cooking time.",
    technologies: ["Vue.js", "Spoonacular API", "Vuex", "Vuetify", "Axios"],
    githubUrl: "https://github.com/yourusername/recipe-finder",
    liveUrl: "https://recipe-finder-vue.netlify.app",
    image: "/projects/recipe.jpg",
  },
];
