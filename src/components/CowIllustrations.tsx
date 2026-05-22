import type { CSSProperties } from "react";

type SvgProps = {
  className?: string;
  style?: CSSProperties;
};

/** Cute front-facing cow face */
export function CowFace({ className = "", style }: SvgProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      fill="none"
      aria-hidden
    >
      <ellipse cx="32" cy="36" rx="26" ry="22" fill="#FDF8F3" stroke="#E8DDD0" strokeWidth="1.5" />
      <ellipse cx="14" cy="18" rx="9" ry="12" fill="#F0E6DA" stroke="#E8DDD0" strokeWidth="1" />
      <ellipse cx="50" cy="18" rx="9" ry="12" fill="#F0E6DA" stroke="#E8DDD0" strokeWidth="1" />
      <ellipse cx="14" cy="20" rx="5" ry="6" fill="#FAD4DE" opacity="0.7" />
      <ellipse cx="50" cy="20" rx="5" ry="6" fill="#FAD4DE" opacity="0.7" />
      <ellipse cx="22" cy="34" rx="5" ry="6" fill="#2D2D2D" />
      <ellipse cx="42" cy="34" rx="5" ry="6" fill="#2D2D2D" />
      <circle cx="24" cy="32" r="1.5" fill="white" />
      <circle cx="44" cy="32" r="1.5" fill="white" />
      <ellipse cx="32" cy="44" rx="8" ry="5" fill="#FAD4DE" opacity="0.5" />
      <ellipse cx="32" cy="42" rx="4" ry="2" fill="#5C4A3A" opacity="0.3" />
      <ellipse cx="18" cy="48" rx="6" ry="4" fill="#2D2D2D" opacity="0.85" />
      <ellipse cx="46" cy="50" rx="5" ry="3.5" fill="#2D2D2D" opacity="0.7" />
      <ellipse cx="38" cy="28" rx="4" ry="3" fill="#2D2D2D" opacity="0.5" />
    </svg>
  );
}

/** Side-view mini cow */
export function CuteCow({ className = "", style }: SvgProps) {
  return (
    <svg
      viewBox="0 0 80 56"
      className={className}
      style={style}
      fill="none"
      aria-hidden
    >
      <ellipse cx="40" cy="38" rx="28" ry="16" fill="#FDF8F3" stroke="#E8DDD0" strokeWidth="1.5" />
      <ellipse cx="58" cy="28" rx="14" ry="12" fill="#FDF8F3" stroke="#E8DDD0" strokeWidth="1.5" />
      <ellipse cx="66" cy="22" rx="5" ry="7" fill="#F0E6DA" />
      <ellipse cx="72" cy="24" rx="4" ry="6" fill="#F0E6DA" />
      <ellipse cx="62" cy="26" rx="2" ry="2.5" fill="#2D2D2D" />
      <ellipse cx="22" cy="32" rx="8" ry="10" fill="#F0E6DA" />
      <ellipse cx="16" cy="34" rx="5" ry="6" fill="#FAD4DE" opacity="0.6" />
      <rect x="18" y="48" width="5" height="8" rx="2" fill="#F0E6DA" />
      <rect x="32" y="48" width="5" height="8" rx="2" fill="#F0E6DA" />
      <rect x="48" y="48" width="5" height="8" rx="2" fill="#F0E6DA" />
      <rect x="58" y="48" width="5" height="8" rx="2" fill="#F0E6DA" />
      <ellipse cx="30" cy="36" rx="7" ry="5" fill="#2D2D2D" opacity="0.8" />
      <ellipse cx="48" cy="40" rx="5" ry="4" fill="#2D2D2D" opacity="0.6" />
      <path d="M68 30 Q74 28 76 32" stroke="#5C4A3A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <ellipse cx="14" cy="18" rx="3" ry="2" fill="#2D2D2D" opacity="0.5" />
    </svg>
  );
}

/** Cow hoof print */
export function CowHoofPrint({ className = "", style }: SvgProps) {
  return (
    <svg viewBox="0 0 24 28" className={className} style={style} fill="none" aria-hidden>
      <ellipse cx="12" cy="8" rx="5" ry="6" fill="#2D2D2D" opacity="0.2" />
      <circle cx="6" cy="20" r="3" fill="#2D2D2D" opacity="0.18" />
      <circle cx="12" cy="22" r="3" fill="#2D2D2D" opacity="0.18" />
      <circle cx="18" cy="20" r="3" fill="#2D2D2D" opacity="0.18" />
    </svg>
  );
}

/** Small cow bell */
export function CowBell({ className = "", style }: SvgProps) {
  return (
    <svg viewBox="0 0 24 28" className={className} style={style} fill="none" aria-hidden>
      <path d="M8 4h8v3H8z" fill="#E8DDD0" />
      <path d="M6 7h12l-1 14c0 2-2 4-5 4s-5-2-5-4L6 7z" fill="#F5D78E" stroke="#E8DDD0" strokeWidth="1" />
      <circle cx="12" cy="18" r="2" fill="#D4A84A" />
      <circle cx="12" cy="24" r="1.5" fill="#D4A84A" />
    </svg>
  );
}

/** Grass tuft for farm feel */
export function GrassTuft({ className = "", style }: SvgProps) {
  return (
    <svg viewBox="0 0 32 20" className={className} style={style} fill="none" aria-hidden>
      <path d="M4 18 Q4 8 8 4 Q6 12 10 18" fill="#A8E6CF" opacity="0.5" />
      <path d="M12 18 Q14 6 16 2 Q15 10 18 18" fill="#8ED4B4" opacity="0.55" />
      <path d="M20 18 Q22 8 26 6 Q24 14 28 18" fill="#A8E6CF" opacity="0.5" />
    </svg>
  );
}

/** Cow snout / nose patch */
export function CowSnout({ className = "", style }: SvgProps) {
  return (
    <svg viewBox="0 0 40 32" className={className} style={style} fill="none" aria-hidden>
      <ellipse cx="20" cy="18" rx="16" ry="12" fill="#FDF8F3" stroke="#E8DDD0" strokeWidth="1" />
      <ellipse cx="12" cy="20" rx="4" ry="3" fill="#2D2D2D" opacity="0.7" />
      <ellipse cx="28" cy="20" rx="4" ry="3" fill="#2D2D2D" opacity="0.7" />
      <ellipse cx="20" cy="14" rx="3" ry="2" fill="#FAD4DE" opacity="0.4" />
    </svg>
  );
}
