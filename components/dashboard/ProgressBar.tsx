"use client";

import { motion } from "framer-motion";

interface Props {
  progress: number;
}

export default function ProgressBar({
  progress,
}: Props) {
  return (
    <div
      className="
        relative
        h-2
        overflow-hidden
        rounded-full
        bg-zinc-800
      "
    >
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          relative
          h-full
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-500
        "
      >
        {/* Glow Effect */}
        <div
          className="
            absolute
            inset-0
            blur-sm
            opacity-70
            bg-gradient-to-r
            from-violet-500
            via-fuchsia-500
            to-cyan-500
          "
        />
      </motion.div>
    </div>
  );
}