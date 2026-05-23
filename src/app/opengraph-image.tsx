import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { eventInfo } from "@/lib/event-info";

export const alt = "Invitación al primer cumpleaños de Joshua";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photoPath = path.join(process.cwd(), "public", "joshua-baby.jpg");
  let photoSrc: string | null = null;
  try {
    const bytes = await readFile(photoPath);
    photoSrc = `data:image/jpeg;base64,${bytes.toString("base64")}`;
  } catch {
    photoSrc = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #fef9f4 0%, #e8f4fc 45%, #fdf8f3 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 48,
            width: 72,
            height: 52,
            borderRadius: 999,
            background: "#3d2914",
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 56,
            width: 96,
            height: 64,
            borderRadius: 999,
            background: "#3d2914",
            opacity: 0.1,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
            padding: "10px 28px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 4px 24px rgba(56,189,248,0.2)",
            border: "2px solid rgba(125,211,252,0.5)",
          }}
        >
          <span style={{ fontSize: 36 }}>🐮</span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#0284c7",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Invitación
          </span>
          <span style={{ fontSize: 36 }}>🎉</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {photoSrc ? (
            <div
              style={{
                display: "flex",
                padding: 14,
                borderRadius: 32,
                background: "white",
                boxShadow: "0 12px 40px rgba(61,41,20,0.15)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photoSrc}
                alt=""
                width={220}
                height={275}
                style={{
                  borderRadius: 24,
                  objectFit: "cover",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                width: 248,
                height: 303,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 80,
                borderRadius: 32,
                background: "white",
              }}
            >
              🐄
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 620,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 700,
                color: "#7c5c3a",
              }}
            >
              ¡Joshua cumple 1 añito!
            </p>
            <p
              style={{
                margin: "16px 0 0",
                fontSize: 26,
                lineHeight: 1.35,
                color: "#5c4033",
                fontWeight: 600,
              }}
            >
              Nos gustaría muuuuuuucho que estuvieras presente
            </p>
            <div
              style={{
                marginTop: 28,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "20px 24px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(190,220,240,0.8)",
              }}
            >
              <p style={{ margin: 0, fontSize: 22, color: "#3d2914", fontWeight: 700 }}>
                📅 {eventInfo.date} · {eventInfo.time}
              </p>
              <p style={{ margin: 0, fontSize: 20, color: "#5c4033", fontWeight: 600 }}>
                📍 {eventInfo.place}
              </p>
            </div>
          </div>
        </div>

        <p
          style={{
            position: "absolute",
            bottom: 28,
            fontSize: 20,
            color: "#7c5c3a",
            opacity: 0.55,
            fontWeight: 600,
          }}
        >
          Toca el enlace para confirmar tu asistencia 🐄
        </p>
      </div>
    ),
    { ...size }
  );
}
