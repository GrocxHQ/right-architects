"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header({ loaded = true }: { loaded?: boolean }) {
  const [open, setOpen] = useState(false);

  const leftLinks = [
    { label: "Work", href: "/projects" },
    { label: "Process", href: "/process" },
  ];

  const rightLinks = [
    { label: "Profile", href: "/profile" },
    { label: "Contact", href: "/contact" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      {/* DESKTOP + TABLET HEADER */}
      <header
        className={`absolute top-10 left-0 right-0 z-50 hidden md:flex justify-center
        transition-opacity duration-700 delay-300
        ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <nav className="flex items-center gap-5 md:gap-5 lg:gap-6 text-xs uppercase tracking-[0.25em] text-white/70">

          {leftLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </Link>
          ))}

          {/* Center logo */}
          <Link
            href="/"
            className="relative w-44 h-16 md:w-56 md:h-20 lg:w-80 lg:h-28 mx-1 md:mx-2 lg:mx-3"
          >
            <Image
              src="/right-logo.png"
              alt="RIGHT Architects"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {rightLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* MOBILE HEADER */}
      <header
        className={`absolute top-6 left-0 right-0 z-[120] flex md:hidden items-center justify-between px-6
        transition-opacity duration-700 delay-300
        ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Mobile logo */}
        <Link href="/" className="relative w-52 h-16">
          <Image
            src="/right-logo.png"
            alt="RIGHT Architects"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* HAMBURGER / X BUTTON */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center"
        >
          <div className="relative w-6 h-6">

            {/* Top */}
            <span
              className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
                open ? "top-3 rotate-45" : "top-1"
              }`}
            />

            {/* Middle */}
            <span
              className={`absolute left-0 top-3 h-[2px] w-full bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Bottom */}
            <span
              className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
                open ? "top-3 -rotate-45" : "top-5"
              }`}
            />

          </div>
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm
        flex flex-col items-center justify-center gap-10 text-sm uppercase tracking-[0.3em]
        transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link href="/projects" onClick={() => setOpen(false)} className="text-white">
          Work
        </Link>
        <Link href="/process" onClick={() => setOpen(false)} className="text-white">
          Process
        </Link>
        <Link href="/profile" onClick={() => setOpen(false)} className="text-white">
          Profile
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)} className="text-white">
          Contact
        </Link>
      </div>
    </>
  );
}
