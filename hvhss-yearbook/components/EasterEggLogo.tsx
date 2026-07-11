"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function EasterEggLogo() {
  const [clicks, setClicks] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= 5) {
      e.preventDefault();
      setUnlocked(true);
      setClicks(0);
    }
  };

  return (
    <>
      <Link
        href="/"
        onClick={handleClick}
        className="font-display text-sm font-semibold tracking-[0.2em] text-ink dark:text-ivory"
        aria-label="HVHSS Vellanad home"
      >
        HVHSS
        <span className="text-gold"> · </span>
        10B
      </Link>

      <AnimatePresence>
        {unlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 backdrop-blur-sm px-6"
            onClick={() => setUnlocked(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="max-w-sm rounded-2xl border border-gold/30 bg-ivory dark:bg-navy px-8 py-10 text-center shadow-2xl"
            >
              <p className="font-hand text-3xl text-gold mb-3">You found it.</p>
              <p className="text-ink dark:text-ivory font-body text-lg">
                Thank you for being part of our journey ❤️
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-ink/50 dark:text-ivory/50">
                Batch of 2026 · HVHSS Vellanad
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
