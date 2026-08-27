import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GraduationMoment from "@/components/GraduationMoment";
import GalleryModal from "@/components/GalleryModal";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";

export const metadata = { title: "Events — HVHSS Vellanad Batch of 2026" };

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
            return (
              <AnimatedSection key={event.title} delay={i * 0.05}>
                {isFinal ? (
                  <GraduationMoment>
                    <EventCard event={event} />
                  </GraduationMoment>
                ) : (
                  <EventCard event={event} />
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
