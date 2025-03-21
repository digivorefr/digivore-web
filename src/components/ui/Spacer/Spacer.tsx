'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { OrchestratorVariants } from "@/components/effects/Orchestrator";

import styles from "./Spacer.module.css";

type Props = {
  className?: string;
  isOrchestrated?: boolean;
}

const spacerVariants: OrchestratorVariants = {
  hidden: {
    height: "0%",
  },
  visible: {
    height: "100%",
    // transition: {
    //   duration: 1.5,
    // },
  },
  exit: {
    height: "0%",
  },
};

export default function Spacer({ className, isOrchestrated }: Props) {

  return (
    <div className={cn(styles.spacer, "flex justify-center items-center h-[15dvh] my-24", className)}>
      <motion.div
        key="spacer-line"
        className={cn(styles.spacer__line, "w-[2px] h-0 mx-auto")}
        variants={spacerVariants}
        initial={!isOrchestrated ? "hidden" : undefined}
        animate={!isOrchestrated ? "visible" : undefined}
        exit={!isOrchestrated ? "exit" : undefined}
      />
    </div>
  )
}