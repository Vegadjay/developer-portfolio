/**
 * ALL PROJECTS CONFIGURATION
 *
 * This file contains all your projects that appear in the projects section.
 * Include everything from major projects to small learning experiments.
 */

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

export const allProjects: Project[] = [
  {
    id: "1",
    title: "Rajwadi Poshak | E-Commerce",
    description:
      "Rajwadi Poshak is a feature-rich e-commerce platform that leverages AI-driven image-based recommendations to enhance the shopping experience. Built with modern web technologies, it offers seamless browsing, secure transactions, and an intuitive UI.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Framer Motion",
      "Acternity Ui",
      "Radix UI",
      "React charts",
    ],
    liveUrl: "https://rajwadiposhak.vercel.app",
    image: "/projects/rajwadi-poshak.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Guruqool | Freelance Project",
    description:
      "This platform facilitates seamless interaction between students and teachers through real-time messaging and learning sessions. Students can register, connect with expert educators, and access valuable knowledge across various domains — all through a secure and intuitive interface. The platform supports a paid access model, ensuring quality and accountability.",
    technologies: [
      "React js",
      "Tailwind",
      "Framer-Motion",
      "Lucide-Icons",
      "Razor Pay",
      "Node js",
      "Mongo DB",
      "NPM packages",
      "Cyber Security",
    ],
    liveUrl: "https://guruqool.vercel.app",
    image: "/projects/guruqool.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Project Showcase | Vibe code project",
    description:
      "This project was created using Vibe Coding and primarily developed with AI. My contribution to the project involved enhancing the user interface and adding new elements, such as custom cards. However, I did not write the core code for this project myself.",
    technologies: ["Replit AI Agent", "Vibe coding"],
    liveUrl: "https://codefolio1.vercel.app/",
    image: "/projects/project-showcase.jpg",
  },
  {
    id: "4",
    title: "Blog application | Vibe code project",
    description:
      "This project was created using Vibe Coding and primarily developed with AI. My contribution to the project involved enhancing the user interface and adding new elements, such as custom cards. However, I did not write the core code for this project myself.",
    technologies: ["Lovable AI Agent", "Vibe coding"],
    liveUrl: "https://advnaceblogify.vercel.app/",
    image: "/projects/blog-app.jpg",
  },
  {
    id: "5",
    title: "Quiz application | Vibe code project",
    description:
      "This project was created using Vibe Coding and primarily developed with AI. My contribution to the project involved enhancing the user interface and adding new elements, such as custom cards. However, I did not write the core code for this project myself.",
    technologies: ["Lovable AI Agent", "Vibe coding"],
    liveUrl: "https://learn-play-quiz.vercel.app/",
    image: "/projects/quiz-app.jpg",
  },
  {
    id: "6",
    title: "Todo application | Vibe code project",
    description:
      "This project was created using Vibe Coding and primarily developed with AI. My contribution to the project involved enhancing the user interface and adding new elements, such as custom cards. However, I did not write the core code for this project myself.",
    technologies: ["Lovable AI Agent", "Vibe coding", "Cursor IDE"],
    liveUrl: "https://advancetodo123.vercel.app/",
    image: "/projects/todo-app.jpg",
  },
  {
    id: "7",
    title: "Code Editor | Vibe code project",
    description:
      "This project was created using Vibe Coding and primarily developed with AI. My contribution to the project involved enhancing the user interface and adding new elements, such as custom cards. However, I did not write the core code for this project myself.",
    technologies: ["Lovable AI Agent", "Vibe coding", "Cursor IDE"],
    liveUrl: "https://vibejseditor.vercel.app/",
    image: "/projects/code-editor.jpg",
  },
  {
    id: "8",
    title: "Todo App | MERN Stack",
    description:
      "A full-featured Todo application developed using the MERN stack. Includes functionalities like add, edit, delete, and mark as complete with a modern UI and responsive design.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Vegadjay/Mern_Todo",
    image: "/projects/mern-todo.jpg",
  },
  {
    id: "9",
    title: "Stake Game Clone",
    description:
      "A simplified clone of the Stake Mine game, built using React and Tailwind CSS. Developed as a learning project with focus on game logic and animations.",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://minegame-by-jayvegad.netlify.app/",
    image: "/projects/stake-game.jpg",
  },
  {
    id: "10",
    title: "News App | React & Bootstrap",
    description:
      "A news application that consumes a REST API to display categorized news articles. Built using React and Bootstrap. (Currently not live due to API limitations.)",
    technologies: ["React", "Bootstrap", "REST API"],
    githubUrl: "https://github.com/Vegadjay/News-App",
    image: "/projects/news-app.jpg",
  },
  {
    id: "11",
    title: "Tic Tac Toe Game",
    description:
      "Classic Tic Tac Toe game built during the first semester using basic frontend technologies. Fully playable with intuitive UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vegadjay.github.io/Tic-Tac-Toi-Game/",
    image: "/projects/tic-tac-toe.jpg",
  },
  {
    id: "12",
    title: "Rock Paper Scissors Game",
    description:
      "An interactive rock-paper-scissors game developed using HTML, CSS, and JavaScript. One of the first game projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vegadjay.github.io/Rock-Paper-And-Scissor-Game-/",
    image: "/projects/rock-paper-scissors.jpg",
  },
  {
    id: "13",
    title: "Sardar Vallabhbhai Patel Biography",
    description:
      "A static biography website honoring Sardar Vallabhbhai Patel. Built using basic web technologies as a first semester project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vegadjay.github.io/SardarPatel_BioGraphy/",
    image: "/projects/sardar-patel.jpg",
  },
];

/**
 * HOW TO ADD NEW PROJECTS:
 *
 * 1. Copy the project structure above
 * 2. Update the id to be unique
 * 3. Add your project details
 * 4. Include project image in public/projects/ folder
 * 5. Set featured: true for your best projects
 * 6. Projects appear in order, so put important ones first
 */
