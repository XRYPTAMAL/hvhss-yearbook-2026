"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Student } from "@/data/students";

export default function StudentCard({ student, index }: { student: Student; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={`/students/${student.slug}`}
        className="group block overflow-hidden rounded-2xl border border-ink/10 dark:border-ivory/10 bg-white/40 dark:bg-white/[0.02] transition-colors hover:border-gold/50"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={student.photo}
            alt={student.fullName}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium tracking-widest text-white backdrop-blur-sm">
            #{String(student.rollNumber).padStart(2, "0")}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-display text-sm font-semibold text-ink dark:text-ivory group-hover:text-gold transition-colors">
            {student.fullName}
          </h3>
          <p className="mt-0.5 text-xs text-ink/50 dark:text-ivory/50">"{student.nickname}"</p>
        </div>
      </Link>
    </motion.div>
  );
}
