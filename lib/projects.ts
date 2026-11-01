export interface Project {
  slug: string;
  title: string;
  year: string;
  badge: string;
  summary: string;
  stack: string[];
  image: string; // swap the .svg placeholder for a real screenshot (.jpg/.png) any time
  imageAlt: string;
  // Optional fields: the case study only renders the ones you fill in.
  role?: string;
  learned?: string;
  next?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights?: { title: string; text: string }[];
}

export const projects: Project[] = [
  {
    slug: "inka-littup",
    title: "INKA LittUp",
    year: "2026",
    badge: "Live in production",
    summary:
      "A mobile-responsive business platform for an electrical service company, with an interactive lightbox gallery and direct customer inquiry channels.",
    role: "Solo developer",
    stack: ["Go", "HTML5", "CSS3", "Formspree", "WhatsApp API", "Render"],
    learned:
      "Strict route handling in Go (real 404s instead of catch-all 200s), serving static assets, third-party API integration, and continuous deploys from GitHub to Render.",
    image: "/images/projects/inka-littup.jpg",
    imageAlt: "Preview of the INKA LittUp website",
    liveUrl: "https://inkalittup.onrender.com/",
    githubUrl: "https://github.com/Tyclone81/LittUp",
    highlights: [
      { title: "Strict routing", text: "Unknown paths return a real 404 instead of Go's default catch-all 200." },
      { title: "Lightbox gallery", text: "An interactive gallery that showcases the company's electrical work." },
      { title: "Direct inquiries", text: "A Formspree contact form with no database overhead, plus a WhatsApp deep link." },
      { title: "Continuous delivery", text: "GitHub is connected to Render, so every push to main redeploys." },
    ],
  },
  {
    slug: "propersats",
    title: "ProperSats",
    year: "2026",
    badge: "Fintech / Web3",
    summary:
      "A real estate escrow web app using the Bitcoin Lightning Network for low-latency, trust-minimized multi-signature escrow workflows.",
    // TODO: add `role` and `learned`.
    stack: ["React", "TypeScript", "FastAPI", "WebLN", "Bitcoin L2"],
    image: "/images/projects/propersats.jpg",
    imageAlt: "Preview of ProperSats mobile-first Bitcoin land acquisition platform",
    githubUrl: "https://github.com/hajisml/propersats",
  },
  {
    slug: "resili",
    title: "Resili",
    year: "2026",
    badge: "Hackathon finalist",
    summary:
      "A climate risk intelligence platform that gives county governments flood-warning metrics and decision support for emergency fund disbursements.",
    // TODO: add `role`, `learned` and a repo link.
    stack: ["Next.js", "Go", "Python", "XGBoost", "Climate APIs"],
    image: "/images/projects/resili.svg",
    imageAlt: "Illustration of a rising flood forecast chart over water",
  },
  {
    slug: "web-forum",
    title: "Full-Stack Web Forum",
    year: "2026",
    badge: "Systems project",
    summary:
      "A community forum with a relational schema, session-based authentication, topic threads and a multi-stage Docker deployment.",
    // TODO: add `role`.
    stack: ["Go", "SQLite (CGO)", "Docker", "Bcrypt", "Sessions"],
    learned:
      "Designing a relational schema, building session-based authentication with hashed passwords, and shipping a small Docker image through a multi-stage build.",
    image: "/images/projects/forum.jpg",
    imageAlt: "Preview of Forum, a Reddit-inspired web forum application",
    // TODO: point this at the actual forum repo.
    githubUrl: "https://github.com/Tyclone81",
    highlights: [
      { title: "Relational schema", text: "Users, topics and threads modelled in SQLite through CGO." },
      { title: "Session auth", text: "Session-based authentication with bcrypt-hashed passwords." },
      { title: "Topic threads", text: "Thread and topic management for the community." },
      { title: "Multi-stage Docker", text: "A multi-stage build that ships only what the app needs." },
    ],
  },
];
