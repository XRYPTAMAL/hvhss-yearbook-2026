"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { galleryCategories, galleryImages, GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  const activeImage = galleryImages.find((img) => img.id === lightbox);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="In Pictures"
          title="Gallery"
          description="Every frame we couldn't help but keep."
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
              active === cat
                ? "border-gold bg-gold text-ink"
                : "border-ink/10 dark:border-ivory/10 text-ink/60 dark:text-ivory/60 hover:border-gold/50"
            )}
          >
            {cat}
          </button>
        ))}
      </AnimatedSection>

      <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {filtered.map((img, i) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
            onClick={() => setLightbox(img.id)}
            className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-ink/10 dark:border-ivory/10 break-inside-avoid"
          >
            <div className="relative w-full" style={{ height: img.height }}>
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-left text-xs text-white">{img.caption}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image src={activeImage.src} alt={activeImage.caption} fill className="object-contain bg-black" />
              </div>
              <p className="mt-4 text-center text-sm text-white/80">{activeImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
