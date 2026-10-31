"use client";

import { useState } from "react";
import { Mail, MessageSquare, Phone, MapPin, Copy, Check, ExternalLink } from "lucide-react";

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const contactChannels = [
    {
      title: "Direct Email",
      subtitle: "Primary inbox for technical inquiries, engineering roles, and architecture questions",
      value: "ogerovictor81@gmail.com",
      actionLabel: "Send Email",
      actionHref: "mailto:ogerovictor81@gmail.com",
      icon: <Mail className="w-5 h-5 text-orange-600" />,
      canCopy: true,
    },
    {
      title: "WhatsApp Chat",
      subtitle: "Real-time communication for swift queries, project discussions, and syncs",
      value: "+254 101665969",
      actionLabel: "Open WhatsApp",
      actionHref: "https://wa.me/254101665969",
      icon: <MessageSquare className="w-5 h-5 text-orange-600" />,
      isExternal: true,
    },
    {
      title: "Direct Cellular",
      subtitle: "Voice calls for scheduled interviews, client briefings, and direct syncs",
      value: "+254 101665969",
      actionLabel: "Call Phone",
      actionHref: "tel:+254101665969",
      icon: <Phone className="w-5 h-5 text-orange-600" />,
      canCopy: true,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-orange-600 font-mono text-sm tracking-wider uppercase mb-2">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Let&apos;s Collaborate
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            Have an engineering challenge, backend infrastructure to architect, or an open engineering role? Reach out through any channel below.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-stone-600 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Based in Kisumu, Kenya (UTC+3) &bull; Available for Remote Worldwide</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactChannels.map((channel, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-orange-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 w-fit mb-5 shadow-sm group-hover:border-orange-300 transition-colors">
                  {channel.icon}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-1.5">{channel.title}</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {channel.subtitle}
                </p>
                <div className="font-mono text-sm text-stone-900 font-bold mb-6 break-all">
                  {channel.value}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-stone-200">
                <a
                  href={channel.actionHref}
                  target={channel.isExternal ? "_blank" : undefined}
                  rel={channel.isExternal ? "noopener noreferrer" : undefined}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold shadow-sm hover:shadow transition-colors"
                >
                  <span>{channel.actionLabel}</span>
                  {channel.isExternal && <ExternalLink className="w-3 h-3" />}
                </a>

                {channel.canCopy && (
                  <button
                    onClick={() => copyToClipboard(channel.value, channel.title)}
                    className="p-3 rounded-xl border border-stone-200 hover:border-orange-400 bg-white text-stone-600 hover:text-stone-900 transition-colors"
                    title={`Copy ${channel.title}`}
                    aria-label={`Copy ${channel.title}`}
                  >
                    {copiedText === channel.title ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
