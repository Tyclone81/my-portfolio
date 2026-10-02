import { ExternalLink, Github, FolderGit2, Sparkles } from "lucide-react";

interface ProjectItem {
  title: string;
  tech: string[];
  desc: string;
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
}

interface ProjectCategory {
  category: string;
  description: string;
  items: ProjectItem[];
}

export default function Projects() {
  const projectGroups: ProjectCategory[] = [
    {
      category: "Production & Hackathons",
      description: "Deployed web solutions and hackathon innovations delivering concrete business value.",
      items: [
        {
          title: "INKA LittUp",
          tech: ["Go", "HTML5", "CSS3", "Formspree", "WhatsApp API"],
          desc: "A production, mobile-responsive business web platform for an electrical service company. Features an interactive lightbox gallery and direct customer inquiry channels.",
          liveUrl: "https://inkalittup.onrender.com/",
          badge: "Live in Production",
        },
        {
          title: "ProperSats",
          tech: ["React", "TypeScript", "FastAPI", "WebLN", "Bitcoin L2"],
          desc: "A real estate escrow web application leveraging the Bitcoin Lightning Network for low-latency, trust-minimized multi-signature escrow workflows.",
          githubUrl: "https://github.com/hajisml/propersats",
          badge: "Fintech Web3",
        },
        {
          title: "Resili",
          tech: ["Next.js", "Go", "Python", "XGBoost", "Climate APIs"],
          desc: "An advisory climate risk intelligence platform providing flood warning metrics and decision-support modeling for county government emergency fund disbursements.",
          badge: "Hackathon Finalist",
        },
      ],
    },
    {
      category: "Core Systems & Engineering Suite",
      description: "Low-level network protocols, concurrent runtime architectures, and CLI utilities built from first principles.",
      items: [
        {
          title: "Full-Stack Web Forum",
          tech: ["Go", "SQLite (CGO)", "Docker", "Bcrypt", "Sessions"],
          desc: "Architected the relational schema, session-based authentication engine, topic thread management, and multi-stage Docker deployment for a high-traffic developer community forum.",
          githubUrl: "https://github.com/Tyclone81",
        },
        {
          title: "Net-Cat (TCP Chat Server)",
          tech: ["Go", "TCP Sockets", "Goroutines", "Channels", "Mutex"],
          desc: "A multithreaded TCP group chat server built strictly with Go standard library primitives. Features client connection multiplexing, message broadcast queuing, and graceful disconnection handling.",
          githubUrl: "https://github.com/Tyclone81",
        },
        {
          title: "my-ls (Unix CLI Replication)",
          tech: ["Go", "Unix Syscalls", "File Descriptors", "CLI"],
          desc: "A custom command-line utility replicating the core functionality of the Unix 'ls' tool, supporting flag combinations (-l, -a, -R, -r, -t) and permission bitmask formatting.",
          githubUrl: "https://github.com/Tyclone81",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#FAF7F2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-mono text-sm tracking-wider uppercase mb-2">02. Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Featured Engineering
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            From low-level socket multiplexers and systems CLI tools to production web platforms.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {projectGroups.map((group, idx) => (
            <div key={idx}>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-stone-200 pb-3 mb-8 gap-2">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5 text-orange-600" />
                  <span>{group.category}</span>
                </h3>
                <span className="text-xs sm:text-sm text-stone-500">{group.description}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((project, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top bar with badge and action links */}
                      <div className="flex items-center justify-between mb-3 gap-2">
                        {project.badge ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                            <Sparkles className="w-3 h-3 text-orange-500" />
                            {project.badge}
                          </span>
                        ) : (
                          <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                            Systems Project
                          </span>
                        )}

                        <div className="flex items-center gap-2 text-stone-400">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} on GitHub`}
                              className="hover:text-stone-900 transition-colors p-1"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit live demo for ${project.title}`}
                              className="hover:text-orange-600 transition-colors p-1"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h4 className="text-xl font-bold text-stone-900 mb-2.5 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h4>

                      {/* Description */}
                      <p className="text-stone-600 text-sm leading-relaxed mb-6">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tech Pills & Actions */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                        {project.tech.map((techName, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-stone-50 text-stone-700 border border-stone-200 px-2.5 py-1 rounded-md text-xs font-mono"
                          >
                            {techName}
                          </span>
                        ))}
                      </div>

                      {/* CTA link if liveUrl exists */}
                      {project.liveUrl && (
                        <div className="mt-4 pt-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                          >
                            <span>Launch Live Application</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}

                      {/* CTA link if githubUrl exists and no liveUrl */}
                      {project.githubUrl && !project.liveUrl && (
                        <div className="mt-4 pt-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-stone-800 hover:text-amber-800 flex items-center gap-1.5 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5 text-stone-600" />
                            <span>Explore Repository on GitHub</span>
                            <ExternalLink className="w-3 h-3 text-stone-400" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global GitHub Callout */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Tyclone81?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-200 text-stone-800 hover:border-orange-500 hover:text-orange-600 shadow-sm hover:shadow-md transition-all text-sm font-semibold"
          >
            <Github className="w-4 h-4 text-orange-600" />
            <span>Explore All Repositories on GitHub &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}