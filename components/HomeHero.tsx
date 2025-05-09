"use client"

import { TextShimmer } from "./motion-primitives/text-shimmer";
import { motion } from "motion/react";
export default function HomeHero() {
  return (
    <motion.div initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}} className="flex flex-col items-center gap-5">
      <TextShimmer
        className="text-5xl font-extrabold font-[CalSans] tracking-wider"
        duration={17}
        spread={15}
      >
        {"Payments That Never Miss a Beat"}
      </TextShimmer>
      <motion.p
        animate={{ scale: 1.1 }}
        transition={{duration : 0.6}}
        className="text-2xl font-[CalSans] text-lime-700 dark:text-fuchsia-200 tracking-wider"
      >
        Experience secure, seamless transactions with a platform built for
        long-term performance.
      </motion.p>
    </motion.div>
  );
}
