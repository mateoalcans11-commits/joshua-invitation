"use client";

import { useEffect, useState } from "react";
import { sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";

const navItems = [
  {
    id: sectionIds.detalles,
    label: "Fecha y lugar",
    shortLabel: "Detalles",
    icon: CalendarNavIcon,
    variant: "sky" as const,
  },
  {
    id: sectionIds.confirmar,
    label: "Confirmar asistencia",
    shortLabel: "Confirmar",
    icon: CheckNavIcon,
    variant: "primary" as const,
  },
  {
    id: sectionIds.invitados,
    label: "Quién va a ir",
    shortLabel: "Invitados",
    icon: PeopleNavIcon,
    variant: "warm" as const,
  },
] as const;

const buttonStyles = {
  sky: {
    btn: "bg-gradient-to-b from-white to-sky-50/90 ring-1 ring-sky-200/70 shadow-[0_4px_20px_-4px_rgba(126,200,227,0.45)] active:ring-sky-300/80",
    iconWrap: "bg-gradient-to-br from-sky-100 to-sky-200/80 text-sky-700 ring-1 ring-sky-200/60",
    label: "text-sky-800/90",
  },
  primary: {
    btn: "bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 ring-2 ring-white/50 shadow-[0_10px_32px_-6px_rgba(56,152,198,0.55)] active:from-sky-500 active:to-sky-600",
    iconWrap: "bg-white/95 text-sky-600 ring-2 ring-white/80 shadow-sm",
    label: "text-white",
  },
  warm: {
    btn: "bg-gradient-to-b from-white to-amber-50/90 ring-1 ring-amber-200/60 shadow-[0_4px_20px_-4px_rgba(245,215,142,0.4)] active:ring-amber-300/70",
    iconWrap: "bg-gradient-to-br from-amber-100 to-rose-100/80 text-amber-800/80 ring-1 ring-amber-200/50",
    label: "text-cow-brown/85",
  },
};

export function SectionNavigation() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setShowHint(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollDownBanner visible={showHint} />

      <nav
        className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.75rem,var(--safe-bottom))] pt-2 pointer-events-none sm:px-4"
        aria-label="Ir a una sección de la invitación"
      >
        <div className="pointer-events-auto relative w-full max-w-[26rem] sm:max-w-[22rem]">
          <div
            className="absolute -inset-1 rounded-[2.25rem] bg-gradient-to-r from-sky-200/40 via-white/30 to-amber-200/40 blur-xl max-sm:opacity-70"
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-[1.75rem] bg-white/85 p-2 shadow-floating-dock ring-1 ring-white/90 backdrop-blur-2xl sm:rounded-[2rem] sm:p-2.5">
            <span
              className="absolute right-5 top-2 h-2.5 w-3.5 rotate-12 rounded-full bg-cow-spot/10"
              aria-hidden
            />

            <p className="relative mb-2 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-cow-brown/45">
              Toca para ir
            </p>

            <ul className="relative flex items-end gap-1.5 sm:gap-2">
              {navItems.map((item, index) => {
                const styles = buttonStyles[item.variant];
                const isCenter = index === 1;

                return (
                  <li key={item.id} className="min-w-0 flex-1">
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`touch-target group flex w-full min-h-[3.5rem] flex-col items-center justify-center gap-1.5 rounded-[1.25rem] px-1 transition-all duration-200 active:scale-[0.96] sm:min-h-[4rem] sm:gap-2 sm:rounded-[1.35rem] ${styles.btn} ${
                        isCenter
                          ? "-mt-2 min-h-[4rem] py-2.5 sm:-mt-3 sm:min-h-[4.75rem] sm:py-3.5"
                          : "py-2.5 sm:py-3"
                      }`}
                      aria-label={item.label}
                    >
                      <span
                        className={`flex shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${styles.iconWrap} ${
                          isCenter ? "h-11 w-11 sm:h-11 sm:w-11" : "h-10 w-10"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span
                        className={`max-w-full truncate px-0.5 text-[11px] font-extrabold leading-none sm:text-xs ${styles.label}`}
                      >
                        {item.shortLabel}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="h-[calc(var(--nav-height)+var(--safe-bottom))]"
        aria-hidden
      />
    </>
  );
}

function ScrollDownBanner({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-3 bottom-[calc(var(--nav-height)+var(--safe-bottom)+0.5rem)] z-40 mx-auto max-w-[26rem] animate-fade-in-up sm:inset-x-4 sm:max-w-sm"
      role="status"
      aria-live="polite"
    >
      <div className="overflow-hidden rounded-2xl bg-cow-brown/92 shadow-floating-dock ring-1 ring-white/10">
        <div className="px-4 py-3.5 text-center">
          <p className="text-[15px] font-bold leading-snug text-white">
            ↓ Fecha, lugar y confirmación abajo
          </p>
          <p className="mt-1 text-[13px] font-medium text-white/85">
            Desliza o toca los botones de abajo
          </p>
        </div>
      </div>
    </div>
  );
}

function CalendarNavIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M3 10h18M8 2v4M16 2v4" strokeLinecap="round" />
    </svg>
  );
}

function CheckNavIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PeopleNavIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M13 20c0-2 1.5-4 4-4" strokeLinecap="round" />
    </svg>
  );
}
