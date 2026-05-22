"use client";

import Image from "next/image";
import { useState } from "react";
import { CowDecorations, CowEars } from "./CowDecorations";
import { sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";
import { EventSummaryCard } from "./EventSummaryCard";
import { HeroQuickActions } from "./HeroQuickActions";

const BABY_PHOTO = "/joshua-baby.jpg";
const BABY_PHOTO_ALT = "/joshua-standing.jpg";

export function HeroInvitation() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden px-4 pb-[calc(var(--nav-height)+2rem)] pt-[calc(1.25rem+var(--safe-top))] sm:px-5 sm:pb-36 sm:pt-14">
      <CowDecorations variant="hero" />

      <div className="animate-fade-in-up relative z-10 w-full max-w-md text-center">
        <div className="relative mx-auto mb-6 w-full max-w-[17.5rem] sm:mb-8 sm:w-fit">
          <CowEars />
          <div className="relative rounded-[2rem] bg-white p-2.5 shadow-card ring-1 ring-black/5 sm:p-3">
            <div className="absolute -right-2 -top-2 z-20">
              <span className="inline-block h-7 w-9 rotate-12 rounded-full bg-cow-spot opacity-80" />
            </div>
            <div className="absolute -bottom-1 -left-3 z-20">
              <span className="inline-block h-5 w-7 -rotate-6 rounded-full bg-cow-spot opacity-60" />
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[17.5rem] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-cream via-beige to-sky-100">
              {!photoFailed ? (
                <Image
                  src={BABY_PHOTO}
                  alt="Joshua"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                  sizes="(max-width: 430px) 85vw, 280px"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
                  <span className="text-5xl" aria-hidden>
                    🐮
                  </span>
                  <p className="text-sm font-medium text-cow-brown/70">
                    No se pudo cargar la foto
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            className="absolute -bottom-4 -right-4 z-30 hidden w-[5.5rem] rotate-6 rounded-2xl bg-white p-1.5 shadow-card ring-1 ring-black/5 min-[400px]:block sm:-right-10 sm:w-28"
            aria-hidden
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={BABY_PHOTO_ALT}
                alt=""
                fill
                className="object-cover"
                sizes="88px"
              />
            </div>
          </div>
        </div>

        <h1 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-cow-brown min-[380px]:text-[2rem] sm:text-4xl">
          ¡Joshua cumple 1 añito!
        </h1>

        <p className="mt-3 text-[1.0625rem] leading-relaxed text-cow-brown/80 sm:mt-4 sm:text-xl">
          Nos gustaría muuuuuuucho que estuvieras presente 🐮
        </p>

        <p className="mt-4 hidden text-base leading-relaxed text-cow-brown/65 sm:mx-auto sm:block sm:max-w-sm">
          Joshua va a cumplir 1 año y nos gustaría muuuuuuucho que estuvieras
          presente.
        </p>

        <EventSummaryCard />
        <HeroQuickActions />
      </div>

      <button
        type="button"
        onClick={() => scrollToSection(sectionIds.detalles)}
        className="touch-target absolute bottom-[calc(var(--nav-height)+0.5rem)] left-1/2 z-20 flex min-h-[2.75rem] -translate-x-1/2 flex-col items-center justify-center gap-0.5 rounded-full bg-white/90 px-5 py-2 shadow-soft ring-1 ring-sky-200/80 backdrop-blur-sm sm:bottom-28"
        aria-label="Bajar a ver más información"
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
  );
}
