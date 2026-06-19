"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";

export default function HeroTile() {
  return (
    <motion.article
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/80
        backdrop-blur-xl
        col-span-1
        md:col-span-2
        p-6
      "
    >
      {/* Gradient Mesh */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-violet-500/15
          via-transparent
          to-cyan-500/15
        "
      />

      {/* Glow Orb */}
      <div
        className="
          absolute
          -top-10
          -right-10
          h-40
          w-40
          rounded-full
          bg-violet-500/20
          blur-3xl
        "
      />

      {/* Noise Texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="relative z-10"
      >
        <div className="flex items-center gap-2">
          <Sparkles
            size={16}
            className="text-violet-400"
          />

          <p className="text-zinc-400 text-sm">
            Good Evening
          </p>
        </div>

        <h1
          className="
            mt-3
            text-3xl
            md:text-4xl
            font-bold
            text-white
          "
        >
          Welcome back, Vishal 👋
        </h1>

        <p className="mt-2 text-zinc-400">
          Continue your learning journey and
          maintain your streak.
        </p>

        <div
          className="
            flex
            items-center
            gap-2
            mt-6
          "
        >
          <Flame
            className="
              text-orange-400
              drop-shadow-[0_0_8px_rgba(251,146,60,0.7)]
            "
            size={20}
          />

          <span className="text-white font-medium">
            14 Day Learning Streak
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}