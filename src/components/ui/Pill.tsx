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
  animate: (custom: CustomVariantProps) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      delay: custom?.delay ?? 0,
      ease: 'easeOut',
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
  bg = 'bg-background-lighten',
  isOrchestrated = false,
  custom
}: Props) {
  return (
    <motion.div
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold select-none",
        fg,
        bg
      )}
      variants={pillVariants}
      initial={!isOrchestrated ? 'initial' : undefined}
      animate={!isOrchestrated ? 'animate' : undefined}
      exit={!isOrchestrated ? 'exit' : undefined}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}