'use client';

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

type CustomVariantProps = {
  delay?: number;
};

type Props = {
  children: React.ReactNode;
  className?: string;
  custom?: CustomVariantProps;
  isOrchestrated?: boolean;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: CustomVariantProps) => ({
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delay: custom?.delay ?? undefined,
      staggerChildren: 0.3,
    }
  }),
  exit: {
    opacity: 0,
  },
}

export default function StaggedFade({ children, className, custom, isOrchestrated }: Props) {
  return (
    <motion.div
      variants={variants}
      initial={!isOrchestrated ? "hidden" : undefined}
      animate={!isOrchestrated ? "visible" : undefined}
      exit={!isOrchestrated ? "exit" : undefined}
      className={cn(className)}
      custom={custom}
    >{children}</motion.div>
  );
}