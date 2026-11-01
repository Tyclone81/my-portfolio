import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victor Ogero | Full-Stack Software Engineer",
  description: "Portfolio of Victor Ogero, a full-stack software engineer building web applications and Go backends. Explore selected projects, articles, and work from Zone01 Kisumu.",
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
    title: "Victor Ogero | Full-Stack Software Engineer",
    description: "Explore web applications and Go backend projects built by Victor Ogero, a full-stack software engineer at Zone01 Kisumu.",
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