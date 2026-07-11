"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MusicToggle from "./MusicToggle";
import EasterEggLogo from "./EasterEggLogo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/students", label: "Students" },
  { href: "/teachers", label: "Teachers" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/memories", label: "Memories" },
  { href: "/videos", label: "Videos" },
  { href: "/guestbook", label: "Guest Book" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-ivory/80 dark:bg-navy/80 backdrop-blur-md border-b border-ink/5 dark:border-ivory/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <EasterEggLogo />

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-gold"
                  : "text-ink/70 dark:text-ivory/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pl-2">
            <MusicToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-ivory/10"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-ivory dark:bg-navy border-b border-ink/5 dark:border-ivory/5 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 text-sm font-medium ${
                    pathname === link.href ? "text-gold" : "text-ink/80 dark:text-ivory/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <MusicToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
