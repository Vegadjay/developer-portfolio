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
    "/photo-gallery/1.jpeg",
    "/photo-gallery/2.jpeg",
    "/photo-gallery/3.jpeg",
    "/photo-gallery/4.jpeg",
    "/photo-gallery/5.jpeg",
  ],

  // Images for right column
  rightImages: [
    "/photo-gallery/6.jpeg",
    "/photo-gallery/7.jpeg",
    "/photo-gallery/8.jpeg",
    "/photo-gallery/9.jpeg",
    "/photo-gallery/10.jpeg",
  ],

  // Images for center column
  centerImages: [
    "/photo-gallery/11.jpeg",
    "/photo-gallery/12.jpeg",
    "/photo-gallery/13.jpeg",
    "/photo-gallery/14.jpeg",
    "/photo-gallery/15.jpeg",
  ],

  // Image dimensions (in pixels)
  // If possible, Than do not change the image dimensions.

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
