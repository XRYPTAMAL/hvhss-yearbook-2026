"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import StudentCard from "@/components/StudentCard";
import { students } from "@/data/students";

export default function StudentsPage() {
  const [query, setQuery] = useState("");
  const [rollFilter, setRollFilter] = useState("");

  const filtered = useMemo(() => {
    return students
      .filter((s) =>
        query.trim() === ""
          ? true
          : s.fullName.toLowerCase().includes(query.toLowerCase()) ||
            s.nickname.toLowerCase().includes(query.toLowerCase())
      )
      .filter((s) =>
        rollFilter.trim() === "" ? true : String(s.rollNumber).includes(rollFilter.trim())
      )
      .sort((a, b) => a.rollNumber - b.rollNumber);
  }, [query, rollFilter]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow={`${students.length} Students`}
          title="Meet 10B"
          description="Every face, every name, every dream we said out loud at least once."
        />
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40 dark:text-ivory/40"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search by name or nickname"
            className="w-full rounded-full border border-ink/10 dark:border-ivory/10 bg-transparent py-3 pl-11 pr-4 text-sm text-ink dark:text-ivory placeholder:text-ink/40 dark:placeholder:text-ivory/40 focus:border-gold/50 outline-none"
          />
        </div>
        <input
          value={rollFilter}
          onChange={(e) => setRollFilter(e.target.value)}
          type="text"
          inputMode="numeric"
          placeholder="Roll no."
          className="w-full rounded-full border border-ink/10 dark:border-ivory/10 bg-transparent px-5 py-3 text-sm text-ink dark:text-ivory placeholder:text-ink/40 dark:placeholder:text-ivory/40 focus:border-gold/50 outline-none sm:w-32"
        />
      </AnimatedSection>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-ink/50 dark:text-ivory/50">
          No one matches that search. Try a different name or roll number.
        </p>
      ) : (
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((student, i) => (
            <StudentCard key={student.slug} student={student} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
