"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import { YearbookEvent } from "@/data/events";

interface EventCardProps {
  event: YearbookEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasMultipleImages = event.images && event.images.length > 0;

  return (
    <>
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

          {/* Show thumbnail if multiple images, otherwise show single image */}
          {hasMultipleImages ? (
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative mt-5 aspect-[16/9] w-full max-w-md overflow-hidden rounded-xl border border-ink/10 dark:border-ivory/10 hover:opacity-75 transition-opacity cursor-pointer group"
            >
              <Image
                src={event.images![0]}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <span className="text-white font-semibold">
                  View Gallery ({event.images!.length} photos)
                </span>
              </div>
            </button>
          ) : event.image ? (
            <div className="relative mt-5 aspect-[16/9] w-full max-w-md overflow-hidden rounded-xl border border-ink/10 dark:border-ivory/10">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Gallery Modal */}
      {hasMultipleImages && (
        <GalleryModal
          images={event.images!}
          title={event.title}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
