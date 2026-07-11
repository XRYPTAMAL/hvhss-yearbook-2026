"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

type GuestEntry = {
  id: string;
  name: string;
  role: "Teacher" | "Junior" | "Visitor";
  message: string;
  date: string;
};

const STORAGE_KEY = "hvhss-guestbook-entries";

const seedEntries: GuestEntry[] = [
  {
    id: "seed-1",
    name: "Mrs. Lakshmi Menon",
    role: "Teacher",
    message: "Proud doesn't even begin to cover it. Go make us prouder.",
    date: "2026-03-20"
  },
  {
    id: "seed-2",
    name: "Class 9B",
    role: "Junior",
    message: "The corridors already feel quieter without you all. Good luck seniors!",
    date: "2026-03-21"
  }
];

export default function GuestBookPage() {
  const [entries, setEntries] = useState<GuestEntry[]>(seedEntries);
  const [name, setName] = useState("");
  const [role, setRole] = useState<GuestEntry["role"]>("Visitor");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setEntries([...JSON.parse(stored), ...seedEntries]);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const entry: GuestEntry = {
      id: crypto.randomUUID(),
      name: name.trim(),
      role,
      message: message.trim(),
      date: new Date().toISOString().slice(0, 10)
    };

    const updated = [entry, ...entries.filter((e) => !e.id.startsWith("seed"))];
    setEntries([entry, ...entries]);

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      /* storage may be unavailable; entry still shows for this session */
    }

    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Sign In"
          title="Guest Book"
          description="Teachers, juniors, friends — leave something behind for us to find later."
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-14">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-ink/10 dark:border-ivory/10 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="rounded-lg border border-ink/10 dark:border-ivory/10 bg-transparent px-4 py-3 text-sm text-ink dark:text-ivory placeholder:text-ink/40 dark:placeholder:text-ivory/40 focus:border-gold/50 outline-none"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as GuestEntry["role"])}
              className="rounded-lg border border-ink/10 dark:border-ivory/10 bg-transparent px-4 py-3 text-sm text-ink dark:text-ivory outline-none focus:border-gold/50"
            >
              <option value="Visitor">Visitor</option>
              <option value="Teacher">Teacher</option>
              <option value="Junior">Junior</option>
            </select>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave your wishes for Batch of 2026..."
            required
            rows={4}
            className="mt-4 w-full resize-none rounded-lg border border-ink/10 dark:border-ivory/10 bg-transparent px-4 py-3 text-sm text-ink dark:text-ivory placeholder:text-ink/40 dark:placeholder:text-ivory/40 focus:border-gold/50 outline-none"
          />
          <div className="mt-4 flex items-center justify-between">
            <motion.p
              animate={{ opacity: submitted ? 1 : 0 }}
              className="text-xs text-gold"
            >
              Thank you — your message has been added.
            </motion.p>
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-gold hover:text-ink dark:bg-ivory dark:text-ink dark:hover:bg-gold"
            >
              Sign the Guest Book
            </button>
          </div>
        </form>
      </AnimatedSection>

      <div className="mt-14 space-y-4">
        {entries.map((entry, i) => (
          <AnimatedSection key={entry.id} delay={(i % 6) * 0.05}>
            <div className="rounded-xl border border-ink/10 dark:border-ivory/10 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink dark:text-ivory">{entry.name}</p>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                    entry.role === "Teacher" && "bg-gold/15 text-gold-dim",
                    entry.role === "Junior" && "bg-dusk/15 text-dusk-dim",
                    entry.role === "Visitor" && "bg-ink/10 dark:bg-ivory/10 text-ink/60 dark:text-ivory/60"
                  )}
                >
                  {entry.role}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-ivory/70">
                {entry.message}
              </p>
              <p className="mt-2 text-[11px] text-ink/40 dark:text-ivory/40">{entry.date}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
