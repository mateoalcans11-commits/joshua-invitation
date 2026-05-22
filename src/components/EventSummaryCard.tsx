import { eventInfo, sectionIds } from "@/lib/event-info";
import { scrollToSection } from "@/lib/scroll-to";

export function EventSummaryCard() {
  return (
    <div className="mt-6 w-full rounded-3xl bg-white/95 p-4 text-left shadow-card ring-2 ring-sky-200/70 sm:mt-8 sm:p-5">
      <p className="text-center text-sm font-bold uppercase tracking-wide text-sky-700">
        Información de la fiesta
      </p>

      <ul className="mt-4 space-y-4">
        <SummaryRow emoji="📅" label="Cuándo" value={eventInfo.date} />
        <SummaryRow emoji="🕐" label="Hora" value={eventInfo.time} />
        <SummaryRow emoji="📍" label="Dónde" value={eventInfo.place} />
      </ul>

      <button
        type="button"
        onClick={() => scrollToSection(sectionIds.detalles)}
        className="btn-mobile touch-target mt-5 w-full rounded-2xl border-2 border-sky-300 bg-sky-50 text-[1.0625rem] font-bold text-sky-800 transition active:scale-[0.98] active:bg-sky-100"
      >
        Ver detalles completos ↓
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
