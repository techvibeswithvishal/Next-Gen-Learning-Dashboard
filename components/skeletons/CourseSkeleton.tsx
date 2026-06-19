export default function CourseSkeleton() {
  return (
    <article
      className="
        rounded-3xl
        border border-white/10
        bg-zinc-900
        p-5
        animate-pulse
      "
    >
      <div className="h-6 w-6 rounded bg-zinc-800" />

      <div className="mt-4 h-4 w-3/4 rounded bg-zinc-800" />

      <div className="mt-3 h-3 w-1/3 rounded bg-zinc-800" />

      <div className="mt-5 h-2 w-full rounded-full bg-zinc-800" />
    </article>
  );
}