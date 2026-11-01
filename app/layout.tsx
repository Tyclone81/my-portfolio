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
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico?v=2"],
  },
  openGraph: {
    title: "Victor Ogero | Full-Stack & Systems Software Engineer",
    description: "Explore backend architectures, concurrent TCP systems, and production web platforms built by Victor Ogero.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "VO. - Victor Ogero",
      },
    ],
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