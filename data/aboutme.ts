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
  name: "Jay Vegad",
  title: "Frontend Engineer",
  description: `As a Developer, I am a passionate professional dedicated to bringing innovative ideas to life through code. I love working with JavaScript and specialize in building engaging, high-performance web applications. My expertise lies heavily in web development, creating responsive interfaces and interactive user experiences. I work extensively with frameworks and libraries such as Next.js, Tailwind CSS, and Motion, along with various animation tools to create modern, performant web applications. I also have experience delivering projects for clients, ensuring high-quality results tailored to their specific needs and requirements. Eager to grow and collaborate, I am currently seeking remote opportunities with companies worldwide that value innovation and quality.`,
  location: "Rajkot, Gujarat, India",
  email: "jayvegad10@gmail.com",
  phone: "+91 8849251028",
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
  socialLinks: {
    github: "https://github.com/Vegadjay",
    linkedin: "https://linkedin.com/in/vegadjay",
    twitter: "https://twitter.com/JAY_VEGAD_",
    leetcode: "https://fuck-leetcode-dusky.vercel.app/",
  },
  profileImage: "/profile-pic/profile-pic.jpeg",
};
