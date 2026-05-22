"use client";

import Image from "next/image";
import { useState } from "react";
import { CowDecorations, CowEars } from "./CowDecorations";
import { sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";
import { EventSummaryCard } from "./EventSummaryCard";

const BABY_PHOTO = "/joshua-baby.jpg";

export function HeroInvitation() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <>
      {/* First screen only: title, subtitle, centered photo */}
      <section className="relative flex min-h-[100dvh] min-h-[100svh] w-full flex-col items-center overflow-hidden px-4">
        <CowDecorations variant="hero" />

        <div className="relative z-10 flex w-full max-w-md flex-1 flex-col items-center">
          <div className="w-full shrink-0 pt-[calc(1.5rem+30px+var(--safe-top))] text-center">
            <h1 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-cow-brown min-[380px]:text-[2rem]">
              ¡Joshua cumple 1 añito!
            </h1>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-cow-brown/80">
              Nos gustaría muuuuuuucho que estuvieras presente 🐮
            </p>
          </div>

          <div className="flex w-full flex-1 flex-col items-center justify-center py-5">
            <div className="relative mx-auto w-full max-w-[15.5rem]">
              <CowEars />
              <div className="relative rounded-[2rem] bg-white p-2.5 shadow-card ring-1 ring-black/5">
                <div className="absolute -right-2 -top-2 z-20">
                  <span className="inline-block h-7 w-9 rotate-12 rounded-full bg-cow-spot opacity-80" />
                </div>
                <div className="absolute -bottom-1 -left-3 z-20">
                  <span className="inline-block h-5 w-7 -rotate-6 rounded-full bg-cow-spot opacity-60" />
                </div>
                <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-cream via-beige to-sky-100">
                  {!photoFailed ? (
                    <Image
                      src={BABY_PHOTO}
                      alt="Joshua"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 430px) 248px, 280px"
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

      {/* Below the first screen */}
      <div className="relative z-10 w-full px-4 pb-8 pt-2">
        <div className="mx-auto w-full max-w-md">
          <EventSummaryCard />
        </div>
      </div>
    </>
  );
}
