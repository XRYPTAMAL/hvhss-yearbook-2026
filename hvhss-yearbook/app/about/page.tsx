import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "About — GKS Govt. V&HSS Batch of 2026" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Our Story"
          title="About This Yearbook"
          description="A small archive of a big chapter."
        />
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-14 space-y-6 text-ink/80 dark:text-ivory/80 leading-relaxed">
        <p>
          GKS Govt. V&HSS has watched a lot of batches walk through its gates. This one — Class
          10B, Batch of 2026 — is ours. This site is our attempt to keep a little bit of it,
          before schedules and cities and new routines quietly start to blur the edges.
        </p>
        <p>
          Everything here is real: the students who sat three rows apart for years, the teachers
          who somehow remembered every excuse we ever gave, the events that felt endless while
          they were happening and impossibly short in hindsight.
        </p>
        <p>
          Click through the students to read their dreams and their inside jokes. Walk the
          events timeline. Leave something behind in the Guest Book. This isn't a finished
          project — it's a living page, meant to be revisited on the days you miss it most.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="mt-16 rounded-2xl border border-gold/20 p-8">
        <p className="font-hand text-2xl text-gold">
          "Some people go their whole lives without a class like this one."
        </p>
      </AnimatedSection>
    </div>
  );
}
