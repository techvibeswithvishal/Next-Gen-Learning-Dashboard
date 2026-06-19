"use client";

import { Course } from "@/types/course";
import { iconMap } from "@/lib/iconMap";

import ProgressBar from "./ProgressBar";
import MotionCard from "@/components/animations/MotionCard";

interface Props {
  course: Course;
}

export default function CourseCard({
  course,
}: Props) {
  const Icon =
    iconMap[course.icon_name] ||
    iconMap.Code2;

  return (
    <MotionCard>
      <article
        className="
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-zinc-900/80
          backdrop-blur-xl
          p-5
        "
      >
        {/* Mesh Glow */}
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

        {/* Noise Layer */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-soft-light
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize:
              "8px 8px",
          }}
        />

        {/* Hover Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-r
            from-violet-500/0
            via-violet-500/5
            to-cyan-500/0
          "
        />

        <div className="relative z-10">
          <Icon
            size={24}
            className="
              text-violet-400
              drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]
            "
          />

          <h3
            className="
              mt-4
              text-white
              font-semibold
              leading-snug
            "
          >
            {course.title}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-zinc-400
            "
          >
            {course.progress}% Complete
          </p>

          <div className="mt-4">
            <ProgressBar
              progress={course.progress}
            />
          </div>
        </div>
      </article>
    </MotionCard>
  );
}