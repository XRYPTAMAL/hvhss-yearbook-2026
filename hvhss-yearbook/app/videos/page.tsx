import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "Videos — GKS Govt. V&HSS Batch of 2026" };

// Replace the ids below with real YouTube video ids (the part after "v=" in the URL).
const videos = [
  { id: "dQw4w9WgXcQ", title: "Farewell 2026 — Full Ceremony" },
  { id: "dQw4w9WgXcQ", title: "Class Memories — A Short Film" },
  { id: "dQw4w9WgXcQ", title: "Sports Day Highlights" },
  { id: "dQw4w9WgXcQ", title: "Educational Tour Recap" }
];

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Watch"
          title="Videos"
          description="Moments that move — the farewell, and everything before it."
        />
      </AnimatedSection>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {videos.map((v, i) => (
          <AnimatedSection key={v.title + i} delay={i * 0.08}>
            <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-ivory/10">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="px-5 py-4 text-sm font-medium text-ink dark:text-ivory">{v.title}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-ink/40 dark:text-ivory/40">
        Replace the placeholder video IDs in <code>app/videos/page.tsx</code> with your real
        farewell and class memory uploads.
      </p>
    </div>
  );
}
