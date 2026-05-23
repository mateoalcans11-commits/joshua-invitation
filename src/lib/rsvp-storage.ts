/**
 * RSVP storage — shared list via /api/rsvp (JSON file in data/rsvp-guests.json).
 */

export interface RsvpStorage {
  getGuests(): Promise<string[]>;
  addGuest(name: string): Promise<string[]>;
}

export class SharedRsvpStorage implements RsvpStorage {
  async getGuests(): Promise<string[]> {
    const res = await fetch("/api/rsvp", { cache: "no-store" });
    if (!res.ok) return [];
    const data = (await res.json()) as { guests?: string[] };
    return Array.isArray(data.guests) ? data.guests : [];
  }

  async addGuest(name: string): Promise<string[]> {
    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!res.ok) {
      const current = await this.getGuests();
      return current;
    }
    const data = (await res.json()) as { guests?: string[] };
    return Array.isArray(data.guests) ? data.guests : [];
  }
}

export const rsvpStorage: RsvpStorage = new SharedRsvpStorage();
