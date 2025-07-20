import Marquee from "react-fast-marquee";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  leftImages,
  rightImages,
  centerImages,
  imageWidth,
  imageHeight,
  title,
} from "@/data/photogallerydata";

interface MarqueeSectionProps {
  images: string[];
  direction?: "left" | "right";
  altPrefix: string;
  scaleOnHover?: boolean;
}

const MarqueeSection: React.FC<MarqueeSectionProps> = ({
  images,
  direction = "left",
  altPrefix,
  scaleOnHover = false,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <Marquee pauseOnHover direction={direction} className="py-4" autoFill>
        {images.map((src, idx) => (
          <div key={idx} className="mx-4">
            <motion.div
              className="overflow-visible"
              initial={{
                rotate: idx % 2 === 0 ? -6 : 6,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Image
                src={src}
                alt={`${altPrefix} ${idx + 1}`}
                width={imageWidth}
                height={imageHeight}
                className={`rounded-xl border border-black object-cover transition-all duration-300 dark:border-zinc-200 ${
                  hoveredIndex !== null && hoveredIndex !== idx
                    ? "opacity-60 blur-sm"
                    : ""
                }`}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                }}
              />
            </motion.div>
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-linear-to-r from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80"></div>
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-linear-to-l from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80"></div>
    </div>
  );
};

const PhotoGallery = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-[890px] space-y-5 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-zinc-900 sm:text-2xl md:text-3xl dark:text-white">
          {title}
        </h1>
        <div className="space-y-8">
          <MarqueeSection
            images={leftImages}
            direction="left"
            altPrefix="Left Gallery image"
            scaleOnHover={true}
          />
          <MarqueeSection
            images={rightImages}
            direction="right"
            altPrefix="Right Gallery image"
            scaleOnHover={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
