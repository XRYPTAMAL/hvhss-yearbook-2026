"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SchoolSilhouette from "@/components/SchoolSilhouette";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { students } from "@/data/students";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const highlights = [
  {
    href: "/students",
    title: "Students",
    description: `Meet all ${students.length}+ of us — dreams, quotes, and inside jokes included.`
  },
  {
    href: "/events",
    title: "Events Timeline",
    description: "From reopening day to the farewell speech nobody could finish."
  },
  {
    href: "/gallery",
    title: "Gallery",
    description: "Every photo worth keeping, sorted the way memory sorts them — messily."
  },
  {
    href: "/memories",
    title: "Memory Wall",
    description: "One line each. Some funny, some we'll never say out loud again."
  }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <SchoolSilhouette />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center"
        >
          <motion.span
            variants={item}
            className="mb-5 text-xs uppercase tracking-[0.4em] text-gold"
          >
            A Digital Yearbook
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-tight text-ink dark:text-ivory sm:text-6xl lg:text-7xl text-balance"
          >
            GKS Govt. V&HSS
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-2 font-display text-2xl font-medium text-gold sm:text-4xl lg:text-5xl"
          >
            Batch of 2026
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 font-hand text-3xl text-ink/70 dark:text-ivory/70 sm:text-4xl"
          >
            10B.
          </motion.p>

          <motion.div variants={item} className="mt-12">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full border border-gold/50 bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all hover:bg-gold hover:text-ink dark:bg-ivory dark:text-ink dark:hover:bg-gold"
            >
              Enter the Yearbook
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-ink/40 dark:text-ivory/40"
        >
          Scroll to begin
        </motion.div>
      </section>

      {/* Intro line */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <AnimatedSection>
          <p className="font-display text-2xl leading-relaxed text-ink dark:text-ivory sm:text-3xl text-balance">
            Ten years of school, condensed into one class, one classroom, and a hundred
            memories we swore we'd never forget. This is where we kept our word.
          </p>
        </AnimatedSection>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Explore"
            title="Everything we lived through"
            description="Four ways into the same story."
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.href} delay={i * 0.08}>
              <Link
                href={h.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 dark:border-ivory/10 p-7 transition-all hover:border-gold/50 hover:-translate-y-1"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-ivory">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-ivory/60">
                    {h.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Open <ArrowRight size={14} />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Closing quote */}
      <section className="border-t border-ink/5 dark:border-ivory/5 bg-ink dark:bg-black">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <AnimatedSection>
            <p className="font-hand text-3xl text-gold sm:text-4xl">
              "We didn't know we were making memories, we just knew we were having fun."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ivory/50">
              — 10B, GKS Govt. V&HSS
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
