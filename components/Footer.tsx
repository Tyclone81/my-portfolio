import { Github, Linkedin, ExternalLink, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Tyclone81",
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/victor-ogero-8594611a4",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: "DEV.to",
      href: "https://dev.to/tyclone81",
      icon: <ExternalLink className="w-4 h-4" />,
    },
    {
      name: "𝕏 (Twitter)",
      href: "https://x.com/tylervic2",
      icon: <span className="font-bold text-xs">𝕏</span>,
    },
  ];

  return (
    <footer className="bg-[#FAF7F2] py-14 border-t border-stone-300 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Monogram */}
        <div className="mb-6 flex justify-center">
          <Link href="/" className="group inline-flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-[#FAF7F2] font-black text-base tracking-tight flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
              VO<span className="text-amber-200">.</span>
            </span>
          </Link>
        </div>

        {/* Navigation & Socials */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-950 transition-colors text-xs sm:text-sm font-mono"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Back to top anchor */}
        <div className="mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-950 border-b border-stone-400 hover:border-stone-900 pb-0.5 transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Return to top</span>
          </a>
        </div>

        {/* Copyright & Stack */}
        <p className="text-stone-600 text-xs font-mono">
          &copy; {currentYear} Victor Ogero &bull; Full-Stack Software Engineer &bull; Zone01 Kisumu
        </p>
      </div>
    </footer>
  );
}