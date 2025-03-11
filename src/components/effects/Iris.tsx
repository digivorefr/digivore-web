"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { PropsWithChildren } from "react";

type CustomVariantProps = {
  delay?: number;
};

type Props = PropsWithChildren<{
  className?: string;
  custom?: CustomVariantProps;
}>;


const irisVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.02,
    filter: 'saturate(0)',
  },
  whileInView: (custom: CustomVariantProps) => ({
    opacity: 1,
    scale: 1,
    filter: 'saturate(1)',
    transition: {
      delay: custom?.delay ?? 0,
      duration: 0.7,
      ease: 'easeOut',
    }
  }),
  whileHover: {
    opacity: 1,
    scale: 1.05,
    filter: 'saturate(1)',
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: 'saturate(0)',
  },
};

export default function Iris({ children, className, custom }: Props) {
  const mergedClassName = cn(
    "relative rounded-full shadow-neumorphic overflow-hidden flex items-center justify-center",
    className
  );

  return (
    <motion.div
      className={mergedClassName}
      variants={irisVariants}
      initial="initial"
      animate="initial"
      whileInView="whileInView"
      whileHover="whileHover"
      exit="exit"
      custom={custom}
    >
      {children}
    </motion.div>
  )
}