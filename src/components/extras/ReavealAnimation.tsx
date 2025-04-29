// RevealAnimation.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface RevealAnimationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string; // Optional class name for the image
  duration?: number; // Optional animation duration, default is 1.5
  ease?: [number, number, number, number]; //Optional bezier curve array
  delay?: number; // Optional delay before animation starts
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  duration = 1.5,
  ease = [0.5, 0.5, 0, 1],
  delay = 0.5,
}) => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true });

  const revealAnimationVariants = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: {
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: duration,
        delay: delay,
        ease: ease,
      },
    },
  };

  return (
    <motion.div
      ref={imageRef}
      variants={revealAnimationVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ overflow: "hidden" }}
      className="w-full"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover w-full ${className}`}
        style={{ display: "block" }}
      />
    </motion.div>
  );
};

export default RevealAnimation;
