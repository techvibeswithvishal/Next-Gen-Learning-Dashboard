"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import SidebarItem from "./SidebarItem";
import { navigationItems } from "@/constants/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <nav
      aria-label="Primary Navigation"
      className={`
        hidden lg:flex
        flex-col
        h-screen
        border-r
        border-white/10
        bg-zinc-950/90
        backdrop-blur-xl
        transition-all
        duration-300
        ${
          collapsed
            ? "w-20"
            : "w-64"
        }
      `}
    >
      <div className="p-4">
        <button
          onClick={() =>
            setCollapsed(!collapsed)
          }
          aria-label={
            collapsed
              ? "Expand Sidebar"
              : "Collapse Sidebar"
          }
          className="
            p-2
            rounded-xl
            bg-zinc-900
            border
            border-white/10
            hover:border-violet-500/30
            transition-colors
          "
        >
          <Menu size={18} />
        </button>
      </div>

      <div className="px-3 space-y-2">
        {navigationItems.map((item) => (
          <SidebarItem
            key={item.id}
            href={item.href}
            icon={item.icon}
            label={item.label}
            collapsed={collapsed}
            active={
              pathname === item.href
            }
          />
        ))}
      </div>
    </nav>
  );
}