import { eventInfo, sectionIds } from "@/lib/event-info";
import { CardCowCorners, CowDecorations } from "./CowDecorations";

const details = [
  { icon: CalendarIcon, label: "Fecha", value: eventInfo.date },
  { icon: ClockIcon, label: "Hora", value: eventInfo.time },
  { icon: LocationIcon, label: "Lugar", value: eventInfo.place },
] as const;

export function EventDetails() {
  return (
    <section
      id={sectionIds.detalles}
      tabIndex={-1}
      className="scroll-mt-6 animate-fade-in-up relative px-4 py-10 delay-100 outline-none sm:px-5 sm:py-12"
      aria-labelledby="detalles-heading"
    >
      <div className="relative mx-auto max-w-md">
        <CowDecorations variant="section" />

        <p className="mt-4 text-center text-[13px] font-semibold leading-snug text-sky-700">
          Usa los botones de abajo para moverte
        </p>
        <h2
          id="detalles-heading"
          className="font-display mt-2 text-center text-[1.5rem] font-bold leading-tight text-cow-brown sm:text-2xl"
        >
          Detalles del evento
        </h2>
        <p className="mt-3 text-center text-[1.0625rem] leading-relaxed text-cow-brown/70">
          Joshua va a cumplir 1 año
        </p>

        <ul className="mt-8 flex flex-col gap-4">
          {details.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="relative flex items-start gap-3.5 overflow-hidden rounded-3xl bg-white/85 p-4 shadow-soft ring-1 ring-sky-100/60 backdrop-blur-md sm:gap-4 sm:p-5"
            >
              <CardCowCorners />
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 sm:h-12 sm:w-12">
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-600/80">
                  {label}
                </p>
                <p className="mt-1 text-[1.0625rem] font-semibold leading-snug text-cow-brown">
                  {value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M3 10h18M8 2v4M16 2v4" strokeLinecap="round" />
      <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path
        d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
