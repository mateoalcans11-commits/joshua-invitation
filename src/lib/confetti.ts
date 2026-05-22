const PARTY_COLORS = ["#7EC8E3", "#B8E4F5", "#F5B8C8", "#F5D78E", "#FDF8F3", "#A8E6CF"];

export async function fireCelebrationConfetti() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const confetti = (await import("canvas-confetti")).default;

  confetti({
    particleCount: 90,
    spread: 75,
    startVelocity: 42,
    origin: { y: 0.6 },
    colors: PARTY_COLORS,
    ticks: 220,
    gravity: 0.9,
    scalar: 1.1,
    zIndex: 9999,
  });

  window.setTimeout(() => {
    confetti({
      particleCount: 55,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.55 },
      colors: PARTY_COLORS,
    });
    confetti({
      particleCount: 55,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.55 },
      colors: PARTY_COLORS,
    });
  }, 180);
}
