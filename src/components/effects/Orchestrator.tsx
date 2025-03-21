'use client';

import { cn } from "@/lib/utils";
import { MotionProps, motion, useInView, Variant, UseInViewOptions } from "motion/react"
import { useRef } from "react";


export type OrchestratorVariants = {
  hidden: Variant;
  visible: Variant;
  exit: Variant;
}

export const defaultOrchestratorVariants: OrchestratorVariants = {
  hidden: {
    opacity:0,
  },
  visible: {
    opacity:1,
    transition: {
      when: 'beforeChildren',
    }
  },
  exit: {
    opacity:0,
    transition: {
      when: 'afterChildren',
    }
  },
}

type OrchestratorProps = Omit<MotionProps, 'variants'> & {
  children: React.ReactNode;
  className?: string;
  id?: string;
  options?: UseInViewOptions;
  variants?: OrchestratorVariants;
}

export default function Orchestrator({
  children,
  className,
  id,
  options,
  variants=defaultOrchestratorVariants,
  custom,
  ...props
}: OrchestratorProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, options);

  const mergedClassName = cn(className);

  return (
    <motion.div
      ref={ref}
      className={mergedClassName}
      id={id}
      variants={variants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      exit='exit'
      custom={{ ...custom, isInView }}
      {...props}
    >
        {children}
    </motion.div>
  )
}