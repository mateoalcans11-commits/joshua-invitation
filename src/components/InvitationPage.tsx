"use client";

import { useCallback, useEffect, useState } from "react";
import { rsvpStorage } from "@/lib/rsvp-storage";
import { GuestList } from "./GuestList";
import { HeroInvitation } from "./HeroInvitation";
import { CowScatter } from "./CowScatter";
import { PartyBackground } from "./PartyBackground";
import { PartyDivider } from "./PartyDivider";
import { RSVPForm } from "./RSVPForm";
import { BackgroundMusic } from "./BackgroundMusic";
import { SectionNavigation } from "./SectionNavigation";

export function InvitationPage() {
  const [guests, setGuests] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      const list = await rsvpStorage.getGuests();
      if (!cancelled) {
        setGuests(list);
        setReady(true);
      }
    }

    void refresh();
    const interval = setInterval(() => void refresh(), 20_000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const handleRsvp = useCallback(async (name: string) => {
    const updated = await rsvpStorage.addGuest(name);
    setGuests(updated);
  }, []);

  return (
    <div className="invite-shell mobile-reduce-motion relative bg-gradient-to-b from-[#fef9f4] via-cream via-40% to-[#f0f7fc]">
      <BackgroundMusic />
      <PartyBackground />

      <main className="relative z-10 w-full">
        <CowScatter density="full" className="max-sm:opacity-50" />
        <HeroInvitation />
        <PartyDivider />
        <RSVPForm onSubmit={handleRsvp} disabled={!ready} />
        <PartyDivider />
        <GuestList guests={guests} />
      </main>

      <SectionNavigation />

      <footer className="relative px-4 pb-[calc(var(--safe-bottom)+0.5rem)] pt-2 text-center">
        <p className="text-sm text-cow-brown/40">
          Con muuuuuuucho amor · Joshua · 1 año 🎂
        </p>
        <p className="mt-2 text-lg opacity-40" aria-hidden>
          🐮 🐄 🐮
        </p>
      </footer>
    </div>
  );
}
