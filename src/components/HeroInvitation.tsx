"use client";

import Image from "next/image";
import { useState } from "react";
import { CowDecorations, CowEars } from "./CowDecorations";
import { sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";
import { EventSummaryCard } from "./EventSummaryCard";

const BABY_SITTING = "/joshua-baby.jpg";
const BABY_LEFT = "/joshua-sleeping.png";
const BABY_RIGHT = "/joshua-standing.jpg";

function PhotoFrame({
  src,
  alt,
  priority = false,
  rotate = "",
  size = "side" as "side" | "center",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  rotate?: string;
  size?: "side" | "center";
}) {
  const [failed, setFailed] = useState(false);
  const pad = size === "center" ? "p-2.5 sm:p-3" : "p-1.5 sm:p-2";
  const radius = size === "center" ? "rounded-[1.5rem] sm:rounded-[1.75rem]" : "rounded-[1.2rem] sm:rounded-[1.35rem]";
  const innerRadius = size === "center" ? "rounded-[1.2rem] sm:rounded-[1.4rem]" : "rounded-[1rem] sm:rounded-[1.15rem]";

  return (
    <div className={`relative w-full ${rotate}`}>
      <div className={`relative bg-white shadow-card ring-1 ring-black/5 ${pad} ${radius}`}>
        <div
          className={`relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-cream via-beige to-sky-100 ${innerRadius}`}
        >
          {!failed ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              priority={priority}
              sizes={
                size === "center"
                  ? "(max-width: 430px) 38vw, 200px"
                  : "(max-width: 430px) 28vw, 140px"
              }
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-3xl">🐮</div>
          )}
        </div>
      </div>
    </div>
  );
}

function AnitoBadge() {
  return (
    <div
      className="animate-wiggle relative z-20 mt-4 mb-3 inline-flex rounded-full bg-white/90 px-5 py-2 shadow-soft ring-2 ring-sky-200/70 backdrop-blur-sm sm:mt-5"
      aria-hidden
    >
      <span className="font-display text-base font-extrabold tracking-wide text-sky-600 sm:text-lg">
        1 añito
      </span>
    </div>
  );
}

export function HeroInvitation() {
  return (
    <>
      <section className="relative flex min-h-[100dvh] min-h-[100svh] w-full flex-col items-center overflow-hidden px-2 sm:px-4">
        <CowDecorations variant="hero" />

        <div className="relative z-10 flex w-full max-w-lg flex-1 flex-col items-center">
          <div className="relative w-full shrink-0 px-2 pt-[calc(1.5rem+80px+var(--safe-top))] text-center">
            <AnitoBadge />
            <h1 className="relative z-10 font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-cow-brown min-[380px]:text-[2rem]">
              ¡Joshua cumple 1 añito!
            </h1>
            <p className="relative z-10 mt-3 text-[1.0625rem] leading-relaxed text-cow-brown/80">
              Nos gustaría muuuuuuucho que estuvieras presente 🐮
            </p>
          </div>

          <div className="flex w-full flex-1 flex-col items-center justify-center px-0.5 py-3 sm:py-5">
            <div className="relative mx-auto w-full max-w-[26rem] sm:max-w-[30rem]">
              <div className="flex items-end justify-center gap-1.5 sm:gap-2.5">
                {/* Left */}
                <div className="w-[30%] -rotate-6 pb-2">
                  <PhotoFrame src={BABY_LEFT} alt="Joshua" size="side" />
                </div>

                {/* Center — sitting, largest */}
                <div className="relative z-10 w-[40%]">
                  <CowEars />
                  <div className="absolute -right-0.5 -top-1 z-20">
                    <span className="inline-block h-6 w-8 rotate-12 rounded-full bg-cow-spot opacity-80" />
                  </div>
                  <div className="absolute -bottom-0.5 -left-1.5 z-20">
                    <span className="inline-block h-4 w-6 -rotate-6 rounded-full bg-cow-spot opacity-60" />
                  </div>
                  <PhotoFrame
                    src={BABY_SITTING}
                    alt="Joshua sentado"
                    priority
                    size="center"
                    rotate="rotate-1"
                  />
                </div>

                {/* Right */}
                <div className="w-[30%] rotate-6 pb-2">
                  <PhotoFrame src={BABY_RIGHT} alt="Joshua" size="side" />
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
