'use client';

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { PropsWithChildren } from "react";

const MotionImage = motion(Image);

type CustomVariantProps = {
  delay?: number;
  width?: number;
  height?: number;
};

type Props = PropsWithChildren<{
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  delay?: number;
}>;

const containerVariants: Variants = {
  initial: () => ({
    y: 64,
    rotateX: -90,
    opacity: 0,
    marginTop: -32,
  }),
  whileInView: ({ delay }: CustomVariantProps) => ({
    y: 0,
    rotateX: 0,
    opacity: 1,
    marginTop: 0,
    transition: {
      delay,
      type: 'spring',
      bounce: 0.15,
    },
  }),
  exit: () => ({
    y: 64,
    rotateX: -90,
    marginTop: -32,
    opacity: 0,
  }),
};

const imageVariants: Variants = {
  initial: ({ width, height }: CustomVariantProps) => ({
    opacity: 0,
    scale: 1.05,
    width,
    height,
  }),
  whileInView: ({ delay }: CustomVariantProps) => ({
    opacity: 1,
    scale: 1,
    transition: {
      opacity: {
        delay,
        duration: 0.5,
      },
      scale: {
        delay,
        duration: 2,
      },
    },
  }),
  exit: {
    opacity: 0,
    scale: 1.05,
  }
};

export default function Portrait({ src, alt, width, height, className, imageClassName, delay }: Props) {
  const mergedClassName = cn(
    'relative rounded-full overflow-hidden',
    className
  );

  const mergedImageClassName = cn(
    'z-0',
    imageClassName
  );


  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="initial"
      whileInView="whileInView"
      exit="exit"
      className={mergedClassName}
      custom={{ delay, width, height }}
    >
      <MotionImage
        variants={imageVariants}
        initial="initial"
        whileInView="whileInView"
        exit="exit"
        priority
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={mergedImageClassName}
        custom={{ delay, width, height }}
      />
    </motion.div>
  );
}