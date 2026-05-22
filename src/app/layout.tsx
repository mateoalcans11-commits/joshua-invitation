import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "¡Joshua cumple 1 añito! 🐮",
  description:
    "Joshua va a cumplir 1 año. Nos gustaría muuuuuuucho que estuvieras presente.",
  openGraph: {
    title: "¡Joshua cumple 1 añito! 🐮",
    description:
      "Nos gustaría muuuuuuucho que estuvieras presente en su primer cumpleaños.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fdf8f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.variable} h-full`}>
      <body className="min-h-[100dvh] antialiased">{children}</body>
    </html>
  );
}
