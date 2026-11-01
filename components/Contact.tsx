import { ArrowUpRight, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/254101665969",
    icon: <MessageSquare className="h-4 w-4" />,
    external: true,
  },
  {
    label: "Call",
    href: "tel:+254101665969",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-ogero-8594611a4",
    icon: <ArrowUpRight className="h-4 w-4" />,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-stone-200/80 bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 font-mono text-sm uppercase tracking-wider text-orange-600">
          Get in touch
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          Have something in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">
          I’m open to conversations about software roles, projects, and ideas. Email is the best way to reach me.
        </p>
        <p className="mt-2 text-sm text-stone-500">Dog conversations welcome too 😄</p>







        <a
          href="mailto:ogerovictor81@gmail.com"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          <Mail className="h-4 w-4" />
          Email me
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              {link.icon}
              {link.label}
              {link.external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          ))}
        </div>

        <p className="mt-9 inline-flex items-center gap-1.5 text-xs font-mono text-stone-500">
          <MapPin className="h-3.5 w-3.5 text-orange-600" />
          Kisumu, Kenya · UTC+3 · Open to remote opportunities
        </p>
      </div>
    </section>
  );
}
