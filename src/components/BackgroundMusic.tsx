"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPartyMusicEngine } from "@/lib/party-music";

const MP3_SRC = "/party-music.mp3";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef<ReturnType<typeof createPartyMusicEngine> | null>(null);
  const useMp3Ref = useRef(true);
  const userMutedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const playFromGesture = useCallback(() => {
    if (userMutedRef.current) return;

    const startSynth = () => {
      if (!synthRef.current) synthRef.current = createPartyMusicEngine();
      synthRef.current?.start();
      setPlaying(true);
    };

    const audio = audioRef.current;
    if (useMp3Ref.current && audio) {
      audio.muted = false;
      const promise = audio.play();
      if (promise) {
        promise.catch(() => {
          useMp3Ref.current = false;
          startSynth();
        });
      }
      return;
    }

    startSynth();
  }, []);

  const pauseAll = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
    synthRef.current?.stop();
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) {
      userMutedRef.current = true;
      pauseAll();
    } else {
      userMutedRef.current = false;
      playFromGesture();
    }
  }, [playing, pauseAll, playFromGesture]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const audio = new Audio(MP3_SRC);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audioRef.current = audio;

    const onPlaying = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", () => {
      useMp3Ref.current = false;
    });

    synthRef.current = createPartyMusicEngine();

    const tryAutoplay = () => {
      if (userMutedRef.current) return;
      const p = audio.play();
      if (p) {
        p.catch(() => {
          /* blocked — first tap on page will start */
        });
      }
    };

    if (audio.readyState >= 2) {
      tryAutoplay();
    } else {
      audio.addEventListener("canplay", tryAutoplay, { once: true });
    }

    const startOnFirstTouch = () => {
      if (userMutedRef.current || !audio.paused) return;
      playFromGesture();
    };

    document.addEventListener("pointerdown", startOnFirstTouch, {
      capture: true,
      passive: true,
    });
    document.addEventListener("touchstart", startOnFirstTouch, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("pointerdown", startOnFirstTouch, true);
      document.removeEventListener("touchstart", startOnFirstTouch, true);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.pause();
      synthRef.current?.dispose();
    };
  }, [reducedMotion, playFromGesture]);

  if (reducedMotion) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed top-[calc(0.5rem+var(--safe-top))] right-3 z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-lg shadow-floating-dock ring-1 ring-sky-200/80 backdrop-blur-sm active:scale-95 sm:right-4"
      aria-label={playing ? "Silenciar música" : "Activar música"}
      aria-pressed={playing}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}
