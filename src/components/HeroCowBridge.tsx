import { CowFace, CuteCow } from "./CowIllustrations";
import { CowSpot } from "./CowDecorations";

export function HeroCowBridge() {
  return (
    <div
      className="relative z-10 mb-2 flex items-center justify-center gap-3 px-4 py-3 sm:mb-3 sm:gap-4 sm:py-4"
      aria-hidden
    >
      <CowFace className="animate-wiggle-burst hero-w2 h-9 w-9 opacity-50 sm:h-10 sm:w-10" />
      <CowSpot size="sm" className="animate-wiggle-burst hero-w3 opacity-30" />
      <CuteCow className="animate-wiggle-burst hero-w4 h-8 w-11 opacity-45 sm:h-9 sm:w-12" />
      <CowSpot size="md" className="animate-wiggle-burst hero-w5 opacity-25" />
      <CowFace className="animate-wiggle-burst hero-w6 h-9 w-9 scale-x-[-1] opacity-50 sm:h-10 sm:w-10" />
    </div>
  );
}
