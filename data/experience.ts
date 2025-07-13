export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements: string[];
  current: boolean;
}

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Inc",
    position: "Frontend Developer Intern",
    duration: "Jun 2023 - Present",
    startDate: "2023-06",
    endDate: "",
    description: "Working on responsive web applications using React and TypeScript. Collaborating with senior developers to implement new features and improve user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
    achievements: [
      "Built 3 responsive landing pages",
      "Improved website loading speed by 25%",
      "Learned modern development practices"
    ],
    current: true
  },
  {
    id: "2",
    company: "Freelance Projects",
    position: "Web Developer",
    duration: "Jan 2023 - May 2023",
    startDate: "2023-01",
    endDate: "2023-05",
    description: "Created websites for local businesses using HTML, CSS, and JavaScript. Focused on responsive design and user-friendly interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    achievements: [
      "Completed 5 client projects",
      "Gained experience in client communication",
      "Learned project management skills"
    ],
    current: false
  },
  {
    id: "3",
    company: "Personal Projects",
    position: "Self-taught Developer",
    duration: "Sep 2022 - Dec 2022",
    startDate: "2022-09",
    endDate: "2022-12",
    description: "Started learning web development through online courses and tutorials. Built several practice projects to understand fundamental concepts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Completed 100+ coding challenges",
      "Built first portfolio website",
      "Learned version control with Git"
    ],
    current: false
  }
];