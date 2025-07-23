/**
 * WORK EXPERIENCE CONFIGURATION
 *
 * This file contains all your work experience entries.
 * Add, remove, or modify entries to reflect your professional journey.
 */

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements: string[];
  logo: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    company: "Google",
    position: "Frontend Developer Intern",
    duration: "Jun 2023 - Present",
    startDate: "2023-06",
    endDate: "", // Leave empty for current position
    description:
      "Working on responsive web applications using React and TypeScript. Collaborating with senior developers to implement new features and improve user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
    achievements: [
      "Built 3 responsive landing pages",
      "Improved website loading speed by 25%",
      "Learned modern development practices",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
  },
  {
    id: "2",
    company: "Meta",
    position: "Backend Developer Intern",
    duration: "Jan 2023 - May 2023",
    startDate: "2023-01",
    endDate: "2023-05",
    description:
      "Created websites for local businesses using HTML, CSS, and JavaScript. Focused on responsive design and user-friendly interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    achievements: [
      "Completed 5 client projects",
      "Gained experience in client communication",
      "Learned project management skills",
    ],
    logo: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
  },
  {
    id: "3",
    company: "Amazon",
    position: "Customer-Care Agent",
    duration: "Sep 2022 - Dec 2022",
    startDate: "2022-09",
    endDate: "2022-12",
    description:
      "Started learning web development through online courses and tutorials. Built several practice projects to understand fundamental concepts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Completed 100+ coding challenges",
      "Built first portfolio website",
      "Learned version control with Git",
    ],
    logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
  },
];

/**
 * HOW TO ADD NEW EXPERIENCE:
 *
 * 1. Copy the structure above and add a new object to the array
 * 2. Update the id to be unique
 * 3. Fill in your company details
 * 4. Add your technologies and achievements
 * 5. Use a company logo URL or upload to public folder
 */
