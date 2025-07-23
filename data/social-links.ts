/**
 * SOCIAL LINKS CONFIGURATION
 *
 * This file contains all your social media and professional links.
 * These appear in various places throughout your portfolio.
 */

export interface SocialLink {
  href: string;
  label: string;
  iconName: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Vegadjay",
    label: "Github",
    iconName: "github",
  },
  {
    href: "https://linkedin.com/in/vegadjay",
    label: "LinkedIn",
    iconName: "linkedin",
  },
  {
    href: "https://twitter.com/JAY_VEGAD_",
    label: "Twitter",
    iconName: "twitter",
  },
  {
    href: "https://fuck-leetcode-dusky.vercel.app/",
    label: "LeetCode",
    iconName: "leetcode",
  },
  {
    href: "https://medium.com/@jayvegad10",
    label: "Medium",
    iconName: "medium",
  },
  {
    href: "https://instagram.com/jayvegad.xyz",
    label: "Instagram",
    iconName: "instagram",
  },
];

/**
 * HOW TO MODIFY SOCIAL LINKS:
 *
 * 1. Update the href URLs with your own profiles
 * 2. Change labels to match your preference
 * 3. Add new social links by copying the structure above
 * 4. Remove links you don't want by deleting the entire object
 * 5. Icons are from react-icons library - check their docs for more icons
 * 6. Keep the size={20} consistent for uniform appearance
 */
