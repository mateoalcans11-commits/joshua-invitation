"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPartyMusicEngine } from "@/lib/party-music";

const MP3_SRC = "/party-music.mp3";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef<ReturnType<typeof createPartyMusicEngine> | null>(null);
  const unlockedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [useMp3, setUseMp3] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const startPlayback = useCallback(async () => {
    if (unlockedRef.current || reducedMotion) return;

    const audio = audioRef.current;
    if (useMp3 && audio) {
      try {
        audio.muted = false;
        await audio.play();
        unlockedRef.current = true;
        setPlaying(true);
        return;
      } catch {
        /* fall through to synth */
      }
    }

    if (!synthRef.current) {
      synthRef.current = createPartyMusicEngine();
    }
    synthRef.current?.start();
    unlockedRef.current = true;
    setPlaying(true);
  }, [reducedMotion, useMp3]);

  const stopPlayback = useCallback(() => {
    audioRef.current?.pause();
    synthRef.current?.stop();
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) {
      unlockedRef.current = false;
      stopPlayback();
    } else {
      void startPlayback();
    }
  }, [playing, startPlayback, stopPlayback]);

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
    audio.volume = 0.35;
    audio.preload = "auto";
    audioRef.current = audio;

    audio.addEventListener(
      "canplaythrough",
      () => setUseMp3(true),
      { once: true }
    );
    audio.addEventListener(
      "error",
      () => setUseMp3(false),
      { once: true }
    );

    synthRef.current = createPartyMusicEngine();

    const tryAutoplay = async () => {
      if (unlockedRef.current) return;
      try {
        audio.muted = true;
        await audio.play();
        audio.pause();
        audio.currentTime = 0;
        audio.muted = false;
        await audio.play();
        unlockedRef.current = true;
        setUseMp3(true);
        setPlaying(true);
        return;
      } catch {
        audio.muted = false;
      }
      try {
        synthRef.current?.start();
        unlockedRef.current = true;
        setPlaying(true);
      } catch {
        /* blocked until user taps */
      }
    };

    void tryAutoplay();

    const unlock = () => {
      if (!unlockedRef.current) void startPlayback();
    };

    document.addEventListener("pointerdown", unlock, { once: true, passive: true });
    document.addEventListener("touchstart", unlock, { once: true, passive: true });
    document.addEventListener("keydown", unlock, { once: true });

    return () => {
      document.removeEventListener("pointerdown", unlock);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("keydown", unlock);
      audio.pause();
      synthRef.current?.dispose();
    };
  }, [reducedMotion, startPlayback]);

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
