'use client';

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

type CustomVariantProps = {
  delay?: number;
};

type Props = {
  children: React.ReactNode;
  fg?:string;
  bg?:string;
  isOrchestrated?: boolean;
  custom?: CustomVariantProps;
}

const pillVariants: Variants = {
  initial: {
    opacity: 0,
    y: 6,
    filter: 'blur(4px)',
  },
  whileInView: (custom: CustomVariantProps) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      opacity: {
        delay: custom?.delay ?? 0,
        ease: 'easeOut',
      },
      filter: {
        delay: custom?.delay ?? 0,
        ease: 'easeOut',
      },
      y: {
        delay: custom?.delay ?? 0,
        ease: 'easeOut',
      },
    }
  }),
  exit: {
    filter: 'blur(4px)',
    opacity: 0,
    y: -6,
  },
}

export default function Pill({
  children,
  fg = 'text-foreground',
  bg = 'bg-transparent',
  isOrchestrated = false,
  custom
}: Props) {
  return (
    <motion.div
      className={cn(
        "flex items-center justify-center text-sm font-semibold select-none",
        fg,
        bg
      )}
      variants={pillVariants}
      initial="initial"
      animate="initial"
      whileInView="whileInView"
      exit="exit"
      custom={custom}
    >
      <span>
        {children}
      </span>
    </motion.div>
  );
}