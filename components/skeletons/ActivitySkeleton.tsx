export default function ActivitySkeleton() {
  return (
    <article
      className="
        rounded-3xl
        border border-white/10
        bg-zinc-900
        p-5
        md:col-span-2
        animate-pulse
      "
    >
      <div className="h-5 w-40 rounded bg-zinc-800" />

      <div className="mt-2 h-3 w-32 rounded bg-zinc-800" />

      <div className="grid grid-cols-7 gap-2 mt-6">
        {Array.from({ length: 35 }).map((_, index) => (
          <div
            key={index}
            className="
              h-4
              w-4
              rounded-sm
              bg-zinc-800
            "
          />
        ))}
      </div>
    </article>
  );
}