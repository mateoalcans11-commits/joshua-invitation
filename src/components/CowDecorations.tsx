import {
  CowBell,
  CowFace,
  CowHoofPrint,
  CuteCow,
  GrassTuft,
} from "./CowIllustrations";

type CowDecorationsProps = {
  variant?: "hero" | "section" | "minimal" | "card";
  className?: string;
};

export function CowSpot({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-4 w-5",
    md: "h-6 w-8",
    lg: "h-10 w-14",
  };
  return (
    <span
      className={`inline-block rounded-full bg-cow-spot opacity-90 ${sizes[size]} ${className}`}
      aria-hidden
    />
  );
}

export function FloatingDecorations({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <CowFace className="animate-float-slow absolute left-[3%] top-[10%] h-16 w-16 opacity-40 sm:h-20 sm:w-20" />
      <CuteCow
        className="animate-float-medium absolute right-[2%] top-[14%] h-14 w-20 opacity-35"
        style={{ animationDelay: "0.6s" }}
      />
      <CowSpot
        size="lg"
        className="animate-float-slow absolute left-[8%] top-[18%] opacity-25"
      />
      <CowSpot
        size="md"
        className="animate-float-medium absolute right-[10%] top-[22%] opacity-30"
      />
      <CowSpot
        size="sm"
        className="animate-float-fast absolute left-[15%] bottom-[28%] opacity-20"
      />
      <CowHoofPrint className="absolute left-[6%] top-[35%] h-9 w-8 opacity-30 rotate-15" />
      <CowHoofPrint className="absolute right-[8%] bottom-[32%] h-8 w-7 opacity-25 -rotate-12" />
      <CowBell className="animate-float-slow absolute right-[5%] top-[48%] h-9 w-8 opacity-40" />
      <GrassTuft className="animate-float-medium absolute left-[4%] bottom-[22%] h-6 w-10 opacity-45" />
      <span className="animate-float-medium absolute right-[8%] top-[52%] text-xl opacity-30">
        🐮
      </span>
      <span className="animate-float-slow absolute left-[5%] top-[58%] text-lg opacity-25">
        🐄
      </span>
      <MilkBottle className="animate-float-slow absolute right-[6%] bottom-[30%] h-8 w-8 opacity-35" />
      <MilkBottle className="animate-float-fast absolute left-[10%] top-[28%] h-6 w-6 opacity-25" />
      <CowFace
        className="animate-float-fast absolute right-[4%] bottom-[18%] h-12 w-12 opacity-30"
        style={{ animationDelay: "1.2s" }}
      />
    </div>
  );
}

function MilkBottle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="8" y="2" width="8" height="4" rx="1" fill="currentColor" className="text-sky-300" />
      <path
        d="M6 6h12v22c0 2-2 4-6 4s-6-2-6-4V6z"
        fill="currentColor"
        className="text-sky-200"
      />
      <ellipse cx="12" cy="14" rx="4" ry="5" fill="white" opacity="0.6" />
    </svg>
  );
}

export function CowEars({ className = "" }: { className?: string }) {
  return (
    <>
      <div
        className={`absolute -left-3 top-8 z-10 h-14 w-10 -rotate-12 rounded-[50%] bg-cream-dark shadow-soft ${className}`}
        aria-hidden
      >
        <div className="absolute inset-2 rounded-[50%] bg-rose-100/60" />
        <CowSpot size="sm" className="absolute -bottom-1 -right-1 opacity-40" />
      </div>
      <div
        className={`absolute -right-3 top-8 z-10 h-14 w-10 rotate-12 rounded-[50%] bg-cream-dark shadow-soft ${className}`}
        aria-hidden
      >
        <div className="absolute inset-2 rounded-[50%] bg-rose-100/60" />
        <CowSpot size="sm" className="absolute -bottom-1 -left-1 opacity-40" />
      </div>
    </>
  );
}

/** Small cows flanking a section title */
export function SectionCowFrame({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none relative flex items-center justify-center gap-2 py-2 ${className}`}
      aria-hidden
    >
      <CowFace className="h-10 w-10 opacity-50 animate-float-slow" />
      <div className="flex gap-1.5">
        <CowSpot size="sm" className="opacity-25" />
        <CowSpot size="md" className="opacity-30" />
        <CowSpot size="sm" className="opacity-25" />
      </div>
      <CowFace className="h-10 w-10 opacity-50 animate-float-medium scale-x-[-1]" />
    </div>
  );
}

/** Corner accents for cards */
export function CardCowCorners() {
  return (
    <>
      <CowSpot
        size="sm"
        className="absolute -left-1 -top-1 opacity-20"
        aria-hidden
      />
      <CowSpot
        size="sm"
        className="absolute -right-1 -bottom-1 opacity-15"
        aria-hidden
      />
      <CowHoofPrint className="absolute -right-2 top-2 h-5 w-5 opacity-20 rotate-12" aria-hidden />
    </>
  );
}

export function CowDecorations({
  variant = "section",
  className = "",
}: CowDecorationsProps) {
  if (variant === "minimal") {
    return (
      <div className={`flex items-center gap-2 ${className}`} aria-hidden>
        <CowFace className="h-7 w-7 opacity-45" />
        <CowSpot size="sm" className="opacity-30" />
        <CowSpot size="sm" className="opacity-20" />
      </div>
    );
  }

  if (variant === "hero") {
    return <FloatingDecorations className={className} />;
  }

  if (variant === "card") {
    return <CardCowCorners />;
  }

  return <SectionCowFrame className={className} />;
}
