import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #fef9f4, #bae6fd)",
          borderRadius: 36,
          position: "relative",
        }}
      >
        {photoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc}
            alt=""
            width={150}
            height={150}
            style={{ borderRadius: 28, objectFit: "cover", border: "4px solid white" }}
          />
        ) : (
          <span style={{ fontSize: 72 }}>🐄</span>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            right: 8,
            fontSize: 28,
          }}
        >
          🎂
        </div>
      </div>
    ),
    { ...size }
  );
}
