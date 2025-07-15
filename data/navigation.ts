export interface NavigationItem {
  title: string;
  href: string;
  icon?: string;
}

export const navigationData = {
  title: "John Doe",
  logo: "👨‍💻",
  items: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ],
  socialLinks: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    leetcode: "https://leetcode.com/johndoe",
  },
};
