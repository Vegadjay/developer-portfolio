/**
 * SITE CONFIGURATION
 *
 * This file controls which sections are visible on your portfolio website.
 * Set to true to show a section, false to hide it.
 */

export interface SiteConfig {
  sections: {
    hero: boolean;
    about: boolean;
    skills: boolean;
    experience: boolean;
    projects: boolean;
    hackathonGallery: boolean;
    contact: boolean;
    footer: boolean;
  };
}

export const siteConfig: SiteConfig = {
  sections: {
    // Hero section with name and introduction
    hero: true,

    // About me section with detailed description
    about: true,

    // Skills section showing technical expertise
    skills: true,

    // Work experience timeline
    experience: true,

    // Projects showcase
    projects: true,

    // Hackathon photo gallery
    hackathonGallery: true,

    // Contact form and information
    contact: true,

    // Footer with additional links
    footer: true,
  },
};

// Legacy exports for backward compatibility
export const showHackathonGallery = siteConfig.sections.hackathonGallery;
export const showExperience = siteConfig.sections.experience;
export const showProjects = siteConfig.sections.projects;
export const showAbout = siteConfig.sections.about;
export const showContact = siteConfig.sections.contact;
export const showSkills = siteConfig.sections.skills;
export const showHero = siteConfig.sections.hero;
export const showFooter = siteConfig.sections.footer;
