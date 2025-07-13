export interface AboutMe {
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
  };
  profileImage: string;
}

export const aboutMeData: AboutMe = {
  name: "John Doe",
  title: "Frontend Developer",
  description: "Hey! I'm John Doe, a passionate frontend developer who loves creating beautiful and functional web applications. I enjoy learning new technologies and building projects that solve real-world problems.",
  location: "New York, NY",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  skills: [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript",
    "Tailwind CSS", "Git", "GitHub", "Responsive Design", "Node.js",
    "Express.js", "MongoDB", "Firebase", "Vercel", "Figma"
  ],
  socialLinks: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    leetcode: "https://leetcode.com/johndoe"
  },
  profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
};