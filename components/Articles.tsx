import { ExternalLink, BookOpen, Clock, Calendar } from "lucide-react";

export default function Articles() {
  const articles = [
    {
      title: "The Thin Line Between Vibe Coding and Viable Coding",
      desc: "Documenting the evolution of modern software engineering. While AI can quickly generate lines of code, the real challenge for engineers has shifted to structural judgment, architecture, and knowing what not to build.",
      url: "https://dev.to/tyclone81/the-thin-line-between-vibe-coding-and-viable-coding-1mal",
      platform: "DEV Community",
      readTime: "3 min read",
      date: "September 2026",
      tags: ["#SoftwareEngineering", "#SystemArchitecture", "#AI", "#ViableCoding"],
    },
  ];

  return (
    <section id="articles" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-mono text-sm tracking-wider uppercase mb-2">03. Insights &amp; Writing</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Technical Writing
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            Exploring software architecture, engineering paradigms, and the evolving developer ecosystem.
          </p>
        </div>

        {/* Article Cards */}
        <div className="space-y-6">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 sm:p-8 hover:border-orange-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-500">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-orange-700 font-semibold bg-orange-100/70 px-2.5 py-0.5 rounded-full border border-orange-200">
                      <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                      {article.platform}
                    </span>
                    <span className="flex items-center gap-1 text-stone-500">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {article.date}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-stone-500">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {article.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                    {article.desc}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs text-stone-500 font-mono bg-white px-2.5 py-0.5 rounded border border-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-orange-600 font-semibold text-sm inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Read on DEV.to</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}