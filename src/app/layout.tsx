import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Doto, Cormorant_Garamond, Unbounded } from "next/font/google";

import ComingSoon from "@/components/ComingSoon";

/* ---------------- FONTS ---------------- */

// Base UI fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-unbounded",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display font (Coming soon headline)
const doto = Doto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-doto",
});

// Editorial / architectural typography (for future pages)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  title: "RIGHT Architects",
  description: "Architecture studio portfolio",
};

/* ---------------- LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${doto.variable}
          ${unbounded.variable}
          ${cormorant.variable}
          antialiased
        `}
      >
        {process.env.NEXT_PUBLIC_SITE_LIVE !== "true" ? (
          <ComingSoon />
        ) : (
          children
        )}
      </body>
    </html>
  );
}
