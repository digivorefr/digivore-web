'use client';

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

import styles from "./Spacer.module.css";
import { useMemo } from "react";

type Props = {
  className?: string;
  delay?: number;
}


export default function Spacer({ className, delay }: Props) {
  const spacerVariants = useMemo<Variants>(() => ({
    hidden: {
      height: "0%",
    },
    visible: {
      height: "100%",
      transition: {
        duration: 3,
        delay,
      },
    },
  }), [delay]);

  return (
    <div className={cn(styles.spacer, "h-[35dvh] my-24", className)}>
      <motion.div
        className={cn(styles.spacer__line, "w-[1px] h-full mx-auto")}
        variants={spacerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
      />
    </div>
  )
}