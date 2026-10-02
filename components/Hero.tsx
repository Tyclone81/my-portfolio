"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { openResumeModal } from "./ResumeModal";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#FAF7F2]">
      
      {/* ========================================================
          Geometric Architectural Color Blocks (Figma Design Layout)
          ======================================================== */}
      {/* Vertical Sand/Apricot Block (Center) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 lg:w-[460px] h-[480px] sm:h-[580px] lg:h-[620px] bg-[#EED9C4] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Horizontal Soft Buttercream Block (Middle-Right) */}
      <div 
        className="absolute top-28 sm:top-36 right-0 left-1/4 sm:left-1/3 h-80 sm:h-[440px] lg:h-[490px] bg-[#FDF1D6] pointer-events-none -z-20"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Architectural Outline Typography with Studio Amber Hover Glow */}
          <div className="lg:col-span-3 order-3 lg:order-1 flex flex-col justify-end">
            <div 
              className="victor-bigtext font-black text-6xl sm:text-7xl lg:text-[7.5rem] tracking-tighter leading-[0.88] select-none cursor-default"
              title="Victor Ogero"
            >
              <div>VIC</div>
              <div>TOR</div>
            </div>
            <p className="mt-4 text-xs font-mono tracking-widest uppercase text-stone-500 hidden lg:block">
              statically linked &bull; concurrent
            </p>
          </div>

          {/* Center Column: Enlarged Editorial Portrait Overlapping Blocks */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center relative">
            <div className="relative w-full max-w-[320px] sm:max-w-[370px] lg:max-w-[400px] aspect-[3/4] group">
              
              {/* Subtle architectural border frame */}
              <div className="absolute inset-0 bg-stone-900/5 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/15 border border-stone-300/60 bg-stone-100">
                <Image
                  src="/profile.jpg"
                  alt="Victor Ogero - Full-Stack & Systems Software Engineer"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 370px, 400px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  priority
                />
              </div>

              {/* Minimal floating badge */}
              <div className="absolute -bottom-3 right-4 bg-white/95 backdrop-blur-sm border border-stone-200 px-3.5 py-1.5 rounded-full shadow-md text-[11px] font-mono font-semibold text-stone-800">
                Go &bull; Architect
              </div>
            </div>
          </div>

          {/* Right Column: Statement, Technical Bio, & Developer Actions */}
          <div className="lg:col-span-4 order-2 lg:order-3 space-y-5 text-left z-10 lg:pl-4">
            
            {/* Greeting: "Hey, I am Victor Ogero." */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-mono text-stone-700 tracking-tight">
                Hey, I am <span className="font-bold text-stone-950 underline decoration-amber-600/60 underline-offset-4">Victor Ogero</span>.
              </h2>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-[1.12]">
                Architecting resilient systems from first principles.
              </h1>
            </div>

            {/* Developer technical synopsis */}
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Operating deep within the Go ecosystem at Zone01 Kisumu. Driven by a chemist’s curiosity to stop consuming tools blindly and start building them from scratch. I bridge analytical science with modern code to engineer robust, scalable web platforms.
            </p>

            {/* Confident Developer Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-stone-950 hover:text-amber-800 border-b-2 border-stone-950 hover:border-amber-800 pb-1 transition-all group"
              >
                <span>Explore Architecture &amp; Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="text-xs font-mono font-semibold text-stone-600 hover:text-stone-950 transition-colors"
              >
                Initiate Connection &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================
          Bottom Editorial Links Bar (Figma Signature Layout)
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16">
        <div className="border-t border-stone-300/80 pt-6 flex flex-wrap items-center justify-between sm:justify-start gap-8 sm:gap-16 text-xs sm:text-sm font-mono uppercase tracking-wider text-stone-800">
          
          <button
            onClick={() => openResumeModal()}
            className="group flex items-center gap-1.5 pb-1 border-b-2 border-stone-900 hover:border-amber-700 hover:text-amber-800 transition-all font-bold cursor-pointer"
          >
            <span>view resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#projects"
            className="group flex items-center gap-1.5 pb-1 border-b-2 border-stone-900 hover:border-amber-700 hover:text-amber-800 transition-all font-bold"
          >
            <span>latest work</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#articles"
            className="group flex items-center gap-1.5 pb-1 border-b-2 border-stone-900 hover:border-amber-700 hover:text-amber-800 transition-all font-bold"
          >
            <span>case studies &amp; articles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

        </div>
      </div>

    </section>
  );
}