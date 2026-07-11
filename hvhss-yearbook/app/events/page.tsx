import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GraduationMoment from "@/components/GraduationMoment";
import { events } from "@/data/events";

export const metadata = { title: "Events — GKS Govt. V&HSS Batch of 2026" };

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="The Year, In Order"
          title="Events Timeline"
          description="From the first bell to the last one."
        />
      </AnimatedSection>

      <div className="relative mt-20">
        <div className="absolute left-[15px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-gold via-gold/30 to-transparent sm:block" />

        <div className="space-y-16">
          {events.map((event, i) => {
            const isFinal = i === events.length - 1;
            const row = (
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="hidden sm:flex sm:w-8 sm:justify-center sm:pt-1.5">
                  <span className="relative z-10 h-3 w-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(201,165,75,0.15)]" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink dark:text-ivory">
                      {event.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-gold">
                      {event.date}
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70 dark:text-ivory/70">
                    {event.description}
                  </p>
                  {event.image && (
                    <div className="relative mt-5 aspect-[16/9] w-full max-w-md overflow-hidden rounded-xl border border-ink/10 dark:border-ivory/10">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            );

            return (
              <AnimatedSection key={event.title} delay={i * 0.05}>
                {isFinal ? <GraduationMoment>{row}</GraduationMoment> : row}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
