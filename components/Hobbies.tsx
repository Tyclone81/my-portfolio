import { Trophy, Cpu, Hammer, HeartHandshake } from "lucide-react";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Football & Sports Strategy",
      desc: "A lifelong passion balancing real-time tactical adjustments, spatial awareness, and decisive collaborative teamwork on the pitch.",
      icon: <Trophy className="w-6 h-6 text-orange-600" />,
      tag: "Tactics & Teamwork",
    },
    {
      title: "Hardware & Reverse-Engineering",
      desc: "A relentless curiosity for dismantling digital, mechanical, and physical systems to understand their core mechanics, assembly, and failure points.",
      icon: <Cpu className="w-6 h-6 text-orange-600" />,
      tag: "Deep Systems Curiosity",
    },
    {
      title: "Hands-on Crafting & Architecture",
      desc: "Extending the builder's mindset beyond software into physical DIY fabrication—designing custom structures and bespoke dog kennels from raw materials.",
      icon: <Hammer className="w-6 h-6 text-orange-600" />,
      tag: "Physical Craft",
    },
    {
      title: "Tech Community & Volunteering",
      desc: "Mentoring upcoming developers, contributing to local community tech events at Zone01 Kisumu, and engaging in grassroots problem-solving.",
      icon: <HeartHandshake className="w-6 h-6 text-orange-600" />,
      tag: "Community",
    },
  ];

  return (
    <section id="hobbies" className="py-24 bg-[#FAF8F5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-mono text-sm tracking-wider uppercase mb-2">04. Personal Pursuits</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Out of Office
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            How physical crafting, systems exploration, and sports shape my engineering perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 hover:border-orange-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 rounded-xl border border-orange-100 group-hover:border-orange-200 transition-colors">
                  {hobby.icon}
                </div>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                  {hobby.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                {hobby.title}
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {hobby.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}