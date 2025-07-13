"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Github, Linkedin, Code, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { navigationData } from '@/data/navigation';
import { Dock, DockIcon } from './ui/navigation';
import { Button } from './ui/button';

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const getIcon = (href: string) => {
    switch (href) {
      case '/':
        return <Home size={22} />;
      case '/about':
        return <User size={22} />;
      case '/experience':
        return <Briefcase size={22} />;
      case '/projects':
        return <FolderOpen size={22} />;
      case '/contact':
        return <Mail size={22} />;
      default:
        return <Home size={22} />;
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
      className="fixed bottom-6 transform -translate-x-1/2 z-50 w-full flex justify-center"
    >
      <Dock className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 shadow-lg rounded-2xl px-2 py-1">
        {navigationData.items.map((item) => (
          <Link href={item.href} key={item.title}>
            <DockIcon
              tooltip={getTooltip(item.href)}
              className={`transition-all duration-300 ease-out ${
                pathname === item.href
                  ? 'bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 scale-110'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-105'
              }`}
            >
              {getIcon(item.href)}
            </DockIcon>
          </Link>
        ))}
        
        {/* Divider */}
        <div className="w-px h-10 bg-zinc-400 dark:bg-zinc-500 mx-2"></div>
        
        <a
          href={navigationData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 hover:scale-105"
        >
          <DockIcon tooltip="GitHub Profile">
            <Github size={22} />
          </DockIcon>
        </a>
        
        <a
          href={navigationData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 hover:scale-105"
        >
          <DockIcon tooltip="LinkedIn Profile">
            <Linkedin size={22} />
          </DockIcon>
        </a>
        
        <a
          href={navigationData.socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 hover:scale-105"
        >
          <DockIcon tooltip="LeetCode Profile">
            <Code size={22} />
          </DockIcon>
        </a>
        
        {/* Divider */}
        <div className="w-px h-10 bg-zinc-400 dark:bg-zinc-500 mx-2"></div>
        
        {/* Theme Toggle */}
        <Button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all duration-300 hover:scale-105"
        >
          <DockIcon tooltip={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </DockIcon>
        </Button>
      </Dock>
    </motion.div>
  );
};

export default Navigation;