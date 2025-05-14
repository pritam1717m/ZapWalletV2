import { TextShimmer } from "./motion-primitives/text-shimmer";
import * as motion from "motion/react-client";
export default function HomeHero() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-start items-start lg:items-center gap-7"
    >
      <TextShimmer
        className="text-5xl font-extrabold font-[CalSans] tracking-wider"
        duration={17}
        spread={15}
      >
        {"Payments That Never Miss a Beat"}
      </TextShimmer>
      <p className="text-2xl font-[CalSans] text-sky-700 dark:text-cyan-500 tracking-wider">
        Experience secure, seamless transactions with a platform built for
        long-term performance.
      </p>
    </motion.div>
  );
}
