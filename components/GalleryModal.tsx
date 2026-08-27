"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

interface GalleryModalProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  title,
  isOpen,
  onClose,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(currentImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}-${currentIndex + 1}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative h-screen w-full max-w-4xl flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Main image */}
        <div className="flex-1 relative flex items-center justify-center">
          <Image
            src={currentImage}
            alt={`${title} ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Controls */}
        <div className="bg-black/50 backdrop-blur px-6 py-4 flex items-center justify-between">
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          {/* Counter and download */}
          <div className="flex items-center gap-4">
            <span className="text-white font-semibold">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-lg bg-gold/20 hover:bg-gold/30 px-4 py-2 text-gold transition-colors"
            >
              <Download className="h-5 w-5" />
              Download
            </button>
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="bg-black/50 backdrop-blur px-6 py-4 max-h-24 overflow-x-auto">
          <div className="flex gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                  idx === currentIndex
                    ? "border-gold"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
