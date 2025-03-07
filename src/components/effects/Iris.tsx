"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;


const irisVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 2,
    filter: 'blur(16px) saturate(0)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px) saturate(1)',
    transition: {
      delay: 2.4,
      duration: 0.7,
      ease: 'easeOut',
    }
  },
  whileHover: {
    opacity: 1,
    scale: 1.05,
    filter: 'blur(0px) saturate(1)',
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 0,
    filter: 'blur(16px) saturate(0)',
  },
};

export default function Iris({ children, className }: Props) {
  const mergedClassName = cn(
    "relative rounded-full shadow-neumorphic mx-auto mt-24 overflow-hidden flex items-center justify-center",
    className
  );

 return (
  <motion.div
    className={mergedClassName}
    variants={irisVariants}
    initial="initial"
    animate="animate"
    whileHover="whileHover"
    exit="exit"
  >
    {children}
  </motion.div>
 )
}