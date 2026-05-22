"use client";

import Image from "next/image";
import { useState } from "react";
import { CowDecorations, CowEars } from "./CowDecorations";
import { sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";
import { EventSummaryCard } from "./EventSummaryCard";

const BABY_PHOTO_MAIN = "/joshua-baby.jpg";
const BABY_PHOTO_LEFT = "/joshua-sleeping.png";

function PhotoFrame({
  src,
  alt,
  priority = false,
  rotate = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  rotate?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative w-full ${rotate}`}>
      <div className="relative rounded-[1.4rem] bg-white p-2 shadow-card ring-1 ring-black/5 sm:rounded-[1.6rem] sm:p-2.5">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-cream via-beige to-sky-100 sm:rounded-[1.3rem]">
          {!failed ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              priority={priority}
              sizes="(max-width: 430px) 46vw, 200px"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-4xl">🐮</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function HeroInvitation() {
  return (
    <>
      <section className="relative flex min-h-[100dvh] min-h-[100svh] w-full flex-col items-center overflow-hidden px-3 sm:px-4">
        <CowDecorations variant="hero" />

        <div className="relative z-10 flex w-full max-w-lg flex-1 flex-col items-center">
          <div className="w-full shrink-0 pt-[calc(1.5rem+80px+var(--safe-top))] text-center">
            <h1 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-cow-brown min-[380px]:text-[2rem]">
              ¡Joshua cumple 1 añito!
            </h1>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-cow-brown/80">
              Nos gustaría muuuuuuucho que estuvieras presente 🐮
            </p>
          </div>

          <div className="flex w-full flex-1 flex-col items-center justify-center px-1 py-4 sm:py-5">
            <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[28rem]">
              <div className="flex items-end justify-center gap-3 sm:gap-4">
                {/* Left — sleeping */}
                <div className="w-[47%] -rotate-6 pb-1">
                  <PhotoFrame
                    src={BABY_PHOTO_LEFT}
                    alt="Joshua dormido"
                  />
                </div>

                {/* Right — main portrait, slightly larger */}
                <div className="relative w-[53%]">
                  <CowEars />
                  <div className="absolute -right-1 -top-1 z-20">
                    <span className="inline-block h-7 w-9 rotate-12 rounded-full bg-cow-spot opacity-80" />
                  </div>
                  <div className="absolute -bottom-1 -left-2 z-20">
                    <span className="inline-block h-5 w-7 -rotate-6 rounded-full bg-cow-spot opacity-60" />
                  </div>
                  <PhotoFrame
                    src={BABY_PHOTO_MAIN}
                    alt="Joshua"
                    priority
                    rotate="rotate-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection(sectionIds.detalles)}
          className="touch-target relative z-20 mb-[calc(var(--nav-height)+0.75rem)] flex min-h-[2.75rem] flex-col items-center justify-center gap-0.5 rounded-full bg-white/90 px-5 py-2 shadow-soft ring-1 ring-sky-200/80 backdrop-blur-sm"
          aria-label="Bajar a ver información de la fiesta"
        >
          <span className="text-xs font-bold text-cow-brown/70">Más abajo</span>
          <span className="animate-bounce-gentle text-cow-brown/50" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </section>

      <div className="relative z-10 w-full px-4 pb-8 pt-6">
        <div className="mx-auto w-full max-w-md">
          <EventSummaryCard />
        </div>
      </div>
    </>
  );
}
