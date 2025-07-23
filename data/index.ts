/**
 * DATA INDEX
 *
 * This file provides easy access to all portfolio data.
 * Import from here for convenience or import directly from individual files.
 */

// Personal Information
export { personalInfo, type PersonalInfo } from "./personal-info";

// Work Experience
export { workExperience, type WorkExperience } from "./work-experience";

// Site Configuration
export { siteConfig, type SiteConfig } from "./site-config";

// Projects
export { featuredProjects, type FeaturedProject } from "./featured-projects";
export { allProjects, type Project } from "./all-projects";

// Gallery
export { galleryData, type GalleryConfig } from "./gallery-data";

// Social Links
export { socialLinks, type SocialLink } from "./social-links";

/**
 * QUICK REFERENCE:
 *
 * import { personalInfo, workExperience, allProjects } from '@/data';
 *
 * OR import individually:
 *
 * import { personalInfo } from '@/data/personal-info';
 * import { workExperience } from '@/data/work-experience';
 */
