import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Cover from "@/components/Cover";
import { projects } from "@/lib/projects";

// Stacking window cards: each sticks a little lower than the last,
// so earlier titles stay visible as the next card slides over.

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#FAF7F2] border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-mono text-sm tracking-wider uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Featured Developments
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            Scroll through the stack, then browse the full case studies.
          </p>
          <div className="mt-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-800 hover:text-orange-600 transition-colors"
            >
              See all work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Stacking window cards: each sticks a little lower than the last,
            so earlier titles stay visible as the next card slides over. */}
        <div className="relative pb-16 sm:pb-24">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href="/work"
              style={{
                top: `calc(5.25rem + ${i * 3.25}rem)`,
                zIndex: i + 1,
              }}
              className="group sticky block mb-12 sm:mb-16 last:mb-0 bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-[0_-12px_32px_-12px_rgba(28,25,23,0.25)] transition-colors duration-300 hover:border-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              {/* Window title bar */}
              <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#FAF8F5] border-b border-stone-200">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="font-mono text-sm text-orange-600 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 truncate group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="hidden sm:inline-block shrink-0 px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 font-mono text-xs font-semibold">
                    {project.badge}
                  </span>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-5 h-5 shrink-0 text-stone-400 transition-all duration-300 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                />
              </div>

              {/* Preview */}
              <Cover src={project.image} alt={project.imageAlt} ratio="aspect-[2/1]" priority={i < 2} />

              {/* Summary + stack */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-5 sm:px-6 py-4 border-t border-stone-200 bg-white">
                <p className="text-sm text-stone-600 leading-relaxed line-clamp-2 sm:flex-1">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:justify-end sm:max-w-[16rem]">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-stone-50 text-stone-700 border border-stone-200 px-2.5 py-1 rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
