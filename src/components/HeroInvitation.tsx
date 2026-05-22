"use client";

import Image from "next/image";
import { useState } from "react";
import { CowDecorations, CowEars } from "./CowDecorations";
import { HeroCowBridge } from "./HeroCowBridge";
import { sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";
import { EventSummaryCard } from "./EventSummaryCard";

const BABY_SITTING = "/joshua-baby.jpg";
const BABY_LEFT = "/joshua-sleeping.png";
const BABY_RIGHT = "/joshua-standing.jpg";

function PhotoFrame({
  src,
  alt,
  wiggleClass,
  priority = false,
  rotate = "",
  size = "side" as "side" | "center",
}: {
  src: string;
  alt: string;
  wiggleClass: string;
  priority?: boolean;
  rotate?: string;
  size?: "side" | "center";
}) {
  const [failed, setFailed] = useState(false);
  const pad = size === "center" ? "p-3 sm:p-3.5" : "p-1.5 sm:p-2";
  const radius =
    size === "center"
      ? "rounded-[1.6rem] sm:rounded-[1.85rem]"
      : "rounded-[1.2rem] sm:rounded-[1.35rem]";
  const innerRadius =
    size === "center"
      ? "rounded-[1.25rem] sm:rounded-[1.5rem]"
      : "rounded-[1rem] sm:rounded-[1.15rem]";

  return (
    <div className={`relative w-full ${rotate} ${wiggleClass}`}>
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
                  ? "(max-width: 430px) 52vw, 260px"
                  : "(max-width: 430px) 22vw, 120px"
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
      className="relative z-20 mt-1 mb-2 inline-flex rounded-full bg-white/90 px-5 py-2 shadow-soft ring-2 ring-sky-200/70 backdrop-blur-sm"
      aria-hidden
    >
      <span className="animate-wiggle font-display text-base font-extrabold tracking-wide text-sky-600 sm:text-lg">
        1 añito
      </span>
    </div>
  );
}

export function HeroInvitation() {
  return (
    <>
      <section className="relative w-full overflow-hidden px-2 pb-1 sm:px-4">
        <CowDecorations variant="hero" />

        <div className="relative z-10 flex w-full max-w-lg flex-col items-center">
          <div className="relative w-full shrink-0 px-2 pt-[calc(0.5rem+28px+var(--safe-top))] text-center">
            <AnitoBadge />
            <h1 className="animate-wiggle-burst hero-w1 relative z-10 font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-cow-brown min-[380px]:text-[2rem]">
              ¡Joshua cumple 1 añito!
            </h1>
            <p className="animate-wiggle-burst hero-w2 relative z-10 mt-2 text-[1.0625rem] leading-relaxed text-cow-brown/80">
              Nos gustaría muuuuuuucho que estuvieras presente 🐮
            </p>
          </div>

          <div className="flex w-full flex-none flex-col items-center px-0.5 -mt-2">
            <div className="relative mx-auto w-full max-w-[28rem] sm:max-w-[32rem]">
              <div className="flex items-end justify-center gap-1 sm:gap-2">
                <div className="w-[24%] -rotate-6 pb-3">
                  <PhotoFrame
                    src={BABY_LEFT}
                    alt="Joshua"
                    wiggleClass="animate-wiggle-burst hero-w4"
                    size="side"
                  />
                </div>

                <div className="relative z-10 w-[52%]">
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
                    wiggleClass="animate-wiggle-burst hero-w3"
                    priority
                    size="center"
                    rotate="rotate-1"
                  />
                </div>

                <div className="w-[24%] rotate-6 pb-3">
                  <PhotoFrame
                    src={BABY_RIGHT}
                    alt="Joshua"
                    wiggleClass="animate-wiggle-burst hero-w5"
                    size="side"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="animate-wiggle-burst hero-w6 mt-2 flex w-full max-w-xs flex-col items-center gap-1.5 sm:mt-3">
            <div
              className="flex items-center justify-center gap-2 text-[10px] font-semibold text-cow-brown/45"
              aria-hidden
            >
              <span className="inline-block h-1.5 w-2 rounded-full bg-cow-spot/25" />
              <span>📅 fecha</span>
              <span className="text-cow-brown/25">·</span>
              <span>📍 lugar</span>
              <span className="text-cow-brown/25">·</span>
              <span>🎉 confirmar</span>
              <span className="inline-block h-1.5 w-2.5 rounded-full bg-cow-spot/20" />
            </div>

            <button
              type="button"
              onClick={() => scrollToSection(sectionIds.detalles)}
              className="touch-target flex min-h-[2.25rem] flex-col items-center justify-center gap-0 rounded-full bg-white/90 px-4 py-1.5 shadow-soft ring-1 ring-sky-200/80 backdrop-blur-sm active:scale-[0.98]"
              aria-label="Bajar a ver información de la fiesta"
            >
              <span className="text-[11px] font-bold leading-none text-cow-brown/65">
                Más abajo
              </span>
              <span className="animate-bounce-gentle -mt-0.5 text-cow-brown/45" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
          </div>
        </div>
      </section>

      <HeroCowBridge />

      <div className="relative z-10 w-full px-4 pb-6 pt-0">
        <div className="mx-auto w-full max-w-md">
          <EventSummaryCard />
        </div>
      </div>
    </>
  );
}
