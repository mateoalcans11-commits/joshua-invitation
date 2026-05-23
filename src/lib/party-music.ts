/** Short cheerful loop (Web Audio) when no MP3 is provided. */
const MELODY = [
  { freq: 523.25, at: 0, dur: 0.22 },
  { freq: 659.25, at: 0.25, dur: 0.22 },
  { freq: 783.99, at: 0.5, dur: 0.22 },
  { freq: 1046.5, at: 0.75, dur: 0.35 },
  { freq: 783.99, at: 1.2, dur: 0.22 },
  { freq: 880, at: 1.45, dur: 0.22 },
  { freq: 987.77, at: 1.7, dur: 0.45 },
] as const;

const LOOP_SEC = 2.4;

export type PartyMusicEngine = {
  start: () => void;
  stop: () => void;
  setVolume: (v: number) => void;
  dispose: () => void;
};

export function createPartyMusicEngine(): PartyMusicEngine | null {
  if (typeof window === "undefined") return null;

  const Ctx =
    window.AudioContext ||
    (window as Window & { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!Ctx) return null;

  const ctx = new Ctx();
  const master = ctx.createGain();
  master.gain.value = 0.28;
  master.connect(ctx.destination);

  let timer: ReturnType<typeof setInterval> | null = null;
  let running = false;

  function playNote(freq: number, start: number, duration: number) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    const t = ctx.currentTime + start;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.22, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain);
    gain.connect(master);
    osc.start(t);
    osc.stop(t + duration + 0.05);
  }

  function playLoop() {
    for (const n of MELODY) playNote(n.freq, n.at, n.dur);
  }

  return {
    start() {
      if (running) return;
      running = true;
      void ctx.resume();
      playLoop();
      timer = setInterval(playLoop, LOOP_SEC * 1000);
    },
    stop() {
      running = false;
      if (timer) clearInterval(timer);
      timer = null;
      void ctx.suspend();
    },
    setVolume(v: number) {
      master.gain.value = Math.max(0, Math.min(0.5, v));
    },
    dispose() {
      if (timer) clearInterval(timer);
      void ctx.close();
    },
  };
}
