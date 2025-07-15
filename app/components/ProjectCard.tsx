import { useRef, useState } from "react";
import { motion, Variants } from "motion/react";

interface Tag {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Tag[];
  link?: string;
}

export const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [interactionPoint, setInteractionPoint] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      setInteractionPoint({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardVariants = {
    hover: {
      transition: { duration: 0.3, ease: "easeOut" },
    },
    initial: {
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const tagVariants = {
    hover: (index: number) => ({
      y: -2,
      scale: 1.02,
      backgroundColor: "rgba(139, 69, 19, 0.1)",
      transition: { delay: 0.03 * index, duration: 0.2, type: "spring" },
    }),
    initial: {
      y: 0,
      scale: 1,
      backgroundColor: "transparent",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="min-h-72 relative h-auto w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      initial="initial"
      whileHover="hover"
      animate={isHovered ? "hover" : "initial"}
      variants={cardVariants as Variants}
      onClick={() => {
        if (link) {
          window.open(link, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <div className="z-10 h-full cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-transparent p-6 shadow-sm backdrop-blur-sm hover:shadow-md dark:border-zinc-700">
        {/* Gradient hover effect that follows mouse */}
        <motion.div
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{
            background: `radial-gradient(circle at ${interactionPoint.x}% ${interactionPoint.y}%, rgba(139, 69, 19, 0.2) 0%, rgba(160, 82, 45, 0.1) 30%, rgba(210, 180, 140, 0.05) 60%, transparent 80%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        <div className="relative z-10 space-y-3">
          <motion.h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {title}
          </motion.h3>
        </div>

        <div className="relative z-10 mt-4">
          <motion.p
            className="mb-6 line-clamp-3 text-zinc-600 dark:text-zinc-400"
            variants={{
              hover: {
                opacity: 0.9,
                y: -1,
                transition: { duration: 0.3 },
              },
              initial: {
                opacity: 0.8,
                y: 0,
                transition: { duration: 0.3 },
              },
            }}
          >
            {description}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="rounded border border-zinc-200 bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                custom={index}
                variants={tagVariants as Variants}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Light border glow on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            borderRadius: "inherit",
            boxShadow: `0 0 0 1px rgba(139, 69, 19, 0.2), 0 0 10px 1px rgba(139, 69, 19, 0.1)`,
            zIndex: 11,
            opacity: 0,
          }}
          animate={
            isHovered
              ? {
                  opacity: 1,
                  transition: { duration: 0.3 },
                }
              : {
                  opacity: 0,
                  transition: { duration: 0.1 },
                }
          }
        />
      </div>
    </motion.div>
  );
};
