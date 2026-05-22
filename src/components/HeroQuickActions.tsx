import { sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";

const actions = [
  {
    id: sectionIds.detalles,
    title: "Fecha y lugar",
    subtitle: "Cuándo y dónde es la fiesta",
    emoji: "📅",
  },
  {
    id: sectionIds.confirmar,
    title: "Confirmar asistencia",
    subtitle: "Decir si vas a ir",
    emoji: "✅",
  },
  {
    id: sectionIds.invitados,
    title: "Ver invitados",
    subtitle: "Quién ya confirmó",
    emoji: "🐮",
  },
] as const;

export function HeroQuickActions() {
  return (
    <div className="mt-5 w-full sm:mt-6">
      <p className="text-center text-[15px] font-bold text-cow-brown/75">
        ¿Buscas la fecha o quieres confirmar?
      </p>
      <p className="mt-1 text-center text-[13px] text-cow-brown/55">
        Toca un botón grande — no hace falta buscar
      </p>

      <ul className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
        {actions.map(({ id, title, subtitle, emoji }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => scrollToSection(id)}
              className="touch-target flex w-full min-h-[3.75rem] items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 text-left shadow-soft ring-2 ring-cream-dark/60 transition active:scale-[0.98] active:ring-sky-300 sm:min-h-[4rem] sm:gap-4 sm:py-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-2xl">
                {emoji}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[1.0625rem] font-bold leading-tight text-cow-brown">
                  {title}
                </span>
                <span className="mt-0.5 block text-[15px] leading-snug text-cow-brown/60">
                  {subtitle}
                </span>
              </span>
              <span className="shrink-0 text-2xl text-sky-500" aria-hidden>
                →
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
