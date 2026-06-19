import Sidebar from "@/components/navigation/Sidebar";
import MobileNav from "@/components/navigation/MobileNav";

import { getCourses } from "@/lib/queries";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="flex">
          <Sidebar />

          <main className="flex-1 p-6 pb-24 lg:pb-6">
            <h1 className="text-3xl font-bold mb-6">
              Courses
            </h1>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.id}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-zinc-900/50
                    p-6
                  "
                >
                  <h2 className="font-semibold">
                    {course.title}
                  </h2>

                  <p className="mt-2 text-zinc-400">
                    Progress: {course.progress}%
                  </p>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>

      <MobileNav />
    </>
  );
}