"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { openResumeModal } from "./ResumeModal";

const DEVELOPER_ROLES = [
  "Victor Ogero.",
  "a Full-Stack Software Engineer.",
  "a Go & Systems Developer.",
  "a Web Platform Craftsman.",];

// Web Audio API mechanical typing sound synthesizer
let globalAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!globalAudioCtx) {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (AudioCtx) {
      globalAudioCtx = new AudioCtx();
    }
  }
  if (globalAudioCtx && globalAudioCtx.state === "suspended") {
    globalAudioCtx.resume().catch(() => {});
  }
  return globalAudioCtx;
}

function playKeyClickSound(isDelete = false) {
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== "running") return;

  try {
    const now = ctx.currentTime;
    const jitter = 0.93 + Math.random() * 0.14;

    // Contact snap (shaped noise burst)
    const bufferSize = Math.floor(ctx.sampleRate * 0.009); // ~9ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const channelData = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      channelData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.28));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = isDelete ? "highpass" : "bandpass";
    filter.frequency.setValueAtTime((isDelete ? 3200 : 2600) * jitter, now);
    filter.Q.setValueAtTime(2.2, now);

    const gain = ctx.createGain();
    const volume = isDelete ? 0.022 : 0.032;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.011);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    // Subtle switch bottom-out resonance
    const osc = ctx.createOscillator();
    osc.type = "sine";
    const startFreq = (isDelete ? 420 : 340) * jitter;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.013);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(isDelete ? 0.016 : 0.024, now);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.013);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start(now);
    osc.start(now);
    noise.stop(now + 0.014);
    osc.stop(now + 0.014);
  } catch {
    // Ignore audio errors gracefully
  }
}

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState(DEVELOPER_ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Resume audio context on first user gesture
  useEffect(() => {
    const unlockAudio = () => {
      getAudioContext();
    };
    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
    window.addEventListener("scroll", unlockAudio, { once: true });
    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const currentPhrase = DEVELOPER_ROLES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          playKeyClickSound(true);
        }, 38);
      } else {
        // Paused briefly after deleting before rolling out the next phrase
        timer = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % DEVELOPER_ROLES.length);
        }, 350);
      }
    } else {
      if (currentText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          playKeyClickSound(false);
        }, 72);
      } else {
        // Full phrase displayed, wait before starting to roll back
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, isPaused]);

  const handleSkip = () => {
    setIsDeleting(false);
    const nextIndex = (phraseIndex + 1) % DEVELOPER_ROLES.length;
    setPhraseIndex(nextIndex);
    setCurrentText("");
    playKeyClickSound(false);
  };

  const renderAnimatedText = (text: string) => {
    if (!text) return null;

    const hasDot = text.endsWith(".");
    const content = hasDot ? text.slice(0, -1) : text;

    return (
      <>
        <span className="font-bold text-stone-950 underline decoration-amber-600/60 underline-offset-4">
          {content}
        </span>
        {hasDot && <span className="font-bold text-stone-950">.</span>}
      </>
    );
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#FAF7F2]">
      
      {/* ========================================================
          Geometric Architectural Color Blocks (Figma Design Layout)
          ======================================================== */}
      {/* Vertical Sand/Apricot Block (Center) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 lg:w-[460px] h-[480px] sm:h-[580px] lg:h-[620px] bg-[#EED9C4] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Horizontal Soft Buttercream Block (Middle-Right) */}
      <div 
        className="absolute top-28 sm:top-36 right-0 left-1/4 sm:left-1/3 h-80 sm:h-[440px] lg:h-[490px] bg-[#FDF1D6] pointer-events-none -z-20"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Architectural Outline Typography with Studio Amber Hover Glow */}
          <div className="lg:col-span-3 order-3 lg:order-1 flex flex-col justify-end">
            <div 
              className="victor-bigtext font-black text-6xl sm:text-7xl lg:text-[7.5rem] tracking-tighter leading-[0.88] select-none cursor-default"
              title="Victor Ogero"
            >
              <div>VIC</div>
              <div>TOR</div>
            </div>
            <p className="mt-4 text-xs font-mono tracking-widest uppercase text-stone-500 hidden lg:block">
              statically linked &bull; concurrent
            </p>
          </div>

          {/* Center Column: Enlarged Editorial Portrait Overlapping Blocks */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center relative">
            <div className="relative w-full max-w-[320px] sm:max-w-[370px] lg:max-w-[400px] aspect-[3/4] group">
              
              {/* Subtle architectural border frame */}
              <div className="absolute inset-0 bg-stone-900/5 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/15 border border-stone-300/60 bg-stone-100">
                <Image
                  src="/profile.jpg"
                  alt="Victor Ogero - Full-Stack & Systems Software Engineer"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 370px, 400px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  priority
                />
              </div>

              {/* Minimal floating badge */}
              <div className="absolute -bottom-3 right-4 bg-white/95 backdrop-blur-sm border border-stone-200 px-3.5 py-1.5 rounded-full shadow-md text-[11px] font-mono font-semibold text-stone-800">
                Go &bull; Architect
              </div>
            </div>
          </div>

          {/* Right Column: Statement, Technical Bio, & Developer Actions */}
          <div className="lg:col-span-4 order-2 lg:order-3 space-y-5 text-left z-10 lg:pl-4">
            
            {/* Interactive Developer Greeting: "Hey, I am " static with role rollout & rollback */}
            <div className="space-y-2">
              <div className="sr-only" aria-live="polite">
                Hey, I am {DEVELOPER_ROLES[phraseIndex]}
              </div>

              <h2
                className="text-xl sm:text-2xl font-mono text-stone-700 tracking-tight min-h-[3.25rem] sm:min-h-[2.5rem] flex items-baseline flex-wrap cursor-pointer group"
                onClick={handleSkip}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                title="Click to switch title / Hover to pause"
                aria-hidden="true"
              >
                <span className="text-stone-700 select-none">Hey, I am&nbsp;</span>
                {renderAnimatedText(currentText)}
                <span
                  className="inline-block w-[3px] h-[1.15em] bg-amber-600 ml-1 translate-y-[2px] animate-pulse"
                  aria-hidden="true"
                />
              </h2>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-[1.12]">
                Designing Systems From First Principles.
              </h1>
            </div>

            {/* Developer technical synopsis */}
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Driven by a chemist’s curiosity to stop consuming tools blindly, I am determined to strip them down to their core functionalities and make sense of them.
            </p>

            {/* Confident Developer Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-stone-950 hover:text-amber-800 border-b-2 border-stone-950 hover:border-amber-800 pb-1 transition-all group"
              >
                <span>Explore Architecture &amp; Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="text-xs font-mono font-semibold text-stone-600 hover:text-stone-950 transition-colors"
              >
                Initiate Connection &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================
          Bottom Editorial Links Bar (Figma Signature Layout)
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16">
        <div className="border-t border-stone-300/80 pt-6 flex flex-wrap items-center justify-between sm:justify-start gap-8 sm:gap-16 text-xs sm:text-sm font-mono uppercase tracking-wider text-stone-800">
          
          <button
            onClick={() => openResumeModal()}
            className="group flex items-center gap-1.5 pb-1 border-b-2 border-stone-900 hover:border-amber-700 hover:text-amber-800 transition-all font-bold cursor-pointer"
          >
            <span>view resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#projects"
            className="group flex items-center gap-1.5 pb-1 border-b-2 border-stone-900 hover:border-amber-700 hover:text-amber-800 transition-all font-bold"
          >
            <span>latest work</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#articles"
            className="group flex items-center gap-1.5 pb-1 border-b-2 border-stone-900 hover:border-amber-700 hover:text-amber-800 transition-all font-bold"
          >
            <span>case studies &amp; articles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

        </div>
      </div>

    </section>
  );
}