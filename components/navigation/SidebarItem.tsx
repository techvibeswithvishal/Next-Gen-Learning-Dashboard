"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface SidebarItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  collapsed?: boolean;
}

export default function SidebarItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      aria-current={
        active ? "page" : undefined
      }
      className="
        relative
        block
        w-full
        rounded-xl
        overflow-hidden
      "
    >
      <div
        className="
          relative
          flex
          items-center
          gap-3
          px-4
          py-3
        "
      >
        {active && (
          <motion.div
            layoutId="active-nav"
            className="
              absolute
              inset-0
              rounded-xl
              bg-violet-500/15
              border
              border-violet-500/30
              shadow-[0_0_25px_rgba(139,92,246,0.25)]
            "
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        )}

        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="relative z-10"
        >
          <Icon
            size={20}
            className={
              active
                ? "text-violet-400"
                : "text-zinc-400"
            }
          />
        </motion.div>

        {!collapsed && (
          <span
            className={`
              relative
              z-10
              text-sm
              font-medium
              transition-colors
              ${
                active
                  ? "text-white"
                  : "text-zinc-300"
              }
            `}
          >
            {label}
          </span>
        )}
      </div>
    </Link>
  );
}