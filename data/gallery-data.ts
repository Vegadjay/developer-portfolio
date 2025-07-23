/**
 * PHOTO GALLERY CONFIGURATION
 *
 * This file contains configuration for your photo gallery section.
 * Perfect for showcasing hackathon photos, team events, or personal moments.
 */

export interface GalleryConfig {
  title: string;
  leftImages: string[];
  rightImages: string[];
  centerImages: string[];
  imageWidth: number;
  imageHeight: number;
}

export const galleryData: GalleryConfig = {
  // Gallery section title
  title: "Hackathon Memories",

  // Images for left column (add paths relative to public folder)
  leftImages: [
    "/hackathon/1.jpeg",
    "/hackathon/2.jpeg",
    "/hackathon/3.jpeg",
    "/hackathon/4.jpeg",
    "/hackathon/5.jpeg",
  ],

  // Images for right column
  rightImages: [
    "/hackathon/6.jpeg",
    "/hackathon/7.jpeg",
    "/hackathon/8.jpeg",
    "/hackathon/9.jpeg",
    "/hackathon/10.jpeg",
  ],

  // Images for center column
  centerImages: [
    "/hackathon/11.jpeg",
    "/hackathon/12.jpeg",
    "/hackathon/13.jpeg",
    "/hackathon/14.jpeg",
    "/hackathon/15.jpeg",
  ],

  // Image dimensions (in pixels)
  imageWidth: 230,
  imageHeight: 150,
};

// Legacy exports for backward compatibility
export const title = galleryData.title;
export const leftImages = galleryData.leftImages;
export const rightImages = galleryData.rightImages;
export const centerImages = galleryData.centerImages;
export const imageWidth = galleryData.imageWidth;
export const imageHeight = galleryData.imageHeight;

/**
 * HOW TO UPDATE GALLERY:
 *
 * 1. Add your photos to the public/hackathon/ folder (or create a new folder)
 * 2. Update the image paths in the arrays above
 * 3. Change the title to match your gallery theme
 * 4. Adjust imageWidth and imageHeight if needed
 * 5. You can add or remove images from any column
 */
