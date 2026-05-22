import {
  CowBell,
  CowFace,
  CowHoofPrint,
  CuteCow,
  GrassTuft,
} from "./CowIllustrations";

type PartyBackgroundProps = {
  className?: string;
};

export function PartyBackground({ className = "" }: PartyBackgroundProps) {
  return (
    <div
      className={`mobile-bg-lite pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <AmbientGlow />
      <CowSpotPattern />
      <div className="mobile-hide-decor">
        <BackgroundCows />
        <BalloonCluster side="left" />
        <BalloonCluster side="right" />
        <BottomBalloons />
      </div>
      <Bunting />
      <ConfettiField />
      <Streamers />
      <FloatingPartyIcons />
    </div>
  );
}

function AmbientGlow() {
  return (
    <>
      <div className="absolute -left-20 top-[8%] h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute -right-16 top-[22%] h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="absolute left-1/3 top-[55%] h-80 w-80 -translate-x-1/2 rounded-full bg-amber-100/45 blur-3xl" />
      <div className="absolute -right-10 bottom-[15%] h-56 w-56 rounded-full bg-sky-100/55 blur-3xl" />
      <div className="absolute -left-8 bottom-[35%] h-48 w-48 rounded-full bg-violet-100/30 blur-3xl" />
    </>
  );
}

function BackgroundCows() {
  const cows = [
    { Comp: CowFace, top: "10%", left: "2%", size: "h-11 w-11", delay: "0s", flip: false },
    { Comp: CuteCow, top: "25%", right: "1%", size: "h-10 w-14", delay: "1s", flip: true },
    { Comp: CowFace, top: "48%", right: "3%", size: "h-9 w-9", delay: "0.5s", flip: true },
    { Comp: CuteCow, top: "55%", left: "0%", size: "h-11 w-[3.75rem]", delay: "1.5s", flip: false },
    { Comp: CowFace, top: "72%", left: "4%", size: "h-10 w-10", delay: "0.8s", flip: false },
    { Comp: CuteCow, top: "88%", right: "2%", size: "h-10 w-14", delay: "2s", flip: true },
  ];
  return (
    <>
      {cows.map(({ Comp, top, left, right, size, delay, flip }, i) => (
        <Comp
          key={i}
          className={`animate-float-slow absolute opacity-[0.22] sm:opacity-[0.28] ${size} ${flip ? "-scale-x-100" : ""}`}
          style={{
            top,
            left,
            right,
            animationDelay: delay,
          }}
        />
      ))}
      <CowHoofPrint className="absolute left-[8%] top-[18%] h-7 w-6 opacity-20 rotate-12" />
      <CowHoofPrint className="absolute right-[10%] top-[35%] h-6 w-5 opacity-18 -rotate-8" />
      <CowHoofPrint className="absolute left-[5%] top-[65%] h-8 w-7 opacity-20 rotate-20" />
      <CowHoofPrint className="absolute right-[7%] top-[80%] h-7 w-6 opacity-18 -rotate-15" />
      <GrassTuft className="absolute left-[3%] top-[42%] h-5 w-9 opacity-35" />
      <GrassTuft className="absolute right-[4%] top-[58%] h-4 w-8 opacity-30 -scale-x-100" />
      <CowBell className="animate-float-medium absolute left-[6%] top-[30%] h-8 w-7 opacity-30" />
      <CowBell
        className="animate-float-slow absolute right-[5%] top-[68%] h-7 w-6 opacity-28"
        style={{ animationDelay: "1.2s" }}
      />
    </>
  );
}

function CowSpotPattern() {
  const spots = [
    { top: "6%", left: "4%", w: 28, h: 22, rot: -12, o: 0.08 },
    { top: "14%", right: "6%", w: 36, h: 28, rot: 8, o: 0.07 },
    { top: "20%", left: "45%", w: 14, h: 11, rot: 5, o: 0.05 },
    { top: "38%", left: "2%", w: 20, h: 16, rot: 20, o: 0.06 },
    { top: "50%", right: "20%", w: 16, h: 12, rot: -10, o: 0.04 },
    { top: "62%", right: "3%", w: 32, h: 24, rot: -15, o: 0.07 },
    { top: "78%", left: "8%", w: 24, h: 18, rot: 5, o: 0.06 },
    { top: "88%", right: "12%", w: 18, h: 14, rot: -8, o: 0.05 },
    { top: "92%", left: "40%", w: 22, h: 16, rot: 12, o: 0.04 },
  ];
  return (
    <>
      {spots.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cow-spot"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.w,
            height: s.h,
            transform: `rotate(${s.rot}deg)`,
            opacity: s.o,
          }}
        />
      ))}
    </>
  );
}

function Bunting() {
  const colors = [
    "bg-sky-300",
    "bg-rose-200",
    "bg-amber-200",
    "bg-sky-200",
    "bg-violet-200",
    "bg-emerald-200",
    "bg-sky-300",
    "bg-rose-200",
    "bg-amber-200",
    "bg-sky-200",
  ];
  return (
    <div className="absolute left-0 right-0 top-0 px-1 pt-1">
      <svg
        className="absolute left-2 right-2 top-3 w-[calc(100%-1rem)]"
        viewBox="0 0 360 24"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 6 Q45 20 90 6 T180 6 T270 6 T360 6"
          stroke="rgba(92,74,58,0.15)"
          strokeWidth="1.5"
        />
      </svg>
      <div className="relative flex justify-evenly gap-0.5 px-2 pt-4">
        {colors.map((color, i) => (
          <div
            key={i}
            className={`animate-bunting-sway h-4 w-[18px] origin-top sm:h-5 sm:w-5 ${color}`}
            style={{
              clipPath: "polygon(50% 100%, 0 0, 100% 0)",
              animationDelay: `${i * 0.1}s`,
              opacity: 0.85,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Balloon({
  color,
  size = "md",
  className = "",
  delay = "0s",
}: {
  color: "sky" | "rose" | "amber" | "violet" | "mint";
  size?: "sm" | "md" | "lg";
  className?: string;
  delay?: string;
}) {
  const fills = {
    sky: { main: "#7EC8E3", light: "#B8E4F5", shine: "#E8F6FC" },
    rose: { main: "#F5B8C8", light: "#FAD4DE", shine: "#FDF0F3" },
    amber: { main: "#F5D78E", light: "#FAEAB8", shine: "#FDF6E3" },
    violet: { main: "#C4B5E8", light: "#DDD4F2", shine: "#F0ECFA" },
    mint: { main: "#A8E6CF", light: "#C8F0DE", shine: "#E8FAF0" },
  };
  const sizes = { sm: 36, md: 52, lg: 68 };
  const s = sizes[size];
  const f = fills[color];

  return (
    <svg
      width={s}
      height={s * 1.35}
      viewBox="0 0 52 70"
      className={`animate-balloon-sway drop-shadow-sm ${className}`}
      style={{ animationDelay: delay }}
    >
      <line
        x1="26"
        y1="58"
        x2="26"
        y2="70"
        stroke="rgba(92,74,58,0.25)"
        strokeWidth="1.5"
      />
      <ellipse cx="26" cy="32" rx="22" ry="28" fill={f.main} />
      <ellipse cx="20" cy="24" rx="8" ry="10" fill={f.light} opacity="0.7" />
      <ellipse cx="30" cy="18" rx="5" ry="6" fill={f.shine} opacity="0.9" />
      <path d="M22 54 Q26 60 30 54" fill={f.main} />
    </svg>
  );
}

function BalloonCluster({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute top-[12%] flex flex-col gap-1 ${
        isLeft ? "left-1 sm:left-4" : "right-1 sm:right-4"
      }`}
    >
      <div className={`flex ${isLeft ? "flex-col" : "flex-col items-end"}`}>
        <Balloon
          color="sky"
          size="lg"
          className={isLeft ? "-rotate-6" : "rotate-8"}
          delay="0s"
        />
        <Balloon
          color="rose"
          size="md"
          className={`${isLeft ? "ml-6 -mt-2" : "mr-4 -mt-2 rotate-12"}`}
          delay="0.4s"
        />
        <Balloon
          color="amber"
          size="sm"
          className={`${isLeft ? "ml-2 -mt-1" : "mr-8 -mt-1 -rotate-6"}`}
          delay="0.8s"
        />
      </div>
    </div>
  );
}

