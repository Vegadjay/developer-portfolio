"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Code,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
} from "lucide-react";
import { navigationData } from "@/data/navigation";
import { Dock, DockIcon } from "./ui/navigation";
import { Button } from "./ui/button";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const getIcon = (href: string) => {
    switch (href) {
      case "/":
        return <Home size={22} />;
      case "/about":
        return <User size={22} />;
      case "/experience":
        return <Briefcase size={22} />;
      case "/projects":
        return <FolderOpen size={22} />;
      case "/contact":
        return <Mail size={22} />;
      default:
        return <Home size={22} />;
    }
  };

  const getTooltip = (href: string) => {
    switch (href) {
      case "/":
        return "Home";
      case "/about":
        return "About Me";
      case "/experience":
        return "Experience";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
      default:
        return "Home";
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-6 z-50 flex w-full -translate-x-1/2 transform justify-center"
    >
      <Dock className="rounded-2xl border border-zinc-300 bg-zinc-100 px-2 py-1 shadow-lg dark:border-zinc-600 dark:bg-zinc-800">
        {navigationData.items.map((item) => (
          <Link href={item.href} key={item.title}>
            <DockIcon
              tooltip={getTooltip(item.href)}
              className={`transition-all duration-300 ease-out ${
                pathname === item.href
                  ? "scale-110 bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100"
                  : "text-zinc-600 hover:scale-105 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
              }`}
            >
              {getIcon(item.href)}
            </DockIcon>
          </Link>
        ))}

        {/* Divider */}
        <div className="mx-2 h-10 w-px bg-zinc-400 dark:bg-zinc-500"></div>

        <a
          href={navigationData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 transition-all duration-300 hover:scale-105 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <DockIcon tooltip="GitHub Profile">
            <Github size={22} />
          </DockIcon>
        </a>

        <a
          href={navigationData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 transition-all duration-300 hover:scale-105 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <DockIcon tooltip="LinkedIn Profile">
            <Linkedin size={22} />
          </DockIcon>
        </a>

        <a
          href={navigationData.socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 transition-all duration-300 hover:scale-105 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <DockIcon tooltip="LeetCode Profile">
            <Code size={22} />
          </DockIcon>
        </a>

        {/* Divider */}
        <div className="mx-2 h-10 w-px bg-zinc-400 dark:bg-zinc-500"></div>

        {/* Theme Toggle */}
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-zinc-200 text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
        >
          <DockIcon
            tooltip={
              theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </DockIcon>
        </Button>
      </Dock>
    </motion.div>
  );
};

export default Navigation;
