"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navigationItems } from "@/constants/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        flex
        lg:hidden
        justify-around
        border-t
        border-white/10
        bg-zinc-950/90
        backdrop-blur-xl
        px-2
        py-3
      "
    >
      {navigationItems.map((item) => {
        const Icon = item.icon;

        const isActive =
          pathname === item.href;

        return (
          <Link
            key={item.id}
            href={item.href}
            aria-current={
              isActive
                ? "page"
                : undefined
            }
            className="
              relative
              flex
              flex-col
              items-center
              justify-center
              gap-1
              px-3
              py-2
              rounded-xl
              min-w-[70px]
            "
          >
            {isActive && (
              <motion.div
                layoutId="mobile-nav-active"
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-violet-500/15
                  border
                  border-violet-500/30
                  shadow-[0_0_20px_rgba(139,92,246,0.25)]
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
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
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
                  isActive
                    ? "text-violet-400"
                    : "text-zinc-500"
                }
              />
            </motion.div>

            <span
              className={`
                relative
                z-10
                text-[10px]
                font-medium
                transition-colors
                ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500"
                }
              `}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}