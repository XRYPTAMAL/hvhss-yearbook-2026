import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { memories } from "@/data/memories";

export const metadata = { title: "Memory Wall — GKS Govt. V&HSS Batch of 2026" };

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0"];

export default function MemoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="One Line Each"
          title="Memory Wall"
          description="Every student, one message they couldn't leave unsaid."
        />
      </AnimatedSection>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((m, i) => (
          <AnimatedSection key={m.name} delay={(i % 6) * 0.06}>
            <div
              className={`${rotations[i % rotations.length]} rounded-lg border border-gold/20 bg-gold/[0.04] dark:bg-gold/[0.06] p-6 shadow-sm transition-transform hover:rotate-0 hover:scale-[1.02]`}
            >
              <p className="font-hand text-2xl leading-snug text-ink dark:text-ivory">
                "{m.message}"
              </p>
              <p className="mt-4 text-right text-xs uppercase tracking-widest text-gold">
                — {m.name}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