function BottomBalloons() {
  return (
    <div className="absolute bottom-[6%] left-0 right-0 flex justify-between px-3 opacity-70 sm:px-8">
      <div className="flex gap-0">
        <Balloon color="mint" size="sm" className="-rotate-12" delay="0.2s" />
        <Balloon color="violet" size="md" className="-ml-2 -mt-4 rotate-6" delay="0.6s" />
      </div>
      <div className="flex gap-0">
        <Balloon color="rose" size="md" className="rotate-[-8deg]" delay="0.4s" />
        <Balloon color="sky" size="sm" className="-mr-1 -mt-2 ml-1 rotate-12" delay="1s" />
      </div>
    </div>
  );
}

function ConfettiField() {
  const pieces = [
    { top: "8%", left: "18%", color: "#7EC8E3", rot: 15, delay: "0s", shape: "rect" },
    { top: "12%", left: "72%", color: "#F5B8C8", rot: -20, delay: "1.2s", shape: "circle" },
    { top: "22%", left: "88%", color: "#F5D78E", rot: 45, delay: "0.6s", shape: "rect" },
    { top: "28%", left: "12%", color: "#C4B5E8", rot: -10, delay: "2s", shape: "circle" },
    { top: "35%", left: "55%", color: "#A8E6CF", rot: 30, delay: "1.5s", shape: "rect" },
    { top: "45%", left: "92%", color: "#7EC8E3", rot: -35, delay: "0.3s", shape: "rect" },
    { top: "52%", left: "6%", color: "#F5D78E", rot: 12, delay: "2.4s", shape: "circle" },
    { top: "58%", left: "78%", color: "#F5B8C8", rot: -25, delay: "1s", shape: "rect" },
    { top: "68%", left: "22%", color: "#7EC8E3", rot: 40, delay: "0.9s", shape: "circle" },
    { top: "72%", left: "65%", color: "#C4B5E8", rot: -15, delay: "1.8s", shape: "rect" },
    { top: "82%", left: "10%", color: "#F5B8C8", rot: 20, delay: "2.2s", shape: "rect" },
    { top: "85%", left: "48%", color: "#F5D78E", rot: -8, delay: "0.5s", shape: "circle" },
    { top: "92%", left: "85%", color: "#A8E6CF", rot: 35, delay: "1.4s", shape: "rect" },
    { top: "18%", left: "42%", color: "#F5B8C8", rot: -30, delay: "2.8s", shape: "circle" },
    { top: "48%", left: "38%", color: "#7EC8E3", rot: 18, delay: "3s", shape: "rect" },
  ];

  return (
    <>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="animate-confetti-drift absolute"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
          }}
        >
          {p.shape === "circle" ? (
            <span
              className="block h-2 w-2 rounded-full opacity-50 sm:h-2.5 sm:w-2.5"
              style={{ backgroundColor: p.color, transform: `rotate(${p.rot}deg)` }}
            />
          ) : (
            <span
              className="block h-2.5 w-1.5 rounded-sm opacity-45 sm:h-3 sm:w-1.5"
              style={{
                backgroundColor: p.color,
                transform: `rotate(${p.rot}deg)`,
              }}
            />
          )}
        </span>
      ))}
    </>
  );
}

