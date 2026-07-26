import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pemraj.com"),
  title: {
    default: "Pemraj Industries — Precision CNC Manufacturing, Pune",
    template: "%s — Pemraj Industries",
  },
  description:
    "Pemraj Industries has manufactured high-precision CNC turned and turn-milled components in Pune since 1983 — CNC turning, Swiss turning, turn-mill and polygon turning for automotive, defence, hydraulics and electronics. ISO 9001:2015 certified.",
  openGraph: {
    title: "Pemraj Industries — Precision CNC Manufacturing, Pune",
    description:
      "High-precision CNC turned and turn-milled components, made in Pune since 1983. ISO 9001:2015 certified.",
    siteName: "Pemraj Industries",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
