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
}

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  whileInView: (custom: CustomVariantProps) => ({
    opacity: 1,
    transition: {
      when: custom?.delay ? undefined : 'beforeChildren',
      delay: custom?.delay ?? undefined,
    }
  }),
  exit: {
    opacity: 0,
  },
}

export default function StaggedFade({ children, className, custom }: Props) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="initial"
      whileInView="whileInView"
      exit="exit"
      className={cn(className)}
      custom={custom}
    >{children}</motion.div>
  );
}