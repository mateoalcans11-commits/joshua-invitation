import { addGuest, loadGuests } from "@/lib/rsvp-store.server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const guests = await loadGuests();
  return NextResponse.json({ guests });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { name?: string };
    const name = body?.name ?? "";
    const guests = await addGuest(name);
    return NextResponse.json({ guests });
  } catch {
    return NextResponse.json({ error: "No se pudo guardar" }, { status: 400 });
  }
}
