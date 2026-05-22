import {
  CowBell,
  CowFace,
  CowHoofPrint,
  CuteCow,
  GrassTuft,
} from "./CowIllustrations";
import { CowSpot } from "./CowDecorations";

type CowScatterProps = {
  density?: "light" | "full";
  className?: string;
};

/** Cows and farm accents scattered along the page scroll */
export function CowScatter({ density = "full", className = "" }: CowScatterProps) {
  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 top-0 -z-0 hidden min-h-full overflow-hidden sm:block ${className}`}
      aria-hidden
    >
      {/* Hero zone */}
      <CowFace
        className="animate-float-slow absolute left-0 top-[8%] h-14 w-14 opacity-35 sm:h-16 sm:w-16"
        style={{ animationDelay: "0s" }}
      />
      <CuteCow
        className="animate-float-medium absolute -right-2 top-[14%] h-12 w-16 opacity-30 sm:h-14 sm:w-20"
        style={{ animationDelay: "0.8s" }}
      />
      <CowHoofPrint className="absolute left-[12%] top-[22%] h-8 w-7 opacity-25 rotate-12" />
      <CowHoofPrint
        className="absolute left-[18%] top-[24%] h-6 w-5 opacity-20 -rotate-6"
        style={{ marginLeft: 8 }}
      />

      {/* After hero / event details */}
      <CowFace
        className="animate-float-medium absolute -right-1 top-[38%] h-12 w-12 opacity-30"
        style={{ animationDelay: "1.2s" }}
      />
      <GrassTuft className="animate-float-slow absolute left-2 top-[42%] h-5 w-8 opacity-40" />
      <CowBell className="animate-float-fast absolute right-4 top-[44%] h-8 w-7 opacity-35" />
      <CowSpot
        size="md"
        className="animate-float-slow absolute left-[6%] top-[48%] opacity-15"
      />

      {/* RSVP area */}
      <CuteCow
        className="animate-float-slow absolute -left-3 top-[58%] h-14 w-20 opacity-25 rotate-[-8deg]"
        style={{ animationDelay: "0.5s" }}
      />
      <CowFace
        className="animate-float-fast absolute right-1 top-[62%] h-11 w-11 opacity-28"
        style={{ animationDelay: "1.5s" }}
      />
      <CowHoofPrint className="absolute right-[14%] top-[60%] h-7 w-6 opacity-22 rotate-[-20deg]" />

      {/* Guest list / footer */}
      <CowFace
        className="animate-float-medium absolute left-1 top-[78%] h-12 w-12 opacity-32 sm:h-14 sm:w-14"
        style={{ animationDelay: "0.3s" }}
      />
      <CuteCow
        className="animate-float-slow absolute -right-2 top-[82%] h-12 w-16 opacity-28 rotate-6"
      />
      <GrassTuft className="absolute right-6 top-[88%] h-5 w-10 opacity-35" />
      <CowBell className="animate-float-medium absolute left-6 top-[90%] h-7 w-6 opacity-30" />

      {density === "full" && (
        <>
          <CowSpot
            size="sm"
            className="animate-float-fast absolute right-[8%] top-[30%] opacity-12"
          />
          <CowSpot
            size="lg"
            className="animate-float-slow absolute left-[4%] top-[68%] opacity-10"
          />
          <CowHoofPrint className="absolute left-[10%] top-[72%] h-5 w-5 opacity-18 rotate-25" />
          <CowFace
            className="animate-float-slow absolute right-[5%] top-[52%] h-9 w-9 opacity-22"
            style={{ animationDelay: "2s" }}
          />
          <CuteCow
            className="animate-float-medium absolute left-[3%] top-[32%] h-10 w-14 opacity-20 -scale-x-100"
            style={{ animationDelay: "1s" }}
          />
          <CowSpot
            size="sm"
            className="animate-float-medium absolute right-[6%] top-[75%] opacity-14"
          />
          <GrassTuft className="absolute left-[20%] top-[55%] h-4 w-7 opacity-30 -rotate-12" />
        </>
      )}
    </div>
  );
}
