/**
 * RSVP storage abstraction.
 * Currently uses localStorage; swap implementation for Supabase/Firebase later.
 */

export const RSVP_STORAGE_KEY = "joshua-birthday-rsvp-guests";

export interface RsvpStorage {
  getGuests(): Promise<string[]>;
  addGuest(name: string): Promise<string[]>;
}

function normalizeName(name: string): string {
  return name.trim().replace(/\s+/g, " ");
}

export class LocalStorageRsvpStorage implements RsvpStorage {
  private isAvailable(): boolean {
    return typeof window !== "undefined" && typeof localStorage !== "undefined";
  }

  private read(): string[] {
    if (!this.isAvailable()) return [];
    try {
      const raw = localStorage.getItem(RSVP_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((g): g is string => typeof g === "string");
    } catch {
      return [];
    }
  }

  private write(guests: string[]): void {
    if (!this.isAvailable()) return;
    localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(guests));
  }

  async getGuests(): Promise<string[]> {
    return this.read();
  }

  async addGuest(name: string): Promise<string[]> {
    const normalized = normalizeName(name);
    if (!normalized) return this.read();

    const guests = this.read();
    const exists = guests.some(
      (g) => g.toLowerCase() === normalized.toLowerCase()
    );
    if (exists) return guests;

    const updated = [...guests, normalized];
    this.write(updated);
    return updated;
  }
}

/** Default client-side storage instance */
export const rsvpStorage: RsvpStorage = new LocalStorageRsvpStorage();

/**
 * Future: Supabase implementation example
 *
 * export class SupabaseRsvpStorage implements RsvpStorage {
 *   async getGuests() { ... }
 *   async addGuest(name: string) { ... }
 * }
 */
