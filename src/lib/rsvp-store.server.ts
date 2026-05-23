import { readFile, writeFile } from "fs/promises";
import path from "path";

const LOCAL_FILE = path.join(process.cwd(), "data", "rsvp-guests.json");
const BLOB_PATHNAME = "joshua-rsvp-guests.json";

function parseGuests(raw: string): string[] {
  const parsed = JSON.parse(raw) as unknown;
  if (!Array.isArray(parsed)) return [];
  return parsed.filter((g): g is string => typeof g === "string");
}

function normalizeName(name: string): string {
  return name.trim().replace(/\s+/g, " ");
}

async function loadFromBlob(): Promise<string[] | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  try {
    const { head } = await import("@vercel/blob");
    const meta = await head(BLOB_PATHNAME);
    const res = await fetch(meta.url, { cache: "no-store" });
    if (!res.ok) return [];
    return parseGuests(await res.text());
  } catch {
    return null;
  }
}

async function saveToBlob(guests: string[]): Promise<void> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return;
  const { put } = await import("@vercel/blob");
  await put(BLOB_PATHNAME, JSON.stringify(guests, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

async function loadFromFile(): Promise<string[]> {
  try {
    const raw = await readFile(LOCAL_FILE, "utf-8");
    return parseGuests(raw);
  } catch {
    return [];
  }
}

async function saveToFile(guests: string[]): Promise<void> {
  await writeFile(LOCAL_FILE, JSON.stringify(guests, null, 2) + "\n", "utf-8");
}

export async function loadGuests(): Promise<string[]> {
  const fromBlob = await loadFromBlob();
  if (fromBlob !== null) return fromBlob;
  return loadFromFile();
}

export async function addGuest(name: string): Promise<string[]> {
  const normalized = normalizeName(name);
  if (!normalized) return loadGuests();

  const guests = await loadGuests();
  const exists = guests.some(
    (g) => g.toLowerCase() === normalized.toLowerCase()
  );
  if (exists) return guests;

  const updated = [...guests, normalized];
  await saveToFile(updated);
  await saveToBlob(updated);
  return updated;
}
