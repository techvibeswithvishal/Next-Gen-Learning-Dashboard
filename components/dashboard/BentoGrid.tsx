import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";

import StaggerContainer from "@/components/animations/StaggerContainer";

import { Course } from "@/types/course";

interface BentoGridProps {
  courses: Course[];
}

export default function BentoGrid({
  courses,
}: BentoGridProps) {
  return (
    <section
      aria-label="Student Dashboard"
      className="
        grid
        gap-4
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        auto-rows-[180px]
      "
    >
      <StaggerContainer>
        <HeroTile />

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

        <ActivityTile />
      </StaggerContainer>
    </section>
  );
}