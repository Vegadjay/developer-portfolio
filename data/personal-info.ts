/**
 * PERSONAL INFORMATION CONFIGURATION
 *
 * This file contains all your personal information displayed across the portfolio.
 * Update the values below to customize your portfolio with your own information.
 */

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  skills: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    leetcode: string;
    resume: string;
  };
  profileImage: string;
}

export const personalInfo: PersonalInfo = {
  // Your full name
  name: "Jay Vegad",

  // Your professional title/role
  title: "Software Engineer",

  // Your professional description/bio (appears in About section)
  description: `As a Developer, I am a passionate professional dedicated to bringing innovative ideas to life through code. I love working with JavaScript and specialize in building engaging, high-performance web applications. My expertise lies heavily in web development, creating responsive interfaces and interactive user experiences. I work extensively with frameworks and libraries such as Next.js, Tailwind CSS, and Motion, along with various animation tools to create modern, performant web applications. I also have experience delivering projects for clients, ensuring high-quality results tailored to their specific needs and requirements. Eager to grow and collaborate, I am currently seeking remote opportunities with companies worldwide that value innovation and quality.`,

  // Your current location
  location: "Rajkot, Gujarat, India",

  // Your contact email
  email: "jayvegad10@gmail.com",

  // Your phone number
  phone: "+91 8849251028",

  // Your technical skills (displayed in Skills section)
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Java",
    "SQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],

  // Your social media and professional links
  socialLinks: {
    github: "https://github.com/Vegadjay",
    linkedin: "https://linkedin.com/in/vegadjay",
    twitter: "https://twitter.com/JAY_VEGAD_",
    leetcode: "https://fuck-leetcode-dusky.vercel.app/",
    resume: "/resume/Resume.pdf", // Path to your resume file in public folder
  },

  // Path to your profile image in public folder
  profileImage: "/profile-pic/profile-pic.jpeg",
};
