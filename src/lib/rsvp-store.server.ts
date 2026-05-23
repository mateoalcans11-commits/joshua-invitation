import { get, put } from "@vercel/blob";
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

function hasBlobToken(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function loadFromBlob(): Promise<string[] | null> {
  if (!hasBlobToken()) return null;
  try {
    const result = await get(BLOB_PATHNAME, {
      access: "private",
      useCache: false,
    });
    if (!result?.stream) return [];
    const raw = await new Response(result.stream).text();
    return parseGuests(raw);
  } catch {
    return null;
  }
}

async function saveToBlob(guests: string[]): Promise<void> {
  if (!hasBlobToken()) return;
  await put(BLOB_PATHNAME, JSON.stringify(guests, null, 2), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
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
  try {
    await writeFile(LOCAL_FILE, JSON.stringify(guests, null, 2) + "\n", "utf-8");
  } catch {
    // Vercel serverless filesystem is read-only; Blob is the store there.
  }
}

export async function loadGuests(): Promise<string[]> {
  if (hasBlobToken()) {
    const fromBlob = await loadFromBlob();
    if (fromBlob !== null) return fromBlob;
  }
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
