import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Cover from "@/components/Cover";
import Footer from "@/components/Footer"; // assumes a default export with no required props
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work | Victor Ogero",
  description: "Case studies: the role, stack and lessons behind each project.",
};

export default function WorkPage() {
  return (
    <>
      <main className="bg-[#FAF7F2] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 hover:text-orange-600 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>

          <header className="max-w-2xl mb-16">
            <p className="text-orange-600 font-mono text-sm mb-2">/ work</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
              Case studies
            </h1>
            <p className="text-stone-600 mt-4 text-base sm:text-lg">
              The full breakdown of what each project does, my role, and what I learned.
            </p>
          </header>

          <div className="space-y-24">
            {projects.map((project, i) => (
              <article key={project.slug} id={project.slug} className="scroll-mt-24">
                <div className="flex items-center gap-3 font-mono text-sm text-stone-500 mb-4">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-semibold">
                    {project.badge}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-6">
                  {project.title}
                </h2>

                <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white mb-8">
                  <Cover src={project.image} alt={project.imageAlt} priority={i === 0} />
                </div>

                <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
                  {project.summary}
                </p>

                <dl className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-x-6 gap-y-5 text-sm sm:text-base max-w-3xl">
                  {project.role && (
                    <>
                      <dt className="font-mono text-stone-400">role</dt>
                      <dd className="text-stone-800">{project.role}</dd>
                    </>
                  )}

                  <dt className="font-mono text-stone-400">stack</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white text-stone-700 border border-stone-200 px-2.5 py-1 rounded-md text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>

                  {project.learned && (
                    <>
                      <dt className="font-mono text-stone-400">learned</dt>
                      <dd className="text-stone-700 leading-relaxed">{project.learned}</dd>
                    </>
                  )}

                  {project.next && (
                    <>
                      <dt className="font-mono text-stone-400">next</dt>
                      <dd className="text-stone-700 leading-relaxed">{project.next}</dd>
                    </>
                  )}

                  {(project.githubUrl || project.liveUrl) && (
                    <>
                      <dt className="font-mono text-stone-400">links</dt>
                      <dd className="flex flex-wrap gap-5">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-stone-800 hover:text-orange-600 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                          >
                            Live
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </dd>
                    </>
                  )}
                </dl>

                {project.highlights && (
                  <div className="mt-10">
                    <h3 className="font-mono text-sm text-stone-500 mb-4">/ what it does</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.highlights.map((h) => (
                        <li
                          key={h.title}
                          className="bg-white border border-stone-200 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 motion-reduce:transform-none motion-reduce:transition-none"
                        >
                          <h4 className="font-bold text-stone-900 mb-1">{h.title}</h4>
                          <p className="text-sm text-stone-600 leading-relaxed">{h.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-24 pt-10 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <p className="text-stone-700 font-semibold">Want the details on anything here?</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-stone-200 text-stone-800 hover:border-orange-500 hover:text-orange-600 shadow-sm hover:shadow-md transition-all text-sm font-semibold"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
