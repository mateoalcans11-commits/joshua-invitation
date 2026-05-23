import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = getSiteUrl();
const ogTitle = "Invitación · ¡Joshua cumple 1 añito! 🐮";
const ogDescription =
  "Sábado 30 de mayo, 4:00 p.m. · Confirma tu asistencia. Nos gustaría muuuuuuucho que estuvieras presente 🎉";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: ogTitle,
  description: ogDescription,
  applicationName: "Invitación Joshua",
  category: "invitation",
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    type: "website",
    locale: "es",
    siteName: "Invitación Joshua",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Invitación al primer cumpleaños de Joshua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
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
