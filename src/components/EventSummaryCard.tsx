import { eventInfo, sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";

export function EventSummaryCard() {
  return (
    <div
      id={sectionIds.detalles}
      tabIndex={-1}
      className="scroll-mt-6 mt-6 w-full rounded-3xl bg-white/95 p-4 text-left shadow-card ring-2 ring-sky-200/70 outline-none sm:mt-8 sm:p-5"
      aria-labelledby="fiesta-info-heading"
    >
      <p
        id="fiesta-info-heading"
        className="text-center text-sm font-bold uppercase tracking-wide text-sky-700"
      >
        Información de la fiesta
      </p>

      <ul className="mt-4 space-y-4">
        <SummaryRow emoji="📅" label="Cuándo" value={eventInfo.date} />
        <SummaryRow emoji="🕐" label="Hora" value={eventInfo.time} />
        <SummaryRow emoji="📍" label="Dónde" value={eventInfo.place} />
      </ul>

      <p className="mt-5 text-center text-[13px] leading-snug text-cow-brown/55">
        Para confirmar o ver invitados, usa los botones de abajo
      </p>

      <button
        type="button"
        onClick={() => scrollToSection(sectionIds.confirmar)}
        className="btn-mobile touch-target mt-3 w-full rounded-2xl bg-gradient-to-r from-sky-400 to-sky-500 text-[1.0625rem] font-bold text-white shadow-soft transition active:scale-[0.98]"
      >
        Confirmar que voy 🎉
      </button>
    </div>
  );
}

function SummaryRow({
  emoji,
  label,
  value,
}: {
  emoji: string;
  label: string;
  value: string;
}) {
  return (
    <li className="flex gap-3.5">
      <span className="text-[1.75rem] leading-none" aria-hidden>
        {emoji}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wide text-cow-brown/55">
          {label}
        </p>
        <p className="mt-1 text-[1.0625rem] font-semibold leading-snug text-cow-brown">
          {value}
        </p>
      </div>
    </li>
  );
}
