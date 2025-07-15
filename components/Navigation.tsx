"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Code,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { navigationData } from "@/data/navigation";
import { Dock, DockIcon } from "./ui/navigation";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useTheme } from "next-themes";

const iconMap: Record<string, React.ReactNode> = {
  "/": <Home size={22} />,
  "/about": <User size={22} />,
  "/experience": <Briefcase size={22} />,
  "/projects": <FolderOpen size={22} />,
  "/contact": <Mail size={22} />,
};

const socialIconMap: Record<string, React.ReactNode> = {
  github: <Github size={22} />,
  linkedin: <Linkedin size={22} />,
  leetcode: <Code size={22} />,
};

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileMenuOpen]);

  // Close menu on navigation
  function handleNavClick() {
    setMobileMenuOpen(false);
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="fixed bottom-6 z-50 flex w-full -translate-x-1/2 transform justify-center"
    >
      {/* Mobile: Menu Icon or Close Icon */}
      <button
        className="flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 p-3 shadow-lg dark:border-zinc-600 dark:bg-zinc-800 sm:hidden"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileMenuOpen((v) => !v)}
      >
        {mobileMenuOpen ? (
          <X size={28} className="text-zinc-700 dark:text-zinc-200" />
        ) : (
          <Menu size={28} className="text-zinc-700 dark:text-zinc-200" />
        )}
      </button>
      {/* Mobile: Menu Drawer */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="fixed bottom-20 right-4 z-50 flex w-56 flex-col gap-2 rounded-2xl border border-zinc-300 bg-zinc-100 p-4 shadow-xl animate-in fade-in slide-in-from-bottom-4 dark:border-zinc-600 dark:bg-zinc-800 sm:hidden"
        >
          {/* Navigation Items */}
          {navigationData.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              aria-label={item.title}
              onClick={handleNavClick}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100"
                  : "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
              }`}
            >
              {iconMap[item.href] || <Home size={20} />}
              {item.title}
            </Link>
          ))}
          <Separator />
          {/* Social Links */}
          <div className="flex justify-center gap-3">
            {Object.entries(navigationData.socialLinks).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                onClick={handleNavClick}
                className="flex items-center justify-center rounded-full p-2 text-zinc-600 transition-all duration-300 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
              >
                {socialIconMap[key.toLowerCase()] || <Code size={20} />}
              </a>
            ))}
          </div>
          <Separator />
          {/* Theme Toggle */}
          <div className="flex justify-center pt-2">
            {theme === "dark" ? (
              <Sun
                size={22}
                className="cursor-pointer rounded-full"
                onClick={() => {
                  setTheme("light");
                  setMobileMenuOpen(false);
                }}
              />
            ) : (
              <Moon
                size={22}
                className="cursor-pointer rounded-full"
                onClick={() => {
                  setTheme("dark");
                  setMobileMenuOpen(false);
                }}
              />
            )}
          </div>
        </div>
      )}
      {/* Desktop: Dock */}
      <div className="hidden sm:flex">
        <TooltipProvider>
          <Dock className="rounded-2xl border border-zinc-300 bg-zinc-100 px-2 py-1 shadow-lg dark:border-zinc-600 dark:bg-zinc-800">
            {/* Navigation Items */}
            {navigationData.items.map((item) => (
              <DockIcon key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.title}
                      className={`size-12 flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
                        pathname === item.href
                          ? "scale-110 bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100"
                          : "text-zinc-600 hover:scale-105 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                      }`}
                    >
                      {iconMap[item.href] || <Home size={22} />}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            {/* Divider */}
            <Separator orientation="vertical" className="mx-2 h-10" />

            {/* Social Links */}
            {Object.entries(navigationData.socialLinks).map(([key, url]) => (
              <DockIcon key={key}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="size-12 flex items-center justify-center rounded-full text-zinc-600 transition-all duration-300 hover:scale-105 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                    >
                      {socialIconMap[key.toLowerCase()] || <Code size={22} />}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            {/* Divider */}
            <Separator orientation="vertical" className="mx-2 h-10" />

            {/* Theme Toggle */}
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  {theme === "dark" ? (
                    <Sun
                      size={22}
                      className="cursor-pointer rounded-full"
                      onClick={() => setTheme("light")}
                    />
                  ) : (
                    <Moon
                      size={22}
                      className="cursor-pointer rounded-full"
                      onClick={() => setTheme("dark")}
                    />
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default Navigation;
