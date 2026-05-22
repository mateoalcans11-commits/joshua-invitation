import { CowFace } from "./CowIllustrations";
import { CowSpot } from "./CowDecorations";

export function PartyDivider() {
  return (
    <div
      className="pointer-events-none relative mx-auto flex max-w-md items-center justify-center gap-2 px-4 py-5 sm:px-6 sm:py-6"
      aria-hidden
    >
      <CowFace className="h-8 w-8 shrink-0 opacity-40 animate-float-slow" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cow-spot/15 to-transparent" />
      <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-soft ring-1 ring-cream-dark backdrop-blur-sm">
        <CowSpot size="sm" className="opacity-40" />
        <span className="text-xs font-semibold tracking-wider text-cow-brown/70">
          moo · fiesta
        </span>
        <CowSpot size="sm" className="opacity-30" />
      </div>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cow-spot/15 to-transparent" />
      <CowFace className="h-8 w-8 shrink-0 opacity-40 animate-float-medium scale-x-[-1]" />
    </div>
  );
}
