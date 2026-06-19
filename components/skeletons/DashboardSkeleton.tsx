import HeroSkeleton from "./HeroSkeleton";
import CourseSkeleton from "./CourseSkeleton";
import ActivitySkeleton from "./ActivitySkeleton";

export default function DashboardSkeleton() {
  return (
    <section
      className="
        grid
        gap-4
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        auto-rows-[180px]
      "
    >
      <HeroSkeleton />

      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />

      <ActivitySkeleton />
    </section>
  );
}