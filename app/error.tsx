"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-zinc-950
        text-white
        p-6
      "
    >
      <div
        className="
          rounded-3xl
          border
          border-red-500/20
          bg-zinc-900
          p-8
          max-w-md
          text-center
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            text-red-400
          "
        >
          Something went wrong
        </h1>

        <p
          className="
            text-zinc-400
            mt-3
          "
        >
          {error.message}
        </p>

        <button
          onClick={reset}
          className="
            mt-6
            px-5
            py-2
            rounded-xl
            bg-violet-600
            hover:bg-violet-500
            transition
          "
        >
          Try Again
        </button>
      </div>
    </main>
  );
}