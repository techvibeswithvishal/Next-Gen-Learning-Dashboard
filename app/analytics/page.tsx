import Sidebar from "@/components/navigation/Sidebar";
import MobileNav from "@/components/navigation/MobileNav";

export default function AnalyticsPage() {
  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="flex">
          <Sidebar />

          <main className="flex-1 p-6 pb-24 lg:pb-6">
            <h1 className="text-3xl font-bold mb-6">
              Analytics
            </h1>

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-zinc-900/50
                p-8
              "
            >
              <h2 className="text-xl font-semibold">
                Learning Activity
              </h2>

              <p className="text-zinc-400 mt-3">
                Weekly learning insights and contribution graph.
              </p>
            </div>
          </main>
        </div>
      </div>

      <MobileNav />
    </>
  );
}