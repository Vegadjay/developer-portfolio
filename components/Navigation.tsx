"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderOpen, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { socialLinks } from "@/data/socialLinks";

const navLinks = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/projects", label: "Projects", icon: <FolderOpen size={20} /> },
  { href: "/contact", label: "Contact", icon: <Mail size={20} /> },
];

const Navigation = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TooltipProvider delayDuration={200}>
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } sm:hidden`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          className={`absolute right-0 bottom-0 left-0 mx-auto mb-4 flex w-[90vw] max-w-xs flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-900 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          } transition-all duration-300`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-zinc-700 dark:text-zinc-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="mt-6 flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Tooltip key={link.href} delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={`flex w-full max-w-xs items-center justify-center gap-3 rounded-lg p-3 text-2xl font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                        : "text-zinc-700 dark:text-zinc-300"
                    }`}
                    aria-label={link.label}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.icon}
                    <span className="text-base font-medium">{link.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{link.label}</TooltipContent>
              </Tooltip>
            ))}
            <Separator className="h-0.5 w-10 rounded-md bg-zinc-200 dark:bg-zinc-800" />
            {socialLinks.map((link) => (
              <Tooltip key={link.href} delayDuration={200}>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full max-w-xs items-center justify-center gap-3 rounded-lg p-3 text-2xl text-zinc-600 transition-colors duration-200 dark:text-zinc-400"
                    aria-label={link.label}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.icon && <span>{link.icon}</span>}
                    <span className="text-base font-medium">{link.label}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">{link.label}</TooltipContent>
              </Tooltip>
            ))}
            <Separator className="h-0.5 w-10 rounded-md bg-zinc-200 dark:bg-zinc-800" />

            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex w-full max-w-xs items-center justify-center gap-3 rounded-lg p-3 text-2xl text-zinc-600 transition-colors duration-200 hover:cursor-pointer dark:text-zinc-400"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                  <span className="text-base font-medium">Toggle Theme</span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">Toggle Theme</TooltipContent>
            </Tooltip>
          </div>
        </nav>
      </div>
      <nav
        className={`fixed bottom-3 left-1/2 z-50 hidden w-full max-w-3xl -translate-x-1/2 transform justify-center px-2 transition-all duration-500 sm:bottom-6 sm:flex ${
          showNavbar ? "translate-y-0" : "translate-y-64"
        }`}
      >
        <div className="flex w-full justify-center gap-2 rounded-2xl border border-zinc-200 bg-white/80 px-2 py-2 shadow-xl backdrop-blur-md sm:gap-4 sm:px-6 sm:py-3 dark:border-zinc-700 dark:bg-zinc-900/80">
          {navLinks.map((link) => (
            <Tooltip key={link.href} delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium transition-all duration-200 sm:gap-2 sm:px-3 sm:text-base ${
                    pathname === link.href
                      ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">{link.label}</TooltipContent>
            </Tooltip>
          ))}
          <Separator className="h-10 w-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800" />
          {socialLinks.map((link) => (
            <Tooltip key={link.href} delayDuration={200}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-lg px-2 py-2 text-sm text-zinc-600 transition-all duration-200"
                  aria-label={link.label}
                >
                  {link.icon && <span>{link.icon}</span>}
                </a>
              </TooltipTrigger>
              <TooltipContent side="top">{link.label}</TooltipContent>
            </Tooltip>
          ))}
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-1 rounded-lg px-2 py-2 text-sm text-zinc-600 transition-all duration-200 hover:cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span className="hidden md:inline">
                  {theme === "dark" ? "Light" : "Dark"}
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">Toggle Theme</TooltipContent>
          </Tooltip>
        </div>
      </nav>
      <button
        className="fixed right-4 bottom-4 z-[70] flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-zinc-200 transition sm:hidden dark:bg-zinc-900 dark:ring-zinc-700"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label="Open menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </TooltipProvider>
  );
};

export default Navigation;
