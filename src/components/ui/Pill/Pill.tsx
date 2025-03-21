'use client';

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import styles from "./Pill.module.css";

type Props = {
  children: React.ReactNode;
  fg?:string;
  bg?:string;
  isOrchestrated?: boolean;
  className?: string;
}

const pillVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      ease: 'easeOut',
    }
  },
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
  className,
}: Props) {
  return (
    <motion.div
      className={cn(
        "flex items-center justify-center select-none",
        styles.pill,
        fg,
        bg,
        className,
      )}
      variants={pillVariants}
      initial={!isOrchestrated ? "hidden" : undefined}
      animate={!isOrchestrated ? "visible" : undefined}
      exit={!isOrchestrated ? "exit" : undefined}
    >
      <span>
        {children}
      </span>
    </motion.div>
  );
}