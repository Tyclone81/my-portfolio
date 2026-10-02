import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victor Ogero | Full-Stack & Systems Software Engineer",
  description: "Portfolio of Victor Ogero, Full-Stack & Systems Software Engineer specializing in Go systems architecture, concurrent networks, and scalable web platforms.",
  keywords: [
    "Victor Ogero",
    "Software Engineer",
    "Go Developer",
    "Zone01 Kisumu",
    "Systems Architect",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Victor Ogero" }],
  openGraph: {
    title: "Victor Ogero | Full-Stack & Systems Software Engineer",
    description: "Explore backend architectures, concurrent TCP systems, and production web platforms built by Victor Ogero.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24 antialiased">
      <body className="bg-[#FAF7F2] text-stone-900 min-h-screen selection:bg-amber-200 selection:text-stone-950 font-sans">
        {children}
      </body>
    </html>
  );
}