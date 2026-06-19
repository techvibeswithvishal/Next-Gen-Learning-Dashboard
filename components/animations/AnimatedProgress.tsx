"use client";

import { motion } from "framer-motion";

interface Props {
  value: number;
}

export default function AnimatedProgress({
  value,
}: Props) {
  return (
    <div
      className="
        h-2
        w-full
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
          width: `${value}%`,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-purple-500
          to-cyan-500
        "
      />
    </div>
  );
}