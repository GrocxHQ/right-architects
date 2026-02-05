"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Profile", href: "/profile" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop / Tablet */}
      <header className="absolute top-10 left-0 right-0 z-50 hidden md:flex justify-center">
        <nav className="flex gap-14 text-xs uppercase tracking-[0.25em] text-gray-600">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-900 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile */}
      <header className="absolute top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="text-xs tracking-[0.3em] uppercase text-gray-700"
        >
          Menu
        </button>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-8 text-sm uppercase tracking-[0.3em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-800"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setOpen(false)}
            className="mt-10 text-xs text-gray-400"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
