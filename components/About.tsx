import { Terminal, Server, Cpu, Layers, CheckCircle2 } from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-orange-600" />,
      skills: ["Go (Golang)", "Concurrency & Channels", "TCP Socket Multiplexing", "RESTful APIs", "Python", "C Fundamentals"],
    },
    {
      title: "Databases & Storage",
      icon: <Layers className="w-5 h-5 text-orange-600" />,
      skills: ["PostgreSQL", "SQLite", "Database Schema Design", "Session Management", "CGO Database Drivers"],
    },
    {
      title: "Frontend Engineering",
      icon: <Terminal className="w-5 h-5 text-orange-600" />,
      skills: ["TypeScript", "Next.js (App Router)", "React", "Tailwind CSS", "HTML5 & Modern CSS3"],
    },
    {
      title: "DevOps & Core Tools",
      icon: <Cpu className="w-5 h-5 text-orange-600" />,
      skills: ["Docker Multi-Stage Builds", "Linux / Bash Shell", "Git & GitHub Workflows", "CI/CD Deployment", "System CLI Utilities"],
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-mono text-sm tracking-wider uppercase mb-2">01. Background & Philosophy</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Narrative & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              I am <strong className="text-stone-950 font-bold">Victor Ogero</strong>, a Full-Stack Software Engineer bridging the analytical rigor and diagnostic precision of laboratory science with modern software architecture. Currently specializing in software development at <strong className="text-orange-600 font-semibold">Zone01 Kisumu</strong>, I thrive within an intensive, peer-led engineering collective where high-standard code reviews and deep problem-solving are daily standards.
            </p>
            <p>
              Whether I am designing concurrent TCP servers with Go goroutines and mutexes, or building mobile-first web platforms for local businesses, my north star is <strong className="text-stone-950 font-semibold">viable engineering</strong>—shipping code that is maintainable, scalable, and resilient under real-world conditions.
            </p>
            <p>
              I believe developer tools and AI models make us architects rather than mere typists. My role is to ask the hard questions: how does the system hold together at the seams, what bottlenecks will emerge at scale, and how do we build software that lasts?
            </p>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              Core Engineering Highlights
            </h3>

            <div className="space-y-3.5 text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span><strong>Zone01 Kisumu Fellow:</strong> Intensive peer-to-peer 01-edu engineering program.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span><strong>Systems & Backend Mindset:</strong> Concurrency, memory profiling, and robust network protocols.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span><strong>Production Delivery:</strong> Creator of live business systems like INKA LittUp.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span><strong>Scientific Analytical Foundation:</strong> Diagnostics background cultivating methodical debugging.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Proficiencies Matrix */}
        <div>
          <h3 className="text-xl font-bold text-stone-900 mb-6 text-center sm:text-left flex items-center gap-2">
            <span>Technical Proficiencies</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-5 hover:border-orange-400 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  {cat.icon}
                  <h4 className="font-semibold text-stone-900 text-base">{cat.title}</h4>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-xs sm:text-sm text-stone-600 flex items-center gap-1.5">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}