function Streamers() {
  return (
    <>
      <div className="absolute left-[5%] top-[20%] origin-top rotate-[25deg]">
        <div className="animate-streamer h-32 w-1 rounded-full bg-gradient-to-b from-sky-300/50 to-transparent sm:h-40" />
      </div>
      <div className="absolute right-[8%] top-[18%] origin-top -rotate-[20deg]">
        <div
          className="animate-streamer h-28 w-1 rounded-full bg-gradient-to-b from-rose-300/50 to-transparent sm:h-36"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <div className="absolute left-[85%] top-[42%] origin-top -rotate-[35deg]">
        <div
          className="animate-streamer h-24 w-1 rounded-full bg-gradient-to-b from-amber-300/45 to-transparent"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </>
  );
}

function FloatingPartyIcons() {
  return (
    <>
      <span className="animate-float-slow absolute left-[6%] top-[32%] text-2xl opacity-25 sm:text-3xl">
        🎂
      </span>
      <span
        className="animate-float-medium absolute right-[5%] top-[38%] text-xl opacity-20 sm:text-2xl"
        style={{ animationDelay: "1s" }}
      >
        🎈
      </span>
      <span
        className="animate-float-fast absolute left-[10%] top-[70%] text-lg opacity-20 sm:text-xl"
        style={{ animationDelay: "0.5s" }}
      >
        🎉
      </span>
      <CowFace
        className="animate-float-slow absolute right-[4%] top-[60%] h-11 w-11 opacity-25 sm:h-12 sm:w-12"
        style={{ animationDelay: "1.5s" }}
      />
      <CuteCow
        className="animate-float-medium absolute left-[3%] top-[66%] h-10 w-14 opacity-22"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-float-medium absolute left-1/2 top-[4%] -translate-x-1/2 rounded-full bg-white/70 px-4 py-1.5 shadow-soft ring-1 ring-sky-200/60 backdrop-blur-sm"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="font-display text-sm font-extrabold tracking-wide text-sky-600 sm:text-base">
          1 · añito
        </span>
      </div>
      <BirthdayCake className="animate-float-slow absolute bottom-[18%] left-[4%] h-10 w-10 opacity-30 sm:h-12 sm:w-12" />
      <GiftBox
        className="animate-float-medium absolute bottom-[22%] right-[5%] h-9 w-9 opacity-25 sm:h-11 sm:w-11"
        style={{ animationDelay: "1.2s" }}
      />
    </>
  );
}

function BirthdayCake({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="28" width="32" height="14" rx="3" fill="#F5D78E" />
      <rect x="10" y="20" width="28" height="10" rx="2" fill="#FAD4DE" />
      <rect x="14" y="14" width="20" height="8" rx="2" fill="#B8E4F5" />
      <line x1="24" y1="6" x2="24" y2="14" stroke="#F5B8C8" strokeWidth="2" />
      <ellipse cx="24" cy="5" rx="3" ry="4" fill="#FF9EB5" opacity="0.8" />
      <circle cx="16" cy="32" r="2" fill="#fff" opacity="0.5" />
      <circle cx="32" cy="32" r="2" fill="#fff" opacity="0.5" />
    </svg>
  );
}

function GiftBox({
  className = "",
  style,
}: {
  className?: string;
  style?: { animationDelay?: string };
}) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} fill="none">
      <rect x="10" y="22" width="28" height="22" rx="2" fill="#7EC8E3" />
      <rect x="8" y="16" width="32" height="8" rx="2" fill="#B8E4F5" />
      <rect x="22" y="16" width="4" height="28" fill="#F5B8C8" opacity="0.8" />
      <path
        d="M24 16 C18 10 14 14 24 16 C34 14 30 10 24 16"
        fill="#F5B8C8"
        opacity="0.9"
      />
    </svg>
  );
}
