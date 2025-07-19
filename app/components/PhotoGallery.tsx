import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {
  leftImages,
  rightImages,
  centerImages,
  imageWidth,
  imageHeight,
  title,
} from "@/data/photogallerydata";

const PhotoGallery = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-[890px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-zinc-900 lg:text-4xl dark:text-white">
          {title}
        </h2>
        <div className="space-y-8">
          <div className="relative">
            <Marquee pauseOnHover className="py-4" autoFill>
              {leftImages.map((src, idx) => (
                <div key={idx} className="mx-4">
                  <motion.div
                    className="overflow-visible"
                    initial={{
                      rotate: idx % 2 === 0 ? -6 : 6,
                    }}
                    whileHover={{
                      rotate: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Left Gallery image ${idx + 1}`}
                      width={imageWidth}
                      height={imageHeight}
                      className="rounded-xl border border-black object-cover dark:border-zinc-200"
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

          <div className="relative">
            <Marquee pauseOnHover direction="right" className="py-4" autoFill>
              {rightImages.map((src, idx) => (
                <div key={idx} className="mx-4">
                  <motion.div
                    className="overflow-visible"
                    initial={{
                      rotate: idx % 2 === 0 ? -6 : 6,
                    }}
                    whileHover={{
                      rotate: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Right Gallery image ${idx + 1}`}
                      width={imageWidth}
                      height={imageHeight}
                      className="rounded-xl border border-black object-cover dark:border-zinc-200"
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
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
