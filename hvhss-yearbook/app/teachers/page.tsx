import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { teachers } from "@/data/teachers";

export const metadata = { title: "Teachers — GKS Govt. V&HSS Batch of 2026" };

export default function TeachersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="With Gratitude"
          title="Our Teachers"
          description="The people who taught us more than what was on the syllabus."
        />
      </AnimatedSection>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        {teachers.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.08}>
            <div className="flex gap-5 rounded-2xl border border-ink/10 dark:border-ivory/10 p-6">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-gold/30">
                <Image src={t.photo} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink dark:text-ivory">
                  {t.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-gold mt-1">{t.subject}</p>
                <p className="mt-1 text-xs text-ink/50 dark:text-ivory/50">
                  {t.yearsOfTeaching} years of teaching
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ivory/70">
                  {t.message}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
