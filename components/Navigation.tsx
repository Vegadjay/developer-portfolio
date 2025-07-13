"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Github, Linkedin, Code, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { navigationData } from '../data/navigation';
import { Dock, DockIcon } from './ui/navigation';

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const getIcon = (href: string) => {
    switch (href) {
      case '/':
        return <Home size={20} />;
      case '/about':
        return <User size={20} />;
      case '/experience':
        return <Briefcase size={20} />;
      case '/projects':
        return <FolderOpen size={20} />;
      case '/contact':
        return <Mail size={20} />;
      default:
        return <Home size={20} />;
    }
  };

  const getTooltip = (href: string) => {
    switch (href) {
      case '/':
        return 'Home';
      case '/about':
        return 'About Me';
      case '/experience':
        return 'Experience';
      case '/projects':
        return 'Projects';
      case '/contact':
        return 'Contact';
      default:
        return 'Home';
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-8 transform -translate-x-1/2 z-50 w-full flex justify-center"
    >
      <Dock className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 shadow-xl">
        {navigationData.items.map((item) => (
          <Link href={item.href} key={item.title}>
            <DockIcon
              tooltip={getTooltip(item.href)}
              className={`transition-all duration-200 ${
                pathname === item.href
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {getIcon(item.href)}
            </DockIcon>
          </Link>
        ))}
        
        {/* Divider */}
        <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-600 mx-1"></div>
        
        <a
          href={navigationData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <DockIcon tooltip="GitHub Profile">
            <Github size={20} />
          </DockIcon>
        </a>
        
        <a
          href={navigationData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <DockIcon tooltip="LinkedIn Profile">
            <Linkedin size={20} />
          </DockIcon>
        </a>
        
        <a
          href={navigationData.socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <DockIcon tooltip="LeetCode Profile">
            <Code size={20} />
          </DockIcon>
        </a>
        
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
        >
          <DockIcon tooltip={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </DockIcon>
        </button>
      </Dock>
    </motion.div>
  );
};

export default Navigation;