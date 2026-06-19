export default function HeroSkeleton() {
  return (
    <article
      className="
        rounded-3xl
        border border-white/10
        bg-zinc-900
        p-6
        col-span-1
        md:col-span-2
        animate-pulse
      "
    >
      <div className="h-4 w-24 rounded bg-zinc-800" />

      <div className="mt-4 h-8 w-64 rounded bg-zinc-800" />

      <div className="mt-6 h-5 w-40 rounded bg-zinc-800" />
    </article>
  );
}