"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { openResumeModal } from "./ResumeModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialLinks = [
    { name: "gh", href: "https://github.com/Tyclone81", title: "GitHub" },
    { name: "in", href: "https://www.linkedin.com/in/victor-ogero-8594611a4", title: "LinkedIn" },
    { name: "dev", href: "https://dev.to/tyclone81", title: "DEV.to" },
    { name: "𝕏", href: "https://x.com/tylervic2", title: "Twitter" },
  ];

  const navLinks = [
    { name: "latest work", href: "#projects" },
    { name: "articles", href: "#articles" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Monogram: VO. wrapped in the predominant brand color */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-[#FAF7F2] font-black text-sm tracking-tight flex items-center justify-center shadow-sm shadow-orange-500/25 group-hover:scale-105 transition-transform duration-200">
                VO<span className="text-amber-200">.</span>
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors leading-tight">
                  Victor Ogero
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-stone-500 -mt-0.5">
                  software engineer
                </span>
              </div>
            </Link>
          </div>

          {/* Center Minimal Social Strip */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-mono text-stone-600">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="hover:text-stone-950 transition-colors py-1 px-1 border-b border-transparent hover:border-stone-900"
              >
                {s.name}
              </a>
            ))}
          </div>

          {/* Right Nav Links & View Resume Action */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-700 hover:text-stone-950 tracking-tight transition-colors"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => openResumeModal()}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-stone-900 hover:text-amber-700 border-b-2 border-stone-900 hover:border-amber-700 pb-0.5 transition-all cursor-pointer"
            >
              <span>view resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 text-stone-800 hover:text-stone-950 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-stone-300 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex gap-6 pb-3 border-b border-stone-200 text-xs font-mono">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-stone-950"
              >
                {s.name}
              </a>
            ))}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-stone-800 hover:text-amber-800 py-1"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 border-t border-stone-200">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openResumeModal();
              }}
              className="inline-flex items-center gap-2 py-2 text-sm font-mono font-bold text-stone-950 border-b-2 border-stone-950 w-full text-left cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-700" />
              <span>view resume (full preview)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}