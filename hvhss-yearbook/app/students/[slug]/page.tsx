import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Instagram } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getStudentBySlug, students } from "@/data/students";

export function generateStaticParams() {
  return students.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const student = getStudentBySlug(params.slug);
  if (!student) return {};
  return {
    title: `${student.fullName} — GKS Govt. V&HSS Batch of 2026`,
    description: student.messageToFriends
  };
}

export default function StudentProfilePage({ params }: { params: { slug: string } }) {
  const student = getStudentBySlug(params.slug);
  if (!student) notFound();

  const facts = [
    { label: "Future Dream", value: student.futureDream },
    { label: "Favorite Quote", value: `"${student.favoriteQuote}"` },
    { label: "Funny Memory", value: student.funnyMemory },
    { label: "Best Friend", value: student.bestFriend }
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
      <Link
        href="/students"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink/50 dark:text-ivory/50 hover:text-gold"
      >
        <ArrowLeft size={14} /> All Students
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-[380px_1fr]">
        <AnimatedSection>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gold/20">
            <Image
              src={student.photo}
              alt={student.fullName}
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
              priority
            />
          </div>
        </AnimatedSection>

        <div>
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Roll No. {String(student.rollNumber).padStart(2, "0")}
            </span>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink dark:text-ivory">
              {student.fullName}
            </h1>
            <p className="mt-2 font-hand text-2xl text-ink/60 dark:text-ivory/60">
              "{student.nickname}"
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-8 grid gap-6 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold">{f.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/80 dark:text-ivory/80">
                  {f.value}
                </p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Hobbies</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {student.hobbies.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-ink/10 dark:border-ivory/10 px-3 py-1 text-xs text-ink/70 dark:text-ivory/70"
                >
                  {h}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10 rounded-2xl border border-gold/20 p-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
              Message to Friends
            </p>
            <p className="mt-3 leading-relaxed text-ink/80 dark:text-ivory/80">
              {student.messageToFriends}
            </p>
            <p className="mt-5 font-hand text-3xl text-gold">{student.fullName}</p>
          </AnimatedSection>

          {student.instagram && (
            <AnimatedSection delay={0.25} className="mt-6">
              <a
                href={student.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink/60 dark:text-ivory/60 hover:text-gold"
              >
                <Instagram size={16} /> Follow on Instagram
              </a>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
}
