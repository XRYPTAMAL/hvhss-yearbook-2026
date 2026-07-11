import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = { title: "Contact — HVHSS Vellanad Batch of 2026" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Stay In Touch"
          title="Contact"
          description="Found a mistake, have a memory to add, or just want to say hello?"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-16 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-ink/10 dark:border-ivory/10 p-6 text-center">
          <Mail className="mx-auto text-gold" size={20} />
          <p className="mt-3 text-xs uppercase tracking-widest text-ink/50 dark:text-ivory/50">
            Email
          </p>
          <a
            href="mailto:aamaldev@gmail.com"
            className="mt-1 block text-sm text-ink dark:text-ivory hover:text-gold break-all"
          >
            batch2026@hvhssvellanad.edu
          </a>
        </div>
        <div className="rounded-2xl border border-ink/10 dark:border-ivory/10 p-6 text-center">
          <Phone className="mx-auto text-gold" size={20} />
          <p className="mt-3 text-xs uppercase tracking-widest text-ink/50 dark:text-ivory/50">
            School Office
          </p>
          <p className="mt-1 text-sm text-ink dark:text-ivory">+91 9746761731</p>
        </div>
        <div className="rounded-2xl border border-ink/10 dark:border-ivory/10 p-6 text-center">
          <MapPin className="mx-auto text-gold" size={20} />
          <p className="mt-3 text-xs uppercase tracking-widest text-ink/50 dark:text-ivory/50">
            Location
          </p>
          <p className="mt-1 text-sm text-ink dark:text-ivory">Vellanad, Thiruvananthapuram</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="mt-14 text-center">
        <p className="font-hand text-2xl text-gold">
          This site was built by a classmate, for a classroom — reach out anytime.
        </p>
      </AnimatedSection>
    </div>
  );
}
