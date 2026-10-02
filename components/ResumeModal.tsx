"use client";

import { useState, useEffect } from "react";
import { Download, ExternalLink, X, FileText } from "lucide-react";

export function openResumeModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-resume-modal"));
  }
}

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleHash = () => {
      if (window.location.hash === "#resume") {
        setIsOpen(true);
      }
    };

    window.addEventListener("open-resume-modal", handleOpen);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hashchange", handleHash);

    // Initial check for #resume in URL
    handleHash();

    return () => {
      window.removeEventListener("open-resume-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (window.location.hash === "#resume") {
        history.replaceState(null, "", " ");
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] max-h-[960px] bg-white rounded-2xl sm:rounded-3xl border border-stone-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-[#FAF7F2] border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-stone-900 leading-tight">
                Victor Ogero &bull; Resume Preview
              </h3>
              <p className="text-xs font-mono text-stone-500">
                Full-Stack &amp; Systems Software Engineer
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/resume.pdf"
              download="Victor_Ogero_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono font-semibold transition-colors shadow-sm"
              title="Download PDF to your device"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-mono font-medium transition-colors"
              title="Open PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
              aria-label="Close resume viewer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer */}
        <div className="flex-1 w-full h-full bg-stone-100 relative">
          <iframe
            src="/resume.pdf#view=FitH"
            title="Victor Ogero Resume PDF"
            className="w-full h-full border-none block"
          />

          {/* Fallback info for browsers that block iframe PDF rendering */}
          <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center text-stone-600 space-y-3 bg-[#FAF7F2]">
            <FileText className="w-12 h-12 text-stone-400" />
            <p className="text-sm font-medium">
              If the preview doesn&apos;t display automatically in your browser:
            </p>
            <div className="flex gap-3">
              <a
                href="/resume.pdf"
                download="Victor_Ogero_Resume.pdf"
                className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold"
              >
                Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
