"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface HobbyPhoto {
  src: string;
  alt: string;
}

interface Interest {
  title: string;
  description: string;
  label: string;
  photos: HobbyPhoto[];
  imageBackground: string;
  landscapeLastPhoto?: boolean;
}

const interests: Interest[] = [
  {
    title: "Football, on and off the pitch",
    description:
      "I’ve been a football fanatic for as long as I can remember, and I captain my local team. Leading a team means keeping people organized, communicating clearly, and showing up for one another—not just focusing on the score.",
    label: "Lifelong fan · Local team captain",
    photos: [
      {
        src: "/images/hobbies/football.jpg",
        alt: "Eyes on the prize",
      },
      {
        src: "/images/hobbies/1football.jpg",
        alt: "Captain fantastic",
      },
      {
        src: "/images/hobbies/footy.jpg",
        alt: "The Bermuda triangle-Milan version",
      },
      {
        src: "/images/hobbies/heart of it.jpg",
        alt: "At the heart of it",
      }
    ],
    imageBackground: "bg-[#244b3b]",
  },
  {
    title: "Life is better with dogs",
    description:
      "I love spending time with my dogs. Walking them gives me a chance to step away from the screen, clear my head, and let new ideas surface. I also enjoy building practical things for them now and then.",
    label: "Dog person · Regular walking companion",
    photos: [
      {
        src: "/images/hobbies/dog.jpg",
        alt: "Tiger fresh from a bath",
      },
      {
        src: "/images/hobbies/x3.jpg",
        alt: "Rexxie, Tiger, and TJ",
      },
      {
        src: "/images/hobbies/tiger.jpg",
        alt: "Rexxie knows",
      }
    ],
    imageBackground: "bg-[#e8d5bf]",
    landscapeLastPhoto: true,
  },
  {
    title: "Go touch water",
    description:
      "I’m no pro swimmer—far from it—but I love getting in the water. It’s a fun way to unwind, clear my head, and enjoy a change of pace.",
    label: "Swimming for fun",
    photos: [
      {
        src: "/images/hobbies/swim.jpg",
        alt: "Let's decompress",
      },
    ],
    imageBackground: "bg-[#c9e2e8]",
  },
];

export default function Hobbies() {
  const [activeGallery, setActiveGallery] = useState<{
    photos: HobbyPhoto[];
    index: number;
  } | null>(null);
  const isGalleryOpen = activeGallery !== null;

  useEffect(() => {
    if (!isGalleryOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGallery(null);
      if (event.key === "ArrowRight") {
        setActiveGallery((current) =>
          current
            ? { ...current, index: (current.index + 1) % current.photos.length }
            : null,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveGallery((current) =>
          current
            ? {
                ...current,
                index:
                  (current.index - 1 + current.photos.length) %
                  current.photos.length,
              }
            : null,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGalleryOpen]);

  const openPhoto = (photos: HobbyPhoto[], index: number) => {
    setActiveGallery({ photos, index });
  };

  return (
    <section id="hobbies" className="border-t border-stone-200/80 bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-wider text-orange-600">
            Beyond the Build
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Life Beyond the Screen
          </h2>
          <p className="mt-3 text-base text-stone-600">
            A little more about who I am away from the screen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest) => (
            <article
              key={interest.title}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <div className={`grid grid-cols-1 ${interest.photos.length > 1 ? "grid-cols-2" : ""}`}>
                {interest.photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => openPhoto(interest.photos, index)}
                    aria-label={`View full-size image: ${photo.alt}`}
                    className={`group/photo relative w-full overflow-hidden ${interest.imageBackground} ${
                      interest.landscapeLastPhoto && index === interest.photos.length - 1
                        ? "col-span-2 aspect-[2.2/1]"
                        : "aspect-[4/3]"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/75 to-transparent px-4 pb-3 pt-8 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover/photo:opacity-100 group-focus-visible/photo:opacity-100">
                      Click to view full size
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-orange-600">
                    {interest.label}
                  </p>

                </div>
                <h3 className="mb-3 text-xl font-bold text-stone-900 transition-colors group-hover:text-orange-700 sm:text-2xl">
                  {interest.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
                  {interest.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeGallery && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setActiveGallery(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveGallery(null)}
              aria-label="Close photo viewer"
              className="absolute right-0 top-0 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-6 w-6" />
            </button>

            {activeGallery.photos.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setActiveGallery((current) =>
                    current
                      ? {
                          ...current,
                          index:
                            (current.index - 1 + current.photos.length) %
                            current.photos.length,
                        }
                      : null,
                  )
                }
                aria-label="Previous photo"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            )}

            <div className="relative h-[80vh] w-full">
              <Image
                src={activeGallery.photos[activeGallery.index].src}
                alt={activeGallery.photos[activeGallery.index].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {activeGallery.photos.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setActiveGallery((current) =>
                    current
                      ? {
                          ...current,
                          index: (current.index + 1) % current.photos.length,
                        }
                      : null,
                  )
                }
                aria-label="Next photo"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            )}

            <p className="mt-3 text-center text-sm text-white/75">
              {activeGallery.photos[activeGallery.index].alt}
              {activeGallery.photos.length > 1 &&
                ` · ${activeGallery.index + 1} of ${activeGallery.photos.length}`}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
