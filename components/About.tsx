import { Terminal, Server, Layers } from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-orange-600" />,
      skills: ["Go", "REST APIs"],
    },
    {
      title: "Web",
      icon: <Terminal className="w-5 h-5 text-orange-600" />,
      skills: ["TypeScript", "React", "Next.js"],
    },
    {
      title: "Data & Tools",
      icon: <Layers className="w-5 h-5 text-orange-600" />,
      skills: ["PostgreSQL", "Git & GitHub", "Docker"],
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-mono text-sm tracking-wider uppercase mb-2">How I Think &amp; Build</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Narrative & Context */}
        <div className="mb-16">
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              I’m <strong className="text-stone-950 font-bold">Victor Ogero</strong>, a software engineer with a background in analytical chemistry, currently developing my craft at <strong className="text-orange-600 font-semibold">Zone01 Kisumu</strong>. Chemistry taught me to question assumptions, work from evidence, and check the results. I bring that same analytical mindset to debugging and design.
            </p>
            <p>
              I care about building software that works for the people relying on it. <strong className="text-stone-950 font-semibold">INKA LittUp</strong> started as an assignment and grew into a live website for an electrical services business—giving me the chance to solve practical problems like reliable routing and direct customer inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 pt-6 border-t border-stone-200">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-orange-600 mb-1">Current focus</p>
              <p className="text-sm font-semibold text-stone-900">Zone01 Kisumu</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-orange-600 mb-1">Approach</p>
              <p className="text-sm font-semibold text-stone-900">Analytical mindset</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-orange-600 mb-1">Built for a real client</p>
              <p className="text-sm font-semibold text-stone-900">INKA LittUp</p>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-xl font-bold text-stone-900 mb-6 text-center sm:text-left flex items-center gap-2">
            <span>Tools &amp; Technologies</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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