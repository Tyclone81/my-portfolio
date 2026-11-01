import { ArrowUpRight } from "lucide-react";
import Cover from "@/components/Cover";

interface Article {
  title: string;
  desc: string;
  url: string;
  date: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

// Newest first. The remaining posts live on DEV.to (see the link at the top of the section).
const articles: Article[] = [
  {
    title: "The Thin Line Between Vibe Coding and Viable Coding",
    desc: "Notes from a Zone01 Kisumu conference on AI and software engineering. Code is getting cheaper to write, so the real work has moved to structural judgment, architecture, and knowing what not to build.",
    url: "https://dev.to/tyclone81/the-thin-line-between-vibe-coding-and-viable-coding-1mal",
    date: "Sep 2026",
    tags: ["SoftwareEngineering", "AI"],
    image: "/images/articles/thin-line.svg",
    imageAlt: "Illustration splitting loose vibe coding from structured viable coding",
  },
  {
    title: "ASCII-Art Experiment to Production-Grade: Building a Live Web Platform for INKA LittUp",
    desc: "How one assignment became the foundation for a real client site: fixing Go's catch-all routing so bad paths return 404, wiring up Formspree and WhatsApp, and shipping with continuous deploys on Render.",
    url: "https://dev.to/tyclone81/ascii-art-experiment-to-production-grade-building-a-live-web-platform-for-inka-littup-585d",
    date: "Jul 2026",
    tags: ["Go", "WebDev"],
    image: "/images/projects/inka-littup.svg",
    imageAlt: "Preview of the INKA LittUp website",
  },
  {
    title: "From the Lab to the Loop; Starting Again!",
    desc: "Why I left science for software development: six months of self-doubt, an intense Zone01 Kisumu selection, and the leap of faith to start over.",
    url: "https://dev.to/tyclone81/from-the-lab-to-the-loop-starting-again-4hd5",
    date: "Jun 2026",
    tags: ["Beginners", "Career"],
    image: "/images/articles/lab-to-loop.svg",
    imageAlt: "Illustration of a lab flask turning into a code loop",
  },
];

// The tilt. Desktop only: on phones the cards sit flat in a single column.
const TILT = "md:[transform:skewY(-22deg)]";
const TILT_HOVER = "md:hover:[transform:skewY(-22deg)_translateY(-20px)]";

export default function Articles() {
  return (
    <section id="articles" className="bg-[#F8EBDD] border-t border-stone-200/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <a
            href="https://dev.to/tyclone81"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-stone-900/40 text-stone-900 font-mono text-xs transition-colors hover:bg-stone-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8EBDD]"
          >
            see more on dev.to
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
             Articles
          </h2>
          <p className="mt-3 text-stone-900/80 text-base max-w-md">
            What I learn while building, written up on DEV.to.
          </p>
        </div>

        {/* Tilted cards: the whole card is the link */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col min-h-[26rem] bg-stone-900 text-white rounded-3xl p-6 shadow-[0_10px_0_-4px_rgba(28,25,23,0.35)] transition-[transform,box-shadow] duration-300 ease-out ${TILT} ${TILT_HOVER} md:hover:shadow-[-14px_22px_30px_rgba(28,25,23,0.45)] motion-reduce:transition-none motion-reduce:hover:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8EBDD]`}
            >
              {/* Arrow badge: fills in on hover */}
              <span
                aria-hidden="true"
                className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 rounded-full border border-orange-400/70 text-orange-400 transition-colors duration-300 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-stone-900"
              >
                <ArrowUpRight className="w-4 h-4" />
              </span>

              <p className="font-mono text-xs text-orange-400 pr-12 mb-3">
                {article.tags.join(" / ")}
              </p>

              <h3 className="text-lg font-bold leading-snug pr-8 mb-3">{article.title}</h3>

              {/* Description appears on hover (always visible on touch / no-hover devices) */}
              <p className="text-sm text-stone-300 leading-relaxed line-clamp-4 transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100 motion-reduce:transition-none">
                {article.desc}
              </p>

              <div className="mt-auto pt-5">
                <div className="rounded-xl overflow-hidden border border-white/10 mb-3">
                  <Cover src={article.image} alt={article.imageAlt} ratio="aspect-[16/9]" />
                </div>
                <p className="font-mono text-xs text-stone-400">{article.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
