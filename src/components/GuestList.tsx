import { sectionIds } from "@/lib/event-info";
import { CardCowCorners, CowDecorations } from "./CowDecorations";
import { CowFace } from "./CowIllustrations";

type GuestListProps = {
  guests: string[];
};

export function GuestList({ guests }: GuestListProps) {
  return (
    <section
      id={sectionIds.invitados}
      tabIndex={-1}
      className="scroll-mt-6 animate-fade-in-up relative px-4 pb-6 pt-4 outline-none sm:px-5 sm:pb-8"
      aria-labelledby="invitados-heading"
    >
      <div className="relative mx-auto max-w-md">
        <CowDecorations variant="section" />
        <h2
          id="invitados-heading"
          className="font-display text-center text-[1.5rem] font-bold leading-tight text-cow-brown sm:text-2xl"
        >
          Personas que van a ir
        </h2>

        {guests.length === 0 ? (
          <p className="mt-6 text-center text-[15px] text-cow-brown/50">
            Sé el primero en confirmar tu asistencia 🐄
          </p>
        ) : (
          <ul className="mt-6 flex flex-col gap-3">
            {guests.map((name, index) => (
              <li
                key={`${name}-${index}`}
                className="animate-fade-in-up relative flex min-h-[3.25rem] items-center gap-3 overflow-hidden rounded-2xl bg-white/90 px-4 py-3.5 shadow-soft ring-1 ring-cream-dark/80 sm:px-5 sm:py-4"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <CowFace className="h-9 w-9 shrink-0 opacity-70" aria-hidden />
                <span className="text-[1.0625rem] font-semibold text-cow-brown">{name}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 text-center text-xs text-cow-brown/40">
          {guests.length}{" "}
          {guests.length === 1 ? "persona confirmada" : "personas confirmadas"}
          {" · "}
          lista compartida para todos
        </p>
      </div>
    </section>
  );
}
