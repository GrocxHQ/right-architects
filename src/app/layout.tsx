import type { Metadata } from "next";
import "./globals.css";

import { Lexend } from "next/font/google";

import ComingSoon from "@/components/ComingSoon";

/* ---------------- FONTS ---------------- */

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-lexend",
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
    <html lang="en" className={lexend.variable}>
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_SITE_LIVE !== "true" ? (
          <ComingSoon />
        ) : (
          children
        )}
      </body>
    </html>
  );
}