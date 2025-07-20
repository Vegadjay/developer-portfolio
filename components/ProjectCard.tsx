import { useRef, useState, useCallback, useEffect } from "react";
import { motion, Variants, animate } from "motion/react";

interface Tag {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Tag[];
  link?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleGlowMove = useCallback(
    (e?: MouseEvent | { x: number; y: number }) => {
      if (!glowRef.current || !cardRef.current) return;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const element = glowRef.current;
        const cardElement = cardRef.current;
        if (!element || !cardElement) return;

        const { left, top, width, height } =
          cardElement.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;

        if (e) {
          lastPosition.current = { x: mouseX, y: mouseY };
        }

        const center = [left + width * 0.5, top + height * 0.5];
        const proximity = 50;

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        element.style.setProperty("--active", isActive ? "1" : "0");

        if (!isActive) return;

        const currentAngle =
          parseFloat(element.style.getPropertyValue("--start")) || 0;
        let targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI +
          90;

        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        animate(currentAngle, newAngle, {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (value) => {
            element.style.setProperty("--start", String(value));
          },
        });
      });
    },
    [],
  );

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => handleGlowMove(e);
    const handleScroll = () => handleGlowMove();

    document.body.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.body.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleGlowMove]);

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
      transition: { delay: 0.03 * index, duration: 0.2, type: "spring" },
    }),
    initial: {
      y: 0,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="relative h-auto min-h-72 w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
      <div
        ref={glowRef}
        style={
          {
            "--spread": "30",
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": "2px",
            "--repeating-conic-gradient-times": "5",
            "--gradient": `repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #000000 0%,
              #333333 calc(25% / var(--repeating-conic-gradient-times)),
              #000000 calc(50% / var(--repeating-conic-gradient-times)), 
              #333333 calc(75% / var(--repeating-conic-gradient-times)),
              #000000 calc(100% / var(--repeating-conic-gradient-times))
            )`,
            "--gradient-dark": `repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #ffffff 0%,
              #cccccc calc(25% / var(--repeating-conic-gradient-times)),
              #ffffff calc(50% / var(--repeating-conic-gradient-times)), 
              #cccccc calc(75% / var(--repeating-conic-gradient-times)),
              #ffffff calc(100% / var(--repeating-conic-gradient-times))
            )`,
          } as React.CSSProperties
        }
        className="pointer-events-none absolute inset-0 rounded-lg opacity-100 transition-opacity"
      >
        <div className="glow rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:rounded-[inherit] after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))] after:[background-attachment:fixed] after:[mask-composite:intersect] after:[mask-clip:padding-box,border-box] after:opacity-[var(--active)] after:transition-opacity after:duration-300 after:content-[''] after:[background:var(--gradient)] after:[border:var(--glowingeffect-border-width)_solid_transparent] dark:after:[background:var(--gradient-dark)]" />
      </div>

      <div className="relative z-10 h-full cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900/80">
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
                className="rounded border border-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-600 dark:bg-transparent dark:text-zinc-300"
                custom={index}
                variants={tagVariants as Variants}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
