import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description:
    "Futuristic learning dashboard built with Next.js, Supabase, Tailwind CSS and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="
          bg-zinc-950
          text-white
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}