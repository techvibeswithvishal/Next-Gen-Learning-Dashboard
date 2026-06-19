"use client";

import { motion } from "framer-motion";

const activityData = [
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
];

export default function ActivityTile() {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.4,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        p-5
        md:col-span-2
      "
    >
      {/* Glow Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-violet-500/10
          via-transparent
          to-cyan-500/10
        "
      />

      <div className="relative z-10">
        <h2 className="text-white font-semibold">
          Learning Activity
        </h2>

        <p className="text-zinc-400 text-sm mt-1">
          32 Contributions This Week
        </p>

        <div
          className="
            grid
            grid-cols-7
            gap-2
            mt-5
          "
        >
          {activityData.map((column, colIndex) =>
            column.map((cell, rowIndex) => (
              <div
                key={`${colIndex}-${rowIndex}`}
                className={`
                  h-4
                  w-4
                  rounded-sm
                  transition-colors
                  ${
                    cell
                      ? "bg-violet-500"
                      : "bg-zinc-700"
                  }
                `}
              />
            ))
          )}
        </div>
      </div>
    </motion.article>
  );
}