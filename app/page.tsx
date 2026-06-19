import Sidebar from "@/components/navigation/Sidebar";
import MobileNav from "@/components/navigation/MobileNav";

import BentoGrid from "@/components/dashboard/BentoGrid";

import { getCourses } from "@/lib/queries";

export default async function Page() {
  const courses = await getCourses();

  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="flex">
          <Sidebar />

          <main className="flex-1 p-6 pb-24 lg:pb-6">
            <BentoGrid courses={courses} />
          </main>
        </div>
      </div>

      <MobileNav />
    </>
  );
}